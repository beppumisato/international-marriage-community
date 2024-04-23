import React, { useState } from 'react';
import { SidebarData } from './SidebarData';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';

interface Props {
  onClick: () => void;
}

export default function Sidebar(props: Props) {
  return (
    <div className='absolute top-0 right-0 z-50'>
      <div className='w-24 h-screen bg-rose-300 text-white text-[20px]'>
        <CloseIcon
          onClick={props.onClick}
          sx={{ fontSize: 40, color: 'white' }}
        />
        <h1 className='text-[28px] border-b-2 flex justify-center text-white'>
          MENU
        </h1>
        <ul className='h-auto w-full p-0 pt-4'>
          {SidebarData.map((value, key) => {
            return (
              <Link
                href={value.link}
                key={key}
                className='flex w-100 h-6 hover:bg-rose-500 cursor-pointer justify-start items-center'
              >
                <div className='mr-2 ml-2'>{value.icon}</div>
                <div>{value.title}</div>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
