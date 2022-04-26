import Head from 'next/head';
import { useRouter } from 'next/router';

import Header from '../components/search/Header';
import Results from '../components/search/Results';

export default function Search() {
  const router = useRouter();
  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>{router.query.q} - Google</title>
      </Head>

      <Header />
      {/* <Results /> */}
    </div>
  );
}
