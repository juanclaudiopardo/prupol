import React from 'react';
import logo from '@/public/logosaas.png';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='bg-black text-[#DCDCDC] text-sm py-10 text-center'>
      <div className='container'>
        <div className="inline-flex relative before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:blur before:bottom-0 before:top-2">
          <Image src={logo} height={40} alt='sass logo' className='relative' />
        </div>
        <p className='mt-6'>&copy;2024 your company all right reserved.</p>
      </div>
    </footer>
  );
};
