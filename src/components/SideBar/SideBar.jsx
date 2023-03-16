import { CogIcon } from '@heroicons/react/outline';
import { MenuAlt2Icon } from '@heroicons/react/outline';
import { UserIcon } from '@heroicons/react/outline';
import { ClipboardListIcon } from '@heroicons/react/outline';
import { ChartPieIcon } from '@heroicons/react/outline';
import { DatabaseIcon } from '@heroicons/react/outline';
import { CalendarIcon } from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/outline';

import './sidebar.scss';

const SideBar = () => {
  return (
    <div className='sidebar_wrapper d-none d-md-block'>
      <div className='sidebar d-flex flex-column flex-shrink-0'>
        <div className='sidebar__header-logo'>
          <MenuAlt2Icon className=' sidebar__icon' />
        </div>
        <ul className='nav flex-column mb-auto text-center mt-5'>
          <li>
            <a href='./' className='nav-link py-3 px-1  '>
              <HomeIcon className=' sidebar__icon' />
            </a>
          </li>
          <li>
            <a href='./' className='nav-link active py-3 px-1  '>
              <UserIcon className='sidebar__icon' />
            </a>
          </li>
          <li>
            <a href='./' className='nav-link py-3 px-1  '>
              <ClipboardListIcon className=' sidebar__icon' />
            </a>
          </li>
          <li>
            <a href='./' className='nav-link py-3 px-1  '>
              <ChartPieIcon className=' sidebar__icon' />
            </a>
          </li>
          <li>
            <a href='./' className='nav-link py-3 px-1  '>
              <DatabaseIcon className=' sidebar__icon' />
            </a>
          </li>
          <li>
            <a href='./' className='nav-link py-3 px-1  '>
              <CalendarIcon className=' sidebar__icon' />
            </a>
          </li>
          <li>
            <a href='./' className='nav-link py-3 px-1  '>
              <CogIcon className=' sidebar__icon' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
