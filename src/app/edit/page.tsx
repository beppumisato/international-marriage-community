import React from 'react';
import Link from 'next/link';

export default function EditPage() {
  return (
    <div className='font-kosugi'>
      <div className='flex text-rose-400 bg-rose-200 h-6 text-[24px] mb-4 p-2'>
        <Link href={`/mypage/`}>＜</Link>
        <div className='ml-60'>投稿編集</div>
      </div>
      <div className='flex justify-center'>
        <div className='p-2 m-4 w-4/5 h-10 rounded-md border-2 border-rose-400 text-slate-300 text-[20px]'>
          タイトルの編集
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='p-2 m-4 w-4/5 h-40 rounded-md border-2 border-rose-400 text-slate-300 text-[20px]'>
          記事の編集
        </div>
      </div>
      <div className='flex justify-center'>
        <button
          type='submit'
          className='text-[24px] bg-sky-400 text-white rounded-md hover:bg-sky-500 w-12 h-6 m-2'
        >
          削除
        </button>

        <button
          type='submit'
          className='text-[24px] bg-rose-400 text-white rounded-md hover:bg-rose-500 w-12 h-6 m-2'
        >
          完了
        </button>
      </div>
    </div>
  );
}
