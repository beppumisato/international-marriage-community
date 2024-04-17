'use client';

import { useUserState } from '@/app/hooks/user';
import { Post } from '@prisma/client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

async function fetchAllBlogs() {
  const res = await fetch(`http://localhost:3000/api/blog`, {
    cache: 'no-store', //SSR
  });

  const data = await res.json();
  return data.posts;
}

export default function AllBlogPage() {
  // TODO: userの取得先を変える
  const { user } = useUserState();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchAllBlogs().then((posts) => {
      setPosts(posts);
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='font-kosugi p-2'>
          {posts.map((post) => (
            <div key={post.id} className='p-2 pt-0 m-2 mt-0'>
              <div>
                <div className='flex'>
                  <div
                    className='border-rose-100 border-2 rounded-full w-10 h-10'
                    style={{
                      backgroundImage: `url(${user?.iconImageUrl})`,
                    }}
                  ></div>
                  <div className='absolute left-24'>
                    <div className='text-[16px] text-slate-500'>
                      {new Date(post.createdAt).toDateString()}
                    </div>
                    <h1 className='mt-2 text-[20px]'>{post.title}</h1>
                    <h2 className='mt-1 text-[18px]'>{post.description}</h2>
                  </div>
                </div>
                <div className='absolute left-6 text-[18px]'>
                  {user?.nickname}
                </div>
                <div className='flex justify-end'>
                  <Link
                    href={`/blog/edit/${post.id}`}
                    className='text-rose-300 text-[24px]'
                  >
                    ...
                  </Link>
                </div>
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
      </form>
    </>
  );
}
