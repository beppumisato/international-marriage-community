'use client';

import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function MenuTab() {
  // 表示/非表示を切り替える状態変数
  const [showSidebar, setShowSidebar] = useState(false);

  // 表示/非表示を切り替える関数
  function handleClick() {
    setShowSidebar(!showSidebar);
  }

  return (
    <div>
      {/* コンテント */}
      <div className='bg-rose-200'>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ mr: 2 }}
          onClick={() => handleClick()}
          style={{ color: 'white' }}
        >
          <MenuIcon />
        </IconButton>
      </div>
    </div>
  );
}
