'use client';

import { fetchAllBlogs } from '@/app/repositories/blog';
import { Post, User } from '@prisma/client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

type Blog = Post & { author: User };

export default function TimelineBlogDisplay() {
  const [posts, setPosts] = useState<Blog[]>([]);

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
      <div className='bg-white p-6 ml-2 w-4/5'>
        <form onSubmit={handleSubmit}>
          {posts.map((post) => (
            <div key={post.id}>
              <div className='p-1 m-4 mb-0'>
                <div className='flex'>
                  <img
                    width={50}
                    className='rounded-full max-w-full h-auto align-middle border-2 border-yellow-700'
                    src={post.author.iconImageUrl}
                  ></img>
                  <div className='absolute text-[18px] mt-6'>
                    {post.author.nickname}
                  </div>

                  <div className='absolute left-56'>
                    <div className='text-[14px] text-slate-500'>
                      {new Date(post.createdAt).toDateString()}
                    </div>
                    <h1 className='text-[20px]'>{post.title}</h1>
                    <h2 className='text-[18px]'>{post.description}</h2>
                  </div>
                </div>
                <div className='flex justify-end'>
                  <Link
                    href={`/blog/edit/${post.id}`}
                    className='text-yellow-700 text-[20px]'
                  >
                    ...
                  </Link>
                </div>
              </div>
              <div className='border-b border-yellow-700'></div>
            </div>
          ))}
        </form>
      </div>
    </>
  );
}
