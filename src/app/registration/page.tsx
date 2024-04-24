'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { Cognito } from '../../../utils/cognito';
import { useRouter } from 'next/navigation';

// ログインフォームのデータ型を定義
interface LoginForm {
  email: string;
  password: string;
  username: string;
}

export default function RegistrationPage() {
  const router = useRouter();

  // useForm関数を呼び出して、各種設定を行う
  const {
    register, // inputタグとバリデーションルールを紐付けるための関数
    handleSubmit, // フォームのsubmitイベント時に呼ばれる関数
    formState: { errors }, // バリデーションエラーの情報が格納
  } = useForm<LoginForm>({ mode: 'onChange' }); // mode: "onChange"で入力時バリデーション

  // フォームのsubmitイベントで呼ばれる関数
  const onSubmit = async (data: LoginForm) => {
    const cognito = new Cognito();
    try {
      await cognito.signUp(data.email, data.password);

      // 登録後、メールアドレスに認証コードが届く
      // 認証が必要なので、認証コード入力画面に遷移する
      router.push(`registration/confirmation?email=${data.email}`);
    } catch (err) {
      alert(
        '新規登録に失敗しました。既にユーザーが登録されている可能性があります。再度、ログイン画面でログインしてみてください。',
      );
    }
  };

  return (
    <>
      {/* 新規会員登録機能 */}
      <section className='flex justify-center'>
        <div className='font-kosugi'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col'>
              <label
                htmlFor='email'
                className='text-yellow-600 text-[16px] mt-4'
              >
                メールアドレス
              </label>
              <input
                className='text-[12px] h-6 pl-3'
                id='email'
                type='email'
                placeholder='メールアドレスを入力してください'
                {...register('email', { required: true })}
              />
              {errors.email && (
                <span className='text-[14px] text-red-500'>
                  ※正しいメールアドレスを入力してください
                </span>
              )}
            </div>

            <div className='flex flex-col'>
              <label
                htmlFor='password'
                className='text-yellow-600 text-[16px] mt-2'
              >
                パスワード
              </label>
              <input
                className='text-[12px] h-6 pl-3'
                id='password'
                // type='password' // マスクされるとわかりづらいので一旦解除
                placeholder='パスワードを入力して下さい'
                {...register('password', {
                  pattern: {
                    value: /^([a-zA-Z0-9]{8,})$/,
                    message: '',
                  },
                })}
              />
              {errors.password && (
                <span className='text-[14px] text-red-500'>
                  ※半角英数字、8文字以上で作成してください
                </span>
              )}
            </div>
            <div className='flex flex-col'>
              <label
                htmlFor='username'
                className='text-yellow-600 text-[16px] mt-2'
              >
                ニックネーム
              </label>
              <input
                className='text-[12px] h-6 pl-3'
                id='username'
                type='text'
                placeholder='ニックネームを入力して下さい'
                {...register('username')}
              />
              <p>{errors.password?.message as React.ReactNode}</p>
            </div>

            {/* 新規会員登録ボタンの実装 */}
            <div className='flex justify-center mt-4'>
              <button
                type='submit'
                className='text-[15px] border-4 border-white text-white bg-orange-400 hover:bg-orange-500 p-1 w-24'
              >
                新規会員登録
              </button>
            </div>
            <div className='flex-col text-yellow-600 text-[18px] mt-2'>
              <div className='flex justify-center m-1'>
                国際結婚は様々な問題や悩みを抱えることがあります。
              </div>
              <div className='flex justify-center m-1'>
                当サイトでは、同じく国際結婚をした人と繋がり、
              </div>
              <div className='flex justify-center m-1'>
                支え合うコミュニティを提供しています。
              </div>
              <div className='flex justify-center m-1'>
                {' '}
                一緒に、国際結婚生活を豊かにする仲間を見つけましょう！
              </div>
            </div>
          </form>
        </div>
      </section>
      <img className='mt-2' src='/login/design.png/'></img>
    </>
  );
}
