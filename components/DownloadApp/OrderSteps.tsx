import Image from 'next/image'
import { Flex, View, Grid, Container } from '@components'
import { styled } from '@config/stitches'
import { textStyles } from '@components/Text'
import Shop from 'public/shop.svg'
import Click from 'public/click.svg'
import Deliver from 'public/deliver.svg'

const data = [
  {
    id: 1,
    imageProps: Shop,
    columnTitle: 'CLICK',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing, ipsum dolor sit amit',
  },
  {
    id: 2,
    imageProps: Click,
    columnTitle: 'SHOP',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing, ipsum dolor sit amit',
  },
  {
    id: 3,
    imageProps: Deliver,
    columnTitle: 'DELIVER',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing, ipsum dolor sit amit',
  },
]

export default function OrderSteps() {
  return (
    <View
      css={{
        backgroundColor: '$white1',
        marginTop: '$9',
      }}
    >
      <Container
        size="large"
        as={Grid}
        css={{
          gapy: '3rem',
          mb: '$8',
          '@desktop': {
            pt: '$5',
          },
        }}
      >
        <Header>Order in 3 easy steps!</Header>
        <OuterFlex>
          {data.map((data) => (
            <FlexCol key={data.id}>
              <Image src={data.imageProps} alt={data.columnTitle} />
              <ColumnTitle>{data.columnTitle}</ColumnTitle>
              <Subtitles>{data.subtitle}</Subtitles>
            </FlexCol>
          ))}
        </OuterFlex>
      </Container>
    </View>
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
  px: '$9',
  '@desktop': {
    px: '$2',
  },
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
