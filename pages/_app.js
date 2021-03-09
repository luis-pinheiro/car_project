import '../styles/globals.css';
import { useRouter } from 'next/router';
import Promotion from './../components/Promotion';
// import './../components/sidebar/styles.css';

function handleExitComplete() {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 });
  }
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    // <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
    <div className="bg-gray-dark">
      <Promotion text="NEW STUFF FOR YOU IN OUR STORE TODAY 25% DISCOUNT" />
      <Component {...pageProps} key={router.route} />;
    </div>
    // </AnimatePresence>
  );
}

export default MyApp;
