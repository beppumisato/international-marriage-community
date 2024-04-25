'use client';

import React from 'react';
import BlogDisplayPage from '../components/timeline/blog/BlogDisplay';
import ProfileDisplayPage from '../components/timeline/profile/ProgileDisplay';

export default function TimelinePage() {
  // // Topへスクロー機能
  // const returnTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   });
  // };

  return (
    <>
      <div className='font-kosugi p-4 flex'>
        <ProfileDisplayPage />
        <BlogDisplayPage />
      </div>
    </>
  );
}
