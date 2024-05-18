'use client';

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
        <img src={'/top/top.jpg/'} className='relative' />
        <div className='absolute top-60 left-24'>
          <h1 className='tittle text-[50px]'>国際結婚の輪</h1>
          <h2 className='tittle mt-4 text-[30px]'>
            グローバルな愛を支える、国際結婚コミュニティ。
          </h2>
        </div>
      </div>
    </>
  );
}
