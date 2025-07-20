import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Highlight } from '@/components/Highlight';
import { Paragraph } from '@/components/Paragraph';
import { TechStack } from '@/components/TechStack';
import { Hand, GraduationCap, School, BookOpen } from 'lucide-react';

export default function Home() {
  return (
    <Container>
      <div className="flex items-center gap-4 mb-12">
        <div className="p-3 bg-primary/10 rounded-full">
          <Hand className="h-8 w-8 text-primary" strokeWidth={1.5} />
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      </div>

      <div className="mb-10">
        <Heading className="mb-4">
          <span className="inline-flex items-center gap-2">
            Hello there! I&rsquo;m <span className="text-primary">Soumadip</span>
          </span>
        </Heading>

        <div className="space-y-6">
          <Paragraph>
            I&rsquo;m a <Highlight>Computer Applications graduate</Highlight> passionate about ...
          </Paragraph>

          <Paragraph>
            I recently completed my <Highlight>Master of Computer Applications (MCA)</Highlight> and
            am currently seeking opportunities to apply my knowledge and grow as a full-stack
            developer.
          </Paragraph>
        </div>
      </div>

      <section className="mb-20">
        <Heading as="h2" className="mb-10">
          Education Journey
        </Heading>
        <div className="space-y-8">
          {/* MCA */}
          <div className="border-l-2 border-primary/20 pl-6 relative group">
            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary flex items-center justify-center ring-4 ring-primary/10">
              <GraduationCap className="h-3 w-3 text-white" />
            </div>
            <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary transition-colors">
              Master of Computer Applications (MCA)
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Dr. B. C. Roy Engineering College • 2023 - 2025
            </p>
            <p className="mt-3 text-gray-600">
              Focused on Data Structures, Java, DBMS, and Software Development concepts
            </p>
          </div>

          {/* BCA */}
          <div className="border-l-2 border-primary/20 pl-6 relative group">
            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary flex items-center justify-center ring-4 ring-primary/10">
              <School className="h-3 w-3 text-white" />
            </div>
            <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary transition-colors">
              Bachelor of Computer Applications (BCA)
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Dr. B. C. Roy Engineering College (APC) • 2020 - 2023
            </p>
            <p className="mt-3 text-gray-600">
              Learned programming fundamentals, databases, and web technologies
            </p>
          </div>

          {/* 12th */}
          <div className="border-l-2 border-primary/20 pl-6 relative group">
            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary flex items-center justify-center ring-4 ring-primary/10">
              <BookOpen className="h-3 w-3 text-white" />
            </div>
            <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary transition-colors">
              Higher Secondary (12th Grade)
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Suren Chandra Modern High School • 2018 - 2020
            </p>
            <p className="mt-3 text-gray-600">Arts Stream with Computer Application</p>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <Heading as="h2" className="mb-10">
          Tech Stack
        </Heading>
        <TechStack />
      </section>
    </Container>
  );
}
