import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';

export default function Footer() {
  return (
    <div className='bg-zinc-900 w-full py-6 px-8 text-center text-gray-400'>
      <h3>Copyright &copy; Fry Design 2022</h3>
      <div className='flex justify-center items-center mt-4 text-sm'>
        <div className='flex'>
          <p className='mr-1'>Built with Nextjs</p>
          <SiNextdotjs className='text-white' />
        </div>
        <div className='flex'>
          <p className='ml-1 mr-1'>and Tailwindcss</p>
          <SiTailwindcss className='text-cyan-400' />
        </div>
      </div>
    </div>
  );
}
