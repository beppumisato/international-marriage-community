'use client';

import { deleteComment, fetchAllComments } from '@/app/repositories/comment';
import { Comment, User } from '@prisma/client';
import React, { useEffect, useState } from 'react';
import DeleteModal from '../../modal/DeleteModal';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CreateIcon from '@mui/icons-material/Create';
import EditModal from '../../modal/EditModal';

type DisplayComment = Comment & { author: User };

interface Props {
  blogId: number;
  comments: DisplayComment[];
  setComments: React.Dispatch<React.SetStateAction<DisplayComment[]>>;
}

export default function CommentDisplay(props: Props) {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
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
                  setEditModalOpen(true);
                  setCommentId(comment.id);
                }}
              >
                <CreateIcon sx={{ fontSize: 25, color: 'gray' }} />
              </button>
              <button
                onClick={() => {
                  setDeleteModalOpen(true);
                  setCommentId(comment.id);
                }}
              >
                <DeleteForeverIcon sx={{ fontSize: 30, color: 'red' }} />
              </button>
            </div>
          </div>
        </div>
      ))}
      {editModalOpen && (
        <EditModal
          setOpenModal={setEditModalOpen}
          onYes={() => handleDelete()}
        />
      )}

      {deleteModalOpen && (
        <DeleteModal
          setOpenModal={setDeleteModalOpen}
          onYes={() => handleDelete()}
        />
      )}
    </>
  );
}
