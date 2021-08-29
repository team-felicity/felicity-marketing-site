import { DownloadSection, OrderSteps } from '@components'
import Hero from '@components/Landing/Hero'
import RecentCard from '@components/RecentPost/RecentCard'
import Maps from '../components/Landing/Maps'

export default function LandingPage() {
  return (
    <>
      <Hero />
      <RecentCard />
      <OrderSteps />
      <DownloadSection />
      <Maps />
    </>
  )
}
