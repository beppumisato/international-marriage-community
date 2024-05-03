'use client';

import React, { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import TimelineProfileDisplay from '../components/timeline/profile/ProgileDisplay';
import TimelineBlogDisplay from '../components/timeline/blog/BlogDisplay';

export default function TimelinePage() {
  const { user } = useContext(CurrentUserContext);

  const isLogin = user != null;

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
        {isLogin && <TimelineProfileDisplay />}
        <TimelineBlogDisplay />
      </div>
    </>
  );
}
