'use client';

import React, { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { postBlog } from '@/app/repositories/blog';
import Link from 'next/link';
import HeaderTimeline from '@/app/components/common/HeaderTimeline';

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
      <HeaderTimeline />
      <div className='font-kosugi px-32'>
        <input
          ref={titleRef}
          type='text'
          className='w-full h-10 border-2 text-[20px] p-2 rounded mt-10'
        />
        <input
          ref={titleRef}
          type='text'
          className='w-full h-10 border-2 text-[20px] p-2 rounded mt-3'
        />
        <textarea
          ref={descriptionRef}
          className='w-full h-80 border-2 text-[18px] p-2 rounded mt-3'
        />
      </div>
      {/* <form onSubmit={handleSubmit}>
        <div className='flex justify-center gap-10 mt-28'>
          <Link href={'/timeline/'} className='buttonC hover:bg-sky-300 p-2'>
            キャンセル
          </Link>
          <button type='submit' className='button hover:bg-orange-200'>
            投稿する
          </button>
        </div>
      </form> */}
    </>
  );
}
