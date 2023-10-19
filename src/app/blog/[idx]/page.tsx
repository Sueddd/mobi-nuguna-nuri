import Image from 'next/image';

import { getSortedPostsData } from '@/api/blogApi';

const PostDetail = ({ params }: { params: { idx: number } }) => {
  const posts = getSortedPostsData();
  const data = posts?.filter((v) => v.idx == params.idx);

  const { img, title, date, content } = data[0];
  return (
    <div className='flex border border-slate-300 my-9 p-5 cursor-pointer'>
      <Image src={img} alt={title} width={200} height={700} priority />
      <div className='ml-10'>
        <div className='mt-3 font-semibold'>{title}</div>
        <div className='text-sm text-slate-400'>{date}</div>
        <div className='mt-10 font-semibold'>{content}</div>
      </div>
    </div>
  );
};
export default PostDetail;
