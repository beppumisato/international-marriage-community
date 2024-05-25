'use client';

import React, { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import TimelineProfileDisplay from '../components/timeline/profile/ProgileDisplay';
import TimelineBlogDisplay from '../components/timeline/blog/BlogDisplay';
import ScrollTop from '../components/scroll/ScrollTop';
import Header from '../components/common/Header';

export default function TimelinePage() {
  const { user } = useContext(CurrentUserContext);

  const isLogin = user != null;

  return (
    <>
      <Header />
      <div className='font-kosugi p-10 flex justify-center'>
        {isLogin && <TimelineProfileDisplay />}
        <TimelineBlogDisplay isMyPost={false} />
        <ScrollTop />
      </div>
    </>
  );
}
