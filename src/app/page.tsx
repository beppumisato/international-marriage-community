'use client';

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className='relative'>
        <div className='bg-rose-200 font-kosugi'>
          {/* メインの世界地図とキャ土フレーズ */}
          <div className='bg-white flex justify-center w-full'>
            <img className=' object-contain' src='top/main.png' width={700} />
          </div>
          <div className='text-white text-[20px] text-nowrap m-10'>
            <p className='flex justify-center p-2'>
              国際結婚は様々な問題や悩みを抱えることがあります。
            </p>
            <p className='flex justify-center p-2'>
              当サイトでは、同じく国際結婚をした人と繋がり、支え合うコミュニティを提供しています。
            </p>
            <p className='flex justify-center p-2'>
              一緒に、国際結婚生活を豊かにする仲間を見つけましょう！
            </p>
          </div>

          {/* ３つの項目を画像で挿入 */}
          <div className='flex justify-center object-contain'>
            <img src='/top/sentence.png' width={700} />
          </div>
        </div>
      </div>
    </>
  );
}
