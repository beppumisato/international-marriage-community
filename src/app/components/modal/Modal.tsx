import Link from 'next/link';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  setOpenModal: (status: boolean) => void;
  onYes: () => void;
}

export default function Modal(props: Props) {
  return (
    <div className='fixed h-20 w-4 top-32 right-64'>
      <div className='p-2 h-20 w-40 bg-slate-200 rounded-md text-[16px] flex-col'>
        <div className='flex justify-end'>
          <button
            onClick={() => {
              props.setOpenModal(false);
            }}
          >
            <CloseIcon sx={{ fontSize: 30 }} />
          </button>
        </div>
        <div className='mt-2'>
          <h1>この投稿を本当に削除してもよろしいですか？</h1>
        </div>
        <div className='flex justify-between m-3'>
          <button
            onClick={() => {
              props.setOpenModal(false);
            }}
            className='text-red-500 ml-6 text-[20px] underline'
          >
            いいえ
          </button>
          <Link href={'/timeline/'}>
            <button
              onClick={() => {
                props.onYes();
                props.setOpenModal(true);
              }}
              className='mr-6 text-[20px] underline'
            >
              はい
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
