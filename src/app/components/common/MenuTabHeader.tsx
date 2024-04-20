'use client';

import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function MenuTabHeader() {
  // 表示/非表示を切り替える状態変数
  const [showSidebar, setShowSidebar] = useState(false);

  // 表示/非表示を切り替える関数
  function handleClick() {
    setShowSidebar(!showSidebar);
  }

  return (
    <div>
      {/* コンテント */}
      <div className='content'>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ mr: 2 }}
          onClick={() => handleClick()}
        >
          <MenuIcon />
        </IconButton>
      </div>

      {/* サイドバー */}
      {/* 三項演算子で、「showSidebar」がtrueの時は「sidebar-show」
                                      falseの時は「sidebar-hidden」*/}
      <div
        className={
          showSidebar ? 'sidebar sidebar-show' : 'sidebar sidebar-hidden'
        }
      >
        <h2>Sidebar</h2>
      </div>
    </div>
  );
}
