import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'AI Food Delivery Router',
    description:
      'Intelligent routing system that aggregates food delivery and grocery orders using reverse-engineered APIs from major platforms.',
    tech: ['Python', 'FastAPI', 'Redis'],
    github: 'https://github.com/soumadip-dev',
    demo: '#',
    year: '2025',
  },
  {
    title: 'WhatsApp Business Automation',
    description:
      'Custom command integration for WhatsApp Business API with secure MCP protocols and hash-based user identification.',
    tech: ['Node.js', 'TypeScript', 'MongoDB'],
    github: 'https://github.com/soumadip-dev',
    demo: '#',
    year: '2025',
  },
  {
    title: 'Real-time Task Scheduler',
    description:
      'Redis Sorted Sets based task scheduling system handling time-sensitive operations under 24-hour constraints.',
    tech: ['Redis', 'Node.js', 'Docker'],
    github: 'https://github.com/soumadip-dev',
    demo: '#',
    year: '2025',
  },
  {
    title: 'Portfolio Website',
    description:
      'Modern, responsive portfolio built with React and Tailwind CSS featuring dynamic GitHub contributions and theme switching.',
    tech: ['React', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/soumadip-dev',
    demo: '#',
    year: '2025',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="container py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-sm font-medium text-muted-foreground">Projects</h2>
        <span className="text-sm text-muted-foreground">December 15, 2025</span>
      </div>

      <div className="grid gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group p-5 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-3">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded">
                    {project.year}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map(t => (
                    <span
                      key={t}
                      className="text-xs text-muted-foreground bg-secondary/50 px-2 py-1 rounded"
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
                  className="p-2.5 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  aria-label="Live demo"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  aria-label="GitHub repository"
                >
                  <Github className="w-4 h-4" />
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
