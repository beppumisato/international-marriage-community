'use client';

import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <>
      <div className='font-kosugi'>
        {/* <div className='text-[20px] flex justify-between'>
          <div className='ml-10'>国際結婚の輪</div>
          <div className='flex gap-x-20 mr-10'>
            <Link href={'/timeline/'} className='underline'>
              タイムライン
            </Link>
            <Link href={'/login/'} className='underline'>
              ログイン
            </Link>
            <Link href={'/registration/'} className='underline'>
              新規会登録
            </Link>
          </div>
        </div>
 */}
        <div className='absolute top-60 left-24 text-black'>
          <h1 className='text-[50px]'>国際結婚の輪</h1>
          <h2 className='text-[30px]'>
            グローバルな愛を支える、国際結婚コミュニティ。
          </h2>
        </div>
      </div>
    </>
  );
}
