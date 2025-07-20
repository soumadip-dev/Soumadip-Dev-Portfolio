'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { AnimatePresence, motion } from 'framer-motion';
import { IconLayoutSidebarRightCollapse, IconMenu2, IconDownload } from '@tabler/icons-react';
import { Badge } from './Badge';
import { Heading } from './Heading';
import { navlinks } from '@/constants/navlinks';
import { socials } from '@/constants/socials';
import type { NavLink } from '@/types/navlink';

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const pathname = usePathname();
  useEffect(() => {
    if (isMobileView) {
      setIsOpen(false);
    }
  }, [pathname, isMobileView]);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobileView(window.innerWidth < 1024);
      setIsOpen(window.innerWidth >= 1024);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const toggleSidebar = () => setIsOpen(prev => !prev);

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
        className="fixed lg:hidden bottom-6 right-6 h-14 w-14 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-full shadow-lg flex items-center justify-center z-50 hover:shadow-xl transition-all duration-300 group"
        onClick={toggleSidebar}
      >
        <div className="relative h-6 w-6">
          <IconMenu2
            className={twMerge(
              'h-6 w-6 text-white absolute transition-all duration-300',
              isOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
            )}
          />
          <IconLayoutSidebarRightCollapse
            className={twMerge(
              'h-6 w-6 text-white absolute transition-all duration-300',
              isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
            )}
          />
        </div>
      </button>

      {/* Overlay for mobile */}
      <AnimatePresence>
        {isOpen && isMobileView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-neutral-900 z-[99] lg:hidden backdrop-blur-sm"
            onClick={toggleSidebar}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: isMobileView ? -320 : 0 }}
            animate={{ x: 0 }}
            exit={{ x: isMobileView ? -320 : 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={twMerge(
              'fixed lg:sticky z-[100] h-screen w-80 bg-white/90 backdrop-blur-lg px-6 py-8 flex flex-col justify-between',
              'top-0 left-0 shadow-xl border-r border-neutral-100 overflow-hidden'
            )}
          >
            <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar">
              <SidebarHeader />
              <Navigation />
            </div>

            <div
              onClick={() => isMobileView && setIsOpen(false)}
              className="space-y-3 mt-[1.25rem] md:mt-6"
            >
              <Badge
                href="/resume.pdf"
                target="_blank"
                text="Download Resume"
                download
                className="w-full bg-white border border-indigo-500/50 text-indigo-600 hover:bg-indigo-50 transition-all shadow-sm hover:shadow-md"
                icon={<IconDownload className="h-4 w-4" />}
              />
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

const Navigation = () => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  const renderLinks = (links: NavLink[]) => (
    <>
      {links.map((link, index) => (
        <motion.div
          key={link.href}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 + index * 0.05 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="origin-left"
        >
          <Link
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
            className={twMerge(
              'flex items-center space-x-3 py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200',
              'text-neutral-600 hover:text-indigo-600 hover:bg-indigo-50/50',
              isActive(link.href) &&
                'bg-indigo-50 text-indigo-600 shadow-sm border border-indigo-100'
            )}
          >
            <div
              className={twMerge(
                'p-1.5 rounded-lg bg-white border',
                isActive(link.href)
                  ? 'text-indigo-600 border-indigo-100 shadow-sm'
                  : 'text-neutral-500 border-neutral-100'
              )}
            >
              <link.icon className="h-4 w-4 flex-shrink-0" />
            </div>
            <span>{link.label}</span>
          </Link>
        </motion.div>
      ))}
    </>
  );

  return (
    <nav className="my-8 flex flex-col space-y-1 relative z-[100]">
      {renderLinks(navlinks)}

      <div className="mt-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="px-2 pt-8 pb-4"
        >
          <Heading as="p" className="text-lg md:text-lg lg:text-lg text-neutral-500 px-2 pt-8 pb-2">
            Connect
          </Heading>
        </motion.div>
        <div className="space-y-1">{renderLinks(socials)}</div>
      </div>
    </nav>
  );
};

const SidebarHeader = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="flex items-center space-x-4 pb-6 border-b border-neutral-100"
    >
      <motion.div whileHover={{ scale: 1.05 }} className="relative h-14 w-14 flex-shrink-0">
        <Image
          src="/images/default-avatar.jpg"
          alt="User avatar"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          className="rounded-xl object-cover object-top border-2 border-white shadow-md"
        />
      </motion.div>
      <div className="flex flex-col">
        <p className="text-lg font-bold text-neutral-800">Soumadip Majila</p>
        <p className="text-sm font-medium text-neutral-500">Full Stack Developer</p>
      </div>
    </motion.header>
  );
};
