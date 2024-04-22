import React from 'react';
import { SidebarData } from './SidebarData';

export default function Sidebar() {
  return (
    <div className='absolute'>
      <div className='w-24 h-screen bg-rose-300 text-white text-[20px]'>
        <h1 className='text-[28px] flex justify-center border-b-2 text-white'>
          MENU
        </h1>
        <ul className='h-auto w-full p-0 pt-4'>
          {SidebarData.map((value, key) => {
            return (
              <li
                key={key}
                // id={(window.location.pathname = value.link ? 'active' : '')}
                className='flex w-100 h-6 hover:bg-rose-500 cursor-pointer justify-start items-center'
                onClick={() => (window.location.pathname = value.link)}
              >
                <div id='id' className='mr-2 ml-2'>
                  {value.icon}
                </div>
                <div id='icon'>{value.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
