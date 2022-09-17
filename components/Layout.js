import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className='flex-1 grid place-content-center'>{children}</main>
      <Footer />
    </>
  );
}
