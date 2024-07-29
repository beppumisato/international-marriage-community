'use client';

import AddComment from '@/app/components/comment/add/AddComment';
import CommentDisplay from '@/app/components/comment/display/CommentDisplay';
import { getBlogById } from '@/app/repositories/blog';
import { Comment, Post, User } from '@prisma/client';
import React, { useEffect, useState } from 'react';

type Blog = Post & { author: User };
type DisplayComment = Comment & { author: User };

export default function CommentPage({ params }: { params: { id: number } }) {
  const [post, setPost] = useState<Blog | null>(null);
  const [comments, setComments] = useState<DisplayComment[]>([]);

  useEffect(() => {
    getBlogById(params.id)
      .then((data) => {
        console.log(data);
        setPost(data);
      })
      .catch((err) => {});
  }, []);

  return (
    <>
      <AddComment blogId={params.id} setComments={setComments} />
      <div className='font-kosugi px-32 pb-60'>
        {/* post(Blog)が取れた時だけ表示する */}
        {post && (
          <div key={post.id}>
            <div className='w-full h-10 border-2 text-[20px] p-1 px-2 rounded mt-10'>
              {post.title}
            </div>
            <div className='w-full h-40 border-2 text-[18px] p-2 rounded mt-3 ßmb-10'>
              {post.description}
            </div>
          </div>
        )}
        <CommentDisplay
          blogId={params.id}
          comments={comments}
          setComments={setComments}
        />
      </div>
    </>
  );
}
