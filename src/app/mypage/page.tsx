'use client';

import React from 'react';
import ProfileDisplay from '../components/mypage/ProfileDisplay';
import TimelineBlogDisplay from '../components/timeline/blog/BlogDisplay';

const returnTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export default function MyPage() {
  return (
    <div className='font-kosugi'>
      <ProfileDisplay />

      <div className='flex justify-center'>
        <TimelineBlogDisplay isMyPost={true} />
      </div>
      {/* <img src='/icon/airplan_2.png' onClick={returnTop}></img> */}
    </div>
  );
}
