import Link from 'next/link';

export const Hero = () => {
  return (
    <section
      id='#'
      className='relative h-screen bg-[url("/obelisco.webp")] bg-cover bg-center bg-no-repeat flex items-center justify-center'
    >
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='relative z-10 container mx-auto px-4 text-center'>
        <div className='max-w-3xl mx-auto'>
          <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-6 '>
            Prupol Seguridad
          </h1>
          <p className='text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto'>
            Fundada en 1967. Socios Fundadores de C.A.E.S.I.
          </p>
          <Link
            href='#customers'
            className='btn btn-primary text-lg px-8 py-3 transition duration-300 ease-in-out hover:border-yellow-500 hover:text-yellow-500'
          >
            Conocenos
          </Link>
        </div>
      </div>
    </section>
  );
};
