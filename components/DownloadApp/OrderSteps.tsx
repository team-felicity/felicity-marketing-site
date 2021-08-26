import Image from 'next/image'
import { Flex, Grid, Container } from '@components'
import { styled } from '@config/stitches'
import { textStyles } from '@components/Text'
import Shop from 'public/shop.svg'
import Click from 'public/click.svg'
import Deliver from 'public/deliver.svg'

export default function OrderSteps() {
  return (
    <Container
      size="large"
      as={Grid}
      css={{
        gapy: '3rem',
        mb: '$9',
        '@desktop': {
          pt: '$9',
        },
      }}
    >
      <Header>Order in 3 easy steps!</Header>
      <OuterFlex>
        <FlexCol>
          <Image src={Shop} alt="shop" />
          <ColumnTitle>CLICK</ColumnTitle>
          <Container>
            <Subtitles>
              Lorem ipsum dolor sit amet, consectetur adipiscing, ipsum dolor
              sit amet,
            </Subtitles>
          </Container>
        </FlexCol>
        <FlexCol>
          <Image src={Click} alt="click" />
          <ColumnTitle>SHOP</ColumnTitle>
          <Container>
            <Subtitles>
              Lorem ipsum dolor sit amet, consectetur adipiscing, ipsum dolor
              sit amet,
            </Subtitles>
          </Container>
        </FlexCol>
        <FlexCol>
          <Image src={Deliver} alt="deliver" />
          <ColumnTitle>DELIVER</ColumnTitle>
          <Container>
            <Subtitles>
              Lorem ipsum dolor sit amet, consectetur adipiscing, ipsum dolor
              sit amet,
            </Subtitles>
          </Container>
        </FlexCol>
      </OuterFlex>
    </Container>
  )
}
const Header = styled('h1', {
  ...textStyles,
  textAlign: 'center',
  paddingBottom: '$3',
  defaultVariants: {
    size: '11',
    color: 'primary3',
    weight: 'bold',
  },
})

const ColumnTitle = styled('h1', {
  ...textStyles,
  textAlign: 'center',
  defaultVariants: {
    size: '9',
    color: 'primary1',
    weight: 'bold',
  },
})

const Subtitles = styled('p', {
  ...textStyles,
  textAlign: 'center',
})
const OuterFlex = styled(Flex, {
  flexDirection: 'column',
  defaultVariants: { gap: '9' },
  '@desktop': {
    flexDirection: 'row',
  },
})

const FlexCol = styled(Flex, {
  flexDirection: 'column',
  defaultVariants: {
    gap: '4',
  },
})
