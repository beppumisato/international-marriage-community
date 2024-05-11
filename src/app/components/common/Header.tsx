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
    <div>
      {isOpen && <Sidebar onClick={() => setIsOpen(false)} />}

      <div className='bg-white shadow flex justify-between items-center h-10 px-8'>
        <Link href={`/`} className='text-[18px]'>
          国際結婚の輪
        </Link>
        <MenuIcon onClick={() => setIsOpen(true)} sx={{ fontSize: 30 }} />
      </div>
    </div>
  );
}
