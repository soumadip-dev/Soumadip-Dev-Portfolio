import AboutMe from '@/modules/portfolio/components/Sections/AboutMe';
import Hero from '@/modules/portfolio/components/Sections/Hero';
import Projects from '@/modules/portfolio/components/Sections/Projects';
import ContactMe from '@/modules/portfolio/components/Sections/ContactMe';
import GitHubContri from '@/modules/portfolio/components/Sections/GitHubContri';
import MyTechnologies from '@/modules/portfolio/components/Sections/MyTechnologies';
import SectionBorders from '@/components/shared/SectionBorders';

import { inter } from '@/lib/fonts';
// import Experiences from '@/modules/portfolio/components/Sections/Experiences';

export default function Home() {
  return (
    <section className="container mx-auto max-w-5xl px-4 lg:px-0">
      <div
        className="border-border relative flex h-[12rem] w-full items-center justify-center overflow-hidden border border-t-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,0,0,0.08)_1px,transparent_1px),radial-gradient(circle_at_80%_70%,rgba(0,0,0,0.06)_1px,transparent_1px),radial-gradient(circle_at_40%_80%,rgba(0,0,0,0.1)_1.5px,transparent_1.5px),radial-gradient(circle_at_90%_20%,rgba(0,0,0,0.06)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.08)_1px,transparent_1px),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.06)_1px,transparent_1px),radial-gradient(circle_at_40%_80%,rgba(255,255,255,0.1)_1.5px,transparent_1.5px),radial-gradient(circle_at_90%_20%,rgba(255,255,255,0.06)_1px,transparent_1px)]"
        style={{
          backgroundSize: '25px 25px, 30px 30px, 35px 35px, 20px 20px',
        }}
      >
        <SectionBorders />
        <div className={`text-center ${inter.className}`}>
          <div className="flex items-center justify-center gap-3">
            <span className="text-foreground/20 text-2xl">✦</span>
            <span className="text-foreground/40 text-sm font-light tracking-[0.4em] uppercase">
              Think
            </span>
            <span className="text-foreground/20 text-2xl">✦</span>
            <span className="text-foreground text-xl font-bold">Code</span>
            <span className="text-foreground/20 text-2xl">✦</span>
            <span className="text-foreground/40 text-sm font-light tracking-[0.4em] uppercase">
              Repeat
            </span>
            <span className="text-foreground/20 text-2xl">✦</span>
          </div>
        </div>
      </div>
      <Hero />
      <AboutMe />
      {/* <Experiences /> */}
      <Projects />
      <GitHubContri />
      <MyTechnologies />
      <ContactMe />
    </section>
  );
}
