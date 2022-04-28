import Head from 'next/head';
import { useRouter } from 'next/router';

import Header from '../components/search/Header';
import Results from '../components/search/Results';

import dummyData from '../response';

export default function Search({ results }) {
  const router = useRouter();

  console.log(results);

  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>{router.query.q} - Google Search</title>
      </Head>

      <Header />
      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const useDummyData = true;
  const startIndex = context.query.start || '0';

  const data = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&cx=${process.env.NEXT_PUBLIC_GOOGLE_CONTEXT_KEY}&q=${context.query.q}&start=${startIndex}`
  );

  const results = await data.json();

  return {
    props: {
      results: useDummyData ? dummyData : results,
    },
  };
}
