import Link from 'next/link';

interface Props {
  title: string;
  url: string;
}

export default function Header(props: Props) {
  return (
    <div className='flex text-rose-400 bg-rose-200 h-8 text-[24px] mb-4 p-2'>
      <Link href={props.url}>＜</Link>
      <div className='ml-56'>{props.title}</div>
    </div>
  );
}
