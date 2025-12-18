import React from 'react';
import { Moon, Sun, Play } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { navigation } from '@/constants/navConstants';

const Navigation = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between h-14">
        <a
          href="#"
          className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
        >
          {navigation.brandName}
        </a>

        <div className="flex items-center gap-6">
          {navigation.navItems.map(item => (
            <a
              key={item.id}
              href={item.href}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <Play className="w-3 h-3 fill-current group-hover:text-primary transition-colors" />
              <span className="group-hover:text-primary transition-colors">{item.name}</span>
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors group"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-foreground group-hover:text-primary transition-colors" />
            ) : (
              <Moon className="w-4 h-4 text-foreground group-hover:text-primary transition-colors" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
