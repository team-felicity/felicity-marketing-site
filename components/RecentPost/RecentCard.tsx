import Image from 'next/image'
import { Text, View, Button, Grid, Container, Flex } from '@components'
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
      <View
        style={{
          borderRadius: 50,
          backgroundColor: 'white1',
          boxShadow: '1px 2px 6px 1px #D0D0D0',
        }}
      >
        <Container
          css={{
            display: 'grid',
            gapy: '1rem',
            mb: '$4',
            mt: '$4',
            pt: '$2',
            pb: '$2',
          }}
          size="large"
        >
          <Grid
            flow={{ '@phone': 'row', '@desktop': 'column' }}
            gap="6"
            css={{ paddingLeft: '$4' }}
          >
            <Image src={Photo} alt="photo" />

            <Flex direction="column" gap="5">
              <Blogtitle>Contact Us</Blogtitle>
              <Text>
                We want to provide you a great experience which is why we want
                to hear from you. Your feedback helps us cater the events you
                love and services you expect. We want to provide you a great
                experience which is why we want to hear from you. Your feedback
                helps us cater the events you love and services you expec
              </Text>
              <Button
                as={motion.a}
                href="#"
                variant="secondary"
                size="large"
                css={{
                  marginTop: '$4',
                  fontSize: '$4',
                  width: 'fit-content',
                  padding: '1rem 6rem',
                  height: 'unset',
                  marginBottom: '$5',
                }}
              >
                Continue Reading
              </Button>
            </Flex>
          </Grid>
        </Container>
      </View>
    </Container>
  )
}

const Blogtitle = styled('h1', {
  ...textStyles,

  defaultVariants: {
    size: '8',
    color: 'primary5',
    weight: 'bold',
  },
})
