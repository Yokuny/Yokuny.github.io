import '../styles/globals.css';
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Yokuny | project pages</title>
        <link rel="icon" href="/page-icon.svg" type="image/svg" />
      </Head>
      <Component {...pageProps} />
    </>
  )
};
export default MyApp;
