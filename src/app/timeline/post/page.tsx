'use client';

import { useUserState } from '@/app/hooks/user';
import React from 'react';

export default function AllPage() {
  const { user } = useUserState();

  return (
    <div className='font-kosugi'>
      <div className='p-4'>
        <div className='mb-2 bg-slate-300 w-full h-20 pt-2 pl-3'>
          <div className='flex'>
            <div
              className='border-rose-100 border-2 rounded-full w-12 h-12'
              style={{
                backgroundImage: `url(${user?.iconImageUrl})`,
              }}
            ></div>
            <div className='ml-4'>
              <div className='text-[18px] text-slate-500 pb-2'>時間</div>
              <h1 className='text-[24px] underline'>title</h1>
              <h2 className='text-[20px]'>description</h2>
            </div>
          </div>
          <div className='mt-1 ml-3 text-[18px]'>{user?.nickname}</div>
        </div>
        <div className='border-b border-rose-200'></div>
      </div>

      <div className='flex justify-end mt-20 mr-1 mb-1'>
        <img
          className=' bg-rose-100 rounded-full bg-opacity-50 w-6 h-6 p-1'
          src='/icon/airplan_2.png'
        ></img>
      </div>
    </div>
  );
}
