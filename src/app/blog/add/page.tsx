'use client';

import React, { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { postBlog } from '@/app/repositories/blog';
import Link from 'next/link';

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
    <>
      <div className='font-kosugi px-32 mt-10'>
        <div className='w-full h-full shadow text-[18px] p-10 rounded'>
          <div className='flex border-dotted border-b-2'>
            <div className='w-40'>タイトル</div>
            <input ref={titleRef} type='text' className='w-full h-10' />
          </div>
          <div className='flex border-dotted border-b-2 mt-6'>
            <div className='w-40 mt-8'>キャプション</div>
            <textarea ref={descriptionRef} className='w-full h-20' />
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='flex justify-center gap-10 mt-28'>
          <Link href={'/timeline/'} className='buttonC hover:bg-sky-300 p-2'>
            キャンセル
          </Link>
          <button type='submit' className='button hover:bg-orange-200'>
            投稿する
          </button>
        </div>
      </form>
    </>
  );
}
