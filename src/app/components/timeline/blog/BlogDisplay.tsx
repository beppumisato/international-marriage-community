'use client';

import { fetchAllBlogs } from '@/app/repositories/blog/fetchAllBlogs';
import { Post, User } from '@prisma/client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutline from '@mui/icons-material/ChatBubbleOutline';

type Blog = Post & { author: User };

type Props = {
  isMyPost: boolean;
};

export default function TimelineBlogDisplay(props: Props) {
  const [posts, setPosts] = useState<Blog[]>([]);

  useEffect(() => {
    fetchAllBlogs(props.isMyPost).then((posts) => {
      setPosts(posts);
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <div className='bg-white w-4/5'>
        <form onSubmit={handleSubmit}>
          {posts.map((post) => (
            <div key={post.id}>
              <div className='shadow flex justify-between m-4 rounded-md'>
                <div className='p-6'>
                  <img
                    width={50}
                    className='rounded-full max-w-full h-auto align-middle'
                    src={post.author.iconImageUrl}
                  ></img>
                </div>

                <div className='w-5/6 p-2'>
                  <div className='flex'>
                    <div className='text-[14px]'>{post.author.nickname}</div>
                    <div className='text-[12px] text-slate-400 ml-4'>
                      {new Date(post.createdAt).toDateString()}
                    </div>
                  </div>
                  <h1 className='text-[18px] mt-2'>{post.title}</h1>
                  <h2 className='text-[14px]'>{post.description}</h2>
                </div>
                <div className='mt-14 p-2 text-slate-400 flex gap-x-4'>
                  <FavoriteBorder sx={{ fontSize: 20, color: 'slate-400' }} />
                  <ChatBubbleOutline
                    sx={{ fontSize: 20, color: 'slate-400' }}
                  />
                  <Link href={`/blog/edit/${post.id}`}>...</Link>
                </div>
              </div>
            </div>
          ))}
        </form>
      </div>
    </>
  );
}
