import { MessageSquare, Sparkles } from 'lucide-react';
import React from 'react';

const CTASection = () => {
  return (
    <section className="container py-16">
      <div className="text-center space-y-6 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-primary/5 rounded-full blur-2xl -z-10" />

        <p className="text-muted-foreground italic text-sm sm:text-base relative inline-block">
          "If you've read this far, you might be interested in what I do."
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative">
          <a
            href="mailto:soumadipmajila@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border hover:border-primary hover:bg-card/80 transition-all duration-300 group w-full sm:w-auto justify-center shadow-sm hover:shadow-md hover:shadow-primary/10 active:scale-[0.98]"
          >
            <div className="relative">
              <MessageSquare className="w-4 h-4 text-primary transition-transform group-hover:scale-110" />
              <div className="absolute -inset-1 bg-primary/10 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="font-medium text-foreground group-hover:text-primary transition-colors relative">
              Send a Message
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
            </span>
          </a>
        </div>

        <p className="text-xs text-muted-foreground pt-2 animate-pulse">
          I typically respond within 24 hours
        </p>
      </div>
    </section>
  );
};

export default CTASection;
