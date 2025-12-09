import { useState } from 'react';
import { Sun, Moon, X } from 'lucide-react';

const Header = () => {
  // TODO: LETTER I WILL DO IT USING HOOK
  const theme = 'dark';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ['Home', 'Blog', 'Snippets', 'Resources', 'Projects'];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Blur overlay when mobile menu is open */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm sm:hidden" />
      )}

      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => {
              document.documentElement.classList.toggle('dark');
              localStorage.theme = document.documentElement.classList.contains('dark')
                ? 'dark'
                : 'light';
            }}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary transition-all duration-200 hover:bg-muted hover:scale-105 active:scale-95"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4 transition-transform duration-200 hover:rotate-12" />
            ) : (
              <Moon className="h-4 w-4 transition-transform duration-200 hover:rotate-12" />
            )}
          </button>

          {/* Navigation Menu - Right side */}
          <nav className="flex items-center rounded-lg border border-border bg-secondary p-1 text-sm text-muted-foreground">
            <div className="hidden items-center gap-0 sm:flex">
              {navItems.map(item => (
                <button
                  key={item}
                  className={`rounded-md px-3 py-1.5 text-sm font-medium transition-all duration-200
                    ${
                      item === 'Resources'
                        ? 'bg-background text-foreground shadow-sm'
                        : 'text-muted-foreground hover:bg-background/40 hover:text-foreground'
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background/50 text-foreground transition-colors hover:bg-background sm:hidden"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </nav>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-14 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60 sm:hidden">
            <div className="container mx-auto max-w-6xl px-4 py-2 sm:px-6 lg:px-8">
              <div className="flex flex-col space-y-1">
                {navItems.map(item => (
                  <button
                    key={item}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`rounded-md px-3 py-3 text-sm font-medium transition-all duration-200 text-left
                      ${
                        item === 'Resources'
                          ? 'bg-secondary text-foreground'
                          : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                      }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
