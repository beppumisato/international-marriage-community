'use client';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../sidebar/Sidebar';

export default function MenuTab() {
  return (
    <div>
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
