import { Calendar } from 'lucide-react';
import React from 'react';

const CTASection = () => {
  return (
    <section className="container py-16">
      <div className="text-center space-y-6">
        <p className="text-muted-foreground italic">
          If you've read this far, you might be interested in what I do.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border hover:border-primary hover:bg-card/80 transition-all duration-300 group"
        >
          <Calendar className="w-4 h-4 text-primary" />
          <span className="font-medium text-foreground group-hover:text-primary transition-colors">
            Book a Free Call
          </span>
        </a>
      </div>
    </section>
  );
};

export default CTASection;
