'use client';

import React from 'react';
import ProfileDisplay from '../components/mypage/ProfileDisplay';
import TimelineBlogDisplay from '../components/timeline/blog/BlogDisplay';
import ScrollTop from '../components/scroll/ScrollTop';
import Header from '../components/common/Header';

export default function MyPage() {
  return (
    <>
      <Header />
      <div className='font-kosugi'>
        <ProfileDisplay />

        <div className='flex justify-center'>
          <TimelineBlogDisplay isMyPost={true} />
        </div>
      </div>
      <ScrollTop />
    </>
  );
}
