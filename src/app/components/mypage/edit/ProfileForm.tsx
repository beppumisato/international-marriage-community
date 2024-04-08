import { useForm } from 'react-hook-form';
import { useUserState } from '@/app/hooks/user';
import { useRouter } from 'next/navigation';

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
  const data = await response.json();
  return data.user;
};

export default function ProfileForm() {
  const router = useRouter();
  const { user, saveUser } = useUserState();

  // useForm関数を呼び出して、各種設定を行う
  const {
    register, // inputタグとバリデーションルールを紐付けるための関数
    handleSubmit, // フォームのsubmitイベント時に呼ばれる関数
    formState: { errors }, // バリデーションエラーの情報が格納
  } = useForm<ProfileForm>({ mode: 'onChange' }); // mode: "onChange"で入力時バリデーション

  const onSubmit = async (data: ProfileForm) => {
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='text-rose-400 text-[20px]'>
        <div className='mt-4 font-bold'>ニックネーム</div>
        <input
          defaultValue={user?.nickname}
          {...register('nickname')}
          type='text'
          className='border-2 border-rose-200 rounded-md p-2 text-black'
        />
        <div className='mt-6 font-bold'>国籍</div>
        <div className='flex gap-x-2'>
          <input
            defaultValue={user?.myNationality}
            {...register('myNationality')}
            placeholder='妻の国籍'
            type='text'
            className='border-2 border-rose-200 rounded-md w-1/2 p-2 text-black'
          />
          <input
            defaultValue={user?.partnerNationality}
            {...register('partnerNationality')}
            placeholder='夫の国籍'
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
  );
}
