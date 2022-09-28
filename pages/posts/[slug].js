import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Link from 'next/link';
import Image from 'next/future/image';

const css = { width: '100%', height: '100%' };

export default function postPage({
  frontmatter: { title, date, cover_image },
  slug,
  contentHtml,
}) {
  return (
    <>
      <div className='w-full text-left mb-16 md:mt-16'>
        <div className='max-w-[90%] md:max-w-[70%] lg:max-w-[60%] m-auto text-center flex flex-col items-start justify-between'>
          <Link href='/posts'>
            <a className='italic text-cyan-500'>
              &larr;<span className='text-gray-300 ml-2'>Go Back</span>
            </a>
          </Link>
        </div>
      </div>
      <div className='max-w-[90%] md:max-w-[70%] lg:max-w-[60%] m-auto flex flex-col justify-between gap-4 items-start '>
        <h1 className='uppercase font-bold text-gray-300 text-2xl md:text-3xl'>
          {title}
        </h1>
        <p className='text-gray-400'>Posted on {date}</p>
        <Image
          src={cover_image}
          alt='cover image'
          style={css}
          width={100}
          height={100}
          unoptimized={true}
          className='rounded-md rounded-b-none'
        />
      </div>
      <div
        className='max-w-[90%] md:max-w-[70%] lg:max-w-[60%] m-auto'
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      ></div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('articles'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  // console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  // console.log(slug)
  const markdownWithMeta = fs.readFileSync(
    path.join('articles', slug + '.md'),
    'utf-8'
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);
  // console.log(content);

  const processedContent = await remark().use(html).process(content);
  console.log(processedContent.value);

  const contentHtml = processedContent.value.toString();

  console.log(contentHtml);

  return {
    props: {
      frontmatter,
      slug,
      contentHtml,
    },
  };
}
