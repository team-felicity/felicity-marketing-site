import { gqlClient, restClient } from './fetcher'
import {
  Article,
  Attributes,
  Author,
  CoverImage,
  DataAttributes,
  Category,
  Data,
} from './types'

type RelativeArticleMeta = {
  title: string
  slug: string
}

export async function getRelativeArticles(createdAt: string) {
  const { next, prev } = await gqlClient<{
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
  return await gqlClient<Array<Attributes<{ slug: string }>>, 'articles'>(`
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

type ArticleDetailData = Pick<
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
  return gqlClient<Array<Attributes<ArticleDetailData>>, 'articles'>(
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

type RelatedArticleMeta = RelativeArticleMeta & {
  coverImage: DataAttributes<CoverImage>
}

export async function getRelatedArticles({
  categories,
  slug,
}: {
  categories: string[]
  slug?: string
}) {
  return gqlClient<Array<Attributes<RelatedArticleMeta>>, 'articles'>(
    `
	query {
		articles(
			filters: {
				categories: { name: { in: ${JSON.stringify(categories)} } }
				slug: { ne: "${slug}"}
			}
		)	{
			data {
				attributes {
					title
					slug
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
				}
			}
		}
	}
	`
  ).then((res) => res.data.articles.data)
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
  return gqlClient<{ articles: ArticlesListMeta }, 'articles'>(`
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

export async function subscribeToBlog(email: string) {
  return restClient('subscribers', {
    body: JSON.stringify({ data: { email } }),
  })
}

export async function notifyOnLaunch(email: string) {
  return restClient('launch-subscribers', {
    body: JSON.stringify({ data: { email } }),
  })
}

export interface ContactFields {
  name: string
  email: string
  message: string
}

export function contact(values: ContactFields) {
  return restClient('messages', { body: JSON.stringify({ data: values }) })
}
