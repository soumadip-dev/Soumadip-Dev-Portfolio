import { Briefcase } from 'lucide-react';
import React from 'react';

const ExperienceSection = () => {
  return (
    <section className="container py-12">
      <h2 className="text-sm font-medium text-muted-foreground mb-6">Professional Experience</h2>

      <div className="flex items-start justify-between gap-4 p-4 rounded-lg bg-card/50 border border-border/50">
        <div className="flex items-start gap-4">
          <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Turbo ML</h3>
            <p className="text-sm text-muted-foreground">Software Engineering Intern (AI)</p>
          </div>
        </div>
        <span className="text-sm text-muted-foreground whitespace-nowrap">
          April 2025 – July 2025
        </span>
      </div>
    </section>
  );
};

export default ExperienceSection;
