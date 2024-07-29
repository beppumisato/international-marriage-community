'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { deleteBlog, editBlog, getBlogById } from '@/app/repositories/blog';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DeleteModal from '@/app/components/modal/DeleteModal';

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
    <div className='font-kosugi px-32'>
      <form onSubmit={handleSubmit}>
        <input
          ref={titleRef}
          type='text'
          placeholder='記事タイトル'
          className='w-full h-10 border-2 text-[20px] p-2 rounded mt-10'
        />
        <input
          type='text'
          placeholder='タグを入力してください。◯個まで入力できます。'
          className='w-full h-10 border-2 text-[20px] p-2 rounded mt-3'
        />
        <textarea
          ref={descriptionRef}
          placeholder='国際結婚にまつわる問題や悩みにおいて、あなたの経験から役立つと思う情報を書いて共有しよう。'
          className='w-full h-80 border-2 text-[18px] p-2 rounded mt-3'
        />

        <div className='flex justify-center gap-10 mt-28'>
          <Link href={'/timeline/'}>
            <button className='buttonC hover:bg-sky-300'>キャンセル</button>
          </Link>
          {modalOpen && (
            <DeleteModal
              setOpenModal={setModalOpen}
              onYes={() => handleDelete()}
            />
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
