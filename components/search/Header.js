import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import Searchbar from './Searchbar';
import HeaderOptions from './HeaderOptions';
import Avatar from '../common/Avatar';

export default function Header() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    router.push(`/search?q=${search}`);
  };

  const handleChange = (e) => setSearch(e.target.value);

  const handleClear = () => setSearch('');

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Link href="/" passHref>
          <a>
            <Image
              className="cursor-pointer"
              src="/images/google-logo.png"
              alt="google logo"
              width={120}
              height={40}
            />
          </a>
        </Link>
        <Searchbar
          value={search}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleClear={handleClear}
        />
        <a
          className="ml-auto cursor-pointer rounded-full transition duration-150 transform hover:scale-110 hover:opacity-75"
          href="http://thiagoporto.tech"
        >
          <Avatar url="/images/avatar.jpg" />
        </a>
      </div>
      <HeaderOptions />
    </header>
  );
}
