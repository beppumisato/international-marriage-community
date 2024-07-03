'use client';

import { fetchAllComments } from '@/app/repositories/comment';
import { Comment, User } from '@prisma/client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

type DisplayComment = Comment & { author: User };

type Props = {
  blogId: number;
};

export default function CommentDisplay(props: Props) {
  const [comments, setComments] = useState<DisplayComment[]>([]);

  useEffect(() => {
    fetchAllComments(props.blogId).then((comments) => {
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
              <h1 className='mt-2 text-[24px]'>{comment.description}</h1>
              <Link href={`/blog/${comment.postId}/comment/${comment.id}`}>
                ...
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
