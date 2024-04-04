'use client';

import React from 'react';
import Link from 'next/link';
import { useUserState } from '@/app/hooks/user';
import { useForm } from 'react-hook-form';

// プロフィールフォームのデータ型を定義
interface ProfileForm {
  nickname: string;
  myNationality: string;
  partnerNationality: string;
  introduction: string;
}

const putUser = async (
  headerImageUrl: string,
  iconImageUrl: string,
  nickname: string,
  myNationality: string,
  partnerNationality: string,
  introduction: string,
) => {
  const response = await fetch(`http://localhost:3000/api/user/4`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      headerImageUrl,
      iconImageUrl,
      nickname,
      myNationality,
      partnerNationality,
      introduction,
    }),
  });
};

export default function EditPage() {
  const { user } = useUserState();

  // useForm関数を呼び出して、各種設定を行う
  const {
    register, // inputタグとバリデーションルールを紐付けるための関数
    handleSubmit, // フォームのsubmitイベント時に呼ばれる関数
    formState: { errors }, // バリデーションエラーの情報が格納
  } = useForm<ProfileForm>({ mode: 'onChange' }); // mode: "onChange"で入力時バリデーション

  const onSubmit = async (data: ProfileForm) => {
    console.log(data);
    await putUser(
      '',
      '',
      data.nickname,
      data.myNationality,
      data.partnerNationality,
      data.introduction,
    );
  };

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='text-rose-400 text-[20px]'>
            <div className='mt-4 font-bold'>ニックネーム</div>
            <input
              defaultValue={user?.nickname}
              {...register('nickname')}
              type='text'
              className='border-2 border-rose-200 rounded-md p-2 text-black'
            />
            <div className='mt-6 font-bold'>あなたとお相手の国籍</div>
            <div className='flex gap-x-2'>
              <input
                defaultValue={user?.myNationality}
                {...register('myNationality')}
                placeholder='あなたの国籍'
                type='text'
                className='border-2 border-rose-200 rounded-md w-1/2 p-2 text-black'
              />
              <input
                defaultValue={user?.partnerNationality}
                {...register('partnerNationality')}
                placeholder='お相手の国籍'
                type='text'
                className='border-2 border-rose-200 rounded-md w-1/2 p-2 text-black'
              />
            </div>
            <div className='mt-6 font-bold'>自己紹介</div>
            <textarea
              defaultValue={user?.introduction}
              {...register('introduction')}
              className='border-2 border-rose-200 rounded-md h-32 w-full p-2 text-black'
            />
            <div className='flex justify-center m-5'>
              <button
                type='submit'
                className='bg-rose-400 text-white rounded-md hover:bg-rose-500 w-16 h-6'
              >
                保存
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
