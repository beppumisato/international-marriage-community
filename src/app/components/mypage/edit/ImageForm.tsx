import { useEffect, useState } from 'react';

export default function ImageForm() {
  const [urlList, setUrlList] = useState<string[]>([]);
  const [loadingState, setLoadingState] = useState('hidden');
  //画像表示のメインの実装
  const listAllImage = async () => {
    const tempUrlList: string[] = [];
    setLoadingState('flex justify-center');
    const { data, error } = await supabase.storage
      .from('private-image-bucket')
      .list('img', {
        limit: 100,
        offset: 0,
        sortBy: { column: 'created_at', order: 'desc' },
      });
    if (error) {
      console.log(error);
      return;
    }
    const fileList = data;

    for (let index = 0; index < fileList.length; index++) {
      if (fileList[index].name != '.emptyFolderPlaceholder') {
        const filePath = `img/${fileList[index].name}`;
        const { data, error } = await supabase.storage
          .from('private-image-bucket')
          .createSignedUrl(filePath, 300);
        if (error) {
          console.log(error);
          return;
        }
        tempUrlList.push(data.signedUrl);
      }
    }
    setUrlList(tempUrlList);
    setLoadingState('hidden');
  };

  useEffect(() => {
    (async () => {
      await listAllImage(); //アップロード成功後に画像表示のリロード
    })();
  }, []);

  //handleChangeFile(e)`の実行
  const [file, setFile] = useState<File>();
  const handleChangeFile = (e: any) => {
    if (e.target.files.length !== 0) {
      setFile(e.target.files[0]);
    }
  };

  //onSubmit`の実行
  const onSubmit = async (event: any) => {
    event.preventDefault();

    if (file!!.type.match('image.*')) {
      const fileExtension = file!!.name.split('.').pop();
      const { error } =
        //SupabaseのStorageへのアップロード
        await supabase.storage
          .from('private-image-bucket')
          .upload(`img/${uuidv4()}.${fileExtension}`, file!!);

      if (error) {
        alert('エラーが発生しました：' + error.message);
        return;
      }
      setFile(undefined);

      await listAllImage();
    } else {
      alert('画像ファイル以外はアップロード出来ません。');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='relative bg-slate-300 w-full h-24 p-2'>
        <label className='file__label'>
          <input
            type='file'
            id='formFile'
            accept='image/*'
            onChange={(e) => {
              handleChangeFile(e);
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
              handleChangeFile(e);
            }}
          />
          <img
            src='/icon/camera.png'
            width={80}
            className='absolute left-8 top-8'
          ></img>
        </label>
      </div>
    </form>
  );
}
