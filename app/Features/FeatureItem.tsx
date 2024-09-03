'use client';
import React, { useEffect, useRef, useState } from 'react';
import EcosystemIcon from '@/public/ecosystem.svg';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

const FeatureItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateMousePosition = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      offsetX.set(e.clientX - rect.left);
      offsetY.set(e.clientY - rect.top);
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
      setIsHovered(false);
      offsetX.set(0);
      offsetY.set(0);
    };

    if (isHovered) {
      container.addEventListener('mousemove', updateMousePosition);
    }

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', updateMousePosition);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isHovered, offsetX, offsetY]);

  return (
    <div
      ref={containerRef}
      className='relative rounded-xl border border-[#031630]/30 px-5 py-10 text-center sm:flex-1'
    >
      <motion.div
        className='absolute inset-0 rounded-xl border-2 border-[#031630]'
        style={{
          maskImage,
          WebkitMaskImage: maskImage,
          opacity: isHovered ? 1 : 0,
        }}
      ></motion.div>
      <div className='inline-flex h-14 w-14 items-center justify-center rounded-lg bg-white text-black'>
        <EcosystemIcon />
      </div>
      <h3 className='mt-6 font-bold text-[#031630]'>{title}</h3>
      <p className='mt-2 text-[#031630]/70'>{description}</p>
    </div>
  );
};

export default FeatureItem;
