import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Topへ戻るリンク */}
      <div>
        <div className='mt-5 ml-96 object-contain'>
          <Link href={`/`} className='text-rose-400 font-bold text-2xl'>
            ＜ Top / ログイン
          </Link>
        </div>

        {/* メイン機能 */}
        <div>
          <div className='mail'>
            <div className='flex justify-center object-contain'>
              <img src='login/bg_pic.png' width={700} />
              <p className='m-10 text-white text-2xl font-bold'>
                メールアドレス
              </p>
              <p className='flex justify-center m-10 mt-60 p-2 bg-white h-70px w-3/4 text-slate-300'>
                メールアドレスを入力してください
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
