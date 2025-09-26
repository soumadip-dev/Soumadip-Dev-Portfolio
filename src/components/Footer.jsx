import colors from '../constants/colors';
import { FaArrowCircleUp, FaGithub, FaLinkedin, FaTwitter, FaBlog } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-12 px-[5%] xl:px-[10%] border-t"
      style={{
        backgroundColor: colors.dark,
        borderColor: `${colors.primary}20`,
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left section - Branding and copyright */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="text-2xl font-bold bg-gradient-to-r from-[#8A2BE2] to-[#BA55D3] bg-clip-text text-transparent inline-block hover:scale-105 transition-transform duration-300"
            >
              Sm.
            </a>
            <p className="mt-3 font-mono text-sm" style={{ color: colors.textSecondary }}>
              Designed & Built by{' '}
              <span className="hover:underline cursor-pointer" style={{ color: colors.accent }}>
                Soumadip Majila
              </span>
            </p>
            <p className="text-xs mt-2" style={{ color: colors.textSecondary }}>
              © {currentYear} All Rights Reserved
            </p>
          </div>

          {/* Middle section - Quick links */}
          <div className="hidden md:flex flex-col items-center">
            <div className="flex gap-6 mb-4">
              {['About', 'Skills', 'Projects', 'Contact'].map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="font-mono text-sm transition-colors duration-300 hover:text-[#8A2BE2]"
                  style={{ color: colors.textSecondary }}
                >
                  {item}
                </a>
              ))}
            </div>
            <p className="text-xs" style={{ color: colors.textSecondary }}>
              Made with ❤️ and React
            </p>
          </div>

          {/* Right section - Social links and back to top */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-4">
              {[
                { icon: <FaGithub size={20} />, url: 'https://github.com/soumadip-dev' },
                {
                  icon: <FaLinkedin size={20} />,
                  url: 'https://www.linkedin.com/in/soumadip-majila-dgp/',
                },
                { icon: <FaTwitter size={20} />, url: 'https://x.com/SoumadipMajila' },
                { icon: <FaBlog size={20} />, url: 'https://hashnode.com/@soumadip' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-[#8A2BE2]"
                  style={{ color: colors.textSecondary }}
                  aria-label={social.icon.type.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <a
              href="#home"
              className="flex items-center gap-2 transition-colors duration-300 group"
              style={{ color: colors.accent }}
              aria-label="Scroll to top"
            >
              <span
                className="text-xs font-mono transition-colors duration-300 group-hover:text-[#8A2BE2]"
                style={{ color: colors.textSecondary }}
              >
                Back to Top
              </span>
              <FaArrowCircleUp className="transition-transform duration-300 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>

        {/* Mobile version - Quick links */}
        <div
          className="md:hidden mt-8 pt-8 border-t"
          style={{ borderColor: `${colors.primary}20` }}
        >
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {['About', 'Skills', 'Projects', 'Contact'].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-mono text-sm transition-colors duration-300 hover:text-[#8A2BE2]"
                style={{ color: colors.textSecondary }}
              >
                {item}
              </a>
            ))}
          </div>
          <p className="text-center text-xs" style={{ color: colors.textSecondary }}>
            Made with ❤️ and React
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
