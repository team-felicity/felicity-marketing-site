import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { ReactElement, SyntheticEvent, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
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
  getRelativeArticles,
  getRelatedArticles,
  subscribeToBlog,
} from 'utils/api'
import { toDefaultDateFormat } from 'utils/functions'

import { textStyles } from '@components/Text'
import { BaseInput } from '@components/TextField'
import components, { ContentContainer } from '@components/BlogComponents'
import Layout from '@components/Layout'

export default function BlogDetail({
  contentSource,
  meta,
  next,
  prev,
  relatedArticles,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [email, setEmail] = useState('')
  const router = useRouter()

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault()
    await subscribeToBlog(email)
    setEmail('')
    router.push('/thank-you')
  }

  const {
    author: {
      data: { attributes: author },
    },
    coverImage: {
      data: { attributes: coverImage },
    },
    title,
    createdAt,
    readTimeEstimate,
    categories,
  } = meta

  return (
    <div>
      <article>
        <TitleWrapper>
          <Container size="medium">
            <Title as="h1">{title}</Title>
            <Flex gap="3">
              <MetaDetail>{author.name}</MetaDetail>
              <MetaDetail>
                {toDefaultDateFormat(new Date(createdAt))}
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
              <Flex>
                <InputWrapper as={Flex} align="center">
                  <BaseInput
                    required
                    type="email"
                    variant="unstyled"
                    placeholder="@E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    css={{ px: '1em' }}
                  />
                  <Button variant="primary" fitContent>
                    <Text weight="semibold" color="white1" css={{ mr: '$1' }}>
                      Subscribe
                    </Text>
                    <ArrowRightIcon width={16} fill="white" />
                  </Button>
                </InputWrapper>
              </Flex>
            </Flex>
            <Flex direction="column" css={{ my: '$8' }}>
              <Text css={{ textTransform: 'uppercase' }}>Categories</Text>
              <Flex gap="4" css={{ ml: '$1', mt: '$2' }}>
                {categories.data.map(({ attributes: { name } }) => (
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
            <Link href={`/blog/${prev.slug}`} css={{ width: '30%' }}>
              <RelativeArticleContainer as={Flex} direction="column">
                <RelativeArticleLabel>Previous Article</RelativeArticleLabel>
                <RelativeArticleTitle>{prev.title}</RelativeArticleTitle>
              </RelativeArticleContainer>
            </Link>
          ) : (
            // placeholder to maintain space betweenness
            <View css={{ width: '1px', height: '1px' }} />
          )}
          {next ? (
            <Link href={`/blog/${next.slug}`} css={{ width: '30%' }}>
              <RelativeArticleContainer
                as={Flex}
                direction="column"
                align="end"
              >
                <RelativeArticleLabel css={{ textAlign: 'end' }}>
                  Next Article
                </RelativeArticleLabel>
                <RelativeArticleTitle css={{ textAlign: 'end' }}>
                  {next.title}
                </RelativeArticleTitle>
              </RelativeArticleContainer>
            </Link>
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
              {relatedArticles.map(({ attributes: item }, index) => (
                <Link
                  href={`/blog/${item.slug}`}
                  key={index}
                  css={{
                    transition: 'all 200ms ease',
                    '&:hover': {
                      transform: 'translateY(-0.5rem)',
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
                              ? `http://localhost:1337${item.coverImage.data.attributes.url}`
                              : item.coverImage.data.attributes.url
                          }
                          layout="fill"
                          objectFit="cover"
                          alt={item.coverImage.data.attributes.url}
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
  color: '$black1',
})
const RelativeArticleTitle = styled('span', {
  textTransform: 'uppercase',
  fontWeight: 'bold',
  fontSize: '$6',
  cursor: 'pointer',
  transition: 'all 200ms ease',
  display: 'block',
  color: '$black1',
})
const RelativeArticleContainer = styled('div', {
  [`&:hover ${RelativeArticleTitle}`]: {
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

const InputWrapper = styled('div', {
  p: 0,
  overflow: 'hidden',
  border: '1px solid #60BB93',
  borderRadius: '1em',
  boxShadow: '7px 5px 10px rgba(43, 101, 125, 0.14)',
  width: 'fit-content',

  [`& ${Button}`]: {
    flexShrink: 0,
    height: '100%',
    borderRadius: 0,
  },
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
  fontSize: '$8',

  '@desktop': {
    fontSize: '$12',
  },

  '&::first-letter': { textTransform: 'capitalize' },

  defaultVariants: {
    color: 'primary7',
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

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ slug: string }>) => {
  const slug = params?.slug
  const { content, ...meta } = (await getArticle(slug)) || {}
  const notFound = !content

  const { prev, next } = notFound
    ? { prev: null, next: null }
    : await getRelativeArticles(meta.createdAt)

  const relatedArticles = notFound
    ? []
    : await getRelatedArticles({
        categories: meta.categories.data.map(
          ({ attributes: { name } }) => name
        ),
        slug,
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
    notFound,
  }
}

BlogDetail.getLayout = (
  page: ReactElement<InferGetStaticPropsType<typeof getStaticProps>>
) => {
  return (
    <Layout
      meta={{
        title: `${page.props.meta.title} — Felicity`,
        description: page.props.meta.excerpt,
        url: `https://felicity.com.ph/${page.props.meta.slug}`,
      }}
    >
      {page}
    </Layout>
  )
}
