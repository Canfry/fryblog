import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  return (
    <header className='w-full bg-zinc-900'>
      <div className='max-w-[90%] m-auto py-4 flex justify-evenly items-center'>
        <div>
          <h1 className='text-cyan-500 text-2xl'>Fryblog</h1>
        </div>
        <nav>
          <ul className='flex items-center justify-between'>
            <li
              className={`ml-8 hover:text-cyan-500 ${
                router.pathname === '/' ? 'text-cyan-200' : 'white'
              }`}
              name='Home'
            >
              <Link href={'/'}>
                <a>Home</a>
              </Link>
            </li>
            <li
              className={`ml-8 hover:text-cyan-500 ${
                router.pathname === '/posts' ? 'text-cyan-500' : 'white'
              }`}
              name='posts'
            >
              <Link href={'/posts'}>
                <a>Posts</a>
              </Link>
            </li>
            <li
              className={`ml-8 hover:text-cyan-500 ${
                router.pathname === '/about' ? 'text-cyan-500' : 'white'
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
