'use client';

import React from 'react';
import { useUserState } from '@/app/hooks/user';
import { useRouter } from 'next/navigation';

import Header from '@/app/components/common/Header';
import ProfileForm from '@/app/components/mypage/edit/ProfileForm';
import ImageForm from '@/app/components/mypage/edit/ImageForm';
import { useForm } from 'react-hook-form';

// プロフィールフォームのデータ型を定義
export interface ProfileFormType {
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
  const data = await response.json();
  return data.user;
};

export default function EditPage() {
  const router = useRouter();
  const { saveUser } = useUserState();

  // useForm関数を呼び出して、各種設定を行う
  const {
    register, // inputタグとバリデーションルールを紐付けるための関数
    handleSubmit, // フォームのsubmitイベント時に呼ばれる関数
    formState: { errors }, // バリデーションエラーの情報が格納
  } = useForm<ProfileFormType>({ mode: 'onChange' }); // mode: "onChange"で入力時バリデーション

  const onSubmit = async (data: ProfileFormType) => {
    console.log(data);
    const user = await putUser(
      '',
      '',
      data.nickname,
      data.myNationality,
      data.partnerNationality,
      data.introduction,
    );
    saveUser(user);

    //マイページに遷移する
    router.push('/mypage');
  };

  return (
    <div className='font-kosugi'>
      <Header title='プロフィール編集' url='/mypage/' />
      <div className='p-4'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ImageForm />
          <ProfileForm register={register} />
        </form>
      </div>
    </div>
  );
}
