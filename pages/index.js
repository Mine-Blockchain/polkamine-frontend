import Head from 'next/head'

import Home from 'containers/Home'
import { DashboardProvider } from 'contexts/dashboard-context'

export default function HomePage() {
  return (
    <>
      <Head>
        <script type="text/javascript" src='/assets/js/three.min.js'></script>
      </Head>
      <DashboardProvider>
        <Home />
      </DashboardProvider>
    </>
  )
}