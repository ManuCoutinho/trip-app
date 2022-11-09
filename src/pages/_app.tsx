import { Fragment, useEffect } from 'react'
import GlobalContext from 'contexts'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import NProgress from 'nprogress'

function MyApp({ Component, pageProps }: AppProps) {
  const { events } = useRouter()

  useEffect(() => {
    const handleStart = () => {
      NProgress.start()
    }

    const handleStop = () => {
      NProgress.done()
    }

    events.on('routeChangeStart', handleStart)
    events.on('routeChangeComplete', handleStop)
    events.on('routeChangeError', handleStop)

    return () => {
      events.off('routeChangeStart', handleStart)
      events.off('routeChangeComplete', handleStop)
      events.off('routeChangeError', handleStop)
    }
  }, [events])
  return (
    <Fragment>
      <Head>
        <title>Trips</title>
      </Head>
      <GlobalContext>
        <Component {...pageProps} />
      </GlobalContext>
    </Fragment>
  )
}

export default MyApp
