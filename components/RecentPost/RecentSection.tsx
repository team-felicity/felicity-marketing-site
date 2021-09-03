import { Container, View } from '@components'
import RecentCard from './RecentCard'
import { styled } from '@config/stitches'
import Image from 'next/image'
import Tomato from 'public/tomato.png'
import Brocoli from 'public/brocoli.png'
import { textStyles } from '@components/Text'

export default function RecentPostSection() {
  return (
    <Container
      size="large"
      css={{
        display: 'grid',
        gapy: '2rem',
        mb: '$7',
        mt: '$9',
        '@desktop': {
          mt: '$6',
          height: '54vw',
        },
      }}
    >
      <View
        css={{
          position: 'relative',
        }}
      >
        <Title size={{ '@initial': '6', '@desktop': '14' }}>RECENT POST</Title>

        <TomatoView>
          <Image src={Tomato} alt="tomato" objectFit="contain" />
        </TomatoView>
        <PostCard>
          <RecentCard direction="row" />
        </PostCard>
      </View>

      <View
        css={{
          position: 'relative',
        }}
      >
        <BrocoliView>
          <Image src={Brocoli} alt="brocoli" objectFit="contain" />
        </BrocoliView>
        <PostCard>
          <RecentCard direction="rowReverse" />
        </PostCard>
      </View>
    </Container>
  )
}

const TomatoView = styled(View, {
  position: 'absolute',
  left: '-3%',
  transform: 'translateY(-20%)',
  width: '6rem',
  height: '6rem',

  '@desktop': {
    width: '20rem',
    height: '20rem',
    transform: 'translateY(-15%)',
    left: '-5%',
  },
})

const BrocoliView = styled(View, {
  position: 'absolute',
  right: '-2%',
  transform: 'translateY(-40%)',
  width: '6rem',
  height: '6rem',
  '@desktop': {
    width: '20rem',
    height: '20rem',
    right: '-19%',
    transform: 'translateY(-15%)',
  },
})

const Title = styled('h1', {
  ...textStyles,
  mb: '$6',
  textAlign: 'center',
  defaultVariants: {
    color: 'white1',
    weight: 'bold',
  },
})

const PostCard = styled(View, {
  position: 'relative',
  zIndex: 1,
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
