import { gqlClient, gqlClientV2, restClient } from './fetcher'
import {
  Article,
  Attributes,
  Author,
  CoverImage,
  DataAttributes,
  Category,
  Data,
} from './types'

export type RelativeArticleMeta = {
  title: string
  slug: string
}

export async function getRelativeArticles(createdAt: string) {
  const { next, prev } = await gqlClientV2<{
    previousArticle: Data<Array<Attributes<RelativeArticleMeta> | null>>
    nextArticle: Data<Array<Attributes<RelativeArticleMeta> | null>>
  }>(`
	query {
		previousArticle: articles(
			filters: { createdAt: { lt: "${createdAt}" } }
		) {
			data {
				attributes {
					title
					slug
				}
			}
		}

		nextArticle: articles(
			filters: { createdAt: { gt: "${createdAt}" } }
		) {
			data {
				attributes {
					title
					slug
				}
			}
		}
	}
	`)
    .then((res) => res.data)
    .then(({ nextArticle, previousArticle }) => ({
      prev: previousArticle.data[0]?.attributes || null,
      next: nextArticle.data[0]?.attributes || null,
    }))

  return { prev, next }
}

export async function getAllArticleSlugs() {
  return await gqlClientV2<Array<Attributes<{ slug: string }>>, 'articles'>(`
    query { 
      articles { 
        data { 
          attributes { 
            slug 
          } 
        } 
      } 
    }
    `).then((res) =>
    res.data.articles.data.map(({ attributes: { slug } }) => slug)
  )
}

export type ArticleDetailData = Pick<
  Article,
  'title' | 'excerpt' | 'slug' | 'createdAt' | 'content' | 'readTimeEstimate'
> & {
  author: DataAttributes<
    Pick<Author, 'name'> & DataAttributes<Pick<Author, 'picture'>>
  >
  coverImage: DataAttributes<CoverImage>
  categories: { data: Array<Attributes<Category>> }
}

export async function getArticle(slug = '') {
  return gqlClientV2<Array<Attributes<ArticleDetailData>>, 'articles'>(
    `
		query {
			articles(filters: { slug: {eq: "${slug}" } }) {
				data {
					attributes {
						title
						excerpt
						slug
						createdAt
						content
						readTimeEstimate
						author {
							data {
								attributes {
									name
									picture {
										data {
											attributes {
													url
											}
										}
									}
								}
							}
						}
						coverImage {
							data {
								attributes {
									url
									width
									height
									formats
								}
							}
						}
						categories {
							data {
								attributes {
									name
									slug
								}
							}
						}
					}
				}
			}
		}
		`
  ).then((res) => res.data.articles.data[0]?.attributes)
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
}) {
  return gqlClient<{ articles: RelatedArticleMeta[] }>(
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

export async function notifyOnLaunch(email: string) {
  return restClient('launch-subscribers', { body: JSON.stringify({ email }) })
}

export type ArticleCard = Attributes<
  Pick<
    Article,
    'title' | 'createdAt' | 'excerpt' | 'readTimeEstimate' | 'slug'
  > & {
    author: DataAttributes<Pick<Author, 'name'>>
    coverImage: DataAttributes<CoverImage>
  }
>

export type ArticlesListMeta = Array<ArticleCard>

export async function articlesList(props: { limit?: number } = {}) {
  const { limit } = props
  return gqlClientV2<{ articles: ArticlesListMeta }, 'articles'>(`
		query {
			${
        limit !== undefined
          ? `articles(pagination: { limit: ${limit} })`
          : 'articles'
      } {
				data {
					attributes {
						title
						author {
							data {
								attributes {
									name
								}
							}
						}
						coverImage {
							data {
								attributes {
									url 
									width
									height
									formats
								}
							}
						}
						createdAt
						excerpt
						readTimeEstimate
						slug
					}
				}
			}
		}
	`).then((res) => res.data.articles.data)
}

export interface ContactFields {
  firstName: string
  lastName: string
  email: string
  message: string
}

export function contact(values: ContactFields) {
  return restClient('messages', { body: JSON.stringify(values) })
}
