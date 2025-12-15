const AboutSection = () => {
  return (
    <section
      className="container py-6 border-b border-border animate-fade-in"
      style={{ animationDelay: '0.2s' }}
    >
      <h2 className="text-xl font-semibold mb-4">About</h2>
      <div className="space-y-4 text-sm leading-relaxed">
        <p>
          Hey there! I'm Ayush Kumar Anand, a 19y/o full-stack dev and CSAI undergrad at IIIT Delhi,
          building cool stuff that actually solves problems. I'm a{' '}
          <a
            href="https://www.sih.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium link-underline"
          >
            Smart India Hackathon
          </a>{' '}
          '24 finalist, and right now, I'm{' '}
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-accent/20 text-accent text-xs font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            open to work
          </span>{' '}
          or freelance gigs.
        </p>
        <p>
          Tech-wise, I'm all about <TechBadge name="TypeScript" color="#3178C6" />,{' '}
          <TechBadge name="React" color="#61DAFB" />,{' '}
          <TechBadge name="Next.js" color="#000000" darkColor="#ffffff" />, and{' '}
          <TechBadge name="PostgreSQL" color="#4169E1" />. If you're into tech chats or building
          something epic, hit me up... let's make it happen!
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
    <span className="badge-tech">
      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
      {name}
    </span>
  );
}

export default AboutSection;
