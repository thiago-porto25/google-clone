import { ViewGridIcon } from '@heroicons/react/solid';
import Avatar from '../common/Avatar';

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full p-5 text-sm text-gray-700">
      <div className="flex space-x-4 items-center">
        <a
          className="link"
          href="https://github.com/thiago-porto25"
          target="_blank"
          rel="noreferrer"
        >
          About
        </a>
        <a
          className="link"
          href="https://github.com/thiago-porto25"
          target="_blank"
          rel="noreferrer"
        >
          Store
        </a>
      </div>
      <div className="flex space-x-4 items-center">
        <a
          className="link"
          href="http://thiagoporto.tech/"
          target="_blank"
          rel="noreferrer"
        >
          Gmail
        </a>
        <a
          className="link"
          href="http://thiagoporto.tech/"
          target="_blank"
          rel="noreferrer"
        >
          Images
        </a>

        <a
          className="w-10 h-10 p-2 shrink-0 rounded-full hover:bg-gray-100 cursor-pointer"
          href="https://www.linkedin.com/in/thiago-porto-675b8320a/"
          target="_blank"
          rel="noreferrer"
        >
          <ViewGridIcon />
        </a>

        <a
          className="flex items-center justify-center shrink-0 transition duration-150 transform hover:scale-110"
          href="https://www.linkedin.com/in/thiago-porto-675b8320a/"
          target="_blank"
          rel="noreferrer"
        >
          <Avatar url="/images/avatar.jpg" />
        </a>
      </div>
    </header>
  );
}
