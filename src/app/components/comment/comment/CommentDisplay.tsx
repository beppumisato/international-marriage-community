'use client';

import { fetchAllComments } from '@/app/repositories/comment';
import { Post, User } from '@prisma/client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

type Comment = Post & { author: User };

type Props = {
  blogId: number;
};

export default function CommentDisplay(props: Props) {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    fetchAllComments(props.blogId).then((comments) => {
      setComments(comments);
    });
  }, []);

  return (
    <>
      {comments.map((post) => (
        <div key={post.id}>
          <div className='shadow mb-4 rounded-md w-full h-28'>
            <div className='text-[14px]'>{post.author.nickname}</div>
            <div className='text-[12px] text-slate-400'>
              {new Date(post.createdAt).toDateString()}
            </div>
            <div>
              <h1 className='mt-2 text-[24px]'>{post.title}</h1>
              <Link href={`/blog/${post.id}/comment/${post.id}`}>...</Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
