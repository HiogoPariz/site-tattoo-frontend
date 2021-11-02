import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { MainContainer } from '@/styles/containers/main'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Site tattoo</title>
        <meta name="description" content="Site tattoo" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <h1>Site Tattoo</h1>
      <p>Teste site tattoo</p>
    </div>
  )
}

export default Home
