import { DownloadSection, OrderSteps, ContactUs } from '@components'
import Hero from '@components/Landing/Hero'
import Maps from '../components/Landing/Maps'

export default function LandingPage() {
  return (
    <>
      <Hero />
      <OrderSteps />
      <DownloadSection />
      <ContactUs />
      <Maps />
    </>
  )
}
