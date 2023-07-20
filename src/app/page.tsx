import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '../../components/navbar'
import HeroPage from '../../components/pages/heroPage/heroPage'
import About from '../../components/pages/about/about'
import Contact from '../../components/pages/contact/contact'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <div className={styles.container}>
        <div className={styles.name}><text>Yi Jiu </text></div>
        <Navbar></Navbar>
        <HeroPage></HeroPage>
        <About></About>
        <Contact></Contact>
      </div>
    </>
  )
}
