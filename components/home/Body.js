import Image from 'next/image';
import Searchbar from '../common/Searchbar';
import SearchButton from '../common/SearchButton';

export default function Body() {
  return (
    <main className="flex-grow">
      <form className="flex items-center flex-col flex-grow mt-44 px-6">
        <Image
          src="/images/google-logo.png"
          alt="Google logo"
          height={100}
          width={300}
        />
        <Searchbar />
        <div className="flex justify-center mt-8 space-x-4">
          <SearchButton>Google Search</SearchButton>
          <SearchButton>I&apos;m Feeling Lucky</SearchButton>
        </div>
      </form>
    </main>
  );
}
