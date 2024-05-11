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
    <div>
      <div className='text-[20px] p-4 border-b-2'>
        <div className='border-b-2 mt-4'></div>
        <div className='flex gap-20'>
          <div className='m-6'>ニックネーム</div>
          <input
            defaultValue={user?.nickname}
            {...props.register('nickname')}
            type='text'
          />
        </div>
        <div className='border-b-2'></div>
        <div className='flex gap-40'>
          <div className='m-6'>国籍</div>
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
        <div className='border-b-2'></div>
        <div className='flex gap-28 text-center'>
          <div className='m-6'>自己紹介</div>
          <input
            defaultValue={user?.introduction}
            {...props.register('introduction')}
            type='text'
          />
        </div>
      </div>
      <div className='flex justify-center mt-20'>
        <button type='submit' className='button hover:bg-orange-200'>
          保存
        </button>
      </div>
    </div>
  );
}
