import type { NextPage } from 'next'
import Head from 'next/head'
import AppBar from '../components/AppBar'
import Container from '../components/Container'
import UserRegistrationForm from '../components/UserRegistrationForm'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Thereum Wow Server 3.3.5</title>
        <meta name="description" content="Thereum Wow user registration" />
        <link rel="icon" href="/favicon.ico" />
        <link href="http://fonts.cdnfonts.com/css/warcraft" rel="stylesheet" />
      </Head>
      <main className={styles.main}>
        <AppBar />
        <Container>
          <h1 className='warcraft base-color center'>Register new user</h1>
          <UserRegistrationForm />
        </Container>
      </main>
    </>
  )
}

export default Home
