import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Article from '../components/Article';
import { sortByDate } from '../utils';

// Just add a dummy Article (Sass) for styling purposes

export default function posts({ posts }) {
  console.log(posts);
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      {posts.map((post, index) => (
        <Article post={post} key={index} />
      ))}
    </>
  );
}

export async function getStaticProps() {
  // Get files from articles directory
  const files = fs.readdirSync(path.join('articles'));

  // Get slug and frontmatter from articles
  const posts = files.map((filename) => {
    // create a slug
    const slug = filename.replace('.md', '');

    // Get frontmatter
    const markDownWithMeta = fs.readFileSync(
      path.join('articles', filename),
      'utf-8'
    );
    // console.log(markDownWithMeta);
    const { data: frontmatter } = matter(markDownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  console.log(posts);
  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
