export interface Article {
  title: string
  author: Author
  created_at: string
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

export interface CoverImage {
  url: string
  width: number
  height: number
  formats: { thumbnail: { url: string } }
}

export interface Category {
  name: string
  slug: string
}
