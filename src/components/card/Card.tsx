import React from 'react';
import Image from 'next/image';

interface CardProps {
  text: string;
  imgSrc: string;
  imgAlt: string;
}
const Card = ({ text, imgSrc, imgAlt }: CardProps) => {
  return (
    <div className="relative max-w-sm overflow-hidden rounded shadow-lg transition-all">
      <div className="absolute z-20 h-full w-full bg-black opacity-0 transition-all hover:opacity-5" />
      <div className="relative z-10 h-[300px] w-[400px]">
        <Image
          fill
          src={imgSrc}
          alt={imgAlt}
          sizes="(max-width: 400px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">
          {text.replaceAll('-', ' ')}
        </div>
      </div>
    </div>
  );
};

export default Card;
