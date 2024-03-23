import React from 'react';
import Link from 'next/link';
import type { AppProps } from 'next/app';

export default function MyPage({ Component, pageProps }: AppProps) {
  return (
    <div className='font-kosugi'>
      <div className='flex m-4 text-[20px]'>
        <Link href={`/`} className='text-rose-400'>
          Top
        </Link>
        <div className='text-rose-400'>　/ プロフィール</div>
        <div className='ml-auto mr-5 flex'>
          <Link href={`/post/`} className='text-rose-400 underline'>
            投稿作成
          </Link>
          <img className='ml-1' src='/icon/pen.png' width={20}></img>
        </div>
      </div>

      <div className='ml-2 mr-2'>
        <div className='bg-slate-300 w-full h-24 pt-16 pl-3'>
          <div className='bg-slate-300 border-white border-2 rounded-full w-14 h-14'></div>
        </div>
        <div className='flex justify-end m-2 text-center'>
          <Link
            href={`/mypage/edit/`}
            className='w-20 h-5 border-rose-400 border-2 rounded-md text-rose-400 text-[20px] pt-1'
          >
            プロフィール編集
          </Link>
        </div>
        <div className='flex'>
          <div className='text-[28px]'>ニックネーム</div>
          <Link href={`/message/`}>
            <img className='ml-1' src='/icon/message.png/' width={60}></img>
          </Link>
        </div>
        <div className='border-rose-400 border-2 h-5 w-24 rounded-md text-[18px] mt-2 text-center p-1'>
          国籍
        </div>
        <div className='text-[18px] border-rose-400 border-2 rounded-md h-12 w-full mt-2 p-2'>
          いつ結婚したのか、現在どこで暮らしているのか、興味あることや趣味など自由に書いて自己紹介しよう。
        </div>
      </div>
    </div>
  );
}
