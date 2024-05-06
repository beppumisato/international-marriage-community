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
        className='bg-slate-300 w-full h-40 flex'
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
            className='mt-20 flex justify-end'
          ></img>
        </label>
        <div
          style={{
            backgroundImage: `url(${props.iconImage ? window.URL.createObjectURL(props.iconImage) : user?.iconImageUrl})`,
            backgroundSize: 'contain',
          }}
          className='items-center border-2 border-white rounded-full w-28 h-28'
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
              width={70}
              className='ml-14 mt-12'
            ></img>
          </label>
        </div>
      </div>
    </>
  );
}
