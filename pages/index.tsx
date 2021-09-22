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

export default function LandingPage() {
  return (
    <View css={{ linearGradient: '#60BB93,#85AAC1' }}>
      <Hero />
      <Wave />
      <RecentPostSection />
      <OrderSteps />
      <DownloadSection />
      <ContactUs />
    </View>
  )
}

function Wave() {
  return (
    <View
      css={{
        overflow: 'hidden',
      }}
    >
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
