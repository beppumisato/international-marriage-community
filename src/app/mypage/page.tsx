'use client';

import React from 'react';
import Link from 'next/link';
import ProfileDisplay from '../components/mypage/ProfileDisplay';

export default function MyPage() {
  return (
    <div className='font-kosugi'>
      <div className='flex m-4 text-[26px]'>
        <Link href={`/`} className='text-rose-400'>
          Top
        </Link>
        <div className='text-rose-400'>　/ プロフィール</div>
        <div className='ml-auto flex'>
          <Link href={`/blog/`} className='text-rose-400 underline'>
            投稿作成
          </Link>
          <img className='ml-1' src='/icon/pen.png' width={20}></img>
        </div>
      </div>
      <ProfileDisplay />
      <div className='text-center text-[20px] text-rose-400 border-b border-rose-200'>
        <ul className='flex justify-center gap-x-32'>
          <a
            href='#'
            className='inline-block pt-3 border-b-2 border-transparent rounded-t-lg hover:text-rose-600 hover:border-rose-600 '
          >
            投稿一覧
          </a>
          <a
            href='#'
            className='inline-block pt-3 border-b-2 border-transparent rounded-t-lg hover:text-rose-600 hover:border-rose-600'
          >
            画像一覧
          </a>
          <a
            href='#'
            className='inline-block pt-3 border-b-2 border-transparent rounded-t-lg hover:text-rose-600 hover:border-rose-600'
          >
            動画一覧
          </a>
        </ul>
      </div>
      <div className='flex justify-end mt-20 mr-1 mb-1'>
        <img
          className=' bg-rose-100 rounded-full bg-opacity-50 w-6 h-6 p-1'
          src='/icon/airplan_2.png'
        ></img>
      </div>
    </div>
  );
}
