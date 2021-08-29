import Image from 'next/image'
import {
  Text,
  View,
  Button,
  Grid,
  Container,
  Flex,
  ScrollReveal,
} from '@components'
import Photo from 'public/sample.png'
import { textStyles } from '@components/Text'
import { styled } from '@config/stitches'
import { motion } from 'framer-motion'

export default function RecentCard() {
  return (
    <Container
      size="large"
      css={{
        display: 'grid',
        gapy: '1rem',
        mb: '$6',
        mt: '$9',
      }}
    >
      <Layout
        as={View}
        flow={{ '@desktop': 'row', '@phone': 'column' }}
        gap="6"
      >
        <ScrollReveal>
          <StyledImage src={Photo} alt="photo" placeholder="blur" />
        </ScrollReveal>

        <ContentFlex>
          <ScrollReveal>
            <Blogtitle>Contact Us</Blogtitle>
            <Text>
              We want to provide you a great experience which is why we want to
              hear from you. Your feedback helps us cater the events you love
              and services you expect. We want to provide you a great experience
              which is why we want to hear from you. Your feedback helps us
              cater the events you love and services you expec
            </Text>
          </ScrollReveal>
          <ScrollReveal>
            <Button
              as={motion.a}
              href="#"
              variant="secondary"
              size="large"
              css={{
                marginTop: '$4',
                fontSize: '$4',
                width: 'fit-content',
                padding: '1rem 2rem',
                height: 'unset',
                marginBottom: '$5',
                '@desktop': {
                  padding: '1rem 6rem',
                },
              }}
            >
              Continue Reading
            </Button>
          </ScrollReveal>
        </ContentFlex>
      </Layout>
    </Container>
  )
}

const Layout = styled(Grid, {
  gapy: '1rem',
  my: '$4',
  py: '$6',
  px: '$6',
  borderRadius: 50,
  backgroundColor: 'white1',
  boxShadow: '1px 2px 6px 1px #D0D0D0',
})

const Blogtitle = styled('h1', {
  ...textStyles,

  defaultVariants: {
    size: '8',
    color: 'primary5',
    weight: 'bold',
  },
})

const ContentFlex = styled(Flex, {
  flexDirection: 'column',
  paddingTop: '$3',
  gap: '$5',
})

const StyledImage = styled(Image, {
  borderTopLeftRadius: '50px',
  borderBottomLeftRadius: '50px',
  borderBottomRightRadius: '50px',
})
