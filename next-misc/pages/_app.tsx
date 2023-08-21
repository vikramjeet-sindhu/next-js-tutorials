import Head from 'next/head'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '@/components/layout/Header.js'
import Footer from @/components/layout/Footer.js'
import '@/styles/layout.css'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  if(Component.getLayout){

  return Component.getLayout(<Component {...pageProps} />)

  }


  return (<><Head><title>nextjs</title><meta name='description' content='nextjs tutorials by vishwas'></meta></Head><Header/><Component {...pageProps} /><Footer/></>)
}
