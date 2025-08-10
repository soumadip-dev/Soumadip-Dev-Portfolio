import { StaticImageData } from 'next/image';

export type Product = {
  title: string;
  description: string;
  // Allow thumbnail to be either StaticImageData OR string
  thumbnail: StaticImageData | string;
  // images can already be StaticImageData[] or string[], so leave it as is
  images: StaticImageData[] | string[];
  href: string;
  slug?: string;
  stack?: string[];
  content?: React.ReactNode | string;
  github?: string;
};
