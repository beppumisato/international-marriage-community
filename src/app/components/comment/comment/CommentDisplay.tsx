'use client';

import { fetchAllComments } from '@/app/repositories/comment';
import { Post, User } from '@prisma/client';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

type Comment = Post & { author: User };

type Props = {
  isMyComment: boolean;
};

export default function CommentDisplay(props: Props) {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    fetchAllComments(props.isMyComment).then((comments) => {
      setComments(comments);
    });
  }, []);

  return (
    <>
      {comments.map((comment) => (
        <div key={comment.id}>
          <div className='shadow mb-4 rounded-md w-full h-28'>
            <div className='text-[14px]'>{comment.author.nickname}</div>
            <div className='text-[12px] text-slate-400'>
              {new Date(comment.createdAt).toDateString()}
            </div>
            <div>
              <h1 className='mt-2 text-[24px]'>{comment.title}</h1>
              <Link href={`/blog/${comment.id}/comment/${comment.id}`}>
                ...
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
