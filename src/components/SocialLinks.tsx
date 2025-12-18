import { ArrowUpRight } from 'lucide-react';
import { socialLinks } from '@/constants/socialConstants';

const SocialLinks = () => {
  const socials = socialLinks.filter(link =>
    ['LinkedIn', 'GitHub', 'Twitter', 'Resume'].includes(link.name)
  );

  return (
    <section
      className="container py-8 border-b border-border animate-fade-in"
      style={{ animationDelay: '0.1s' }}
    >
      <h2 className="sr-only">Social Links</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {socials.map(social => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-lg border border-border bg-card p-4 hover:border-primary/50 hover:bg-card/80 transition-all duration-300"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary group-hover:bg-secondary/80 transition-colors">
              <img
                src={social.darkIcon || social.icon}
                alt={social.name}
                className="h-5 w-5 dark:hidden"
              />
              <img src={social.icon} alt={social.name} className="h-5 w-5 hidden dark:block" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                {social.name}
              </p>
              <p className="text-xs text-muted-foreground truncate">{social.handle}</p>
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default SocialLinks;
