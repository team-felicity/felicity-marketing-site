import Image from 'next/image'
import { Flex, View, Grid, Container, ScrollReveal } from '@components'
import { styled } from '@config/stitches'
import { textStyles } from '@components/Text'
import SampleImage from 'public/sample.png'
import HalfCircle from './HalfCircle'

const data = [
  {
    id: 1,
    imageProps: SampleImage,
    color: '#35A3A5',
    columnTitle: 'Member 1',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id donec ultrices tincidunt arcu non sodales neque. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. ',
  },
  {
    id: 2,
    imageProps: SampleImage,
    color: '#61C295',
    columnTitle: 'Member 2',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id donec ultrices tincidunt arcu non sodales neque. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. ',
  },
  {
    id: 3,
    imageProps: SampleImage,
    color: '#20577A',
    columnTitle: 'Member 3',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id donec ultrices tincidunt arcu non sodales neque. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. ',
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
          gapy: '3rem',
          mb: '$5',
          '@desktop': {
            pt: '$5',
          },
        }}
      >
        <ScrollReveal>
          <Title size={{ '@initial': '10', '@tablet': '12', '@desktop': '14' }}>
            OUR TEAM
          </Title>
        </ScrollReveal>
        <OuterFlex>
          {data.map((data) => (
            <ScrollReveal key={data.id}>
              <FlexCol>
                <ImageContainer>
                  <Behind>
                    <HalfCircle fill={data.color} />
                  </Behind>
                  <StyledTeamImage
                    src={data.imageProps}
                    alt={data.columnTitle}
                  />
                </ImageContainer>

                <ColumnTitle>{data.columnTitle}</ColumnTitle>
                <Subtitles>{data.subtitle}</Subtitles>
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
  borderTopLeftRadius: '300px',
  borderBottomLeftRadius: '300px',
  borderTopRightRadius: '300px',
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
  px: '$2',
  '@desktop': {
    px: '$5',
  },
})

const ImageContainer = styled(View, {
  position: 'relative',
  alignSelf: 'center',
  width: '15rem',
  pt: '$4',
})
const Behind = styled(View, {
  alignSelf: 'center',
  position: 'absolute',
  width: '8rem',
  right: '55%',
  bottom: '-8%',
})
