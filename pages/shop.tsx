import Layout from '@components/Layout'
import type { ReactElement } from 'react'

export default function ShopPage() {
  return <div />
}

ShopPage.getLayout = (page: ReactElement) => <Layout hideFooter>{page}</Layout>
