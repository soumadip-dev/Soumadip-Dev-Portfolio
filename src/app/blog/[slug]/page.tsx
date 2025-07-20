import { Container } from '@/components/Container';
import { SingleProduct } from '@/components/Product';
import { products } from '@/constants/products';
import { Product } from '@/types/products';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const product = products.find(p => p.slug === slug) as Product | undefined;
  if (product) {
    return {
      title: product.title,
      description: product.description,
    };
  } else {
    return {
      title: 'Projects | Soumadip Majila',
      description:
        'Soumadip Majila is a MCA passout and a fresher full-stack developer. He is searching for opportunities',
    };
  }
}

export default function SingleProjectPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const product = products.find(p => p.slug === slug);

  if (!product) return redirect('/projects');
  return (
    <Container>
      <SingleProduct product={product as Product} />
    </Container>
  );
}
