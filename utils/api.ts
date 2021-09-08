import { gqlClient } from './fetcher'
import { Article } from './types'

interface RelativeArticleMeta {
  title: string
  slug: string
}

export async function getRelativeArticles(createdAt: string): Promise<{
  prev: RelativeArticleMeta
  next: RelativeArticleMeta
}> {
  const { prev, next } = await gqlClient(
    `
		query {
			previousArticle: articles(
				limit: 1
				where: { created_at_lt: ${createdAt}}
			) {
				title
				slug
			}

			nextArticle: articles(
				limit: 1
				where: { created_at_gt: ${createdAt}}
			) {
				title
				slug
			}
		}
	`,
    { createdAt }
  )
    .then((res) => res.data)
    .then((data) => ({
      prev: data.previousArticle[0],
      next: data.nextArticle[0],
    }))

  return { prev, next }
}

export async function getAllArticleSlugs(): Promise<string[]> {
  return await gqlClient(`{ articles { slug } }`).then((res) =>
    res.data.articles.map((article: { slug: string }) => article.slug)
  )
}

export async function getArticle(slug = ''): Promise<Article> {
  return gqlClient(
    `
		query {
			articles(where: { slug: "${slug}"}) {
				title
				author {
					name
					picture {
						url
					}
				}
				created_at
				updated_at
				content
				coverImage {
					url
					width
					height
					formats
				}
				categories {
					name
					slug
				}
				readTimeEstimate
			}
		}
		`,
    { slug }
  ).then((res) => res.data.articles[0])
}
