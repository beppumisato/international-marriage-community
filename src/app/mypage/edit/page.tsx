import React from 'react';
import Link from 'next/link';

export default function EditPage() {
  return (
    <div className='font-kosugi'>
      <div className='flex text-rose-400 bg-rose-200 h-8 text-[24px] mb-4 p-2'>
        <Link href={`/mypage/`}>＜</Link>
        <div className='ml-56'>プロフィール編集</div>
      </div>
      <div className='p-4'>
        <div className='flex'>
          <div className='bg-slate-300 w-full h-24 flex justify-center'>
            <div className='border-rose-200 border-2 rounded-full w-14 h-14 mt-5'></div>
          </div>
        </div>
        <div className='text-rose-400 text-[20px]'>
          <div className='mt-4 font-bold'>ニックネーム</div>
          <div className='border-2 border-rose-200 rounded-md p-2 text-black'>
            デミちゃん
          </div>
          <div className='mt-6 font-bold'>あなたとお相手の国籍</div>
          <div className='flex gap-x-2'>
            <input
              placeholder='あなたの国籍'
              type='text'
              className='border-2 border-rose-200 rounded-md w-1/2 p-2 text-black'
            />
            <input
              placeholder='お相手の国籍'
              type='text'
              className='border-2 border-rose-200 rounded-md w-1/2 p-2 text-black'
            />
          </div>
          <div className='mt-6 font-bold'>自己紹介</div>
          <textarea className='border-2 border-rose-200 rounded-md h-32 w-full p-2 text-black' />
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
    </div>
  );
}
