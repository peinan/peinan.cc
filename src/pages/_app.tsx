import '../styles/tailwind.output.css'
import '../styles/global.css'
import 'katex/dist/katex.css'
import Footer from '../components/footer'

import * as gtag from '../lib/gtag'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    if (!gtag.existsGaId) {
      return
    }
    const handleRougeChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRougeChange)
    return () => {
      router.events.off('routeChangeComplete', handleRougeChange)
    }
  }, [router.events])

  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
