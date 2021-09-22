import { gqlClient, restClient } from './fetcher'
import { Article, CoverImage } from './types'

export interface RelativeArticleMeta {
  title: string
  slug: string
}

export async function getRelativeArticles(createdAt: string): Promise<{
  prev: RelativeArticleMeta | null
  next: RelativeArticleMeta | null
}> {
  const { prev, next } = await gqlClient(
    `
		query {
			previousArticle: articles(
				limit: 1
				where: { created_at_lt: "${createdAt}"}
			) {
				title
				slug
			}

			nextArticle: articles(
				limit: 1
				where: { created_at_gt: "${createdAt}"}
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
      prev: data.previousArticle[0] || null,
      next: data.nextArticle[0] || null,
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

export interface RelatedArticleMeta extends RelativeArticleMeta {
  coverImage: CoverImage
}

export async function getRelatedArticles({
  categories,
  slug,
}: {
  categories: string[]
  slug?: string
}): Promise<RelatedArticleMeta[]> {
  return gqlClient(
    `
		query {
			articles(
				where: {
					categories: { name: ${JSON.stringify(categories)} }
					slug_ne: "${slug}"
				}
				limit: 3
			) {
				title
				slug
				coverImage {
					url
					width
					height
					formats
				}
			}
		}
		`,
    { categories, slug }
  ).then((res) => res.data.articles)
}

export async function subscribeToBlog(email: string) {
  return restClient('subscribers', { body: JSON.stringify({ email }) })
}
