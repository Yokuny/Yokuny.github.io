import '../styles/globals.css';
import Head from 'next/head';
import Header from '../pages/pages/_Header'
import Footer from '../pages/pages/_Footer'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Yokuny | project pages</title>
        <link rel="icon" href="/page-icon.svg" type="image/svg" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-6">
        <div className="lg:col-start-2 lg:col-span-4 lg:-mt-1 lg:mb-4 mt-2 flex justify-center">
          <Header />
        </div>
        <div className="lg:col-start-2 lg:col-span-4">
          <Component {...pageProps} />
        </div>
        <div className="lg:col-start-2 lg:col-span-4 ">
          <Footer />
        </div>
      </div>
    </>
  )
};
export default MyApp;
