import React, { useEffect, useRef } from 'react';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  commentDescription: string;
  setOpenModal: (status: boolean) => void;
  onYes: (description: string) => void;
}

export default function EditModal(props: Props) {
  const descriptionRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    // propsのコメントの内容を、テキストエリアの初期値として表示
    descriptionRef.current!.value = props.commentDescription;
  }, []);

  return (
    <>
      {/* ポップアップ表示中の背景色とほか操作の制限 */}
      <div className='z-40 w-full h-full fixed inset-0 bg-black opacity-50'></div>
      <div className='z-50 w-full h-full fixed inset-0 flex items-center justify-center'>
        <div className='w-3/4 lg:w-1/2 bg-white rounded-xl p-10'>
          <div className='flex justify-end'>
            <button
              onClick={() => {
                props.setOpenModal(false);
              }}
            >
              <CloseIcon sx={{ fontSize: 30 }} />
            </button>
          </div>
          <form>
            <textarea
              ref={descriptionRef}
              className='w-full h-40 border-2 text-[18px] p-2 rounded mt-3'
            />

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
                  if (descriptionRef.current?.value) {
                    props.onYes(descriptionRef.current?.value);
                    // 処理実行後、モーダルを閉じる
                    props.setOpenModal(false);
                  }
                }}
                className='text-white bg-rose-400 rounded hover:bg-yellow-300 w-32 h-8'
              >
                変更内容を保存
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
