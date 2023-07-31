import Image from 'next/image'

import { styled } from '@config/stitches'

import View from '@components/View'
import Flex from '@components/Flex'
import Container from '@components/Container'
import ScrollReveal from '@components/ScrollReveal'
import Grid from '@components/Grid'
import { textStyles } from '@components/Text'

import SilverCard from 'public/SilverCard.svg'
import GoldCard from 'public/GoldCard.svg'
import PlatinumCard from 'public/PlatinumCard.svg'
import DiamondCard from 'public/DiamondCard.svg'

const data = [
  {
    id: 1,
    imageProps: SilverCard,
    color: '#20577A',
    columnTitle: 'Silver',
    subtitle: 'Php 500 one-time membership',
    subtitle1: 'Php 500/month consumable subscription',
    subtitle2: 'ATM Card & Insurance',
    subtitle3: 'Discounts and Vouchers',
    subtitle4: 'Upto 10 commission per member purchase',
    subtitle5: '20 recruits/annum',
  },
  {
    id: 2,
    imageProps: GoldCard,
    color: '#20577A',
    columnTitle: 'Gold',
    subtitle: 'Php 500 one-time membership',
    subtitle1: 'Php 2,000/month consumable subscription',
    subtitle2: 'ATM Card & Insurance',
    subtitle3: 'Discounts and Vouchers',
    subtitle4: 'Upto 10 commission per member purchase',
    subtitle5: '200 recruits/annum',
  },
  {
    id: 3,
    imageProps: PlatinumCard,
    color: '#20577A',
    columnTitle: 'Platinum',
    subtitle: 'Php 500 one-time membership',
    subtitle1: 'Php 24,000/month consumable subscription',
    subtitle2: 'ATM Card & Insurance',
    subtitle3: 'Discounts and Vouchers',
    subtitle4: 'Upto 10 commission per member purchase',
    subtitle5: '2,000 recruits/annum',
  },
  {
    id: 4,
    imageProps: DiamondCard,
    color: '#20577A',
    columnTitle: 'Diamond',
    subtitle: 'Php 500 one-time membership',
    subtitle1: 'Php 30,000/month consumable subscription',
    subtitle2: 'ATM Card & Insurance',
    subtitle3: 'Exclusive Deals and Discounts',
    subtitle4: 'Upto 10 commission per member purchase',
    subtitle5: '2,000 recruits/annum',
  },
]

export default function OurTeam() {
  return (
    <View
      as="section"
      css={{
        backgroundColor: '$white1',
        pb: '$9',
      }}
    >
      <Container
        size="large2"
        as={Grid}
        css={{
          gapy: '8rem',
          mb: '$8',
          ml: 100,
          mr: 100,
        }}
      >
        <ScrollReveal>
          <Title
            size={{ '@initial': '10', '@tablet': '12', '@desktop': '14' }}
            css={{ pt: 100, pb: 0, mb: 0 }}
          >
            BE PART OF THE HAPPY TREND
          </Title>
        </ScrollReveal>
        <OuterFlex>
          {data.map((data) => (
            <ScrollReveal key={data.id}>
              <FlexCol>
                <ImageContainer>
                  {/* <Behind>
                    <HalfCircle fill={data.color} />
                  </Behind> */}
                  <StyledTeamImage
                    src={data.imageProps}
                    alt={data.columnTitle}
                  />
                </ImageContainer>
                <ColumnTitle>{data.columnTitle}</ColumnTitle>
                <Subtitles>{data.subtitle}</Subtitles>
                <Subtitles>{data.subtitle1}</Subtitles>
                <Subtitles>{data.subtitle2}</Subtitles>
                <Subtitles>{data.subtitle3}</Subtitles>
                <Subtitles>{data.subtitle4}</Subtitles>
                <Subtitles>{data.subtitle5}</Subtitles>
              </FlexCol>
            </ScrollReveal>
          ))}
        </OuterFlex>
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

const StyledTeamImage = styled(Image, {
  borderTopLeftRadius: '50px',
  borderBottomLeftRadius: '50px',
  borderTopRightRadius: '50px',
  borderBottomRightRadius: '50px',
})

const OuterFlex = styled(Flex, {
  flexDirection: 'column',
  defaultVariants: { gap: '9' },
  '@desktop': {
    flexDirection: 'row',
  },
})

const FlexCol = styled(Flex, {
  position: 'relative',
  flexDirection: 'column',
  defaultVariants: {
    gap: '4',
  },
})

const ColumnTitle = styled('h1', {
  ...textStyles,
  textAlign: 'center',
  defaultVariants: {
    size: '9',
    color: 'primary4',
    weight: 'bold',
  },
})

const Subtitles = styled('p', {
  ...textStyles,
  textAlign: 'center',
})

const ImageContainer = styled(View, {
  position: 'relative',
  alignSelf: 'center',
  width: '12rem',
  pt: '$4',
  filter: 'drop-shadow(-8px 15px 24px rgba(0,0,0,0.18))',
  userSelect: 'none',
  '@tablet': { width: '15rem' },
})
// const Behind = styled(View, {
//   alignSelf: 'center',
//   position: 'absolute',
//   width: '6.5rem',
//   right: '55%',
//   bottom: '-8%',
//   '@tablet': { width: '8rem' },
// })
