import Head from 'next/head'
import styles from '../styles/Home.module.css'

import "swiper/css/bundle";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Said paradental</title>
        <meta name="description" content="Said Paradental clinic" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
