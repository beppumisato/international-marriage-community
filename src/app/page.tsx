'use client';

import Link from 'next/link';
import React, { useContext, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { CurrentUserContext } from '@/app/contexts/CurrentUserContext';
import Sidebar from './components/sidebar/Sidebar';

interface Props {
  title: string;
  url: string;
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(CurrentUserContext);

  const isLogin = user != null;

  return (
    <>
      {isOpen && <Sidebar onClick={() => setIsOpen(false)} />}
      <img src={'/top/top.jpg/'} className='relative' />
      <div className='absolute topHeader top-8 left-10'>
        <div>国際結婚の輪</div>
      </div>

      <div className='absolute topHeader top-8 right-10 flex'>
        {isLogin ? (
          <MenuIcon onClick={() => setIsOpen(true)} sx={{ fontSize: 30 }} /> //ログイン中の表示
        ) : (
          //未ログイン中の表示
          <div className='flex gap-x-10'>
            <Link href={'/timeline/'} className='hover:underline'>
              タイムライン
            </Link>
            <Link href={'/login/'} className='hover:underline'>
              ログイン
            </Link>
            <Link href={'/registration/'} className='hover:underline'>
              新規会登録
            </Link>
          </div>
        )}
      </div>

      <div className='font-kosugi absolute top-60 left-20'>
        <h1 className='tittle text-[50px]'>国際結婚の輪</h1>
        <h2 className='tittle mt-4 text-[30px]'>
          グローバルな愛を支える、国際結婚コミュニティ。
        </h2>
      </div>
    </>
  );
}
