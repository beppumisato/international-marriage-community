import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { User } from '@prisma/client';
import { editComment, getCommentById } from '@/app/repositories/comment';

interface Props {
  setOpenModal: (status: boolean) => void;
  onYes: () => void;
}

type DisplayComment = Comment & { author: User };

interface Props {
  blogId: number;
  description: string | undefined;
  comments: DisplayComment[];
  setComments: React.Dispatch<React.SetStateAction<DisplayComment[]>>;
}

export default function EditModal(props: Props) {
  const [commentId, setCommentId] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (commentId) {
      await editComment(props.description, props.blogId, commentId);
    }
  };

  useEffect(() => {
    if (commentId) {
      getCommentById(props.blogId, commentId).then((comments) => {
        props.setComments(comments);
      });
    }
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
          <form onSubmit={handleSubmit}>
            <textarea className='w-full h-40 border-2 text-[18px] p-2 rounded mt-3' />
            {props.description}
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
