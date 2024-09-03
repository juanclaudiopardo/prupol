'use client';

import cogImage from '@/public/obelisco.jpg';
import Image from 'next/image';

export const About = () => {
  return (
    <section
      id='about'
      className='py-16 md:py-24 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#D2DCFF,#EAEEFE_100%)] overflow-hidden'
    >
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row items-center justify-between'>
          <div className='w-full md:w-1/2 md:pr-8 order-2 md:order-1'>
            <div className='tag'>Vigilancia 24 HS</div>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6'>
              Nuestra Misión
            </h1>
            <p className='text-lg md:text-xl text-[#010D3E] tracking-tight mt-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              nihil dolore autem laborum fuga at ducimus amet iusto doloribus
              ratione! Eligendi earum modi corporis ipsam. Ratione error nisi
              eos magnisdsd!
            </p>
          </div>
          <div className='w-full md:w-1/2 mb-8 md:mb-0 order-1 md:order-2'>
            <div className='relative w-full aspect-[3/2]'>
              <Image
                src={cogImage}
                alt='Obelisco image'
                fill
                sizes='(max-width: 768px) 100vw, 50vw'
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
                className='rounded-lg'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
