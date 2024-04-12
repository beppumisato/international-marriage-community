import { useState } from 'react';
import { supabase } from '../../../../../utils/supabase/supabase';

const uploadImage = async (file: File, filePath: string) => {
  await supabase.storage.from('public-image-bucket').upload(filePath, file);

  //画像の表示
  const { data } = supabase.storage
    .from('public-image-bucket')
    .getPublicUrl(filePath);
  if (data) {
    const imageUrl = data.publicUrl;

    console.log(imageUrl);
  }
};

export default function ImageForm() {
  // handleChangeFile(e)`の実行
  const [headerImage, setHeaderImage] = useState<File>();
  const handleChangeHeaderImage = async (e: any) => {
    if (e.target.files.length !== 0) {
      const file = e.target.files[0];
      setHeaderImage(file);
      const filePath = `header-image/${file.name}`;
      await uploadImage(file, filePath);
    }
  };

  const [iconImage, setIconImage] = useState<File>();
  const handleChangeIconImage = async (e: any) => {
    if (e.target.files.length !== 0) {
      const file = e.target.files[0];
      setIconImage(file);
      const filePath = `icon-image/${file.name}`;
      await uploadImage(file, filePath);
    }
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${headerImage ? window.URL.createObjectURL(headerImage) : ''})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
        className='relative bg-slate-300 w-full h-24 p-2'
      >
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
      <div
        style={{
          backgroundImage: `url(${iconImage ? window.URL.createObjectURL(iconImage) : ''})`,
          backgroundSize: 'contain',
        }}
        className='absolute left-60 top-20 border-rose-200 border-2 rounded-full w-14 h-14'
      >
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
