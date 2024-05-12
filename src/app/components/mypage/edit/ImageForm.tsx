import { useContext } from 'react';
import { CurrentUserContext } from '@/app/contexts/CurrentUserContext';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

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
    <div className='px-32 mt-6'>
      <div
        style={{
          backgroundImage: `url(${props.headerImage ? window.URL.createObjectURL(props.headerImage) : user?.headerImageUrl})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
        className='bg-slate-300 w-full h-60 flex'
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
          <CameraAltIcon sx={{ fontSize: 50, color: 'white' }} />
        </label>
        <div
          style={{
            backgroundImage: `url(${props.iconImage ? window.URL.createObjectURL(props.iconImage) : user?.iconImageUrl})`,
            backgroundSize: 'contain',
          }}
          className='border-2 border-white rounded-full w-32 h-32'
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
            <CameraAltIcon sx={{ fontSize: 30, color: 'white' }} />
          </label>
        </div>
      </div>
    </div>
  );
}
