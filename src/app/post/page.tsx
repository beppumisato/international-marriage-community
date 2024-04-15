import React from 'react';
import Link from 'next/link';
import Header from '../components/common/Header';

export default function PostPage() {
  return (
    <div className='font-kosugi'>
      <Header title='新規投稿' url='/mypage/' />

      <div className='flex justify-center'>
        <input
          placeholder='タイトルを入力する'
          type='text'
          className='p-2 m-4 w-4/5 h-10 rounded-md border-2 border-rose-400 text-slate-300 text-[20px]'
        />
      </div>
      <div className='flex justify-center'>
        <input
          placeholder='詳細記事を入力'
          type='text'
          className='p-2 m-4 w-4/5 h-40 rounded-md border-2 border-rose-400 text-slate-300 text-[20px]'
        />
      </div>
      <div className='flex justify-center'>
        <button
          type='submit'
          className='text-[24px] bg-rose-400 text-white rounded-md hover:bg-rose-500 w-12 h-6 m-2'
        >
          投稿
        </button>
      </div>
    </div>
  );
}
