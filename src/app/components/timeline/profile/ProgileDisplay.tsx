'use client';

import { useContext } from 'react';
import { CurrentUserContext } from '@/app/contexts/CurrentUserContext';

export default function TimelineProfileDisplay() {
  const { user } = useContext(CurrentUserContext);

  return (
    <>
      <div className='relative bg-white w-1/5'>
        <div className='absolute bg-orange-300 w-full h-3 text-white text-[20px] text-center'>
          プロフィール
        </div>
        <div className='flex justify-start p-2'>
          <img
            className='absolute rounded-full max-w-full h-auto align-middle border-2 border-yellow-700 top-6'
            width={80}
            src={user?.iconImageUrl}
          ></img>
          <div className='absolute text-[18px] text-yellow-700 top-14 left-3'>
            {user?.nickname}
          </div>
        </div>
        <div className='absolute text-[10px] left-10 p-2'>
          {user?.introduction}
        </div>
      </div>
    </>
  );
}
