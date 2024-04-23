import React, { useState } from 'react';
import { SidebarData } from './SidebarData';
import CloseIcon from '@mui/icons-material/Close';

export default function Sidebar() {
  return (
    <div className='absolute top-0 right-0 z-50'>
      <div className='w-24 h-screen bg-rose-300 text-white text-[20px]'>
        <CloseIcon sx={{ fontSize: 40, color: 'white' }} />
        <h1 className='text-[28px] border-b-2 flex justify-center text-white'>
          MENU
        </h1>
        <ul className='h-auto w-full p-0 pt-4'>
          {SidebarData.map((value, key) => {
            return (
              <li
                key={key}
                // id={(window.location.pathname = value.link ? 'active' : '')}
                className='flex w-100 h-6 hover:bg-rose-500 cursor-pointer justify-start items-center'
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
