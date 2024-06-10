'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Post, User } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { getBlogById } from '@/app/repositories/blog';

type Blog = Post & { author: User };

type Props = {
  isMyPost: boolean;
};

export default function CommentAddPage({ params }: { params: { id: number } }) {
  const [post, setPost] = useState<Blog | null>(null);
  const descriptionRef = useRef<HTMLTextAreaElement | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    getBlogById(params.id)
      .then((data) => {
        console.log(data);
        setPost(data);
      })
      .catch((err) => {});
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  const router = useRouter();

  return (
    <div className='font-kosugi px-32'>
      {/* post(Blog)が取れた時だけ表示する */}
      {post && (
        <form onSubmit={handleSubmit}>
          <div key={post.id}>
            <div className='w-full h-10 border-2 text-[20px] p-2 rounded mt-10'>
              {post.title}
            </div>
            <div className='w-full h-80 border-2 text-[18px] p-2 rounded mt-3'>
              {post.description}
            </div>
            <textarea
              ref={descriptionRef}
              placeholder='疑問に思ったことがあれば質問して聞いてみよう。'
              className='w-full h-80 border-2 border-slate-500 text-[18px] p-2 rounded mt-3'
            />

            <div className='flex justify-center gap-10 mt-10'>
              <Link href={'/timeline/'}>
                <button className='buttonC hover:bg-sky-300'>キャンセル</button>
              </Link>
              <button
                onClick={() => {
                  setModalOpen(true);
                  router.back();
                }}
                type='submit'
                className='button hover:bg-orange-200'
              >
                コメントする
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
