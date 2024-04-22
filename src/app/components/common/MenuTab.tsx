'use client';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function MenuTab() {
  return (
    <div className='bg-rose-200 pl-2 h-0'>
      <IconButton
        size='large'
        edge='start'
        color='inherit'
        aria-label='menu'
        sx={{ mr: 2 }}
        style={{ color: 'white' }}
      >
        <MenuIcon />
      </IconButton>
    </div>
  );
}
