import React from 'react';
import Link from 'next/link';

export default function QuestionPage() {
  return (
    <div className='font-kosugi'>
      <div className='relative'>
        <img className='flex justify-center' src='/community/design.png/'></img>
      </div>
      <div className='absolute top-2'>
        <div className='flex text-rose-400 text-[30px] p-2'>
          <Link href={`/`}>＜</Link>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='p-2 m-1 w-4/5 h-24 rounded-md border-2 border-rose-200 text-slate-300 text-[20px]'>
          <div className='border-rose-200 border-2 rounded-full w-10 h-10'></div>
        </div>
      </div>
      <div className='flex justify-center text-rose-400 text-[24px] font-bold border-b-2 border-rose-400 m-2 mt-3'>
        あなたの回答
      </div>
      <div className='flex justify-center'>
        <div className='p-2 m-1 w-4/5 h-32 rounded-md border-2 border-rose-200 text-slate-300 text-[20px]'></div>
      </div>
      <div className='flex justify-center mt-5'>
        <button
          type='submit'
          className='text-[20px] bg-rose-400 text-white rounded-md hover:bg-rose-500 w-12 h-6 m-2'
        >
          回答する
        </button>
      </div>
    </div>
  );
}
