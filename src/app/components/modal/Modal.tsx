import React from 'react';

export default function Modal({ setOpenModal }: { setOpenModal: any }) {
  return (
    <div className='w-100 h-100 bg-rose-200'>
      <div className='flex justify-center'>
        <button
          onClick={() => {
            setOpenModal(false);
          }}
        >
          X
        </button>
      </div>
      <div className='flex justify-center'>
        <h1>Are You Sure You Want to Continue?</h1>
      </div>
      <div className='text-white'>
        <button
          onClick={() => {
            setOpenModal(false);
          }}
        >
          いいえ
        </button>
        <button>はい</button>
      </div>
    </div>
  );
}
