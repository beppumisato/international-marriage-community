'use client';

import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../sidebar/Sidebar';
import { useState } from 'react';

interface Props {
  title: string;
  url: string;
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative'>
      {isOpen && <Sidebar onClick={() => setIsOpen(false)} />}

      <div className='bg-rose-50 h-6 flex justify-between items-center px-4'>
        <Link href={`/`}>
          <img width={160} src='/icon/title.png/'></img>
        </Link>
        <MenuIcon
          onClick={() => setIsOpen(true)}
          sx={{ fontSize: 40, color: '#fda4af' }}
        />
      </div>
    </div>
  );
}
