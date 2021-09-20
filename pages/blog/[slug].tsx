import type { ParsedUrlQuery } from 'querystring'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'

import Image from 'next/image'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { ArrowRightIcon } from '@heroicons/react/solid'
import rehypeSanitize from 'rehype-sanitize'
import rehypeSlug from 'rehype-slug'
import remarkUnwrapImages from 'remark-unwrap-images'

import { styled } from '@config/stitches'

import { Button, Container, Flex, Text } from '@components'

import { getAllArticleSlugs, getArticle } from 'utils/api'
import { Article } from 'utils/types'
import { toDefaultDateFormat } from 'utils/functions'
import { textStyles } from '@components/Text'
import { BaseInput, sharedStyles } from '@components/TextField'
import components, { ContentContainer } from '@components/BlogComponents'

export default function BlogDetail({
  contentSource,
  meta: { author, coverImage, title, created_at, readTimeEstimate, categories },
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <article>
      <TitleWrapper>
        <Container size="medium">
          <Title as="h1">{title}</Title>
          <Flex gap="3">
            <MetaDetail>{author.name}</MetaDetail>
            <MetaDetail>{toDefaultDateFormat(new Date(created_at))}</MetaDetail>
            <MetaDetail color="primary1">
              {readTimeEstimate} min read
            </MetaDetail>
          </Flex>
        </Container>
      </TitleWrapper>

      <div>
        <Container size="medium" as={Flex} justify="center" css={{ p: '$4 0' }}>
          <Image
            src={
              process.env.NODE_ENV === 'development'
                ? `http://localhost:1337${coverImage.url}`
                : coverImage.url
            }
            width={coverImage.width}
            height={coverImage.height}
            alt={coverImage.url}
          />
        </Container>
        <ContentContainer size="medium">
          <MDXRemote {...contentSource} components={components} />

          <Flex direction="column" align="center" css={{ mt: '$8' }}>
            <SubscribeText>Subscribe & Stay Connected</SubscribeText>
            <InputWrapper as={Flex} align="center" css={{ px: '2px' }}>
              <BaseInput variant="unstyled" placeholder="@E-mail" />
              <Button variant="primary">
                <Text color="white1" weight="semibold" css={{ mr: '$1' }}>
                  Subscribe
                </Text>
                <ArrowRightIcon width={16} fill="white" />
              </Button>
            </InputWrapper>
          </Flex>
          <Flex direction="column" css={{ mt: '$8' }}>
            <Text css={{ textTransform: 'uppercase' }}>Categories</Text>
            <Flex gap="4" css={{ ml: '$1', mt: '$2' }}>
              {categories.map(({ name }) => (
                <Text
                  key={name}
                  color="white1"
                  css={{
                    textTransform: 'uppercase',
                    backgroundColor: '$primary4',
                    p: '0.5rem 1rem',
                    userSelect: 'none',
                  }}
                >
                  {name}
                </Text>
              ))}
            </Flex>
          </Flex>
        </ContentContainer>
      </div>
    </article>
  )
}

const SubscribeText = styled('span', {
  ...textStyles,
  color: '$primary7',
  textTransform: 'uppercase',
  fontWeight: '$bold',
  fontSize: '$2',
  mb: '$1',
  letterSpacing: '-0.01em',
})

const InputWrapper = styled('div', sharedStyles, {
  px: '2px',
  width: 'fit-content',
})

const MetaDetail = styled('span', {
  ...textStyles,

  defaultVariants: {
    color: 'primary7',
    size: '2',
    weight: 'semibold',
  },
})

const Title = styled('h1', {
  ...textStyles,
  wordBreak: 'break-word',
  hyphens: 'auto',

  '&::first-letter': { textTransform: 'capitalize' },

  defaultVariants: {
    color: 'primary7',
    size: '12',
    weight: 'bold',
  },
})

const TitleWrapper = styled('div', {
  mt: '$4',
  py: 'min(2.5vw, 3em)',

  linearGradient:
    'to bottom right, rgba(96,187,147,0.5) 0%, rgba(231,241,245,0.5) 100%',
})

export const getStaticPaths = async () => {
  const slugs = await getAllArticleSlugs()

  return {
    fallback: false,
    paths: slugs.map((slug) => ({ params: { slug } })),
  }
}

export const getStaticProps: GetStaticProps<
  {
    contentSource: MDXRemoteSerializeResult
    meta: Omit<Article, 'content'>
  },
  ParsedUrlQuery & { slug: string }
> = async ({ params }) => {
  const { content, ...meta } = (await getArticle(params?.slug)) || {}

  const contentSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkUnwrapImages],
      rehypePlugins: [rehypeSanitize, rehypeSlug],
    },
  })

  return {
    props: {
      contentSource,
      meta,
    },
    notFound: !params?.slug,
  }
}
