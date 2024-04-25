import React from 'react';

interface Props {
  setOpenModal: (status: boolean) => void;
  onYes: () => void;
}

export default function Modal(props: Props) {
  return (
    <div className='w-100 h-100 bg-rose-200'>
      <div className='flex justify-center'>
        <button
          onClick={() => {
            props.onYes();
            props.setOpenModal(false);
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
            props.setOpenModal(false);
          }}
        >
          いいえ
        </button>
        <button>はい</button>
      </div>
    </div>
  );
}
