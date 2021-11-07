import type { NextPage } from 'next'
import { Titles } from '@/styles/typography'
import Head from 'next/head'

const Home: NextPage = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Site tattoo</title>
        <meta name="description" content="Site tattoo" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Titles.H1>Site Tattoo</Titles.H1>
      <p>Teste site tattoo</p>
      {children}
    </div>
  )
}

export default Home
