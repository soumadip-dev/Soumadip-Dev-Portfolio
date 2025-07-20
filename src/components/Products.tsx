'use client';
import React from 'react';
import { Product } from '@/types/products';
import { products } from '@/constants/products';
import Link from 'next/link';
import Image from 'next/image';
import { Paragraph } from './Paragraph';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const Products = () => {
  return (
    <div className="space-y-6">
      {products.map((product: Product, idx: number) => (
        <motion.div
          key={product.href}
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{ duration: 0.2, delay: idx * 0.1 }}
        >
          <Link
            href={product.slug ? `/projects/${product.slug}` : product.href}
            className="group flex flex-col md:flex-row gap-5 hover:bg-gray-50/50 rounded-xl p-4 transition-all duration-200"
          >
            <div className="relative flex-shrink-0 w-full md:w-40 h-32 overflow-hidden rounded-lg bg-gray-50">
              <Image
                src={product.thumbnail}
                alt="thumbnail"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-col flex-1">
              <div className="flex justify-between items-start gap-2">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <ArrowUpRight className="h-4 w-4 mt-1 text-gray-400 group-hover:text-primary transition-colors flex-shrink-0" />
              </div>

              <Paragraph className="text-sm mt-1.5 text-gray-600">{product.description}</Paragraph>

              <div className="flex flex-wrap gap-2 mt-3">
                {product.stack?.map((stack: string) => (
                  <span
                    key={stack}
                    className="text-xs bg-gray-100 px-2.5 py-1 rounded-full text-gray-700"
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};
