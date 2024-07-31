import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  setOpenModal: (status: boolean) => void;
  onYes: () => void;
}

export default function DeleteModal(props: Props) {
  return (
    <>
      {/* ポップアップ表示中の背景色とほか操作の制限 */}
      <div className='z-40 w-full h-full fixed inset-0 bg-black opacity-50'></div>
      <div className='z-50 w-full h-full fixed inset-0 flex items-center justify-center'>
        <div className='w-3/4 lg:w-1/2 bg-white rounded-xl py-12'>
          <div className='justify-end'>
            <button
              onClick={() => {
                props.setOpenModal(false);
              }}
            >
              <CloseIcon sx={{ fontSize: 30 }} />
            </button>
          </div>
          <h1 className='text-center mt-10'>この投稿を本当に削除しますか？</h1>
          <div className='flex gap-4 justify-center mt-10'>
            <button
              onClick={() => {
                props.setOpenModal(false);
              }}
              className='text-slate-500 border-2 border-slate-500 rounded hover:bg-sky-300 w-32 h-8'
            >
              キャンセル
            </button>
            <button
              onClick={() => {
                props.onYes();
                props.setOpenModal(true);
              }}
              className='text-white bg-red-500 rounded hover:bg-yellow-300 w-32 h-8'
            >
              削除
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
