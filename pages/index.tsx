import {
  DownloadSection,
  OrderSteps,
  RecentPostSection,
  Grid,
  View,
} from '@components'
import Hero from '@components/Landing/Hero'
import Maps from '../components/Landing/Maps'
import Waves from 'public/waves.svg'
import Image from 'next/image'

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Wave />
      <RecentPostSection />
      <OrderSteps />
      <DownloadSection />
      <Maps />
    </>
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
          position: 'relative',
          mt: '-1px',
          width: '100vw',
          height: '100%',
          overflow: 'hidden',
        }}
      >
        <Image src={Waves} alt="wave" />
      </Grid>
    </View>
  )
}
