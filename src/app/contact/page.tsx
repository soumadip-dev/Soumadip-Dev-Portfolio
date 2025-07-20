import { Contact } from '@/components/Contact';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Highlight } from '@/components/Highlight';
import { Paragraph } from '@/components/Paragraph';
import { Mail } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Soumadip Majila',
  description:
    'Soumadip Majila is a MCA passout and a fresher full-stack developer. He is searching for opportunities',
};

export default function ContactPage() {
  return (
    <Container className="min-h-[calc(100vh-200px)]">
      {' '}
      {/* Added min-height */}
      <div className="flex items-center gap-4 mb-12">
        <div className="p-3 bg-primary/10 rounded-full">
          <Mail className="h-8 w-8 text-primary" strokeWidth={1.5} />
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      </div>
      <div className="mb-10">
        <Heading className="font-black mb-4">
          <span className="inline-flex items-center gap-2">Contact Me</span>
        </Heading>
        <Paragraph className="mb-6 max-w-xl">
          I am a fresher and currently open to work opportunities.
          <Highlight>Feel free to reach out via email or the contact form</Highlight> — I'll get
          back to you as soon as I can.
        </Paragraph>
      </div>
      <div className="pb-[90px] md:pb-[160px] lg:pb-[160px]">
        <Contact />
      </div>
    </Container>
  );
}
