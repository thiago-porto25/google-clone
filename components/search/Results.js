import Pagination from './Pagination';

export default function Results({ results }) {
  return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-base mb-5 mt-3">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>

      {results.items?.map((item) => (
        <div key={item.link} className="max-w-xl mb-8">
          <div className="group">
            <a href={item.link} className="text-sm">
              {item.formattedUrl}
            </a>
            <a href={item.link} className="">
              <h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline">
                {item.title}
              </h2>
            </a>
          </div>
          <p className="line-clamp-2">{item.snippet}</p>
        </div>
      ))}

      <Pagination />
    </div>
  );
}
