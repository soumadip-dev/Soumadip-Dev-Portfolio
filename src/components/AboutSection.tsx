const AboutSection = () => {
  return (
    <section
      className="container py-8 border-b border-border animate-fade-in"
      style={{ animationDelay: '0.2s' }}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-m font-bold text-muted-foreground">ABOUT</h2>
      </div>
      <div className="space-y-5 text-base leading-relaxed text-muted-foreground text-sm">
        <p>
          I'm Soumadip Majila, a passionate full-stack developer based in Durgapur, West Bengal. I'm
          completing my Master of Computer Application (MCA) in 2025. I specialize in building
          modern web applications with clean, maintainable code and creating exceptional user
          experiences.
        </p>
        <p>
          My current focus is on mastering core technologies including{' '}
          <TechBadge name="TypeScript" color="#3178C6" />,{' '}
          <TechBadge name="Node.js" color="#68A063" />,{' '}
          <TechBadge name="Express.js" color="#000000" darkColor="#F8F8F8" />, and{' '}
          <TechBadge name="MongoDB" color="#47A248" />. I'm always eager to collaborate on
          interesting projects and explore new{' '}
          <span className="font-medium text-foreground">opportunities</span>.
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
