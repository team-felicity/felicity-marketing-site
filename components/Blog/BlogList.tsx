import { useState } from 'react'
import RecentCard from '@components/RecentPost/RecentCard'
import { Container, View, Button, Flex } from '@components'
import { styled } from '@config/stitches'
import { textStyles } from '@components/Text'
import { ArrowSmDownIcon } from '@heroicons/react/solid'
import { ArticlesListMeta } from 'utils/api'

const ARTICLES_TO_SHOW = 2

export default function BlogList({ articles }: { articles: ArticlesListMeta }) {
  const [loading, setLoading] = useState(false)
  const [cursor, setCursor] = useState(1)

  const articlesList = articles.slice(0, cursor * ARTICLES_TO_SHOW)

  const handleClick = () => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setCursor((prev) => prev + 1)
    }, 200)
  }

  return (
    <View
      css={{
        display: 'grid',
        background: 'linear-gradient(#FFFFFF,#85C2C2)',
      }}
    >
      <Container
        size="large"
        css={{
          display: 'grid',
          gapy: '2rem',
          mt: '$5',
          justifyContent: 'center',
          '@desktop': {
            mt: '$8',
          },
        }}
      >
        <Title size={{ '@initial': '10', '@tablet': '12', '@desktop': '14' }}>
          OUR BLOG
        </Title>
        <Flex
          direction="column"
          gap="8"
          css={{
            '& > div': {
              '&:last-of-type': { mb: '$8' },
            },
          }}
        >
          {articlesList.map((article) => (
            <RecentCard
              direction="row"
              from="blog"
              key={article.slug}
              data={article}
            />
          ))}
        </Flex>
        {articlesList.length < articles.length ? (
          <Button
            onClick={handleClick}
            loading={loading}
            variant="primary"
            size="large"
            radius="pill"
            css={{
              justifySelf: 'center',
              fontSize: '$3',
              width: 'fit-content',
              padding: '0.8rem 2rem',
              height: 'unset',
              marginBottom: '$8',
              '@desktop': {
                fontSize: '$4',
                padding: '0.8rem 4rem',
              },
            }}
          >
            <Flex direction="row" gap="4">
              Load More
              <ArrowSmDownIcon width="25" />
            </Flex>
          </Button>
        ) : null}
      </Container>
    </View>
  )
}

const Title = styled('h1', {
  ...textStyles,
  mb: '$6',
  textAlign: 'center',
  defaultVariants: {
    color: 'primary4',
    weight: 'bold',
  },
})
