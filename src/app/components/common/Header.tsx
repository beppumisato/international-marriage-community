import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../sidebar/Sidebar';

interface Props {
  title: string;
  url: string;
}

export default function Header() {
  return (
    <div className='relative'>
      <Sidebar />

      <div className='bg-rose-200 pl-2 h-6 flex justify-between items-center px-2'>
        <Link href={`/`}>
          <h1 className='text-white'>タイトル</h1>
        </Link>
        <MenuIcon sx={{ fontSize: 40, color: 'white' }} />
      </div>
    </div>
  );
}
