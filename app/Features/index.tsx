import React from 'react';
import { featuresData } from './featuresData';
import FeatureItem from './FeatureItem';
export const Solutions = () => {
  return (
    <div
      id='solutions'
      className='bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-[72px] text-white sm:py-24'
    >
      <div className='container'>
        <h2 className='text-center text-5xl font-bold tracking-tighter sm:text-6xl text-[#031630] '>
          Soluciones integrales en seguridad privada
        </h2>
        <div className='mx-auto max-w-xl'>
          <p className='mt-5 text-balance text-center text-xl text-[#031630]/70'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus tempora quae.
          </p>
        </div>
        <div className='mt-16 flex flex-col gap-4 sm:flex-row'>
          {featuresData.map(({ id, title, description }) => (
            <FeatureItem key={id} title={title} description={description} />
          ))}
        </div>
      </div>
    </div>
  );
};
