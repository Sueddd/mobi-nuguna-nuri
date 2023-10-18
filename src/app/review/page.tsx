'use client';
import { useAtom } from 'jotai';
import { useEffect } from 'react';

import { ReviewApi } from '@/api/reviewAPI';
import { reviewPostAtom } from '@/types/review/atom';

import CommentForm from './_components/CommentForm';
import OneReivew from './_components/OneReivew';

const Review = () => {
  const [dataList, setDataList] = useAtom(reviewPostAtom);

  useEffect(() => {
    ReviewApi().then((data) => setDataList(data));
  });

  return (
    <div className='flex flex-col items-center max-w-xl m-auto'>
      <h1 className='text-2xl font-bold my-16'>후기 남기기</h1>
      <CommentForm />
      {dataList?.map((item) => (
        <div className='w-full' key={item.id}>
          <OneReivew item={item} key={item.id} />
        </div>
      ))}
    </div>
  );
};

export default Review;
