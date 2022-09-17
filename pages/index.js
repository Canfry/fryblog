import { BsGithub } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className='text-center max-w-[90%] md:max-w-[70%] lg:max-w-[60%] m-auto text-gray-300'>
        <h1 className='text-3xl xl:text-4xl mb-8 font-bold'>
          Welcome to <span className='font-bold text-cyan-400'>FryBlog</span>
        </h1>
        <p className='mb-4 xl:text-lg font-light'>
          I'll try to cover the most important topics regarding web development.
          Going from beginner's topics to more advanced ones.
          <br />
          You'll find useful informations and links to different influencers or
          official websites. My goal is to guide you through the understanding
          of the topics, how to find answers and what tool or framework to use.
          I'll use concrete exemples, real projects, Github repos, other blogs,
          streamers to follow...
        </p>
        <div className='text-center mb-6 mt-6'>
          <button className='hover:bg-cyan-500 rounded-md bg-cyan-600 text-white py-2 px-4 mb-4'>
            <Link href='/posts'>POSTS</Link>
          </button>
        </div>

        <p className='mb-4 font-bold text-sm'>FOLLOW ME ON :</p>
        <div className='flex align-center justify-center text-4xl'>
          <p>
            <Link href={'https://github.com/Canfry'}>
              <a target='_blank' rel='noreferrer'>
                <BsGithub className='text-[#6e5494]' />
              </a>
            </Link>
          </p>
          <p>
            <Link href={'https://twitter.com/design_fry'}>
              <a target='_blank' rel='noreferrer'>
                <BsTwitter className='text-[#1da1f2] ml-8' />
              </a>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
