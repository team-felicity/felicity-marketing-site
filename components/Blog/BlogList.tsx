import { useState } from 'react'
import { SearchIcon } from '@heroicons/react/solid'

import { styled } from '@config/stitches'

import View from '@components/View'
import Flex from '@components/Flex'
import Grid from '@components/Grid'
import Container from '@components/Container'
import Text, { textStyles } from '@components/Text'
import RecentCard from '@components/RecentPost/RecentCard'

import { ArticlesListMeta } from 'utils/api'
import { Category } from 'utils/types'
import { TextField } from '@components/TextField'

type Props = { articles: ArticlesListMeta; categories: Category[] }

// TODO: empty state
// TODO: Recipes list
// TODO: Youtube Content
export default function BlogList(props: Props) {
  const { articles, categories } = props

  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<string>()

  const mostRecentArticle = articles[0]
  let articlesList = articles.slice(1)
  articlesList = selected
    ? filterByCategory(articlesList, selected)
    : articlesList

  const finalArticlesList = search
    ? filterBySearch(articlesList, search)
    : articlesList

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
          justifyContent: 'flex-start',
          '@desktop': {
            mt: '$8',
          },
        }}
      >
        <Flex
          direction={{ '@initial': 'column', '@tablet': 'row' }}
          align={{ '@initial': 'start', '@tablet': 'end' }}
          gapX="5"
          gapY="1"
          css={{ '@tablet': { mb: '$6' } }}
        >
          <Title size={{ '@initial': '11', '@tablet': '14' }}>Blog</Title>
          <Text
            color="primary5"
            size={{ '@initial': '4', '@tablet': '5' }}
            css={{ pb: '$4' }}
          >
            Read more about Felicity Updates, Recipes and more!
          </Text>
        </Flex>

        <RecentCard
          direction="row"
          from="blog"
          key={mostRecentArticle.attributes.slug}
          data={mostRecentArticle}
        />

        <Flex css={{ mt: '$6' }} direction="column" gapY="2">
          <Text
            as="h2"
            size={{ '@initial': '8', '@tablet': '10' }}
            weight="semibold"
            color="primary5"
          >
            More Stories
          </Text>

          <Flex
            justify="between"
            align="start"
            gap="4"
            direction={{
              '@initial': 'columnReverse',
              '@tablet': 'row',
            }}
          >
            <CategoriesList>
              <CleanedButton onClick={() => setSelected(undefined)}>
                <Chip active={selected === undefined}>All</Chip>
              </CleanedButton>
              {categories.map((category) => (
                <CleanedButton
                  key={category.slug}
                  onClick={() => setSelected(category.slug)}
                >
                  <Chip active={selected === category.slug}>
                    {category.name}
                  </Chip>
                </CleanedButton>
              ))}
            </CategoriesList>

            <Box
              as="label"
              css={{
                position: 'relative',
                width: '100%',
                '@tablet': {
                  width: '15rem',
                },
              }}
            >
              <StyledTextField
                css={{ background: 'none', flexShrink: 0 }}
                radius="pill"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <StyledSearchIcon />
            </Box>
          </Flex>
        </Flex>

        <Grid
          columns={{ '@initial': 1, '@tablet': 2 }}
          gap="8"
          css={{
            '&:last-child': { mb: '$8' },
          }}
        >
          {finalArticlesList.map((article) => (
            <RecentCard
              direction="column"
              from="blog"
              key={article.attributes.slug}
              data={article}
            />
          ))}
        </Grid>
      </Container>
    </View>
  )
}

const Title = styled('h1', {
  ...textStyles,
  defaultVariants: {
    color: 'primary5',
    weight: 'bold',
  },
})

const Chip = styled('span', {
  display: 'grid',
  placeItems: 'center',
  lineHeight: 1,
  $$activeBg: '$colors$primary5',
  border: '2px solid $$activeBg',
  borderRadius: '$pill',
  height: '2.5rem',
  px: '1.5rem',
  flexShrink: 0,
  color: '$$activeBg',
  fontFamily: '$default',

  variants: {
    ...textStyles.variants,
    active: {
      true: {
        backgroundColor: '$$activeBg',
        color: 'white',
      },
    },
  },
  defaultVariants: {
    weight: 'medium',
    size: '3',
  },
})

const Box = styled('div', {})
const StyledSearchIcon = styled(SearchIcon, {
  position: 'absolute',
  right: '$2',
  top: '50%',
  transform: 'translateY(-50%)',
  color: '$primary5',

  cursor: 'pointer',
  width: '1rem',
  height: '1rem',
})
const StyledTextField = styled(TextField, {
  borderWidth: 2,
  color: '$primary5',
  borderColor: 'currentColor',

  '&:active, &:focus-within': { borderColor: 'currentColor' },
  '&::placeholder': { color: 'currentColor', opacity: 0.5 },

  '@tablet': {
    width: '15rem',
  },
})

const CategoriesList = styled(Flex, {
  mx: '-$5',
  px: '$5',
  overflowX: 'auto',
  maxWidth: '100vw',
  gap: '$2',
  flexWrap: 'wrap',

  '&::-webkit-scrollbar': {
    width: 0,
    background: 'transparent',
  },
})

const CleanedButton = styled('button', {
  unset: 'all',
  padding: 0,
  border: 'none',
  background: 'none',
  cursor: 'pointer',
})

function filterBySearch(articles: ArticlesListMeta, search: string) {
  return articles.filter((article) =>
    article.attributes.title.toLowerCase().includes(search.toLowerCase())
  )
}

function filterByCategory(articles: ArticlesListMeta, categorySlug: string) {
  return articles.filter((article) =>
    article.attributes.categories.data
      .map((category) => category.attributes.slug)
      .some((slug) => slug === categorySlug)
  )
}
