import {
  Github,
  Twitter,
  Linkedin,
  BadgeCheck,
  MapPin,
  Mail,
  Globe,
  User,
  FileText,
} from 'lucide-react';

import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section className="animate-fade-in mt-7">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 container border-b border-border">
        <div className="relative">
          <img
            src="/images/profile.png"
            alt="Soumadip Majila"
            className="h-28 w-28 rounded-full object-cover ring-2 ring-border"
          />
        </div>
        <div className="text-center sm:text-left pt-5">
          <div className="text-xs text-muted-foreground font-mono mb-1 min-h-[1.25rem]">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                1400,
                'Frontend Developer',
                1400,
                'Backend Developer',
                1400,
              ]}
              wrapper="span"
              speed={40}
              deletionSpeed={60}
              repeat={Infinity}
              cursor={true}
              style={{ display: 'inline-block' }}
            />
          </div>
          <h1 className="text-3xl font-semibold tracking-tight flex items-center justify-center sm:justify-start gap-2">
            Soumadip Majila
            <BadgeCheck className="h-6 w-6 text-accent" />
          </h1>
          <p className="text-muted-foreground mt-1">Building scalable web applications</p>
        </div>
      </div>

      <div className="grid gap-3 py-6 container border-b border-border">
        <InfoRow icon={MapPin} text="Durgapur, West Bengal" />
        <InfoRow
          icon={Mail}
          text="soumadipmajila@gmail.com"
          href="mailto:soumadipmajila@gmail.com"
        />
        <InfoRow icon={Globe} text="soumadip-dev" href="https://github.com/soumadip-dev" />
        <InfoRow
          icon={FileText}
          text="Download CV"
          href="https://drive.google.com/file/d/1QKWaS9INFkW4InQXPNA93A547Lm7_eXI/view?usp=sharing"
        />
      </div>
    </section>
  );
};

function InfoRow({
  icon: Icon,
  text,
  href,
}: {
  icon: React.ElementType;
  text: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-3 text-sm">
      <Icon className="h-4 w-4 text-muted-foreground" />
      <span
        className={
          href ? 'text-foreground hover:text-primary transition-colors' : 'text-muted-foreground'
        }
      >
        {text}
      </span>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="group">
        {content}
      </a>
    );
  }

  return content;
}

export default HeroSection;
