import type { ParsedUrlQuery } from 'querystring'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'

import { SyntheticEvent, useState } from 'react'
import Image from 'next/image'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { ArrowRightIcon } from '@heroicons/react/solid'
import rehypeSanitize from 'rehype-sanitize'
import rehypeSlug from 'rehype-slug'
import remarkUnwrapImages from 'remark-unwrap-images'
import * as AspectRatio from '@radix-ui/react-aspect-ratio'

import { styled } from '@config/stitches'

import { Button, Container, Flex, Grid, Link, Text, View } from '@components'

import {
  getAllArticleSlugs,
  getArticle,
  getRelatedArticles,
  getRelativeArticles,
  RelatedArticleMeta,
  RelativeArticleMeta,
  subscribeToBlog,
} from 'utils/api'
import { Article } from 'utils/types'
import { toDefaultDateFormat } from 'utils/functions'
import { textStyles } from '@components/Text'
import { BaseInput, sharedStyles } from '@components/TextField'
import components, { ContentContainer } from '@components/BlogComponents'

export default function BlogDetail({
  contentSource,
  meta: { author, coverImage, title, created_at, readTimeEstimate, categories },
  next,
  prev,
  relatedArticles,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [email, setEmail] = useState('')

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault()
    await subscribeToBlog(email)
    setEmail('')
  }

  return (
    <div>
      <article>
        <TitleWrapper>
          <Container size="medium">
            <Title as="h1">{title}</Title>
            <Flex gap="3">
              <MetaDetail>{author.name}</MetaDetail>
              <MetaDetail>
                {toDefaultDateFormat(new Date(created_at))}
              </MetaDetail>
              <MetaDetail color="primary1">
                {readTimeEstimate} min read
              </MetaDetail>
            </Flex>
          </Container>
        </TitleWrapper>

        <div>
          <Container
            size="medium"
            as={Flex}
            justify="center"
            css={{ p: '$4 0' }}
          >
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

            <Flex
              as="form"
              direction="column"
              align="center"
              css={{ mt: '$8' }}
              onSubmit={handleSubmit}
            >
              <SubscribeText>Subscribe & Stay Connected</SubscribeText>
              <InputWrapper as={Flex} align="center" css={{ px: '2px' }}>
                <BaseInput
                  required
                  type="email"
                  variant="unstyled"
                  placeholder="@E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button variant="primary">
                  <Text color="white1" weight="semibold" css={{ mr: '$1' }}>
                    Subscribe
                  </Text>
                  <ArrowRightIcon width={16} fill="white" />
                </Button>
              </InputWrapper>
            </Flex>
            <Flex direction="column" css={{ my: '$8' }}>
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

      <Container
        size="large2"
        css={{
          borderBlock: '3px solid $black1',
          py: '$7',

          '@media (min-width: 1400px)': {
            px: 0,
          },
        }}
      >
        <Flex justify="between">
          {prev ? (
            <Flex direction="column" css={{ maxWidth: '30%' }}>
              <RelativeArticleLabel>Previous Article</RelativeArticleLabel>

              <Link href={`/blog/${prev.slug}`}>
                <RelativeArticleTitle>{prev.title}</RelativeArticleTitle>
              </Link>
            </Flex>
          ) : (
            // placeholder to maintain space betweenness
            <View css={{ width: '1px', height: '1px' }} />
          )}
          {next ? (
            <Flex direction="column" align="end" css={{ maxWidth: '30%' }}>
              <RelativeArticleLabel css={{ textAlign: 'end' }}>
                Next Article
              </RelativeArticleLabel>
              <Link href={`/blog/${next.slug}`}>
                <RelativeArticleTitle css={{ textAlign: 'end' }}>
                  {next.title}
                </RelativeArticleTitle>
              </Link>
            </Flex>
          ) : (
            // placeholder to maintain space betweenness
            <View css={{ width: '1px', height: '1px' }} />
          )}
        </Flex>
      </Container>

      <div style={{ background: '#EEFAFF' }}>
        <Container
          size="large2"
          css={{
            py: '$6',
            mt: '$8',
          }}
        >
          <Flex direction="column" gap="6">
            <Text
              as="h3"
              weight="semibold"
              size="7"
              css={{ textAlign: 'center' }}
            >
              Related
            </Text>
            <Grid
              css={{
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 'clamp($4, 5vw ,$9)',
              }}
            >
              {relatedArticles?.map((item, index) => (
                <Link
                  href={`/blog/${item.slug}`}
                  key={index}
                  css={{
                    transition: 'all 200ms ease',
                    '&:hover': {
                      transform: 'translateY(-1rem)',
                    },
                  }}
                >
                  <Flex direction="column" gap="4">
                    <AspectRatio.Root ratio={9 / 12}>
                      <div
                        style={{
                          position: 'relative',
                          height: '100%',
                          width: '100%',
                        }}
                      >
                        <Image
                          src={
                            process.env.NODE_ENV === 'development'
                              ? `http://localhost:1337${item.coverImage.url}`
                              : item.coverImage.url
                          }
                          layout="fill"
                          objectFit="cover"
                          alt={item.coverImage.url}
                        />
                      </div>
                    </AspectRatio.Root>
                    <Text size="6" weight="bold" css={{ textAlign: 'center' }}>
                      {item.title}
                    </Text>
                  </Flex>
                </Link>
              ))}
            </Grid>
          </Flex>
        </Container>
      </div>
    </div>
  )
}

const RelativeArticleLabel = styled('span', {
  textTransform: 'uppercase',
  fontWeight: '$medium',
})
const RelativeArticleTitle = styled('span', {
  textTransform: 'uppercase',
  fontWeight: 'bold',
  fontSize: '$6',
  cursor: 'pointer',
  transition: 'all 200ms ease',
  display: 'block',
  color: '$black1',

  '&:hover': {
    color: '$primary6',
  },
})

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
    fallback: 'blocking',
    paths: slugs.map((slug) => ({ params: { slug } })),
  }
}

export const getStaticProps: GetStaticProps<
  {
    contentSource: MDXRemoteSerializeResult
    meta: Omit<Article, 'content'>
    prev: RelativeArticleMeta | null
    next: RelativeArticleMeta | null
    relatedArticles: RelatedArticleMeta[]
  },
  ParsedUrlQuery & { slug: string }
> = async ({ params }) => {
  try {
    const { content, ...meta } = (await getArticle(params?.slug)) || {}
    const { prev, next } = await getRelativeArticles(meta.created_at)
    const relatedArticles = await getRelatedArticles({
      categories: meta.categories.map(({ name }) => name),
      slug: params?.slug,
    })

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
        prev,
        next,
        relatedArticles,
      },
      revalidate: 60,
    }
  } catch {
    return {
      notFound: true,
    }
  }
}
