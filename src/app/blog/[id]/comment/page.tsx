'use client';

import { getBlogById } from '@/app/repositories/blog';
import { Post, User } from '@prisma/client';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

type Blog = Post & { author: User };

export default function CommentDisplay({ params }: { params: { id: number } }) {
  const [post, setPost] = useState<Blog | null>(null);
  const descriptionRef = useRef<HTMLTextAreaElement | null>(null);

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
      <div className='font-kosugi fixed bg-white border-t-2 w-full h-60 bottom-0'>
        <div className='flex justify-center gap-x-2 p-10'>
          <textarea
            ref={descriptionRef}
            placeholder='コメントする'
            className='w-full h-full border-2 text-[20px] p-1 px-2 rounded'
          />
          <button className='bg-rose-400 hover:bg-orange-200 border-white border-2 rounded-md w-24 h-10 items-center text-white mt-8'>
            送信
          </button>
        </div>
      </div>

      <div className='font-kosugi px-32'>
        {/* post(Blog)が取れた時だけ表示する */}
        {post && (
          <div key={post.id}>
            <div className='w-full h-10 border-2 text-[20px] p-1 px-2 rounded mt-10'>
              {post.title}
            </div>
            <div className='w-full h-40 border-2 text-[18px] p-2 rounded mt-3'>
              {post.description}
            </div>
          </div>
        )}
        {/* コメント表示デザイン(仮) */}
        <div className='shadow mb-4 rounded-md w-full h-28'></div>
        <div className='shadow mb-4 rounded-md w-full h-28'></div>
        <div className='shadow mb-4 rounded-md w-full h-28'></div>
        <div className='shadow mb-4 rounded-md w-full h-28'></div>
      </div>
    </>
  );
}
