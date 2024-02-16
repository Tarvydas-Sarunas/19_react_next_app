import Image from 'next/image';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export default function About() {
  return (
    <>
      <Header />
      <div className='container bg-slate-200 p-10'>
        <h1 className='text-5xl my-4 font-semibold'>About us</h1>
        <p></p>
      </div>
    </>
  );
}
