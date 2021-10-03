import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import {
  DownloadSection,
  OrderSteps,
  RecentPostSection,
  Grid,
  View,
} from '@components'
import Hero from '@components/Landing/Hero'
import ContactUs from '@components/ContactUs'

import Waves from 'public/waves.svg'
import { articlesList } from 'utils/api'

export default function LandingPage({
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <View css={{ linearGradient: '#60BB93,#85AAC1' }}>
      <Hero />
      <Wave />
      <RecentPostSection articles={articles} />
      <OrderSteps />
      <DownloadSection />
      <ContactUs />
    </View>
  )
}

function Wave() {
  return (
    <View css={{ overflow: 'hidden' }}>
      <Grid
        css={{
          mt: '-1px',
          width: '100vw',
          height: '100%',
        }}
      >
        <Image src={Waves} alt="wave" />
      </Grid>
    </View>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const articles = await articlesList({ limit: 2 })
  return {
    props: {
      articles,
    },
    revalidate: 60,
  }
}
