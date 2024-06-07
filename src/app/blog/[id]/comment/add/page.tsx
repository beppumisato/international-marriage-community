'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Post, User } from '@prisma/client';
import { fetchAllBlogs } from '@/app/repositories/blog/fetchAllBlogs';
import { useRouter } from 'next/navigation';

type Blog = Post & { author: User };

type Props = {
  isMyPost: boolean;
};

export default function TimelineBlogDisplay(props: Props) {
  const [posts, setPosts] = useState<Blog[]>([]);
  const descriptionRef = useRef<HTMLTextAreaElement | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetchAllBlogs(props.isMyPost).then((posts) => {
      setPosts(posts);
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  const router = useRouter();

  return (
    <div className='font-kosugi px-32'>
      <form onSubmit={handleSubmit}>
        {posts.map((post) => (
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
              className='w-full h-80 border-2 border-rose-400 text-[18px] p-2 rounded mt-3'
            />

            <div className='flex justify-center gap-10 mt-28'>
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
                変更を保存
              </button>
            </div>
          </div>
        ))}
      </form>
    </div>
  );
}
