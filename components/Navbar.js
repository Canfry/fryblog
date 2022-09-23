import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  return (
    <header className='w-full bg-zinc-900'>
      <div className='max-w-[90%] md:max-w-[70%] lg:max-w-[60%] m-auto py-4 flex justify-between items-center'>
        <div>
          <Link href={'/'}>
            <a className='text-cyan-500 text-2xl'>Fryblog</a>
          </Link>
        </div>
        <nav>
          <ul className='flex items-center justify-between'>
            <li
              className={`ml-8 hover:text-cyan-500  ${
                router.pathname === '/' ? 'white' : 'text-gray-400'
              } ${
                router.pathname === '/'
                  ? 'border-b-4 border-cyan-500'
                  : 'border-none'
              }`}
              name='Home'
            >
              <Link href={'/'}>
                <a>Home</a>
              </Link>
            </li>
            <li
              className={`ml-8 hover:text-cyan-500 ${
                router.pathname === '/posts' && '/posts/*'
                  ? 'white'
                  : 'text-gray-400'
              } ${
                router.pathname === '/posts' && '/posts/*'
                  ? 'border-b-4 border-cyan-500'
                  : 'border-none'
              }`}
              name='posts'
            >
              <Link href={'/posts'}>
                <a>Posts</a>
              </Link>
            </li>
            <li
              className={`ml-8 hover:text-cyan-500 ${
                router.pathname === '/about' ? 'white' : 'text-gray-400'
              } ${
                router.pathname === '/about'
                  ? 'border-b-4 border-cyan-500'
                  : 'border-none'
              }`}
              name='about'
            >
              <Link href={'/about'}>
                <a>About</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
