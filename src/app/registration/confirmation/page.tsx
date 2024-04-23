'use client';

import { useForm } from 'react-hook-form';
import { Cognito } from '../../../../utils/cognito';
import { useRouter, useSearchParams } from 'next/navigation';
import Header from '@/app/components/common/Header';

interface CodeForm {
  code: string;
}

export default function RegistrationConfirmationPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const {
    register, // inputタグとバリデーションルールを紐付けるための関数
    handleSubmit, // フォームのsubmitイベント時に呼ばれる関数
    formState: { errors }, // バリデーションエラーの情報が格納
  } = useForm<CodeForm>({ mode: 'onChange' }); // mode: "onChange"で入力時バリデーション

  const onSubmit = async (data: CodeForm) => {
    const cognito = new Cognito();

    const email = searchParams.get('email');
    if (email) {
      await cognito.verifyAccount(email, data.code);

      // 認証後、改めてログインが必要なのでログイン画面へ
      router.push('/login');
    }
  };

  return (
    <div className='font-kosugi'>
      <div className='p-14 pt-4'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col'>
            <label htmlFor='email' className='text-[22px] text-rose-400 p-2'>
              認証コードを入力してください
            </label>
            <div className='border-b border-rose-400 w-60'></div>
            <div className='text-[16px] text-rose-400 m-2'>
              <p>認証コードをご登録のメールアドレスにお送りいたしました。</p>
              <p>
                届いた６桁の認証コードをご入力いただき、「認証する」ボタンを押してください。
              </p>
            </div>
            <input
              className='ml-2 mt-2 text-[14px] h-6 w-28 border-2 border-rose-400 p-2'
              id='code'
              type='number'
              {...register('code')}
            />
            <p>{errors.code?.message as React.ReactNode}</p>
          </div>
          <button
            type='submit'
            className='ml-2 text-[20px] text-white bg-rose-400 hover:bg-rose-500 p-1 w-28'
          >
            認証する
          </button>
        </form>
      </div>
    </div>
  );
}
