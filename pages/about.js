import Head from 'next/head';

export default function about() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <div className='text-center max-w-[90%] md:max-w-[70%] lg:max-w-[60%] m-auto text-gray-300 my-16 lg:my-4'>
        <div className='flex text-center justify-center font-bold'>
          <h1 className='text-2xl lg:text-4xl mb-4'>About</h1>
          <span className='text-cyan-500 text-2xl lg:text-4xl ml-2'>ME</span>
        </div>
        <p className='leading-8 text-md font-thin mt-8'>
          Hi, My name is Christophe Anfry, I&apos;m 39 and want to be a frontend
          developer. My background is 15 years working in hotels and
          restaurants. Then having my first child I decided that my shifts were
          not compatibles with parent lifestyle (was working during the night
          also). So I worked for the Google workspace customer service in order
          to have office and day shifts.
          <br /> From there I started get interested in web development. I
          didn&apos;t know which language to learn, so I started with HTML and
          CSS. I was facinated by all the technologies and possibilities that
          this environement could procure. From there I think i&apos;ve made all
          the possible mistakes that a beginner can make (learning different
          languages or technologies at the same time, not creating any projects,
          tutorials hell...). <br />
          This blog it&apos;s my project to become a frontend developer (or
          full-stack) if possible, who knows <span>&#128521;</span>? While
          I&apos;m learning I share my experience with you and give you tricks I
          find along the way. It&apos;s quiet a beginner approach but when you
          start it&apos;s very easy to get stuck, lost and overwhelmed, so
          showing you what to do, what to focus on or what to learn, will give
          you a better structure and more motivation to succeed. And if you want
          more advanced features I&apos;ll always redirect you to the
          corresponding articles, videos, people to follow or we can discover it
          together.
        </p>
      </div>
    </>
  );
}
