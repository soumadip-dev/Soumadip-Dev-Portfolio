import { Calendar, MessageSquare } from 'lucide-react';
import React from 'react';

const CTASection = () => {
  return (
    <section className="container py-16">
      <div className="text-center space-y-6">
        <p className="text-muted-foreground italic text-sm sm:text-base">
          "If you've read this far, you might be interested in what I do."
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:soumadipmajila@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border hover:border-primary hover:bg-card/80 transition-all duration-300 group w-full sm:w-auto justify-center"
          >
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="font-medium text-foreground group-hover:text-primary transition-colors">
              Send a Message
            </span>
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 group w-full sm:w-auto justify-center"
          >
            <Calendar className="w-4 h-4" />
            <span className="font-medium">Schedule a Call</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
