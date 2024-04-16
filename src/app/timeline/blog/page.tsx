'use client';

import { useUserState } from '@/app/hooks/user';
import { Post } from '@prisma/client';
import React, { useEffect, useState } from 'react';

async function fetchAllBlogs() {
  const res = await fetch(`http://localhost:3000/api/blog`, {
    cache: 'no-store', //SSR
  });

  const data = await res.json();
  return data.posts;
}

export default function AllBlogPage() {
  const { user } = useUserState();
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    fetchAllBlogs().then((posts) => {
      setPosts(posts);
    });
  }, []);

  return (
    <div className='font-kosugi'>
      {posts.map((post) => (
        <div key={post.id} className='p-4'>
          <div>
            <div className='flex'>
              <div
                className='border-rose-100 border-2 rounded-full w-12 h-12'
                style={{
                  backgroundImage: `url(${user?.iconImageUrl})`,
                }}
              ></div>
              <div className='ml-4'>
                <div className='text-[18px] text-slate-500 pb-1'>
                  {new Date(post.createdAt).toDateString()}
                </div>
                <h1 className='text-[24px] underline'>{post.title}</h1>
                <h2 className='text-[20px]'>{post.description}</h2>
              </div>
            </div>
            <div className='mt-1 ml-3 text-[18px]'>{user?.nickname}</div>
          </div>
          <div className='border-b border-rose-200'></div>
        </div>
      ))}
      <div className='flex justify-end mt-20 mr-1 mb-1'>
        <img
          className=' bg-rose-100 rounded-full bg-opacity-50 w-6 h-6 p-1'
          src='/icon/airplan_2.png'
        ></img>
      </div>
    </div>
  );
}
