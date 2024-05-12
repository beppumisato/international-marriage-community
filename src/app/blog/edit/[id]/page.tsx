'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Modal from '@/app/components/modal/Modal';
import Link from 'next/link';
import { deleteBlog, editBlog, getBlogById } from '@/app/repositories/blog';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

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
    <div className='font-kosugi p-10'>
      <form onSubmit={handleSubmit}>
        <div className='flex mt-28'>
          <div className='justify-start w-28 h-12'>タイトル</div>
          <input ref={titleRef} type='text' className='w-full' />
        </div>
        <div className='border-b-2'></div>

        <div className='flex mt-10'>
          <div className='justify-start mt-10 w-32 h-12'>キャプション</div>
          <textarea ref={descriptionRef} className='w-full' />
        </div>
        <div className='border-b-2'></div>
        <div className='flex justify-center gap-10 mt-28'>
          <Link href={'/timeline/'}>
            <button type='submit' className='buttonC hover:bg-sky-300'>
              キャンセル
            </button>
          </Link>
          <Link href={'/timeline/'}>
            <button type='submit' className='button hover:bg-orange-200'>
              変更を保存
            </button>
          </Link>
        </div>
        <div className='grid place-items-end mt-10'>
          <button
            onClick={() => {
              setModalOpen(true);
            }}
          >
            <DeleteForeverIcon sx={{ fontSize: 70, color: '#d1d5db' }} />
          </button>
          {modalOpen && (
            <Modal setOpenModal={setModalOpen} onYes={() => handleDelete()} />
          )}
        </div>
      </form>
    </div>
  );
}
