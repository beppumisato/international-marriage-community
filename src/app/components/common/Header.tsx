import Link from 'next/link';

export default function Header() {
  return (
    <div className='flex text-rose-400 bg-rose-200 h-8 text-[24px] mb-4 p-2'>
      <Link href={`/mypage/`}>＜</Link>
      <div className='ml-56'>プロフィール編集</div>
    </div>
  );
}
