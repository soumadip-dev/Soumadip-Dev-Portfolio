import SectionBorders from '@/components/shared/SectionBorders';
import { Route } from 'next';
import Link from 'next/link';

const importantLinks = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/soumadip-dev' },
  { name: 'Twitter / X', href: 'https://x.com/SoumadipMajila' },
  { name: 'Discord', href: 'https://discord.com/users/soumadipmajila.' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/soumadip-majila-dgp/' },
];

const FooterLinkGroup = ({
  title,
  links,
}: {
  title: string;
  links: { name: string; href: string }[];
}) => (
  <div className="flex flex-col gap-1">
    <h2 className="mb-1 text-sm font-medium">{title}</h2>
    {links.map(link => (
      <Link
        key={link.name}
        href={link.href as Route}
        target={link.href.startsWith('http') ? '_blank' : undefined}
        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="text-muted-foreground font-mono text-sm underline-offset-4 hover:underline"
      >
        {link.name}
      </Link>
    ))}
  </div>
);

const Footer = () => {
  return (
    <footer className="flex justify-center">
      <div className="mb-4 w-full max-w-5xl px-4 lg:px-0">
        <div className="screen-line-top screen-line-bottom relative flex w-full flex-col gap-4 border-x px-4 py-3">
          <SectionBorders />

          <p className="text-muted-foreground font-mono text-sm">
            Copyright &#169; 2021 - 2026 Soumadip Majila
          </p>

          <div className="flex w-full justify-between">
            <FooterLinkGroup title="Important Links" links={importantLinks} />
            <FooterLinkGroup title="Social" links={socialLinks} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
