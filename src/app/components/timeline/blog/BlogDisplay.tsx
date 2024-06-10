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
      <div className='bg-white w-4/6'>
        <form onSubmit={handleSubmit}>
          {posts.map((post) => (
            <div key={post.id}>
              <div className='shadow flex justify-between mx-4 mb-4 rounded-md h-40 p-4'>
                <div>
                  <img
                    width={50}
                    className='rounded-full max-w-full h-auto align-middle'
                    src={post.author.iconImageUrl}
                  ></img>
                </div>

                <div className='w-5/6 p-2'>
                  <div className='text-[14px]'>{post.author.nickname}</div>
                  <div className='text-[12px] text-slate-400'>
                    {new Date(post.createdAt).toDateString()}
                  </div>
                  <div>
                    <h1 className='mt-2 text-[24px]'>{post.title}</h1>
                    <div className='text-[14px] mt-4'>関連タグ</div>
                  </div>
                </div>
                <div className='text-slate-400 flex gap-x-4 items-end'>
                  <FavoriteBorder sx={{ fontSize: 20, color: 'slate-400' }} />
                  <a href={`/blog/${post.id}/comment/add/`}>
                    <ChatBubbleOutline
                      sx={{ fontSize: 20, color: 'slate-400' }}
                    />
                  </a>
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
