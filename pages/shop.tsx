import { Shop } from '@components'
import Layout from '@components/Layout'
import type { ReactElement } from 'react'

export default function ShopPage() {
  return <Shop />
}

ShopPage.getLayout = (page: ReactElement) => <Layout hideFooter>{page}</Layout>
