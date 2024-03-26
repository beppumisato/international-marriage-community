import React from 'react';
import Link from 'next/link';

export default function MessagePage() {
  return (
    <div className='font-kosugi'>
      <div className='flex text-rose-400 bg-rose-200 h-6 text-[24px] mb-4 p-2'>
        <Link href={`/mypage/`}>＜</Link>
        <div className='ml-56'>メッセージ</div>
      </div>

      <div className='flex-col ml-20 mr-20'>
        {/* 左側メッセージ */}
        <div className='flex'>
          <div className='border-2 border-rose-100 rounded-full w-8 h-8'>
            <div className='text-[8px] text-center text-rose-400 mt-8'>
              相手の名前
            </div>
          </div>
          <div className='rounded-md border-2 border-rose-400 text-[16px] w-40 h-6 m-2 p-2'>
            初めまして！
          </div>
        </div>
        {/* 右側メッセージ */}
        <div className='flex ml-40'>
          <div className='rounded-md border-2 border-rose-400 text-[16px] w-40 h-6 m-2 p-2'>
            初めまして！よろしく♪
          </div>
          <div className='border-2 border-rose-100 rounded-full w-8 h-8'>
            <div className='text-[8px] text-center text-rose-400 mt-8'>
              相手の名前
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center mt-40'>
        <div className='rounded-md border-2 border-rose-400 text-[16px] w-3/4 m-4 p-2'>
          メッセージを入力......
        </div>
      </div>
    </div>
  );
}
