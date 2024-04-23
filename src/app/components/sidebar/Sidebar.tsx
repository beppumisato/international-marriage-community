import React, { useContext } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { sidebarDataLogin, sidebarDataNotLogin } from './sidebarData';
import { CurrentUserContext } from '@/app/contexts/CurrentUserContext';
import { useRouter } from 'next/navigation';

interface Props {
  onClick: () => void;
}

export default function Sidebar(props: Props) {
  const router = useRouter();
  const { user } = useContext(CurrentUserContext);

  const isLogin = user != null;
  const sidebarData = isLogin ? sidebarDataLogin : sidebarDataNotLogin;

  const onClickLink = (link: string) => {
    router.push(link);
    props.onClick();
  };

  return (
    <div className='absolute top-0 right-0 z-50'>
      <div className='w-24 h-screen bg-rose-300 text-white text-[20px]'>
        <CloseIcon
          onClick={props.onClick}
          sx={{ fontSize: 40, color: 'white' }}
        />
        <h1 className='text-[28px] border-b-2 flex justify-center text-white'>
          MENU
        </h1>
        <ul className='h-auto w-full p-0 pt-4'>
          {sidebarData.map((value, key) => {
            return (
              <button
                onClick={() => onClickLink(value.link)}
                key={key}
                className='flex w-full h-6 hover:bg-rose-500 cursor-pointer justify-start items-center'
              >
                <div className='mr-2 ml-2'>
                  <ArrowBackIosNewIcon sx={{ fontSize: 20 }} />
                </div>
                <div>{value.title}</div>
              </button>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
