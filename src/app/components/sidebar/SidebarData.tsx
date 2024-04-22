import React from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export const SidebarData = [
  {
    title: 'ログイン',
    icon: <ArrowBackIosNewIcon sx={{ fontSize: 20 }} />,
    link: '/login',
  },
  {
    title: 'プロフィール',
    icon: <ArrowBackIosNewIcon sx={{ fontSize: 20 }} />,
    link: '/mypage',
  },
  {
    title: 'タイムライン',
    icon: <ArrowBackIosNewIcon sx={{ fontSize: 20 }} />,
    link: '/timeline',
  },
];
