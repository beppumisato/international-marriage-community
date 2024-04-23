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

      <div className='bg-rose-200 pl-2 h-6 flex justify-between items-center px-2'>
        <Link href={`/`}>
          <h1 className='text-white'>タイトル</h1>
        </Link>
        <MenuIcon
          onClick={() => setIsOpen(true)}
          sx={{ fontSize: 40, color: 'white' }}
        />
      </div>
    </div>
  );
}
