import { ViewGridIcon } from '@heroicons/react/solid';
import Avatar from '../common/Avatar';

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full p-5 text-sm text-gray-700">
      <nav className="flex">
        <ul className="flex space-x-4 items-center">
          <li>
            <a
              className="link"
              href="https://github.com/thiago-porto25"
              target="_blank"
              rel="noreferrer"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="link"
              href="https://github.com/thiago-porto25"
              target="_blank"
              rel="noreferrer"
            >
              Store
            </a>
          </li>
        </ul>
      </nav>
      <nav className="flex items-center">
        <ul className="flex space-x-4 items-center">
          <li>
            <a
              className="link"
              href="http://thiagoporto.tech/"
              target="_blank"
              rel="noreferrer"
            >
              Gmail
            </a>
          </li>
          <li>
            <a
              className="link"
              href="http://thiagoporto.tech/"
              target="_blank"
              rel="noreferrer"
            >
              Images
            </a>
          </li>
          <li className="w-10 h-10 p-2 shrink-0 rounded-full hover:bg-gray-100 cursor-pointer">
            <a
              href="https://www.linkedin.com/in/thiago-porto-675b8320a/"
              target="_blank"
              rel="noreferrer"
            >
              <ViewGridIcon />
            </a>
          </li>
          <li>
            <a
              className="flex items-center justify-center shrink-0 transition duration-150 transform hover:scale-110 hover:opacity-75"
              href="https://www.linkedin.com/in/thiago-porto-675b8320a/"
              target="_blank"
              rel="noreferrer"
            >
              <Avatar url="/images/avatar.jpg" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
