'use client';
import ArrowRight from '@/public/arrow-right.svg';

export const CallToAction = () => {
  return (
    <section
      id='contact'
      className='bg-gradient-to-b from-white to-[#D2DCFF] py-24 md:py-64 overflow-x-clip'
    >
      <div className='container'>
        <div className='max-w-[540px] mx-auto relative'>
          <h2 className='section-title'>Contactate</h2>
          <p className='section-description mt-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            velit odit sit.
          </p>
        </div>
        <div className='flex gap-2 mt-10 justify-center'>
          <button className='btn btn-primary'>Get for free</button>
          <button className='btn btn-text gap-1 '>
            <span>Learn more</span>
            <ArrowRight className='h-5 w-5' />
          </button>
        </div>
      </div>
    </section>
  );
};
