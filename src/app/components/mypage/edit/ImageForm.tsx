import { useState } from 'react';
import { uploadImage } from '../../../../../utils/supabase/supabase';
import { useUserState } from '@/app/hooks/user';

interface Props {
  headerImage: File | undefined;
  setHeaderImage: React.Dispatch<React.SetStateAction<File | undefined>>;
}

export default function ImageForm(props: Props) {
  const { user } = useUserState();

  // ファイルから選択した画像の表示
  const handleChangeHeaderImage = async (e: any) => {
    if (e.target.files.length !== 0) {
      const file = e.target.files[0];
      props.setHeaderImage(file);
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
          backgroundImage: `url(${props.headerImage ? window.URL.createObjectURL(props.headerImage) : user?.headerImageUrl})`,
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
