'use client';

import React, { useRef } from 'react';
import Header from '../components/common/Header';
import { title } from 'process';
import { useRouter } from 'next/navigation';

const postBlog = async (
  title: string | undefined,
  description: string | undefined,
) => {
  const res = await fetch(`http://localhost:3000/api/blog`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, description }),
  });

  return res.json();
};

export default function BlogPage() {
  const router = useRouter();

  const titleRef = useRef<HTMLInputElement | null>(null);
  const descriptionRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await postBlog(titleRef.current?.value, descriptionRef.current?.value);

    router.push('/mypage');
  };

  return (
    <div className='font-kosugi'>
      <Header title='新規投稿' url='/mypage/' />

      <form onSubmit={handleSubmit}>
        <div className='flex justify-center'>
          <input
            ref={titleRef}
            placeholder='タイトルを入力する'
            type='text'
            className='p-2 m-4 w-4/5 h-10 rounded-md border-2 border-rose-400 text-[20px]'
          />
        </div>
        <div className='flex justify-center'>
          <textarea
            ref={descriptionRef}
            placeholder='詳細記事を入力'
            className='p-2 m-4 w-4/5 h-40 rounded-md border-2 border-rose-400 text-[20px]'
          />
        </div>
        <div className='flex justify-center'>
          <button
            type='submit'
            className='text-[24px] bg-rose-400 text-white rounded-md hover:bg-rose-500 w-12 h-6 m-2'
          >
            投稿
          </button>
        </div>
      </form>
    </div>
  );
}
