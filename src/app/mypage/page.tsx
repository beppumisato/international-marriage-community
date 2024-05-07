'use client';

import React from 'react';
import ProfileDisplay from '../components/mypage/ProfileDisplay';
import TimelineBlogDisplay from '../components/timeline/blog/BlogDisplay';
import ScrollTop from '../components/scroll/ScrollTop';

export default function MyPage() {
  return (
    <>
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
