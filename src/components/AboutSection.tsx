const AboutSection = () => {
  return (
    <section
      className="container py-9 border-b border-border animate-fade-in"
      style={{ animationDelay: '0.2s' }}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-m font-bold text-muted-foreground">ABOUT</h2>
      </div>
      <div className="space-y-5 text-base leading-relaxed text-muted-foreground text-sm">
        <p>
          I'm Soumadip Majila, a passionate full-stack developer based in Durgapur, West Bengal. I'm
          graduating with my Master of Computer Application (MCA) in 2025 and I'm{' '}
          <span className="relative font-medium text-foreground">
            <span className="relative z-10">actively seeking</span>
            <span className="absolute inset-0 bg-emerald-500/10 rounded-md blur-xs animate-pulse"></span>
          </span>{' '}
          my first professional opportunity. I specialize in building modern web applications with
          clean, maintainable code and creating exceptional user experiences.
        </p>
        <p>
          My current focus is on mastering core technologies including{' '}
          <TechBadge name="Express.js" color="#000000" darkColor="#F8F8F8" />,{' '}
          <TechBadge name="JavaScript" color="#F7DF1E" />,{' '}
          <TechBadge name="MongoDB" color="#47A248" />, <TechBadge name="Node.js" color="#68A063" />
          , <TechBadge name="React" color="#61DAFB" />, and{' '}
          <TechBadge name="TypeScript" color="#3178C6" />. I'm enthusiastic about{' '}
          <span className="relative font-medium text-foreground">
            <span className="relative z-10">entry-level roles</span>
            <span className="absolute inset-0 bg-emerald-500/10 rounded-sm blur-xs"></span>
          </span>{' '}
          where I can contribute, learn, and grow as a professional developer.
        </p>
        <p>
          I'm currently{' '}
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-sm font-medium text-emerald-600 dark:text-emerald-400 animate-glow">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Open to Work & Internships
          </span>{' '}
          and eager to collaborate on interesting projects that challenge my skills and allow me to
          make meaningful contributions from day one.
        </p>
      </div>
    </section>
  );
};

function TechBadge({
  name,
  color,
  darkColor,
}: {
  name: string;
  color: string;
  darkColor?: string;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary/80 text-sm font-medium text-foreground hover:bg-secondary transition-colors duration-200">
      <span
        className="h-2.5 w-2.5 rounded-full flex-shrink-0"
        style={{
          backgroundColor: color,
          filter: darkColor ? 'brightness(0.9)' : undefined,
        }}
      />
      {name}
    </span>
  );
}

export default AboutSection;
