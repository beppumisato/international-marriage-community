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
      <div className='w-full h-full shadow text-[20px] p-10 rounded'>
        <div className='flex gap-x-20 p-4 border-dotted border-b-2'>
          ニックネーム
          <input
            defaultValue={user?.nickname}
            {...props.register('nickname')}
            type='text'
          />
        </div>
        <div className='flex gap-x-40 p-4 border-dotted border-b-2'>
          国籍
          <input
            defaultValue={user?.myNationality}
            {...props.register('myNationality')}
            placeholder='あなた'
            type='text'
          />
          <input
            defaultValue={user?.partnerNationality}
            {...props.register('partnerNationality')}
            placeholder='お相手'
            type='text'
          />
        </div>
        <div className='flex gap-x-28 p-4 mb-4 border-dotted border-b-2'>
          自己紹介
          <input
            defaultValue={user?.introduction}
            {...props.register('introduction')}
            type='text'
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
