import Image from 'next/image'
import Link from 'next/link'
import { m } from 'framer-motion'

import { ArticleCard } from 'utils/api'
import { toDefaultDateFormat } from 'utils/functions'
import { styled } from '@config/stitches'

import ScrollReveal from '@components/ScrollReveal'
import Flex from '@components/Flex'
import Text, { textStyles } from '@components/Text'
import { buttonStyles } from '@components/Button'

interface Props {
  direction: 'row' | 'column' | 'rowReverse' | 'columnReverse'
  from?: 'blog'
  data: ArticleCard
}

export default function RecentCard({ direction, from, data }: Props) {
  const {
    coverImage: {
      data: { attributes: coverImage },
    },
    title,
    author: {
      data: { attributes: author },
    },
    createdAt,
    excerpt,
    readTimeEstimate,
    slug,
  } = data.attributes

  return (
    <Flex
      direction={{
        '@initial': 'column',
        '@phone': direction,
        '@tablet': direction,
      }}
      justify="between"
      gapX={from === 'blog' ? '8' : '5'}
      gapY="4"
    >
      <ScrollReveal>
        <Link href={`/blog/${slug}`} passHref>
          <A>
            <StyledImage
              src={
                process.env.NODE_ENV === 'development'
                  ? `${process.env.NEXT_PUBLIC_API_URL}${coverImage.url}`
                  : coverImage.url
              }
              width={coverImage.width}
              height={coverImage.height}
              objectFit="cover"
              alt={coverImage.url}
            />
          </A>
        </Link>
      </ScrollReveal>

      <ContentFlex
        css={
          direction === 'rowReverse'
            ? {
                '@desktop': {
                  pl: '$3',
                },
              }
            : {}
        }
      >
        <ScrollReveal>
          <Link href={`/blog/${slug}`}>
            <a>
              <Blogtitle
                size={{
                  '@initial': '7',
                  '@desktop': '8',
                }}
              >
                {title}
              </Blogtitle>
            </a>
          </Link>
        </ScrollReveal>
        <ScrollReveal>
          <Flex gap="2">
            <AuthorText
              size={{
                '@initial': '2',
                '@desktop': '3',
              }}
            >
              {author.name},
            </AuthorText>
            <AuthorText
              size={{
                '@initial': '2',
                '@desktop': '3',
              }}
            >
              {toDefaultDateFormat(new Date(createdAt))}
            </AuthorText>
          </Flex>
        </ScrollReveal>
        <ScrollReveal>
          <Text color="primary5">{excerpt}</Text>
        </ScrollReveal>
        <ScrollReveal>
          <Text color="primary5" weight="medium">
            {readTimeEstimate} min read
          </Text>
        </ScrollReveal>
        <ScrollReveal>
          <Button
            as={m.a}
            href={`/blog/${slug}`}
            variant="secondary"
            size="large"
            css={{
              marginTop: '$4',
              fontSize: '$3',
              width: 'fit-content',
              textAlign: 'center',
              padding: '1rem 2rem',
              height: 'unset',
              borderRadius: '1rem',
              alignSelf: 'flex-end',
              $$accentColor:
                from === 'blog' ? '$colors$primary4' : '$colors$primary1',
              '@tablet': {
                padding: from === 'blog' ? '1rem 9rem' : '1rem 7rem',
              },
            }}
          >
            Continue Reading
          </Button>
        </ScrollReveal>
      </ContentFlex>
    </Flex>
  )
}

const Blogtitle = styled('h1', {
  ...textStyles,
  // overflow: 'hidden',
  // textOverflow: 'ellipsis',
  // display: '-webkit-box',
  // '-webkit-line-clamp': 2,
  // '-webkit-box-orient': 'vertical',

  maxWidth: '80%',

  defaultVariants: {
    color: 'primary5',
    weight: 'bold',
  },
})

const ContentFlex = styled(Flex, {
  flexDirection: 'column',
  gap: '$2',
  width: '100%',
  // background: 'red',

  '&:nth-of-type(odd)': {
    background: 'red',
  },
})

const A = styled('a', {
  display: 'flex',
  width: '100%',
})

const StyledImage = styled(Image, {
  borderRadius: '1.5rem',

  '@desktop': {
    borderRadius: '35px',
  },
})

const AuthorText = styled('span', {
  ...textStyles,

  defaultVariants: {
    color: 'primary5',
    weight: 'semibold',
  },
})

const Button = styled('a', buttonStyles, {
  fontSize: '$3',
  width: '100%',
  height: 'unset',

  '@phone': {
    width: '50%',
  },
})
