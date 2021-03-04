import Head from 'next/head';
import Promotion from '../components/Promotion';
import Menu_01 from '../components/Menu_01';
import Logo from '../components/Logo';
import Menu_02 from '../components/Menu_02';
import Search from '../components/Search';
import Menu_03 from '../components/Menu_03';
import XBackground from '../components/XBackground';
import GrayBackground from '../components/GrayBackground';
import CarSlider from '../components/CarSlider';

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

      <header className="h-screen bg-gray-dark">
        <Promotion text="NEW STUFF FOR YOU IN OUR STORE TODAY 25% DISCOUNT" />
        <div className="container grid grid-cols-3 mx-auto">
          <Menu_01 />
          <Logo />
          <Menu_02 />
        </div>
        <div className="container grid grid-cols-3 mx-auto mt-4">
          <div></div>
          <div className="flex items-center">
            <Search />
          </div>
          <div className="flex items-center justify-end">
            <Menu_03 />
          </div>
        </div>
      </header>
      <GrayBackground />
      <XBackground />
      <CarSlider />
    </div>
  );
}
