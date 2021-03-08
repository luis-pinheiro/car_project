import XBackground from '../components/XBackground';
import CarSlider from '../components/CarSlider';
import Nav from './../components/Nav';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Car Project</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
      </Head>

      {/* <header className="w-full border"> */}
      <XBackground />
      <Nav />

      <CarSlider />

      {/* </header> */}
    </div>
  );
}
