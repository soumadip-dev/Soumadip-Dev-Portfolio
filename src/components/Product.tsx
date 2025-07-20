'use client';
import { Product } from '@/types/products';
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';
import { Heading } from './Heading';
import { Paragraph } from './Paragraph';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export const SingleProduct = ({ product }: { product: Product }) => {
  const [activeImage, setActiveImage] = useState<StaticImageData | string>(product.thumbnail);
  const router = useRouter();

  return (
    <div className="py-10">
      <button
        onClick={() => router.back()}
        className="p-2 hover:bg-gray-100 rounded-full transition-colors mb-6"
        aria-label="Go back"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5"></path>
          <path d="M12 19l-7-7 7-7"></path>
        </svg>
      </button>

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        key={product.slug}
        className="relative"
      >
        <Image
          src={activeImage}
          alt="thumbnail"
          height="1000"
          width="1000"
          className="rounded-md object-contain"
        />
        <div className="absolute bottom-0 bg-white h-40 w-full [mask-image:linear-gradient(to_bottom,transparent,white)]" />
      </motion.div>
      <div className="flex flex-row justify-center my-8 flex-wrap"></div>
      <div className="flex lg:flex-row justify-between items-center flex-col mt-20">
        <Heading className="font-black mb-2 pb-1"> {product.title}</Heading>
        <div className="flex space-x-2 md:mb-1 mt-2 md:mt-0">
          {product.stack?.map((stack: string) => (
            <span
              key={stack}
              className="text-xs md:text-xs lg:text-xs bg-gray-50 px-2 py-1 rounded-sm text-secondary"
            >
              {stack}
            </span>
          ))}
        </div>
      </div>
      <div>
        <Paragraph className="max-w-xl mt-4">{product.description}</Paragraph>
      </div>
      <div className="prose prose-sm md:prose-base max-w-none text-neutral-600">
        {product?.content}
      </div>

      <div className="flex flex-wrap gap-4 mt-8">
        <a
          href={product.href}
          target="__blank"
          className="inline-flex items-center gap-2 group/button rounded-lg hover:scale-105 focus:outline-none transition bg-gray-800 text-white shadow-lg shadow-black/20 px-6 py-3 text-sm font-medium hover:bg-gray-700 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
        >
          Live Preview
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 group-hover/button:translate-x-0.5 transition-transform"
          >
            <path d="M5 12l14 0"></path>
            <path d="M13 18l6 -6"></path>
            <path d="M13 6l6 6"></path>
          </svg>
        </a>

        {product.github && (
          <a
            href={product.github}
            target="__blank"
            className="inline-flex items-center gap-2 group/button rounded-lg hover:scale-105 focus:outline-none transition bg-white text-gray-800 shadow-lg shadow-black/20 border border-gray-200 px-6 py-3 text-sm font-medium hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
          >
            Source Code
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 group-hover/button:translate-x-0.5 transition-transform"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C7 3.5 6 3.5 6 3.5c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 5 9.5c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};
