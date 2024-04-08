'use client';

import React from 'react';
import Header from '@/app/components/common/Header';
import ProfileForm from '@/app/components/mypage/edit/ProfileForm';
import ImageForm from '@/app/components/mypage/edit/ImageForm';

export default function EditPage() {
  return (
    <div className='font-kosugi'>
      <Header title='プロフィール編集' url='/mypage/' />
      <div className='p-4'>
        <ImageForm />
        <ProfileForm />
      </div>
    </div>
  );
}
