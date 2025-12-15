import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import projects from '@/constants/projectConstant';

const ProjectsSection = () => {
  // Function to format the current date
  const getCurrentDate = () => {
    const now = new Date();
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return now.toLocaleDateString('en-US', options);
  };

  // Get the current date on every render
  const currentDate = getCurrentDate();

  return (
    <section id="projects" className="container py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-m font-bold text-muted-foreground">FEATURED PROJECTS</h2>
        <span className="text-m text-muted-foreground">{currentDate}</span>
      </div>

      <div className="grid gap-5">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group p-6 rounded-xl bg-gradient-to-br from-card/80 to-card/50 border border-border/50 hover:border-primary/40 hover:from-card/90 hover:to-card/70 transition-all duration-400 shadow-sm hover:shadow-md hover:shadow-primary/5"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary/70 group-hover:bg-primary group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-xs text-muted-foreground bg-secondary/80 px-2.5 py-1 rounded-full border border-border/50">
                    {project.year}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed pl-4 border-l-2 border-border/30 group-hover:border-primary/40 transition-colors duration-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-3">
                  {project.tech.map(t => (
                    <span
                      key={t}
                      className="text-xs text-muted-foreground/90 bg-secondary/40 px-2.5 py-1 rounded-md border border-border/20 group-hover:border-primary/20 transition-colors duration-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-secondary/80 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group/link hover:scale-105 active:scale-95"
                  aria-label="Live demo"
                >
                  <ExternalLink className="w-4 h-4 group-hover/link:rotate-12 transition-transform duration-300" />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-secondary/80 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group/link hover:scale-105 active:scale-95"
                  aria-label="GitHub repository"
                >
                  <Github className="w-4 h-4 group-hover/link:rotate-12 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
