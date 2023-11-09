import Image from 'next/image'
import Tomato from 'public/tomato.png'
import Brocoli from 'public/brocoli.png'

import ScrollReveal from '@components/ScrollReveal'
import Container from '@components/Container'
import Flex from '@components/Flex'
import View from '@components/View'
import { textStyles } from '@components/Text'
import { styled } from '@config/stitches'

import RecentCard from './RecentCard'
import { ArticlesListMeta } from 'utils/api'

export default function RecentPostSection({
  articles,
}: {
  articles: ArticlesListMeta
}) {
  return (
    <Container
      size="large"
      css={{
        display: 'grid',
        gapy: '2rem',
        mb: '$7',
        my: 'clamp(1.5rem, 5vw, 5rem)',

        '@desktop': { mt: '$6' },
      }}
    >
      <View
        css={{
          position: 'relative',
        }}
      >
        <ScrollReveal>
          <Title size={{ '@initial': '11', '@desktop': '14' }}>
            RECENT POST
          </Title>
        </ScrollReveal>

        <Flex direction="column" gap="8">
          {articles.map((article, index) => (
            <View key={article.attributes.slug} css={{ position: 'relative' }}>
              {index % 2 ? (
                <>
                  <BrocoliView>
                    <Image src={Brocoli} alt="brocoli" objectFit="contain" />
                  </BrocoliView>
                  <PostCard>
                    <RecentCard direction="rowReverse" data={article} />
                  </PostCard>
                </>
              ) : (
                <>
                  <TomatoView>
                    <Image src={Tomato} alt="tomato" objectFit="contain" />
                  </TomatoView>
                  <PostCard>
                    <RecentCard direction="row" data={article} />
                  </PostCard>
                </>
              )}
            </View>
          ))}
        </Flex>
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
  p: '1.5rem',
  borderRadius: '2rem',
  backgroundColor: '$white1',
  boxShadow: '1px 2px 6px 1px #D0D0D0',

  '@desktop': {
    borderRadius: '3rem',
    p: '$5',
  },
})
