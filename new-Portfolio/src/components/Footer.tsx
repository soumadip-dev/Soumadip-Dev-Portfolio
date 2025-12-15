import { Github, Twitter, Linkedin, Mail, FileText } from 'lucide-react';

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/soumadip-dev' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Mail, label: 'Mail', href: 'mailto:hello@example.com' },
  { icon: FileText, label: 'Resume', href: '#' },
];

const Footer = () => {
  return (
    <footer className="border-t border-border/50">
      <div className="container py-12">
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Let's connect</h3>
            <p className="text-sm text-muted-foreground">Find me on these platforms</p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Icon className="w-4 h-4 group-hover:text-primary transition-colors" />
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/50">
          <p className="text-sm text-muted-foreground">© 2025 Soumadip Das.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
