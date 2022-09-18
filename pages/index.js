import styled from 'styled-components';

import Head from 'next/head';
import Image from 'next/image';
import Wrap from '../containers/Wrap'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`


export default function Home() {
  return (
    <div>
      <Head>
        <title>Harbergernator</title>
        <meta name="description" content="Harbergenator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <h1>Harbergernator</h1>
        <Wrap></Wrap>
      </Main>
    </div>
  )
}
