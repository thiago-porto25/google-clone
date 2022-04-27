import HeaderOption from './HeaderOption';

import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from '@heroicons/react/outline';

export default function HeaderOptions() {
  return (
    <nav className="flex justify-evenly w-full text-gray-700 text-sm border-b lg:text-base lg:justify-start lg:space-x-36 lg:pl-52">
      <div>
        <ul className="flex space-x-6">
          <li>
            <HeaderOption Icon={SearchIcon} title="All" selected />
          </li>
          <li>
            <HeaderOption Icon={PhotographIcon} title="Images" />
          </li>
          <li>
            <HeaderOption Icon={PlayIcon} title="Videos" />
          </li>
          <li>
            <HeaderOption Icon={NewspaperIcon} title="News" />
          </li>
          <li>
            <HeaderOption Icon={MapIcon} title="Maps" />
          </li>
          <li>
            <HeaderOption Icon={DotsVerticalIcon} title="More" />
          </li>
        </ul>
      </div>
      <ul className="flex space-x-4">
        <li>
          <a className="link" href="http://thiagoporto.tech" rel="noreferrer">
            Settings
          </a>
        </li>
        <li>
          <a
            className="link"
            href="https://www.linkedin.com/in/thiago-porto-675b8320a/"
            rel="noreferrer"
          >
            Tools
          </a>
        </li>
      </ul>
    </nav>
  );
}
