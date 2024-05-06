import Link from 'next/link';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  setOpenModal: (status: boolean) => void;
  onYes: () => void;
}

export default function Modal(props: Props) {
  return (
    <div className='fixed h-60 w-96 top-60'>
      <div className='p-2 h-60 w-96 bg-white shadow shadow-slate-400 text-[16px] flex-col'>
        <div className='flex justify-end'>
          <button
            onClick={() => {
              props.setOpenModal(false);
            }}
          >
            <CloseIcon sx={{ fontSize: 30 }} />
          </button>
        </div>
        <h1 className='text-center'>この投稿を本当に削除しますか？</h1>
        <div className='flex gap-4 justify-center mt-10'>
          <button
            onClick={() => {
              props.setOpenModal(false);
            }}
            className='text-slate-500 border-2 border-slate-500 rounded hover:bg-slate-400 w-32 h-8'
          >
            キャンセル
          </button>
          <Link href={'/timeline/'}>
            <button
              onClick={() => {
                props.onYes();
                props.setOpenModal(true);
              }}
              className='text-white bg-red-500 rounded hover:bg-red-700 w-32 h-8'
            >
              削除
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
