import Link from 'next/link';
import Image from 'next/future/image';

const css = { width: '100%', height: '100%' };

export default function Article({ post }) {
  return (
    <>
      <Link href={`/posts/${post.slug}`}>
        <a className='max-w-[90%] md:max-w-[70%] lg:max-w-[55%] m-auto flex flex-col items-center justify-center shadow-md shadow-cyan-500 mt-8'>
          <div className='w-full h-[60%] '>
            <Image
              src={post.frontmatter.cover_image}
              alt='Picture of a computer with code'
              style={css}
              width={100}
              height={100}
              unoptimized={true}
              className='rounded-md rounded-b-none'
            />
          </div>

          <div className='p-8 rounded-md rounded-t-none m-auto w-full flex flex-col items-start gap-4'>
            <h1 className='text-3xl uppercase font-bold text-gray-300'>
              {post.frontmatter.title}
            </h1>
            <p className='text-gray-400'>{post.frontmatter.date}</p>
            <p className='text-gray-300'>{post.frontmatter.excerpt}</p>
          </div>
        </a>
      </Link>
    </>
  );
}
