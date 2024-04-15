export default function ImageForm() {
  return (
    <div className='relative bg-slate-300 w-full h-24 p-2'>
      <button type='submit'>
        <img
          className='absolute right-0 bottom-0'
          src='/icon/camera.png'
          width={80}
        ></img>
      </button>
      <div className='absolute left-60 top-4 border-rose-200 border-2 rounded-full w-14 h-14'></div>
      <button type='submit'>
        <img
          className='absolute right-60 top-12'
          src='/icon/camera.png'
          width={80}
        ></img>
      </button>
    </div>
  );
}
