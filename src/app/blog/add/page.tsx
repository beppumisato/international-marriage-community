'use client';

import React, { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { apiHeaders } from '../../../../utils/api';

const postBlog = async (
  title: string | undefined,
  description: string | undefined,
) => {
  const res = await fetch(`http://localhost:3000/api/blog`, {
    method: 'POST',
    headers: await apiHeaders(),
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

    router.push('/timeline/');
  };

  return (
    <div className='font-kosugi text-[24px]'>
      <form onSubmit={handleSubmit}>
        <div className='flex justify-center m-4'>
          <input
            ref={titleRef}
            placeholder='タイトルを入力する'
            type='text'
            className='border-2 border-yellow-700 rounded-md h-8 w-3/5 p-2'
          />
        </div>
        <div className='flex justify-center m-4'>
          <textarea
            ref={descriptionRef}
            placeholder='詳細記事を入力'
            className='border-2 border-yellow-700 rounded-md h-28 w-3/5 p-2'
          />
        </div>
        <div className='flex justify-center ml-64'>
          <button
            type='submit'
            className='text-white bg-orange-400 rounded-md hover:bg-orange-500 w-16 h-6'
          >
            投稿
          </button>
        </div>
      </form>
      <img className='mt-8' src='/login/design.png/'></img>
    </div>
  );
}
