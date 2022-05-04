import type { NextPage } from 'next'
import Head from 'next/head'
import AppBar from '../components/AppBar'
import Container from '../components/Container'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Thereum Wow Server 3.3.5</title>
        <meta name="description" content="Thereum Wow Web Server" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <AppBar />
        <Container>
          <h1 className='warcraft base-color center'>Welcome to Thereum Wow Server</h1>
          <h3 className='center'>Server Info</h3>
          <p>
            <b>Realmlist: </b>
            <code>set realmlist wow.seobryum.com</code>
          </p>
          <p>
            <b>Server Status: </b>
            <span style={{color: 'green', fontWeight: 700, fontSize: '18px'}}>Online</span>
          </p>
          <p>
            <b>Rates: </b>
            <span>X1</span>
          </p>
        </Container>
      </main>
    </>
  )
}

export default Home
