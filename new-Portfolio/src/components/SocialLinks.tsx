import { ArrowUpRight, Link as LinkIcon } from 'lucide-react';

const socials = [
  {
    name: 'LinkedIn',
    handle: 'ayush-kumar-anand',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/960px-LinkedIn_logo_initials.png',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/960px-LinkedIn_logo_initials.png',
  },
  {
    name: 'GitHub',
    handle: 'ayushk-1801',
    url: 'https://github.com/ayushk-1801',
    icon: 'https://cdn.simpleicons.org/github/ffffff',
    darkIcon: 'https://cdn.simpleicons.org/github/181717',
  },
  {
    name: 'X',
    handle: '@ayushktwt',
    url: 'https://x.com/ayushktwt',
    icon: 'https://cdn.simpleicons.org/x/ffffff',
    darkIcon: 'https://cdn.simpleicons.org/x/000000',
  },
  {
    name: 'Cv',
    handle: 'Soumadip Majila',
    url: 'https://cal.com/ayush-kumar-anand',
    icon: 'https://cdn-icons-png.flaticon.com/512/2666/2666421.png',
  },
];

const SocialLinks = () => {
  return (
    <section
      className="container py-6 border-b border-border animate-fade-in"
      style={{ animationDelay: '0.1s' }}
    >
      <h2 className="sr-only">Social Links</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {socials.map(social => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-lg border border-border bg-card p-4 card-hover"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
              <img
                src={social.darkIcon || social.icon}
                alt={social.name}
                className="h-5 w-5 dark:hidden"
              />
              <img src={social.icon} alt={social.name} className="h-5 w-5 hidden dark:block" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm">{social.name}</p>
              <p className="text-xs text-muted-foreground truncate">{social.handle}</p>
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default SocialLinks;
