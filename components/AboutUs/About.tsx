import { Container, View, Button, Flex } from '@components'
import { styled } from '@config/stitches'
import { textStyles } from '@components/Text'
import { motion } from 'framer-motion'
import { ArrowSmDownIcon } from '@heroicons/react/solid'

export default function AboutUs() {
  return (
    <View
      css={{
        display: 'grid',
        background: 'linear-gradient(#E5FAF1,#FFFFFF)',
        weight: '100%',
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
          ABOUT US
        </Title>
        <Flex direction="column" gap="8"></Flex>
        <Button
          as={motion.a}
          href="#"
          variant="primary"
          size="large"
          radius="pill"
          css={{
            justifySelf: 'center',
            marginTop: '$8',
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
