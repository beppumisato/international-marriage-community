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
    <div className='font-kosugi'>
      {isOpen && <Sidebar onClick={() => setIsOpen(false)} />}

      <div className='bg-orange-400 h-6 flex justify-between items-center px-4'>
        <Link href={`/`} className='text-white text-[20px]'>
          国際結婚の輪
        </Link>
        <MenuIcon
          onClick={() => setIsOpen(true)}
          sx={{ fontSize: 40, color: 'white' }}
        />
      </div>
    </div>
  );
}
