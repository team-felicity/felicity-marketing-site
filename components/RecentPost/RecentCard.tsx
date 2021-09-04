import Image from 'next/image'
import { Text, View, Flex, ScrollReveal } from '@components'
import Photo from 'public/sample.png'
import { textStyles } from '@components/Text'
import { styled } from '@config/stitches'
import { buttonStyles } from '@components/Button'

interface Props {
  direction: 'row' | 'column' | 'rowReverse' | 'columnReverse'
}

export default function RecentCard({ direction }: Props) {
  return (
    <Layout
      direction={{
        '@initial': 'column',
        '@phone': direction,
        '@tablet': direction,
      }}
      gapX="5"
    >
      <ScrollReveal>
        <ImageContainer>
          <StyledImage src={Photo} alt="photo" placeholder="blur" />
        </ImageContainer>
      </ScrollReveal>

      <ContentFlex>
        <ScrollReveal>
          <Blogtitle
            size={{
              '@initial': '7',
              '@desktop': '8',
            }}
          >
            Contact Us
          </Blogtitle>
        </ScrollReveal>
        <ScrollReveal>
          <Flex direction={{ '@initial': 'column', '@desktop': 'row' }} gap="2">
            <AuthorText
              size={{
                '@initial': '2',
                '@desktop': '3',
              }}
            >
              Author name,
            </AuthorText>
            <AuthorText
              size={{
                '@initial': '2',
                '@desktop': '3',
              }}
            >
              August 30, 2021
            </AuthorText>
          </Flex>
        </ScrollReveal>
        <ScrollReveal>
          <Text>
            We want to provide you a great experience which is why we want to
            hear from you. Your feedback helps us cater the events you love and
            services you expect. We want to provide you a great experience which
            is why we want to hear from you. Your feedback helps us cater the
            events you love and services you expec
          </Text>
        </ScrollReveal>
        <ScrollReveal>
          <Text color="primary3" weight="medium">
            6 min read
          </Text>
        </ScrollReveal>
        <ScrollReveal>
          <Button
            variant="secondary"
            size="large"
            css={{
              marginTop: '$4',
              fontSize: '$3',
              width: 'fit-content',
              padding: '1rem 1rem',
              height: 'unset',
              marginBottom: '$5',
              '@desktop': {
                fontSize: '$4',
                padding: '1rem 6rem',
              },
              '@tablet': {
                padding: '1rem 9rem',
              },
            }}
          >
            Continue Reading
          </Button>
        </ScrollReveal>
      </ContentFlex>
    </Layout>
  )
}

const Layout = styled(Flex, {
  my: '$4',
  pt: '$6',
  pb: '$2',
  px: '$6',
  borderRadius: 50,
  backgroundColor: '$white1',
  boxShadow: '1px 2px 6px 1px #D0D0D0',
  '@desktop': {
    pt: '$4',
  },
})

const Blogtitle = styled('h1', {
  ...textStyles,

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
  '@desktop': {
    pt: '$5',
    width: '20rem',
  },
})

const StyledImage = styled(Image, {
  borderTopLeftRadius: '50px',
  borderBottomLeftRadius: '50px',
  borderBottomRightRadius: '50px',
  objectFit: 'contain',
})

const AuthorText = styled('p', {
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
