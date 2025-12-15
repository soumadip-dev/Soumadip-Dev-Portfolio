import { BadgeCheck, MapPin, Mail, Globe, Shield } from 'lucide-react';
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
            <div className="relative group">
              <BadgeCheck
                className="h-7 w-7 text-accent cursor-pointer 
                         transition-all duration-300 
                         group-hover:scale-110 
                         group-hover:text-accent 
                         group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]
                         group-hover:rotate-12"
              />

              <div
                className="absolute -top-11 left-1/2 transform -translate-x-1/2 
                         backdrop-blur-md bg-background/80 
                         border border-border 
                         text-foreground text-xs font-semibold px-3 py-2 
                         rounded-lg shadow-xl
                         whitespace-nowrap 
                         opacity-0 group-hover:opacity-100 
                         transition-all duration-300 
                         pointer-events-none z-50
                         group-hover:-translate-y-1
                         scale-95 group-hover:scale-100"
              >
                <span className="flex items-center gap-1.5">
                  <Shield className="h-3 w-3" />
                  Verified Profile
                </span>
                <div
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 
                           w-0 h-0 
                           border-l-[6px] border-l-transparent
                           border-r-[6px] border-r-transparent
                           border-t-[6px] border-t-border"
                />
              </div>
            </div>
          </h1>
          <p className="text-muted-foreground mt-1">
            {' '}
            Building <span className="text-accent font-medium">scalable</span> web applications with
            modern technologies
          </p>
        </div>
      </div>

      <div className="grid gap-3 py-6 container border-b border-border">
        <InfoRow icon={MapPin} text="Durgapur, West Bengal" />
        <InfoRow
          icon={Mail}
          text="soumadipmajila@gmail.com"
          href="mailto:soumadipmajila@gmail.com"
        />
        <InfoRow icon={Globe} text="soumadip.me" href="https://soumadip-portfolio-nu.vercel.app/" />
        <InfoRow icon={Shield} text="he/him" />
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
          href ? 'text-foreground hover:text-primary transition-colors' : 'text-foreground'
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
