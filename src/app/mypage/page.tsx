'use client';

import React from 'react';
import ProfileDisplay from '../components/mypage/ProfileDisplay';

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
      {/* <img src='/icon/airplan_2.png' onClick={returnTop}></img> */}
    </div>
  );
}
