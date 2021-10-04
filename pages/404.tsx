import type { ReactElement } from 'react'

import ErrorScreen from '@components/ErrorScreen'
import Layout from '@components/Layout'

export default function Custom404() {
  return <ErrorScreen />
}

Custom404.getLayout = (page: ReactElement) => (
  <Layout css={{ minHeight: '100vh' }} mainContentcss={{ display: 'grid' }}>
    {page}
  </Layout>
)
