'use client';

import { postComment } from '@/app/repositories/comment';
import { useRouter } from 'next/navigation';
import React, { useRef } from 'react';

type Props = {
  blogId: number;
};

export default function AddComment(props: Props) {
  const router = useRouter();
  const descriptionRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await postComment(descriptionRef.current?.value, props.blogId);

    // router.push('/timeline/');
  };

  return (
    <>
      <div className='font-kosugi fixed bg-white border-t-2 w-full h-60 bottom-0 p-1 px-2'>
        <div className='flex justify-center gap-x-2 p-10'>
          <textarea
            ref={descriptionRef}
            placeholder='コメントする'
            className='w-full h-full border-2 text-[20px] p-1 px-2 rounded'
          />
          <form onSubmit={handleSubmit}>
            <button className='bg-rose-400 hover:bg-orange-200 border-white border-2 rounded-md w-24 h-10 items-center text-white mt-8'>
              送信
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
