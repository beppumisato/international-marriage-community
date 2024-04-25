import { useContext } from 'react';
import { CurrentUserContext } from '@/app/contexts/CurrentUserContext';

interface Props {
  headerImage: File | undefined;
  setHeaderImage: React.Dispatch<React.SetStateAction<File | undefined>>;
  iconImage: File | undefined;
  setIconImage: React.Dispatch<React.SetStateAction<File | undefined>>;
}

export default function ImageForm(props: Props) {
  const { user } = useContext(CurrentUserContext);

  // ファイルから選択した画像の表示
  const handleChangeHeaderImage = async (e: any) => {
    if (e.target.files.length !== 0) {
      const file = e.target.files[0];
      props.setHeaderImage(file);
    }
  };
  const handleChangeIconImage = async (e: any) => {
    if (e.target.files.length !== 0) {
      const file = e.target.files[0];
      props.setIconImage(file);
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
        className='relative bg-slate-300 border-2 border-yellow-700 w-full h-32 p-2'
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
          backgroundImage: `url(${props.iconImage ? window.URL.createObjectURL(props.iconImage) : user?.iconImageUrl})`,
          backgroundSize: 'contain',
        }}
        className='absolute left-60 top-24 border-yellow-700 border-2 rounded-full w-14 h-14'
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
