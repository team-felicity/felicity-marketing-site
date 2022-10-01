export type Data<T> = {
  data: T
}

export type Attributes<T> = {
  attributes: T
}
// nested fields should be wrapped with `DataAttributes`
export type DataAttributes<T extends Record<string, unknown>> = Data<
  Attributes<T>
>

export interface Article {
  title: string
  author: Author
  createdAt: string
  updated_at: string
  content: string
  coverImage: CoverImage
  categories: Category[]
  readTimeEstimate: number
  excerpt: string
  slug: string
}

export interface Author {
  name: string
  picture: CoverImage
}

export type CoverImage = {
  url: string
  width: number
  height: number
  formats: { thumbnail: { url: string } }
}

export type Category = {
  name: string
  slug: string
}
