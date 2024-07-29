'use client';

import { deleteComment, fetchAllComments } from '@/app/repositories/comment';
import { Comment, User } from '@prisma/client';
import React, { useEffect, useState } from 'react';
import Modal from '../../modal/Modal';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { deleteBlog } from '@/app/repositories/blog';

type DisplayComment = Comment & { author: User };

interface Props {
  blogId: number;
  comments: DisplayComment[];
  setComments: React.Dispatch<React.SetStateAction<DisplayComment[]>>;
}

export default function CommentDisplay(props: Props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [commentId, setCommentId] = useState<number | null>(null);

  const handleDelete = async () => {
    if (commentId) {
      await deleteComment(props.blogId, commentId);
    }
  };

  useEffect(() => {
    fetchAllComments(props.blogId).then((comments) => {
      props.setComments(comments);
    });
  }, []);

  return (
    <>
      {props.comments.map((comment) => (
        <div key={comment.id}>
          <div className='flex justify-between shadow mb-4 rounded-md w-full h-28 p-5'>
            <div className='h-4/5'>
              <div className='text-[14px]'>{comment.author.nickname}</div>
              <div className='text-[12px] text-slate-400'>
                {new Date(comment.createdAt).toDateString()}
              </div>
              <h1 className='mt-2 text-[20px]'>{comment.description}</h1>
            </div>
            <div className='mt-14 h-1/5'>
              <button
                onClick={() => {
                  setModalOpen(true);
                  setCommentId(comment.id);
                }}
              >
                <DeleteForeverIcon sx={{ fontSize: 40, color: 'red' }} />
              </button>
            </div>
          </div>
        </div>
      ))}
      {modalOpen && (
        <Modal setOpenModal={setModalOpen} onYes={() => handleDelete()} />
      )}
    </>
  );
}
