'use client';

import React from 'react';
import Link from 'next/link';
import { useUserState } from '../hooks/user';

export default function MyPage() {
  const { user } = useUserState();
  const nickName = user?.nickname ?? 'データなし';

  return (
    <div className='font-kosugi'>
      <div className='flex m-4 text-[26px]'>
        <Link href={`/`} className='text-rose-400'>
          Top
        </Link>
        <div className='text-rose-400'>　/ プロフィール</div>
        <div className='ml-auto flex'>
          <Link href={`/post/`} className='text-rose-400 underline'>
            投稿作成
          </Link>
          <img className='ml-1' src='/icon/pen.png' width={20}></img>
        </div>
      </div>

      <div className='p-4'>
        <div className='bg-slate-300 w-full h-24 pt-16 pl-3'>
          <div className='border-rose-100 border-2 rounded-full w-14 h-14'></div>
        </div>
        <div className='flex justify-end m-2 text-center'>
          <Link
            href={`/mypage/edit/`}
            className='w-20 h-5 border-rose-200 border-2 rounded-md text-rose-400 text-[20px] pt-1'
          >
            プロフィール編集
          </Link>
        </div>
        <div className='flex'>
          <div className='text-[28px]'>{nickName}</div>
          <Link href={`/message/`}>
            <img className='ml-1' src='/icon/message.png/' width={60}></img>
          </Link>
        </div>
        <div className='border-rose-200 border-2 h-5 w-24 rounded-md text-[18px] mt-1 text-center p-1'>
          国籍
        </div>
        <div className='text-[18px] border-rose-200 border-2 rounded-md h-12 w-full mt-1 p-2'>
          いつ結婚したのか、現在どこで暮らしているのか、興味あることや趣味など自由に書いて自己紹介しよう。
        </div>
      </div>
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
