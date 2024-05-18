'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Modal from '@/app/components/modal/Modal';
import Link from 'next/link';
import { deleteBlog, editBlog, getBlogById } from '@/app/repositories/blog';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function EditPage({ params }: { params: { id: number } }) {
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

  const router = useRouter();

  return (
    <div className='font-kosugi px-32 mt-10'>
      <form onSubmit={handleSubmit}>
        <div className='w-full h-full border-2 shadow text-[20px] p-10 rounded'>
          <div className='flex gap-x-10 p-4'>
            <div className='w-44 p-2'>タイトル</div>
            <input
              ref={titleRef}
              type='text'
              className='border-dotted border-b-2 w-full p-2 px-4'
            />
          </div>
          <div className='flex gap-x-10 p-4'>
            <div className='w-44 p-2 pt-10'>キャプション</div>
            <textarea
              ref={descriptionRef}
              className='border-dotted border-b-2 w-full p-2 px-4'
            />
          </div>
        </div>
        <div className='flex justify-center gap-10 mt-28'>
          <Link href={'/timeline/'}>
            <button className='buttonC hover:bg-sky-300'>キャンセル</button>
          </Link>
          {modalOpen && (
            <Modal setOpenModal={setModalOpen} onYes={() => handleDelete()} />
          )}
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
        <div className='grid place-items-end mt-10'>
          <button
            onClick={() => {
              setModalOpen(true);
            }}
          >
            <DeleteForeverIcon sx={{ fontSize: 70, color: '#d1d5db' }} />
          </button>
        </div>
      </form>
    </div>
  );
}
