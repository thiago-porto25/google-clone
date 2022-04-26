import { XIcon, SearchIcon } from '@heroicons/react/solid';

export default function Searchbar({
  value,
  handleChange,
  handleSubmit,
  handleClear,
}) {
  return (
    <form
      className="flex flex-grow px-6 py-3 ml-10 mr-5 items-center border border-gray-200 rounded-full shadow-lg max-w-3xl"
      action="POST"
      onSubmit={handleSubmit}
    >
      <input
        className="flex-grow w-4 focus:outline-none"
        type="search"
        value={value}
        onChange={handleChange}
      />
      <XIcon
        onClick={handleClear}
        className="h-7 text-gray-500 cursor-pointer transition duration-100 sm:pr-4 transform hover:scale-125 active:text-gray-600"
      />
      <button type="submit">
        <SearchIcon className="h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300 active:text-blue-600" />
      </button>
    </form>
  );
}
