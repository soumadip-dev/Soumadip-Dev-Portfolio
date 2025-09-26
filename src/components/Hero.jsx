import { useState, useEffect } from 'react';
import { FaGithub, FaDownload, FaLinkedin, FaTwitter, FaBlog } from 'react-icons/fa';
import { IoCode } from 'react-icons/io5';
import { CgMail } from 'react-icons/cg';

import colors from '../constants/colors';
const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 md:pt-28 lg:pt-0 flex items-center px-6 sm:px-8 md:px-[5%] lg:px-[10%] overflow-hidden"
      style={{ backgroundColor: colors.dark }}
    >
      {/* Content Container */}
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 xl:gap-24">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left w-full lg:w-1/2 z-10">
            <p
              className="font-mono text-sm sm:text-base mb-2 sm:mb-3 md:mb-4"
              style={{ color: colors.accent }}
            >
              Hi, my name is
            </p>
            <h1
              className="text-4xl xs:text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-5"
              style={{ color: colors.text }}
            >
              Soumadip Majila.
            </h1>
            <h2
              className="text-3xl xs:text-4xl sm:text-5xl font-bold leading-tight mb-6 sm:mb-8"
              style={{ color: colors.textSecondary }}
            >
              I build things for the web.
            </h2>

            <p
              className="text-lg mb-8 max-w-lg mx-auto lg:mx-0"
              style={{ color: colors.textSecondary }}
            >
              I'm a Full Stack Developer specializing in building exceptional digital experiences.
              Currently focused on creating accessible, human-centered products.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-4 mb-8 sm:mb-10 z-10">
              {[
                { icon: <FaGithub size={24} />, url: 'https://github.com/soumadip-dev' },
                {
                  icon: <FaLinkedin size={24} />,
                  url: 'https://www.linkedin.com/in/soumadip-majila-dgp/',
                },
                { icon: <FaTwitter size={24} />, url: 'https://x.com/SoumadipMajila' },
                { icon: <FaBlog size={24} />, url: 'https://hashnode.com/@soumadip' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#1A1A1A] hover:bg-[#8A2BE2] text-[#D8BFD8] hover:text-white transition-all duration-300 hover:-translate-y-1"
                  aria-label={social.icon.type.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start z-10">
              <a
                href="#contact"
                className="relative overflow-hidden bg-gradient-to-r from-[#8A2BE2] to-[#BA55D3] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 group flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#8A2BE2]/50"
              >
                <span>Get In Touch</span>
                <CgMail
                  size={20}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </a>
              <a
                href="https://drive.google.com/file/d/1XFNnIG8A4GXVBWM5CoVWSBlRhUh9G6WN/view?usp=sharing"
                download
                className="relative overflow-hidden bg-transparent hover:bg-[#8A2BE2]/10 text-[#8A2BE2] border-2 border-[#8A2BE2] px-8 py-4 rounded-full font-medium transition-all duration-300 group flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#8A2BE2]/20"
              >
                <span>Resume</span>
                <FaDownload
                  size={20}
                  className="group-hover:translate-y-1 transition-transform duration-300"
                />
              </a>
            </div>
          </div>

          {/* Code Mockup Container */}
          <div className="order-1 lg:order-2 w-full lg:w-1/2 flex justify-center z-10">
            <div className="relative w-full max-w-lg">
              {/* Glow effect */}
              <div
                className="absolute inset-0 rounded-full blur-3xl -z-10 animate-pulse-slow"
                style={{ backgroundColor: colors.primary, opacity: 0.2 }}
              />

              {/* Code mockup with syntax highlighting */}
              <div
                className="relative z-10 rounded-lg overflow-hidden shadow-2xl"
                style={{ backgroundColor: colors.darker, border: `1px solid ${colors.primary}20` }}
              >
                <div
                  className="flex items-center px-4 py-3 border-b"
                  style={{ backgroundColor: colors.dark, borderColor: `${colors.primary}20` }}
                >
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs font-mono" style={{ color: colors.textSecondary }}>
                      me.js
                    </span>
                  </div>
                </div>
                <div className="p-4 font-mono text-sm md:text-base">
                  <pre className="overflow-x-auto" style={{ color: colors.text }}>
                    <code>
                      <span style={{ color: colors.accent }}>const</span>{' '}
                      <span style={{ color: '#9932CC' }}>me</span> <span>=</span> <span>{'{'}</span>
                      {'\n'}
                      <span className="ml-4">name:</span>{' '}
                      <span style={{ color: '#E6E6FA' }}>'Soumadip Majila'</span>,{'\n'}
                      <span className="ml-4">role:</span>{' '}
                      <span style={{ color: '#E6E6FA' }}>'Full Stack Developer'</span>,{'\n'}
                      <span className="ml-4">technologies:</span> <span>[</span>
                      {'\n'}
                      <span style={{ color: '#E6E6FA' }} className="ml-8">
                        'React'
                      </span>
                      ,{'\n'}
                      <span style={{ color: '#E6E6FA' }} className="ml-8">
                        'Node.js'
                      </span>
                      ,{'\n'}
                      <span style={{ color: '#E6E6FA' }} className="ml-8">
                        'TypeScript'
                      </span>
                      ,{'\n'}
                      <span style={{ color: '#E6E6FA' }} className="ml-8">
                        'MongoDB'
                      </span>
                      {'\n'}
                      <span className="ml-4">]</span>,{'\n'}
                      <span className="ml-4">available:</span>{' '}
                      <span style={{ color: '#9932CC' }}>true</span>
                      {'\n'}
                      <span>{'}'}</span>;
                      <span style={{ color: colors.textSecondary }}>
                        {' '}
                        // Let's build something great!
                      </span>
                      {'\n'}
                    </code>
                  </pre>
                </div>
                <div
                  className="px-4 py-3 border-t text-xs font-mono flex items-center"
                  style={{
                    backgroundColor: colors.dark,
                    borderColor: `${colors.primary}20`,
                    color: colors.textSecondary,
                  }}
                >
                  <IoCode className="mr-2" style={{ color: colors.accent }} />
                  <span>1 object, 4 technologies, 100% ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[-1] opacity-20">
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full filter blur-3xl"
          style={{ backgroundColor: colors.primary }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full filter blur-3xl"
          style={{ backgroundColor: colors.accent }}
        />
      </div>

      {/* Scroll indicator */}
      {!isScrolled && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div
            className="w-6 h-10 border-2 rounded-full flex justify-center"
            style={{ borderColor: colors.accent }}
          >
            <div
              className="w-1 h-2 rounded-full mt-2 animate-scroll"
              style={{ backgroundColor: colors.accent }}
            />
          </div>
        </div>
      )}
    </section>
  );
};
export default Hero;
