import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { MainContainer } from '@/containers/main'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Site tattoo</title>
        <meta name="description" content="Site tattoo" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <MainContainer>
        <h1>Site Tattoo</h1>
        <p>Teste site tattoo</p>
      </MainContainer>
    </div>
  )
}

export default Home
