import Layout from '@components/Layout'
import SuccessScreen from '@components/SuccessScreen'
import type { ReactElement } from 'react'

export default function ThankYouScreen() {
  return <SuccessScreen />
}

ThankYouScreen.getLayout = (page: ReactElement) => (
  <Layout css={{ minHeight: '100vh' }} mainContentcss={{ display: 'grid' }}>
    {page}
  </Layout>
)
