'use client';

import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../sidebar/Sidebar';
import { useContext, useState } from 'react';
import { CurrentUserContext } from '@/app/contexts/CurrentUserContext';

interface Props {
  title: string;
  url: string;
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(CurrentUserContext);

  const isLogin = user != null;

  return (
    <div className='font-kosugi'>
      {isOpen && <Sidebar onClick={() => setIsOpen(false)} />}

      <div className='bg-white shadow flex justify-between items-center h-10 px-8'>
        <Link href={`/`} className='text-[18px]'>
          国際結婚の輪
        </Link>
        {isLogin ? (
          <MenuIcon onClick={() => setIsOpen(true)} sx={{ fontSize: 30 }} /> //ログイン中の表示
        ) : (
          //未ログイン中の表示
          <div className='flex gap-x-6'>
            <Link href='/timeline' className='hover:underline'>
              タイムライン
            </Link>
            <Link href='/login' className='hover:underline'>
              ログイン
            </Link>
            <Link href='/registration' className='hover:underline'>
              新規登録
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
