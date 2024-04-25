'use client';

import { useContext } from 'react';
import Link from 'next/link';
import { CurrentUserContext } from '@/app/contexts/CurrentUserContext';

export default function ProfileDisplay() {
  const { user } = useContext(CurrentUserContext);

  return (
    <div className='font-kosugi p-4'>
      <img
        className='relative w-full h-24 border-2 border-yellow-700'
        src={user?.headerImageUrl}
      ></img>
      <img
        className='absolute rounded-full max-w-full h-auto align-middle border-2 border-yellow-700 top-28 left-6'
        width={100}
        src={user?.iconImageUrl}
      ></img>
      <div className='flex justify-between mt-2'>
        <div className='text-[34px] text-yellow-700 mt-2 ml-2'>
          {user?.nickname}
        </div>
        <Link
          href={`/mypage/edit/`}
          className='w-20 h-5 bg-orange-400 rounded-md text-white text-[20px] flex items-center justify-center'
        >
          プロフィール編集
        </Link>
      </div>
      <div className='flex mt-1'>
        <div className='border-yellow-700 border-2 h-5 w-16 rounded-md text-[18px] text-center p-1'>
          <div className='flex'>
            <img src='/icon/pink.png' className='mr-2' width={30}></img>
            {user?.myNationality}
          </div>
        </div>
        <div className='border-yellow-700 border-2 h-5 w-16 rounded-md text-[18px] text-center p-1 ml-1'>
          <div className='flex'>
            <img src='/icon/blue.png' className='mr-2' width={30}></img>
            {user?.partnerNationality}
          </div>
        </div>
      </div>
      <div className='text-[18px] border-yellow-700 border-2 rounded-md h-auto w-auto mt-1 p-2'>
        {user?.introduction}
      </div>
    </div>
  );
}
