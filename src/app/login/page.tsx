'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';

// ログインフォームのデータ型を定義
interface LoginForm {
  email: string;
  password: string;
}

function PostLogin() {
  // useForm関数を呼び出して、各種設定を行う
  const {
    register, // inputタグとバリデーションルールを紐付けるための関数
    handleSubmit, // フォームのsubmitイベント時に呼ばれる関数
    formState: { errors }, // バリデーションエラーの情報が格納
  } = useForm<LoginForm>({ mode: 'onChange' }); // mode: "onChange"で入力時バリデーション

  // フォームのsubmitイベントで呼ばれる関数
  const onSubmit = (data: LoginForm) => console.log(data);

  return (
    <>
      <div>
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
        <section className='p-6 pt-8'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col'>
              <label htmlFor='email' className='text-white text-[20px]'>
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
              <label htmlFor='password' className='text-white text-[20px] mt-5'>
                パスワード
              </label>
              <input
                className='text-[12px] h-6 pl-3'
                id='password'
                type='password'
                placeholder='パスワードを入力して下さい'
                {...register('password')}
              />
              <p>{errors.password?.message as React.ReactNode}</p>
            </div>

            {/* ログインボタンの実装 */}
            <div className='flex justify-center m-5'>
              <button
                type='submit'
                className='text-[15px] border-4 border-white text-white bg-rose-400 hover:bg-rose-500 p-1.5 w-32'
              >
                ログイン
              </button>
            </div>
          </form>

          {/* 新規会員登録フォームへ */}
          <div className='flex flex-col text-white text-[20px]'>
            <div className='flex justify-center mt-5'>初めてご利用になる方</div>
            <div className='flex justify-center'>
              ご利用になるには会員登録が必要です
            </div>
          </div>
          <div className='flex justify-center m-5'>
            <Link href={'/registration/'}>
              <button className='text-[15px] border-4 border-white text-white bg-rose-400 hover:bg-rose-500 p-1.5 w-32'>
                新規会員登録
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default PostLogin;
