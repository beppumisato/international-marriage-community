import React from 'react';
import Link from 'next/link';

export default function AnswerPage() {
  return (
    <div className='font-kosugi'>
      <div className='relative'>
        <img className='flex justify-center' src='/community/design.png/'></img>
      </div>
      <div className='absolute top-2'>
        <div className='flex text-rose-400 text-[30px] p-2'>
          <Link href={`/`}>＜</Link>
          <div className='ml-52'>一緒に解決しよう</div>
          <img className='ml-1 mb-2' src='/icon/lanp.png' width={34}></img>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='p-2 m-1 w-4/5 h-20 rounded-md border-2 border-rose-200 text-slate-300 text-[20px]'>
          <div className='border-rose-200 border-2 rounded-full w-10 h-10'></div>
        </div>
      </div>
      <div className='flex justify-center text-rose-400 text-[24px] font-bold border-b-2 border-rose-400 m-2 mt-3'>
        みんなの回答
      </div>
      <div className='flex justify-center'>
        <div className='p-2 m-1 w-4/5 h-12 rounded-md border-2 border-rose-200 text-slate-300 text-[20px]'>
          <div className='border-rose-200 border-2 rounded-full w-6 h-6'></div>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='p-2 m-1 w-4/5 h-12 rounded-md border-2 border-rose-200 text-slate-300 text-[20px]'>
          <div className='border-rose-200 border-2 rounded-full w-6 h-6'></div>
        </div>
      </div>
      <div className='flex justify-center mt-5'>
        <button
          type='submit'
          className='text-[20px] bg-rose-400 text-white rounded-md hover:bg-rose-500 w-12 h-6 m-2'
        >
          回答する
        </button>
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
