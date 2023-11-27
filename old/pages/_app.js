import '../styles/globals.css';

import {Analytics} from '@vercel/analytics/react';

import Navbar from '../components/Navbar';

function MyApp({Component, pageProps}) {
  return (
    <>
      <Navbar />
      <Component {
    ...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
