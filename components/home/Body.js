import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Searchbar from './Searchbar';
import SearchButton from './SearchButton';

export default function Body() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();

    if (!search) return;

    router.push(`/search?q=${search}`);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <main className="flex-grow">
      <form
        onSubmit={handleSearch}
        action="POST"
        className="flex items-center flex-col flex-grow mt-44 px-6"
      >
        <Image
          src="/images/google-logo.png"
          alt="Google logo"
          height={100}
          width={300}
        />
        <Searchbar value={search} onChange={handleChange} />
        <div className="flex justify-center mt-8 space-x-4">
          <SearchButton type="submit">Google Search</SearchButton>
          <SearchButton type="submit">I&apos;m Feeling Lucky</SearchButton>
        </div>
      </form>
    </main>
  );
}
