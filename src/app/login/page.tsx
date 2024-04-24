'use client';

import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { Cognito } from '../../../utils/cognito';

// ログインフォームのデータ型を定義
interface LoginForm {
  email: string;
  password: string;
}

export default function LoginPage() {
  const router = useRouter();

  // useForm関数を呼び出して、各種設定を行う
  const {
    register, // inputタグとバリデーションルールを紐付けるための関数
    handleSubmit, // フォームのsubmitイベント時に呼ばれる関数
    getValues,
    formState: { errors }, // バリデーションエラーの情報が格納
  } = useForm<LoginForm>({ mode: 'onChange' }); // mode: "onChange"で入力時バリデーション

  // フォームのsubmitイベントで呼ばれる関数
  const onSubmit = async (data: LoginForm) => {
    const cognito = new Cognito();
    try {
      await cognito.signIn(data.email, data.password);
      router.push('/mypage');
    } catch (err) {
      if (err!.toString().includes('UserNotConfirmedException')) {
        // 初回登録後に認証をしていない場合
        // 認証が必要なので、認証コードを送信して入力画面に遷移する
        await cognito.resendVerifyCode(data.email);
        router.push(`registration/confirmation?email=${data.email}`);
      } else {
        alert(
          'ログインに失敗しました。メールアドレスとパスワードをご確認ください。',
        );
      }
    }
  };

  return (
    <>
      {/* ログイン機能 */}
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
                {...register('email', {
                  validate: (value) => value === getValues('email'),
                })}
              />
            </div>
            {errors.email && (
              <span className='text-[14px] text-red-500'>
                メールアドレスが正しくありません
              </span>
            )}

            <div className='flex flex-col'>
              <label
                htmlFor='password'
                className='text-yellow-600  text-[16px] mt-3'
              >
                パスワード
              </label>
              <input
                className='text-[12px] h-6 pl-3'
                id='password'
                // type='password' // マスクされるとわかりづらいので一旦解除
                placeholder='パスワードを入力して下さい'
                {...register('password', { minLength: 8 })}
              />
            </div>
            {errors.password && (
              <span className='text-[14px] text-red-500'>
                ※パスワードが正しくありません
              </span>
            )}

            {/* ログインボタンの実装 */}
            <div className='flex justify-center m-4'>
              <button
                type='submit'
                className='text-[15px] border-4 border-white text-white bg-orange-400 hover:bg-orange-500 p-1 w-24'
              >
                ログイン
              </button>
            </div>
          </form>

          {/* 新規会員登録フォームへ */}
          <div className='flex flex-col text-yellow-600 text-[18px]'>
            <div className='flex justify-center mt-4'>初めてご利用になる方</div>
            <div className='flex justify-center'>
              ご利用になるには会員登録が必要です
            </div>
          </div>
          <div className='flex justify-center mt-1.5'>
            <Link
              href={'/registration/'}
              className='text-[15px] border-4 border-white text-white bg-orange-400 hover:bg-orange-500 p-1 w-24 text-center'
            >
              新規会員登録
            </Link>
          </div>
        </div>
      </section>
      <img className='mt-8' src='/login/design.png/'></img>
    </>
  );
}
