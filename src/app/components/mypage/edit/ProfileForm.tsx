import { useContext } from 'react';
import { CurrentUserContext } from '@/app/contexts/CurrentUserContext';
import { ProfileFormType } from '@/app/mypage/edit/page';
import { UseFormRegister } from 'react-hook-form';

interface Props {
  register: UseFormRegister<ProfileFormType>;
}

export default function ProfileForm(props: Props) {
  const { user } = useContext(CurrentUserContext);

  return (
    <div className='text-yellow-700 text-[24px]'>
      <div className='mt-4 ml-2 font-bold'>ニックネーム</div>
      <input
        defaultValue={user?.nickname}
        {...props.register('nickname')}
        type='text'
        className='border-2 border-yellow-700 rounded-md p-2 text-black'
      />
      <div className='mt-2 ml-2 font-bold'>国籍</div>
      <div className='flex gap-x-2'>
        <input
          defaultValue={user?.myNationality}
          {...props.register('myNationality')}
          placeholder='妻の国籍'
          type='text'
          className='border-2 border-yellow-700 rounded-md w-1/2 p-2 text-black'
        />
        <input
          defaultValue={user?.partnerNationality}
          {...props.register('partnerNationality')}
          placeholder='夫の国籍'
          type='text'
          className='border-2 border-yellow-700 rounded-md w-1/2 p-2 text-black'
        />
      </div>
      <div className='mt-2 ml-2 font-bold'>自己紹介</div>
      <textarea
        defaultValue={user?.introduction}
        {...props.register('introduction')}
        className='border-2 border-yellow-700 rounded-md h-20 w-full p-2 text-black'
      />
      <div className='flex justify-end mt-3'>
        <button
          type='submit'
          className='bg-orange-400 text-white rounded-md hover:bg-orange-500 w-16 h-6'
        >
          保存
        </button>
      </div>
    </div>
  );
}
