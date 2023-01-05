import BlogList from '@components/Blog/BlogList'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { articlesList, getAllCategories } from 'utils/api'

export default function BlogPage({
  articles,
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <BlogList articles={articles} categories={categories} />
}

export const getStaticProps: GetStaticProps = async () => {
  const articles = await articlesList()
  const categories = await getAllCategories()

  return {
    props: {
      articles,
      categories,
    },
    revalidate: 60,
  }
}
