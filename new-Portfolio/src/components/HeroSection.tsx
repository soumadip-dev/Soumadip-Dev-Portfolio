import {
  Github,
  Twitter,
  Linkedin,
  Link as LinkIcon,
  BadgeCheck,
  MapPin,
  Mail,
  Globe,
  User,
} from 'lucide-react';
import profileImage from '@/assets/profile.png';

const HeroSection = () => {
  return (
    <section className="animate-fade-in container mt-7">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-border">
        <div className="relative ">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
            alt="Profile avatar"
            className="h-28 w-28 rounded-full object-cover ring-2 ring-border"
          />
        </div>
        <div className="text-center sm:text-left pt-5">
          <p className="text-xs text-muted-foreground font-mono mb-1">Full Stack Developer</p>
          <h1 className="text-3xl font-semibold tracking-tight flex items-center justify-center sm:justify-start gap-2">
            Ayush Kumar Anand
            <BadgeCheck className="h-6 w-6 text-accent" />
          </h1>
          <p className="text-muted-foreground mt-1">Full Stack Developer</p>
        </div>
      </div>

      <div className="grid gap-3 py-6 border-b border-border">
        <InfoRow icon={MapPin} text="New Delhi, India" />
        <InfoRow
          icon={Mail}
          text="ayushkumar.swe@gmail.com"
          href="mailto:ayushkumar.swe@gmail.com"
        />
        <InfoRow icon={Globe} text="ayushk.me" href="https://ayushk.me" />
        <InfoRow icon={User} text="he/him" />
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
      <span className={href ? 'link-underline text-foreground' : 'text-muted-foreground'}>
        {text}
      </span>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}

export default HeroSection;
