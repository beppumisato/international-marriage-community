'use client';

import { useContext } from 'react';
import { CurrentUserContext } from '@/app/contexts/CurrentUserContext';
import Link from 'next/link';

export default function TimelineProfileDisplay() {
  const { user } = useContext(CurrentUserContext);

  return (
    <>
      <div className='bg-white w-1/5 h-80 shadow mx-2 rounded-lg'>
        <div className='bg-rose-300 rounded-t-lg shadow w-full h-10 text-white text-[18px] text-center p-2'>
          プロフィール
        </div>
        <div className='flex mt-6 justify-center'>
          <Link href={'/mypage/'}>
            <img
              className='rounded-full max-w-full h-auto align-middle top-6 shadow shadow-slate-300'
              width={90}
              src={user?.iconImageUrl}
            ></img>
          </Link>
        </div>
        <div className='px-10'>
          <div className='text-[18px] flex justify-center mt-3'>
            {user?.nickname}
          </div>
          <div className='flex justify-center gap-2 mt-4 border-b-2'>
            <div className='text-[16px] font-bold'>20</div>
            <div className='text-[16px]'>Assists</div>
          </div>
        </div>
        <div className='text-[10px] flex justify-center mt-6'>
          {user?.introduction}
        </div>
      </div>
    </>
  );
}
