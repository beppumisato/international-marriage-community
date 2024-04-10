import { useState } from 'react';

export default function ImageForm() {
  // handleChangeFile(e)`の実行
  const [headerImage, setHeaderImage] = useState<File>();
  const handleChangeHeaderImage = (e: any) => {
    if (e.target.files.length !== 0) {
      setHeaderImage(e.target.files[0]);
    }
  };

  // handleChangeFile(e)`の実行
  const [iconImage, setIconImage] = useState<File>();
  const handleChangeIconImage = (e: any) => {
    if (e.target.files.length !== 0) {
      setIconImage(e.target.files[0]);
    }
  };

  return (
    <>
      <div className='relative bg-slate-300 w-full h-24 p-2'>
        <label className='file__label'>
          <input
            type='file'
            id='formFile'
            accept='image/*'
            onChange={(e) => {
              handleChangeHeaderImage(e);
            }}
          />
          <img
            src='/icon/camera.png'
            width={80}
            className='absolute right-0 bottom-0'
          ></img>
        </label>
      </div>
      <div className='absolute left-60 top-20 border-rose-200 border-2 rounded-full w-14 h-14'>
        <label className='file__label'>
          <input
            type='file'
            id='formFile'
            accept='image/*'
            onChange={(e) => {
              handleChangeIconImage(e);
            }}
          />
          <img
            src='/icon/camera.png'
            width={80}
            className='absolute left-8 top-8'
          ></img>
        </label>
      </div>
    </>
  );
}
