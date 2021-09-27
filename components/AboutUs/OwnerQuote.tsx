import Image from 'next/image'
import { Flex, View, Container, ScrollReveal, Text } from '@components'
import SampleImage from 'public/sample.png'
import BrocoliImg from 'public/brocoli.png'
import BowlImg from 'public/foodbowl.png'
import QuoteImg from 'public/quote.png'
import { styled } from '@config/stitches'
import { textStyles } from '@components/Text'

export default function OwnerQuote() {
  return (
    <View
      as="section"
      css={{ py: 'clamp(4rem, 5vw, 5.5rem)', backgroundColor: '$white1' }}
      id="qoute"
    >
      <View css={{ backgroundColor: '$primary8', width: '100%' }}>
        <Container
          as={Flex}
          size="large2"
          justify="between"
          gap={{ '@tablet': '9' }}
          css={{
            pt: '$4',
            mt: '$9',
            pb: '$9',
            justifyContent: 'center',
            flexDirection: 'column',
            '@tablet': { flexDirection: 'row', pb: '$1' },
          }}
        >
          <ScrollReveal>
            <OwnerImage>
              <StyledOwnerImage src={SampleImage} objectFit="cover" alt="try" />
            </OwnerImage>
          </ScrollReveal>

          <ContentFlex css={{ '@tablet': { width: '30vw' } }}>
            <View
              css={{
                paddingTop: '15%',
                marginTop: '-20%',
                '@tablet': { paddingTop: 0 },
              }}
            >
              <Image src={QuoteImg} alt="quote" />
            </View>
            <ScrollReveal>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Id
              </Text>
            </ScrollReveal>
            <ScrollReveal>
              <Flex direction="column" justify="start" align="start">
                <OwnerName>Name of Owner</OwnerName>
                <Text>Owner</Text>
              </Flex>
            </ScrollReveal>
          </ContentFlex>
        </Container>
      </View>
      <Bowl>
        <Image src={BowlImg} alt="foodbowl" />
      </Bowl>
      <Brocoli>
        <Image src={BrocoliImg} alt="brocoli" />
      </Brocoli>
    </View>
  )
}

const ContentFlex = styled(Flex, {
  flexDirection: 'column',
  gap: '$5',
  alignSelf: 'center',
  '@tablet': {
    gap: '$2',
  },
})

const StyledOwnerImage = styled(Image, {
  borderTopLeftRadius: '300px',
  borderBottomLeftRadius: '300px',
  borderTopRightRadius: '300px',
})

const Bowl = styled(View, {
  position: 'absolute',
  right: '-100%',
  '@phone': {
    transform: 'translateY(80%)',
    right: '-6%',
    width: 'max(125px,12vw)',
    top: '95%',
  },
})
const Brocoli = styled(View, {
  display: 'none',
  '@phone': {
    position: 'relative',
    mt: '-5%',
    left: '-5rem',
    display: 'block',
    width: 'max(150px,12vw)',
  },
})

const OwnerName = styled('h1', {
  ...textStyles,

  defaultVariants: {
    color: 'primary4',
    size: '6',
    weight: 'bold',
  },
})

const OwnerImage = styled(View, {
  position: 'relative',
  alignSelf: 'center',
  width: '15rem',
  my: '-4em 1rem',
  '@tablet': {
    width: '18rem',
  },
})
