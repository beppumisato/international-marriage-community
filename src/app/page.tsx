import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link
        href={`/login/`}
        className='m-3 p-3 text-white flex justify-end underline'
      >
        新規会員登録 / ログイン
      </Link>

      {/* メインの世界地図とキャ土フレーズ */}
      <div className='bg-white flex justify-center w-full'>
        <img className=' object-contain' src='top/main.png' width={700} />
      </div>
      <div className='text-2xl text-white text-nowrap m-10'>
        <p className='flex justify-center m-2'>
          国際結婚は様々な問題や悩みを抱えることがあります。
        </p>
        <p className='flex justify-center m-2'>
          当サイトでは、同じく国際結婚をした人と繋がり、支え合うコミュニティを提供しています。
        </p>
        <p className='flex justify-center m-2'>
          一緒に、国際結婚生活を豊かにする仲間を見つけましょう！
        </p>
      </div>

      {/* ３つの項目を画像で挿入 */}
      <div className='flex justify-center'>
        <img
          className='object-contain flex justify-center m-top-20'
          src='/top/sentence.png'
          width={700}
        />
      </div>
    </div>
  );
}
