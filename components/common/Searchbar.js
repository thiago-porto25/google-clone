import { SearchIcon } from '@heroicons/react/outline';

export default function Searchbar() {
  return (
    <div className="flex w-full mt-5 max-w-md rounded-full border-gray-200 border-[1px] px-5 py-3 items-center transition-shadow sm:max-w-xl lg:max-w-2xl focus-within:shadow-lg hover:shadow-lg">
      <SearchIcon className="h-5 text-gray-500" />
      <input
        type="search"
        className="px-3 flex-grow focus:outline-none rounded-full"
      />
    </div>
  );
}
