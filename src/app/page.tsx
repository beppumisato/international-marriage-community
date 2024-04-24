'use client';

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className='relative font-kosugi'>
        {/* メインの世界地図とキャ土フレーズ */}
        <div className='pt-4 bg-white flex justify-center w-full mt-4'>
          <img
            className=' object-contain items-center'
            src='top/main.png'
            width={600}
          />
        </div>
        <div className='text-yellow-700 text-[18px] text-nowrap m-6'>
          <p className='flex justify-center p-1'>
            国際結婚は様々な問題や悩みを抱えることがあります。
          </p>
          <p className='flex justify-center p-1'>
            当サイトでは、同じく国際結婚をした人と繋がり、支え合うコミュニティを提供しています。
          </p>
          <p className='flex justify-center p-1'>
            一緒に、国際結婚生活を豊かにする仲間を見つけましょう！
          </p>
        </div>

        {/* ３つの項目を画像で挿入 */}
        <div className='flex justify-center object-contain'>
          <img src='/top/sentence.png' width={700} />
        </div>
      </div>
    </>
  );
}
