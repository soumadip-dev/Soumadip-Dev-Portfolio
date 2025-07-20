import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Metadata } from 'next';
import { BookOpenText } from 'lucide-react';
import { Articles } from '@/components/Articles';

export const metadata: Metadata = {
  title: 'Blogs | Soumadip Majila',
  description:
    'Soumadip Majila is a MCA passout and a fresher full-stack developer. He is searching for opportunities',
};

export default function Projects() {
  return (
    <Container>
      <div className="flex items-center gap-4 mb-12">
        <div className="p-3 bg-primary/10 rounded-full">
          <BookOpenText className="h-8 w-8 text-primary" strokeWidth={1.5} />
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      </div>
      <div className="mb-10">
        <Heading className="font-black mb-4">
          <span className="inline-flex items-center gap-2">I write about technology</span>
        </Heading>
      </div>
      <Articles />
    </Container>
  );
}
