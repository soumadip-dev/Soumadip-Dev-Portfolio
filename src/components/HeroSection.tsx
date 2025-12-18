import { BadgeCheck, MapPin, Mail, Globe, Shield } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { heroContent } from '@/constants/heroConstants';

const HeroSection = () => {
  const iconMap = {
    MapPin: MapPin,
    Mail: Mail,
    Globe: Globe,
    Shield: Shield,
  };

  return (
    <section className="animate-fade-in mt-7">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 container border-b border-border">
        <div className="relative group">
          <div className="relative h-32 w-32">
            <div className="absolute -inset-2 bg-gradient-to-r from-accent/20 to-muted-foreground/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-500 group-hover:from-accent/30 group-hover:to-muted-foreground/30" />
            <img
              src="/images/profile.png"
              alt={heroContent.title}
              className="relative h-full w-full rounded-full object-cover ring-2 ring-border 
                       transition-all duration-500 
                       group-hover:ring-accent/50
                       group-hover:scale-105
                       group-hover:ring-3"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-background/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
        <div className="text-center sm:text-left pt-5">
          <div className="text-xs text-muted-foreground font-mono mb-1 min-h-[1.25rem]">
            <TypeAnimation
              sequence={heroContent.taglines.flatMap(tagline => [tagline, 1400])}
              wrapper="span"
              speed={40}
              deletionSpeed={60}
              repeat={Infinity}
              cursor={true}
              style={{ display: 'inline-block' }}
            />
          </div>
          <h1 className="text-3xl font-semibold tracking-tight flex items-center justify-center sm:justify-start gap-2">
            {heroContent.title}
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
                  {heroContent.verificationTooltip}
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
          <p className="text-muted-foreground mt-1">{heroContent.description}</p>
        </div>
      </div>

      <div className="grid gap-3 py-6 container border-b border-border">
        {heroContent.infoItems.map(item => {
          const IconComponent = iconMap[item.icon as keyof typeof iconMap];
          const content = (
            <div className="flex items-center gap-3 text-sm">
              <IconComponent className="h-4 w-4 text-muted-foreground" />
              <span
                className={
                  item.href
                    ? 'text-foreground hover:text-primary transition-colors'
                    : 'text-foreground'
                }
              >
                {item.text}
              </span>
            </div>
          );

          if (item.href) {
            return (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                {content}
              </a>
            );
          }

          return <div key={item.id}>{content}</div>;
        })}
      </div>
    </section>
  );
};

export default HeroSection;
