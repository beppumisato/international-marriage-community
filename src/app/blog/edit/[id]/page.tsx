'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Modal from '@/app/components/modal/Modal';
import Link from 'next/link';
import { deleteBlog, editBlog, getBlogById } from '@/app/repositories/blog';

export default function EditPage({ params }: { params: { id: number } }) {
  const router = useRouter();
  const titleRef = useRef<HTMLInputElement | null>(null);
  const descriptionRef = useRef<HTMLTextAreaElement | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await editBlog(
      titleRef.current?.value,
      descriptionRef.current?.value,
      params.id,
    );
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
    <div className='font-kosugi text-[24px]'>
      <form onSubmit={handleSubmit}>
        <div className='flex justify-center m-4'>
          <input
            ref={titleRef}
            placeholder='タイトルを入力する'
            type='text'
            className='border-2 border-yellow-700 rounded-md h-8 w-3/5 p-2'
          />
        </div>
        <div className='flex justify-center m-4'>
          <textarea
            ref={descriptionRef}
            placeholder='詳細記事を入力'
            className='border-2 border-yellow-700 rounded-md h-28 w-3/5 p-2'
          />
        </div>
        <div className='flex justify-center ml-48'>
          <button
            onClick={() => {
              setModalOpen(true);
            }}
            className='text-white bg-sky-300 rounded-md hover:bg-sky-400 w-16 h-6'
          >
            削除
          </button>
          {modalOpen && (
            <Modal setOpenModal={setModalOpen} onYes={() => handleDelete()} />
          )}
          <Link href={'/timeline/'}>
            <button
              type='submit'
              className='text-white bg-orange-400 rounded-md hover:bg-orange-500 w-16 h-6 ml-1'
            >
              完了
            </button>
          </Link>
        </div>
      </form>
      <img className='mt-8' src='/login/design.png/'></img>
    </div>
  );
}
