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
      }
    }
  };

  return (
    <>
      <div className='font-kosugi'>
        {/* Topへ戻るリンク */}
        <div className='flex'>
          <Link
            href={'/'}
            className='ml-4 mt-2 text-rose-400 font-bold text-[20px]'
          >
            ＜ Top
          </Link>
          <div className='ml-2 mt-2 text-rose-400 font-bold text-[20px]'>
            / ログイン
          </div>
        </div>

        {/* ログイン機能 */}
        <section className='p-0 flex justify-center'>
          <div className='relative'>
            <img src='/login/bg.png/' width={650}></img>
          </div>
          <div className='absolute top-20'>
            <div className='pl-6 pr-6'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col'>
                  <label htmlFor='email' className='text-white text-[16px]'>
                    メールアドレス
                  </label>
                  <input
                    className='text-[12px] h-6 pl-3'
                    id='email'
                    type='email'
                    placeholder='メールアドレスを入力してください'
                    {...register('email')}
                  />
                  <p>{errors.email?.message as React.ReactNode}</p>
                </div>
                <div className='flex flex-col'>
                  <label
                    htmlFor='password'
                    className='text-white text-[16px] mt-5'
                  >
                    パスワード
                  </label>
                  <input
                    className='text-[12px] h-6 pl-3'
                    id='password'
                    // type='password' // マスクされるとわかりづらいので一旦解除
                    placeholder='パスワードを入力して下さい'
                    {...register('password')}
                  />
                  <p>{errors.password?.message as React.ReactNode}</p>
                </div>

                {/* ログインボタンの実装 */}
                <div className='flex justify-center m-3'>
                  <button
                    type='submit'
                    className='text-[15px] border-4 border-white text-white bg-rose-400 hover:bg-rose-500 p-1 w-24'
                  >
                    ログイン
                  </button>
                </div>
              </form>

              {/* 新規会員登録フォームへ */}
              <div className='flex flex-col text-white text-[15px]'>
                <div className='flex justify-center mt-1'>
                  初めてご利用になる方
                </div>
                <div className='flex justify-center'>
                  ご利用になるには会員登録が必要です
                </div>
              </div>
              <div className='flex justify-center mt-1.5'>
                <Link
                  href={'/registration/'}
                  className='text-[15px] border-4 border-white text-white bg-rose-400 hover:bg-rose-500 p-1 w-24 text-center'
                >
                  新規会員登録
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
