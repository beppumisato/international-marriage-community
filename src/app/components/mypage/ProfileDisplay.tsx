'use client';

import { useContext } from 'react';
import Link from 'next/link';
import { CurrentUserContext } from '@/app/contexts/CurrentUserContext';

export default function ProfileDisplay() {
  const { user } = useContext(CurrentUserContext);

  return (
    <div className='font-kosugi'>
      <div className='p-2'>
        <img className='relative w-full h-24' src={user?.headerImageUrl}></img>
        <img
          className='absolute rounded-full max-w-full h-auto align-middle border-2 border-rose-200 top-32 left-4'
          width={100}
          src={user?.iconImageUrl}
        ></img>
        <div className='flex justify-end m-1 text-center'>
          <Link
            href={`/mypage/edit/`}
            className='w-20 h-5 border-rose-200 border-2 rounded-md text-rose-400 text-[20px] pt-1'
          >
            プロフィール編集
          </Link>
        </div>
        <div className='flex'>
          <div className='text-[28px]'>{user?.nickname}</div>
          <Link href={`/message/`}>
            <img className='ml-1' src='/icon/message.png/' width={60}></img>
          </Link>
        </div>
        <div className='flex mt-1'>
          <div className='border-rose-200 border-2 h-5 w-16 rounded-md text-[18px] text-center p-1'>
            <div className='flex'>
              <img src='/icon/pink.png' className='mr-2' width={30}></img>
              {user?.myNationality}
            </div>
          </div>
          <div className='border-rose-200 border-2 h-5 w-16 rounded-md text-[18px] text-center p-1 ml-1'>
            <div className='flex'>
              <img src='/icon/blue.png' className='mr-2' width={30}></img>
              {user?.partnerNationality}
            </div>
          </div>
        </div>
        <div className='text-[18px] border-rose-200 border-2 rounded-md h-auto w-auto mt-1 p-2'>
          {user?.introduction}
        </div>
      </div>
    </div>
  );
}
