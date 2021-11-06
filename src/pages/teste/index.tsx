import type { NextPage } from 'next'
import Head from 'next/head'

const Teste: NextPage = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Site tattoo</title>
        <meta name="description" content="Site tattoo" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <h1>Teste</h1>
      <p>Teste site tattoo</p>
      {children}
    </div>
  )
}

export default Teste
