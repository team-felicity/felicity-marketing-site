import Image from 'next/image'

import { styled } from '@config/stitches'

import View from '@components/View'
import Flex from '@components/Flex'
import Container from '@components/Container'
import ScrollReveal from '@components/ScrollReveal'
import Text, { textStyles } from '@components/Text'

import SampleImage from 'public/sample.png'
import BrocoliImg from 'public/brocoli.png'
import BowlImg from 'public/foodbowl.png'
import QuoteImg from 'public/quote.png'

export default function OwnerQuote() {
  return (
    <View
      as="section"
      css={{
        py: 'clamp(4rem, 5vw, 5.5rem)',
        backgroundColor: '$white1',
        overflow: 'hidden',
      }}
    >
      <View css={{ backgroundColor: '$primary8', width: '100%' }}>
        <OuterFlex
          as={Flex}
          gap={{ '@tablet': '9' }}
          align={{ '@initial': 'center', '@tablet': 'start' }}
        >
          <ScrollReveal>
            <OwnerImage>
              <StyledOwnerImage src={SampleImage} objectFit="cover" alt="try" />
            </OwnerImage>
          </ScrollReveal>
          <View
            css={{
              position: 'relative',
              paddingTop: '$9',
              '@tablet': {
                padding: 0,
              },
            }}
          >
            <Behind>
              <Image src={QuoteImg} alt="quote" />
            </Behind>
            <ContentFlex
              css={{ '@tablet': { width: '30vw', marginTop: '5%' } }}
            >
              <ScrollReveal>
                <Quote>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Id
                </Quote>
              </ScrollReveal>
              <ScrollReveal>
                <Flex
                  direction="column"
                  justify="start"
                  align={{ '@initial': 'center', '@tablet': 'start' }}
                >
                  <OwnerName>Name of Owner</OwnerName>
                  <Text>Owner</Text>
                </Flex>
              </ScrollReveal>
            </ContentFlex>
          </View>
        </OuterFlex>
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

const ContentFlex = styled(Container, {
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
const OuterFlex = styled(Flex, {
  pt: '$4',
  mt: '$9',
  pb: '$9',
  mb: '-30%',
  justifyContent: 'center',
  flexDirection: 'column',
  '@tablet': {
    flexDirection: 'row',
    pb: '$1',
    mb: '0',
  },
})

const Bowl = styled(View, {
  position: 'relative',
  left: '-100%',
  overflow: 'hidden',
  '@tablet': {
    transform: 'translateY(-160%)',
    left: '94%',
    width: 'max(125px,10vw)',
    top: '50%',
  },
})
const Brocoli = styled(View, {
  display: 'none',
  '@tablet': {
    position: 'relative',
    mt: '-15%',
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

const Quote = styled('p', {
  ...textStyles,
  textAlign: 'center',
  px: '$2',
  '@tablet': { textAlign: 'start', px: '0' },
})

const OwnerImage = styled(View, {
  position: 'relative',
  width: '15rem',
  my: '-4em 1rem',
  '@tablet': {
    width: '18rem',
  },
})

const Behind = styled(View, {
  position: 'absolute',
  top: '-6%',
  width: '10rem',
  '@tablet': { top: '-45%' },
})
