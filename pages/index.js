import Head from 'next/head';
import Body from '../components/home/Body';
import Header from '../components/home/Header';
import Footer from '../components/home/Footer';

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>Google</title>
        <meta
          name="description"
          content="Google clone made for study purposes"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
