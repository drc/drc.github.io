import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Homepage for Dan Cigrang" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>Updates coming soon</h2>
        <p>Placeholder for new content eventually.</p>
      </main>
    </div>
  )
}
