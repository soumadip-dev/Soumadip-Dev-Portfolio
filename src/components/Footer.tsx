import { Github, Twitter, Linkedin, Mail, FileText } from 'lucide-react';

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/soumadip-dev',
    color: 'hover:text-[#181717] dark:hover:text-white',
  },
  {
    icon: Twitter,
    label: 'Twitter',
    href: 'https://x.com/SoumadipMajila',
    color: 'hover:text-[#1DA1F2]',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/soumadip-majila-dgp/',
    color: 'hover:text-[#0A66C2]',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:soumadipmajila@gmail.com',
    color: 'hover:text-primary',
  },
  {
    icon: FileText,
    label: 'Resume',
    href: 'https://drive.google.com/file/d/1QKWaS9INFkW4InQXPNA93A547Lm7_eXI/view?usp=sharing',
    color: 'hover:text-[#4285F4]',
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 container">
      <div className="py-12">
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Let's connect</h3>
            <p className="text-sm text-muted-foreground">
              Feel free to reach out for collaborations or just a friendly hello
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {socialLinks.map(({ icon: Icon, label, href, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group ${color}`}
              >
                <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Removed the border-t from this div */}
        <div className="mt-12 pt-6">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Soumadip Majila. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
