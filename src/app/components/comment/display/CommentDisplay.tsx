'use client';

import { fetchAllComments } from '@/app/repositories/comment';
import { Comment, User } from '@prisma/client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

type DisplayComment = Comment & { author: User };

interface Props {
  blogId: number;
  comments: DisplayComment[];
  setComments: React.Dispatch<React.SetStateAction<DisplayComment[]>>;
}

export default function CommentDisplay(props: Props) {
  const [comments, setComments] = useState<DisplayComment[]>([]);

  useEffect(() => {
    fetchAllComments(props.blogId).then((comments) => {
      setComments(comments);
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
              <Link
                href={`/blog/${comment.postId}/comment/edit/comment_${comment.id}`}
              >
                ...
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
