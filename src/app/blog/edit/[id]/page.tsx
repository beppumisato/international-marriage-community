'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Anybody } from 'next/font/google';
import { apiHeaders } from '../../../../../utils/api';

const editBlog = async (
  title: string | undefined,
  description: string | undefined,
  id: number,
) => {
  const res = await fetch(`http://localhost:3000/api/blog/${id}`, {
    method: 'PUT',
    headers: await apiHeaders(),
    body: JSON.stringify({ title, description, id }),
  });

  return res.json();
};

const getBlogById = async (id: number) => {
  const res = await fetch(`http://localhost:3000/api/blog/${id}`);
  const data = await res.json();
  return data.post;
};

const deleteBlog = async (id: number) => {
  const res = await fetch(`http://localhost:3000/api/blog/${id}`, {
    method: 'DELETE',
    headers: await apiHeaders(),
  });

  return res.json();
};

export default function EditPage({ params }: { params: { id: number } }) {
  const router = useRouter();
  const titleRef = useRef<HTMLInputElement | null>(null);
  const descriptionRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await editBlog(
      titleRef.current?.value,
      descriptionRef.current?.value,
      params.id,
    );

    router.push('/timeline/allblog');
  };

  const handleDelete = async () => {
    await deleteBlog(params.id);
  };

  useEffect(() => {
    getBlogById(params.id)
      .then((data) => {
        console.log(data);
        if (titleRef.current && descriptionRef.current) {
          titleRef.current.value = data.title;
          descriptionRef.current.value = data.description;
        }
      })
      .catch((err) => {});
  }, []);

  return (
    <div className='font-kosugi'>
      <div className='flex text-rose-400 bg-rose-200 h-6 text-[24px] mb-4 p-2'>
        <Link href={`/timeline/allblog/`}>＜</Link>
        <div className='ml-60'>投稿編集</div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className='flex justify-center'>
          <input
            ref={titleRef}
            placeholder='タイトルを入力する'
            type='text'
            className='p-2 m-4 w-4/5 h-10 rounded-md border-2 border-rose-200 text-[20px]'
          />
        </div>
        <div className='flex justify-center'>
          <textarea
            ref={descriptionRef}
            placeholder='詳細記事を入力'
            className='p-2 m-4 w-4/5 h-40 rounded-md border-2 border-rose-400 text-[20px]'
          />
        </div>
        <div className='flex justify-center'>
          <button
            onClick={handleDelete}
            className='text-[24px] bg-sky-400 text-white rounded-md hover:bg-sky-500 w-12 h-6 m-2'
          >
            削除
          </button>

          <button
            type='submit'
            className='text-[24px] bg-rose-400 text-white rounded-md hover:bg-rose-500 w-12 h-6 m-2'
          >
            完了
          </button>
        </div>
      </form>
    </div>
  );
}
