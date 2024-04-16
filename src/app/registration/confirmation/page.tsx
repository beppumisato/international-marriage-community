'use client';

import { useForm } from 'react-hook-form';
import { Cognito } from '../../../../utils/cognito';
import { useSearchParams } from 'next/navigation';

interface CodeForm {
  code: string;
}

export default function RegistrationConfirmationPage() {
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
    }
  };

  return (
    <div className='p-24'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col'>
          <label htmlFor='email' className='text-[16px]'>
            認証コードを入力してください
          </label>
          <input
            className='text-[12px] h-6 pl-3 border w-40'
            id='code'
            type='number'
            {...register('code')}
          />
          <p>{errors.code?.message as React.ReactNode}</p>
        </div>
        <button
          type='submit'
          className='text-[12px] border bg-blue-400 text-white p-2 rounded-md mt-4'
        >
          認証する
        </button>
      </form>
    </div>
  );
}
