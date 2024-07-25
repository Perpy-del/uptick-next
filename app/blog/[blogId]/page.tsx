'use client';

import NavBar from '@/components/NavBar';
import { useRouter } from 'next/navigation';
import { useUptickHook } from '@/hooks/useUptickHook';
import { useEffect } from 'react';
import { dateFormatter } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const BlogPost = ({params} : {params: {blogId: string}}) => {
  const { getBlog, blogPost } = useUptickHook();
  const router = useRouter();

  useEffect(() => {
    getBlog(params.blogId);
  }, [getBlog, params.blogId]);

  if (!blogPost) {
    <div className='flex items-center justify-center bg-slate-50 text-black dark:bg-[#212529] dark:text-white'>
      <h1>Loading...</h1>
    </div>
  }

  return (
    <div className="bg-slate-50 text-black dark:bg-[#212529] dark:text-white">
      <NavBar activeCategory={undefined} setActiveCategory={undefined} />
      <div className="px-5 md:px-10 lg:px-20">
        <Button className='mb-3' onClick={() => router.push('/blog')}> Go Back </Button>
        <div className="pt-10 pb-5 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-5xl font-semibold font-serif pb-2">
            {blogPost?.title}
          </h1>
          <p className="font-light text-gray-400 pb-5">
            {dateFormatter(blogPost?.updatedAt)} by{' '}
            <span className="cursor-pointer font-normal text-blue-400 underline hover:text-blue-300">
              {blogPost?.author}
            </span>
          </p>
          <p>
            {blogPost?.body}
          </p>
        </div>
        <p className="py-5"></p>
      </div>
    </div>
  );
};

export default BlogPost;