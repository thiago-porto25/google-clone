import { GlobeIcon } from '@heroicons/react/solid';

export default function Footer() {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500">
      <div className="px-8 py-3">
        <p>Brazil</p>
      </div>
      <div className="grid grid-flow-row-dense px-8 py-3 gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2">
          <GlobeIcon className="h-5 mr-1 text-green-700" />
          Carbon neutral since 2007
        </div>
        <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
          <a
            className="link"
            href="http://thiagoporto.tech/"
            target="_blank"
            rel="noreferrer"
          >
            Advertising
          </a>
          <a
            className="link"
            href="https://www.linkedin.com/in/thiago-porto-675b8320a/"
            target="_blank"
            rel="noreferrer"
          >
            Business
          </a>
          <a
            className="link"
            href="https://github.com/thiago-porto25"
            target="_blank"
            rel="noreferrer"
          >
            How Search works
          </a>
        </div>
        <div className="flex justify-center space-x-8 whitespace-nowrap md:ml-auto">
          <a
            className="link"
            href="http://thiagoporto.tech/"
            target="_blank"
            rel="noreferrer"
          >
            Privacy
          </a>
          <a
            className="link"
            href="https://www.linkedin.com/in/thiago-porto-675b8320a/"
            target="_blank"
            rel="noreferrer"
          >
            Terms
          </a>
          <a
            className="link"
            href="https://github.com/thiago-porto25"
            target="_blank"
            rel="noreferrer"
          >
            Settings
          </a>
        </div>
      </div>
    </footer>
  );
}
