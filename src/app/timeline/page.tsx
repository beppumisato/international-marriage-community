'use client';

import Header from '@/app/components/common/Header';
import { Post, User } from '@prisma/client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

async function fetchAllBlogs() {
  const res = await fetch(`http://localhost:3000/api/blog`, {
    cache: 'no-store', //SSR
  });

  const data = await res.json();
  return data.posts;
}

type Blog = Post & { author: User };

export default function AllBlogPage() {
  const [posts, setPosts] = useState<Blog[]>([]);

  useEffect(() => {
    fetchAllBlogs().then((posts) => {
      setPosts(posts);
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='font-kosugi'>
          {posts.map((post) => (
            <div key={post.id}>
              <div>
                <div className='flex'>
                  <img
                    width={50}
                    className='rounded-full max-w-full h-auto align-middle border-none'
                    src={post.author.iconImageUrl}
                  ></img>
                  <div className='absolute left-24'>
                    <div className='text-[14px] text-slate-500'>
                      {new Date(post.createdAt).toDateString()}
                    </div>
                    <h1 className='text-[20px]'>{post.title}</h1>
                    <h2 className='text-[18px]'>{post.description}</h2>
                  </div>
                </div>
                <div className='absolute left-6 text-[18px]'>
                  {post.author.nickname}
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
          {/* <img src='/icon/airplan_2.png' onClick={returnTop}></img> */}
        </div>
      </form>
    </>
  );
}
