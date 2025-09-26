import { useState, useEffect } from 'react';
import colors from '../constants/colors';

import closeIcon from '../assets/closeIcon.png';
import menuIcon from '../assets/menuIcon.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = e => {
    e.stopPropagation();
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = event => {
      const mobileMenu = document.querySelector('.mobile-menu-container');
      const menuButton = document.querySelector('.mobile-menu-button');

      if (menuOpen && !mobileMenu?.contains(event.target) && !menuButton?.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav
      className={`fixed w-full z-50 py-4 px-[5%] xl:px-[10%] transition-all duration-300 ${
        scrolled
          ? `bg-[${colors.darker}]/95 backdrop-blur-md shadow-lg border-b border-[${colors.primary}]/20`
          : 'bg-transparent'
      }`}
      style={{
        backgroundColor: scrolled ? `${colors.darker}e6` : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        borderBottom: scrolled ? `1px solid ${colors.primary}20` : 'none',
      }}
    >
      <div className="flex items-center justify-between">
        <a
          href="#home"
          className="text-2xl font-bold bg-gradient-to-r from-[#8A2BE2] to-[#BA55D3] bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
          onClick={closeMenu}
        >
          Sm.
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {['About', 'Skills', 'Projects', 'Contact'].map(item => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={`text-[${colors.textSecondary}] hover:text-[${colors.accent}] transition-all duration-300 text-lg font-medium group relative`}
                style={{
                  color: colors.textSecondary,
                }}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8A2BE2] to-[#BA55D3] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#D8BFD8] focus:outline-none z-50 mobile-menu-button"
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <img
            src={menuOpen ? closeIcon : menuIcon}
            alt={menuOpen ? 'Close menu' : 'Open menu'}
            className="w-8 h-8"
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-[${
          colors.darker
        }] z-40 pt-24 px-6 transform transition-all duration-500 ease-in-out mobile-menu-container ${
          menuOpen
            ? 'translate-x-0 opacity-100 pointer-events-auto'
            : 'translate-x-full opacity-0 pointer-events-none'
        }`}
        style={{ backgroundColor: colors.darker }}
      >
        <ul className="flex flex-col gap-8">
          {['About', 'Skills', 'Projects', 'Contact'].map(item => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="block text-3xl text-white hover:text-[#8A2BE2] py-3 transition-all duration-300 hover:pl-4 border-l-4 border-transparent hover:border-[#8A2BE2]"
                onClick={closeMenu}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
