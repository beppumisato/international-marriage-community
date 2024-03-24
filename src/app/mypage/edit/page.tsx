import React from 'react';
import Link from 'next/link';
import { BottomNavigation } from '@mui/material';

export default function EditPage() {
  return (
    <div className='font-kosugi'>
      <div className='flex text-rose-400 bg-rose-200 h-6 text-[20px] mb-4 p-2'>
        <Link href={`/mypage/`}>＜</Link>
        <div className='ml-56'>プロフィール編集</div>
      </div>
      <div className='flex ml-4 mr-4'>
        <div className='bg-slate-300 w-full h-24 flex justify-center'>
          <div className='bg-slate-300 border-white border-2 rounded-full w-14 h-14 mt-5'></div>
        </div>
      </div>
      <div className='text-rose-400 ml-4 mr-4 text-[20px]'>
        <div className='mt-4 font-bold'>ニックネーム</div>
        <div className='border-2 border-rose-400 rounded-md p-2'>
          デミちゃん
        </div>
        <div className='mt-6 font-bold'>あなたとお相手の国籍</div>
        <div className='flex gap-x-2'>
          <div className='border-2 border-rose-400 rounded-md w-1/2 p-2'>
            あなた：
          </div>
          <div className='border-2 border-rose-400 rounded-md w-1/2 p-2'>
            お相手：
          </div>
        </div>
        <div className='mt-6 font-bold'>自己紹介</div>
        <div className='border-2 border-rose-400 rounded-md h-32 p-2'>
          トルコ人と国際結婚した日本人です。
        </div>
        <div className='flex justify-center m-5'>
          <button
            type='submit'
            className='bg-rose-400 text-white rounded-md hover:bg-rose-500 w-16 h-6'
          >
            保存
          </button>
        </div>
      </div>
    </div>
  );
}
