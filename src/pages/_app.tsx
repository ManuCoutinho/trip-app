import { Fragment, useEffect } from 'react'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import NProgress from 'nprogress'
import SEO from '../../next-seo.config'
import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styles/global'
import theme from 'styles/theme/theme'

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
        <DefaultSeo {...SEO} />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  )
}

export default MyApp
