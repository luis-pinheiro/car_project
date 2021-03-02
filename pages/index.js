import Head from 'next/head';
import Stuff from './components/Stuff';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Car Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Stuff />
      </main>

      <footer className="">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" className="" />
        </a>
      </footer>
    </div>
  );
}
