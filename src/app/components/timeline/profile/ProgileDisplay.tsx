'use client';

import { useContext } from 'react';
import { CurrentUserContext } from '@/app/contexts/CurrentUserContext';

export default function TimelineProfileDisplay() {
  const { user } = useContext(CurrentUserContext);

  return (
    <>
      <div className='bg-white w-1/5 shadow mx-2 rounded-lg'>
        <div className='bg-rose-300 rounded-t-lg shadow w-full h-10 text-white text-[18px] text-center p-2'>
          プロフィール
        </div>
        <div className='flex mt-10'>
          <div className='ml-4'>
            <img
              className='rounded-full max-w-full h-auto align-middle top-6 shadow shadow-slate-300'
              width={80}
              src={user?.iconImageUrl}
            ></img>
          </div>
          <div className='ml-4'>
            <div className='text-[14px]'>{user?.nickname}</div>
            <div className='text-[10px]'>{user?.introduction}</div>
          </div>
        </div>
      </div>
    </>
  );
}
