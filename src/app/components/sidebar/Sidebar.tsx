import React, { useContext } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { sidebarDataLogin, sidebarDataNotLogin } from './sidebarData';
import { CurrentUserContext } from '@/app/contexts/CurrentUserContext';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

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
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        exit={{
          opacity: 0,
          x: 0,
          width: 0,
          minWidth: 0,
          transition: { opacity: { duration: 0.3 }, duration: 0.3 },
        }}
        transition={{ duration: 0.3 }}
      >
        <div className='absolute top-0 right-0 z-50'>
          <div className='w-56 h-screen bg-rose-300 text-white text-[20px]'>
            <div className='flex justify-end p-2'>
              <CloseIcon
                onClick={props.onClick}
                sx={{ fontSize: 40, color: 'white' }}
              />
            </div>
            <ul className='h-auto w-full pt-4'>
              {sidebarData.map((value, key) => {
                return (
                  <button
                    onClick={() => onClickLink(value.link)}
                    key={key}
                    className='flex w-full h-6 hover:bg-orange-200 cursor-pointer items-center p-8'
                  >
                    <div className='mr-2'>
                      <ArrowBackIosNewIcon sx={{ fontSize: 20 }} />
                    </div>
                    <div>{value.title}</div>
                  </button>
                );
              })}
            </ul>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
