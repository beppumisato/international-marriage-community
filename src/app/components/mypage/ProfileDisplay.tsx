'use client';

import { useContext } from 'react';
import Link from 'next/link';
import { CurrentUserContext } from '@/app/contexts/CurrentUserContext';
import PublicIcon from '@mui/icons-material/Public';

export default function ProfileDisplay() {
  const { user } = useContext(CurrentUserContext);

  return (
    <div className='font-kosugi p-10'>
      <div>
        <img
          className='relative w-full h-40 rounded-md'
          src={user?.headerImageUrl}
        ></img>
        <img
          className='absolute rounded-full max-w-full h-auto align-middle shadow shadow-slate-400 top-40 m-4'
          width={100}
          src={user?.iconImageUrl}
        ></img>
      </div>

      <div className='p-4 border-b-2'>
        <div className='flex justify-between'>
          <div className='text-[24px] ml-3 mt-6'>{user?.nickname}</div>
          <Link
            href={`/mypage/edit/`}
            className='w-36 h-10 bg-orange-400 rounded hover:bg-orange-500 text-white text-[14px] flex items-center justify-center'
          >
            プロフィール編集
          </Link>
        </div>
        <div className='ml-3 my-2'>
          <div className='flex gap-x-4 text-[20px] mb-2'>
            <div>
              <PublicIcon sx={{ fontSize: 20, color: '#f472b6' }} />
              {user?.myNationality}
            </div>
            <div>
              <PublicIcon sx={{ fontSize: 20, color: '#38bdf8' }} />
              {user?.partnerNationality}
            </div>
          </div>
          {user?.introduction}
        </div>
      </div>
    </div>
  );
}
