'use client';

import { useContext, useState } from 'react';
import { CurrentUserContext } from '@/app/contexts/CurrentUserContext';
import { useRouter } from 'next/navigation';

import Header from '@/app/components/common/Header';
import ProfileForm from '@/app/components/mypage/edit/ProfileForm';
import ImageForm from '@/app/components/mypage/edit/ImageForm';
import { useForm } from 'react-hook-form';
import { uploadImage } from '../../../../utils/supabase/supabase';
import { putUser } from '@/app/repositories/user';

// プロフィールフォームのデータ型を定義
export interface ProfileFormType {
  nickname: string;
  myNationality: string;
  partnerNationality: string;
  introduction: string;
}

export default function EditPage() {
  const router = useRouter();
  const { setUser } = useContext(CurrentUserContext);

  // useForm関数を呼び出して、各種設定を行う
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormType>({ mode: 'onChange' });

  const [headerImage, setHeaderImage] = useState<File>();
  const [iconImage, setIconImage] = useState<File>();

  const onSubmit = async (data: ProfileFormType) => {
    let headerImageUrl = '';
    if (headerImage) {
      const filePath = `header-image/${headerImage.name}`;
      headerImageUrl = (await uploadImage(headerImage, filePath)) ?? '';
    }
    let iconImageUrl = '';
    if (iconImage) {
      const filePath = `icon-image/${iconImage.name}`;
      iconImageUrl = (await uploadImage(iconImage, filePath)) ?? '';
    }

    const user = await putUser(
      headerImageUrl,
      iconImageUrl,
      data.nickname,
      data.myNationality,
      data.partnerNationality,
      data.introduction,
    );
    setUser(user);

    //マイページに遷移する
    router.push('/mypage');
  };

  return (
    <div className='font-kosugi'>
      <div className='p-10'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ImageForm
            headerImage={headerImage}
            setHeaderImage={setHeaderImage}
            iconImage={iconImage}
            setIconImage={setIconImage}
          />
          <ProfileForm register={register} />
        </form>
      </div>
    </div>
  );
}
