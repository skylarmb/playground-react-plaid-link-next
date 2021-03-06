import Head from 'next/head';
import Plaid from '../src/Plaid';
import Link from 'next/link';

const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h2>main page</h2>

    <Link href="/other">go to other page</Link>

    <main>
      <Plaid />
    </main>
  </div>
);

export default Home;
