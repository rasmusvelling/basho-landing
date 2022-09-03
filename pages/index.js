import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bashō</title>
        <meta name="description" content="Life management system" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Bashō</h1>
        <p className={styles.description}>Launching soon.</p>
      </main>

    </div>
  );
}