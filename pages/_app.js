import '@/styles/globals.css'
import { useEffect } from 'react'
import Head from 'next/head'

export default function App({ Component, pageProps }) {

  useEffect(() => {
    import('preline')
  }, [])

  return (
    <>
      <Head>
        <link rel="icon" href="./portafolio.png" />
        <title>Portafolio Juan Sebastian Guilisasti</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
