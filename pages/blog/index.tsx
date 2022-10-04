import BlogList from '@components/Blog/BlogList'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { articlesList } from 'utils/api'

export default function BlogPage({
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <BlogList articles={articles} />
}

export const getStaticProps: GetStaticProps = async () => {
  const articles = await articlesList()
  return {
    props: {
      articles,
    },
    revalidate: 60,
  }
}
