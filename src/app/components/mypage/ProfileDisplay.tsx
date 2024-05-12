'use client';

import { useContext } from 'react';
import Link from 'next/link';
import { CurrentUserContext } from '@/app/contexts/CurrentUserContext';
import PublicIcon from '@mui/icons-material/Public';

export default function ProfileDisplay() {
  const { user } = useContext(CurrentUserContext);

  return (
    <div className='font-kosugi px-32 mt-10'>
      <img className='w-full h-60 rounded-md' src={user?.headerImageUrl}></img>
      <Link href={`/mypage/edit/`} className='absolute top-60 right-52'>
        <button className='border-2 border-white rounded hover:bg-orange-200 text-white text-[14px] w-40 h-10'>
          プロフィールを編集
        </button>
      </Link>
      <div>
        <img
          className='absolute rounded-full w-32 h-auto align-middle border-2 border-white top-60 left-52'
          width={100}
          src={user?.iconImageUrl}
        ></img>
      </div>

      <div className='border-b-2 p-10'>
        <div className='mx-14 my-4'>
          <div className='text-[30px]'>{user?.nickname}</div>
          <div className='flex gap-x-6 text-[20px] my-4'>
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
