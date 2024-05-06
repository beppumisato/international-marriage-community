'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
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
      <div className='flex justify-center font-kosugi'>
        <div className='text-yellow-700 text-[16px]'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col mt-20'>
              <label htmlFor='email' className='label'>
                メールアドレス
              </label>
              <input
                className='input'
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
              <label htmlFor='password' className='label'>
                パスワード
              </label>
              <input
                className='input'
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
            <div className='mt-20 flex justify-center'>
              <button type='submit' className='button hover:bg-orange-500'>
                ログイン
              </button>
            </div>
          </form>

          {/* 新規会員登録フォームへ */}
          <div className='text-center mt-10'>
            <h1 className='ml-2 mt-4 text-[20px]'>初めてご利用になる方</h1>
            <h2 className='-ml-3 m-1 text-[16px]'>
              ご利用になるには会員登録が必要です
            </h2>
          </div>
          <div className='flex justify-center mt-2'>
            <Link
              href={'/registration/'}
              className='button hover:bg-orange-500 p-3'
            >
              新規会員登録
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
