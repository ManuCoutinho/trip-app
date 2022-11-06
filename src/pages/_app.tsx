import { Fragment } from 'react'
import GlobalContext from 'contexts'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
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
