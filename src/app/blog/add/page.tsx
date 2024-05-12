'use client';

import React, { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { postBlog } from '@/app/repositories/blog';

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
    <div className='font-kosugi p-10'>
      <form onSubmit={handleSubmit}>
        <div className='flex mt-28'>
          <div className='justify-start w-20 h-12'>タイトル</div>
          <input ref={titleRef} type='text' className='w-full' />
        </div>
        <div className='border-b-2'></div>
        <div className='flex mt-10'>
          <div className=' justify-start mt-10 w-32 h-12'>キャプション</div>
          <textarea ref={descriptionRef} className='w-full' />
        </div>
        <div className='border-b-2'></div>
        <div className='flex justify-center gap-10 mt-28'>
          <button type='submit' className='buttonC hover:bg-sky-300'>
            キャンセル
          </button>
          <button type='submit' className='button hover:bg-orange-200'>
            投稿する
          </button>
        </div>
      </form>
    </div>
  );
}
