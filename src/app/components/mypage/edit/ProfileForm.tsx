import { useContext } from 'react';
import { CurrentUserContext } from '@/app/contexts/CurrentUserContext';
import { ProfileFormType } from '@/app/mypage/edit/page';
import { UseFormRegister } from 'react-hook-form';
import Link from 'next/link';

interface Props {
  register: UseFormRegister<ProfileFormType>;
}

export default function ProfileForm(props: Props) {
  const { user } = useContext(CurrentUserContext);

  return (
    <div className='px-32 mt-10'>
      <div className='w-full h-full border-2 shadow text-[20px] p-10 rounded'>
        <div className='flex gap-x-4 p-4'>
          <div className='w-40 p-2'>ニックネーム</div>
          <input
            defaultValue={user?.nickname}
            {...props.register('nickname')}
            type='text'
            className='border-dotted border-b-2 w-full p-2 px-4'
          />
        </div>
        <div className='flex gap-x-20 p-4'>
          <div className='w-40 p-2'>国籍</div>
          <input
            defaultValue={user?.myNationality}
            {...props.register('myNationality')}
            placeholder='あなた'
            type='text'
            className='border-dotted border-b-2 w-full p-2 px-4'
          />
          <input
            defaultValue={user?.partnerNationality}
            {...props.register('partnerNationality')}
            placeholder='お相手'
            type='text'
            className='border-dotted border-b-2 w-full p-2 px-4'
          />
        </div>
        <div className='flex gap-x-4 p-4'>
          <div className='w-40 p-2'>自己紹介</div>
          <input
            defaultValue={user?.introduction}
            {...props.register('introduction')}
            type='text'
            className='border-dotted border-b-2 w-full p-2 px-4'
          />
        </div>
      </div>
      {/* ボタン */}
      <div className='flex justify-center gap-10 mt-20'>
        <Link href={'/mypage/'}>
          <button className='buttonC hover:bg-sky-300'>キャンセル</button>
        </Link>
        <button type='submit' className='button hover:bg-orange-200'>
          変更を保存
        </button>
      </div>
    </div>
  );
}
