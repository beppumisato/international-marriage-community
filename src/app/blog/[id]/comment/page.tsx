'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function CommentDisplay({ params }: { params: { id: number } }) {
  return (
    <>
      <div className='font-kosugi flex justify-end m-3 mr-20'>
        <Link href={`/blog/${params.id}/comment/add/`}>
          <button className='bg-rose-400 hover:bg-orange-200 border-white border-2 rounded-md h-10 w-32 items-center text-white'>
            コメントする
          </button>
        </Link>
      </div>

      <div className='flex justify-center mt-10'>
        <div className='bg-white w-2/3'></div>
      </div>
    </>
  );
}
