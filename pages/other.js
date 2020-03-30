import Head from 'next/head';
import Link from 'next/link';
import Plaid from '../src/Plaid';

const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h2>some other page</h2>

    <Link href="/">go to main page</Link>

    <main>
      <Plaid />
    </main>
  </div>
);

export default Home;
