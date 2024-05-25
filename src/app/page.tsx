'use client';

import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <>
      <img src={'/top/top.jpg/'} className='relative' />

      <div className='absolute topHeader top-8 left-10'>
        <div>国際結婚の輪</div>
      </div>

      <div className='absolute topHeader top-8 right-10 flex'>
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
