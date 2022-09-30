import Image from 'next/image'
import { m } from 'framer-motion'

import { ArticleCard } from 'utils/api'
import { toDefaultDateFormat } from 'utils/functions'
import { styled } from '@config/stitches'

import { Text, View, Flex, ScrollReveal } from '@components'
import { textStyles } from '@components/Text'
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
    >
      <ScrollReveal>
        <ImageContainer
          css={{
            '@desktop': {
              width: from === 'blog' ? '25rem' : '20rem',
              pt: from === 'blog' ? '$0' : '0.875rem',
            },
          }}
        >
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
        </ImageContainer>
      </ScrollReveal>

      <ContentFlex css={{ width: '100%' }}>
        <ScrollReveal>
          <Blogtitle
            size={{
              '@initial': '7',
              '@desktop': '8',
            }}
          >
            {title}
          </Blogtitle>
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
          <Text>{excerpt}</Text>
        </ScrollReveal>
        <ScrollReveal>
          <Text color="primary3" weight="medium">
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
              padding: '1rem 1rem',
              height: 'unset',
              marginBottom: '$5',
              $$accentColor:
                from === 'blog' ? '$colors$primary4' : '$colors$primary1',
              '@tablet': {
                padding: from === 'blog' ? '1rem 9rem' : '1rem 7rem',
              },
              '@desktop': {
                fontSize: '$4',
                padding: from === 'blog' ? '1rem 12rem' : '1rem 9rem',
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
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  '-webkit-line-clamp': 2,
  '-webkit-box-orient': 'vertical',

  defaultVariants: {
    color: 'primary5',
    weight: 'bold',
  },
})

const ContentFlex = styled(Flex, {
  flexDirection: 'column',
  gap: '$2',
})

const ImageContainer = styled(View, {
  width: '100%',
  pb: '$3',
  '@tablet': {
    width: '20rem',
  },
})

const StyledImage = styled(Image, {
  borderTopLeftRadius: '50px',
  borderBottomLeftRadius: '50px',
  borderBottomRightRadius: '50px',
  objectFit: 'contain',
})

const AuthorText = styled('span', {
  ...textStyles,

  defaultVariants: {
    color: 'primary5',
    weight: 'semibold',
  },
})

const Button = styled('a', buttonStyles, {
  marginTop: '$4',
  fontSize: '$3',
  width: '100%',
  height: 'unset',
  marginBottom: '$5',

  '@phone': {
    width: '50%',
  },
})
