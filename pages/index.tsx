import { DownloadSection, OrderSteps } from '@components'
import Hero from '@components/Landing/Hero'
import RecentPostSection from '@components/RecentPost/RecentSection'
import Maps from '../components/Landing/Maps'

export default function LandingPage() {
  return (
    <>
      <Hero />
      <RecentPostSection />
      <OrderSteps />
      <DownloadSection />
      <Maps />
    </>
  )
}
