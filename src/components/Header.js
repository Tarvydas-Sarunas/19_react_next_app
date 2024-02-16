import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className='bg-gray-900 text-white'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href={'/'}>
          <h2 className='text-3xl p-3 leading-none'>Next App</h2>
        </Link>
        <nav className='flex gap-5'>
          <Link
            className='text-lg p-3 hover:bg-slate-700 hover:text-white'
            href={'/'}
          >
            Home
          </Link>
          <Link
            className='text-lg p-3 hover:bg-slate-700 hover:text-white'
            href={'/about'}
          >
            About
          </Link>
          <Link
            className='text-lg p-3 hover:bg-slate-700 hover:text-white'
            href={'/receptai'}
          >
            Receptai
          </Link>
        </nav>
      </div>
    </header>
  );
}
