import { useState } from 'react';
import colors from '../constants/colors';
import otherProjects from '../constants/otherProjects';
import featuredProjects from '../constants/featuredProjects';

import { FaGithubAlt, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [direction, setDirection] = useState('right');

  const nextProject = () => {
    setDirection('right');
    setActiveProject(prev => (prev === otherProjects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setDirection('left');
    setActiveProject(prev => (prev === 0 ? otherProjects.length - 1 : prev - 1));
  };

  const goToProject = index => {
    setDirection(index > activeProject ? 'right' : 'left');
    setActiveProject(index);
  };

  return (
    <section
      id="projects"
      className="py-28 px-[5%] xl:px-[10%]"
      style={{ backgroundColor: colors.dark }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold whitespace-nowrap"
            style={{ color: colors.text }}
          >
            <span className="font-mono mr-4" style={{ color: colors.accent }}>
              03.
            </span>
            Featured Projects
          </h2>
          <div
            className="w-full md:w-64 h-px ml-4"
            style={{ backgroundColor: `${colors.primary}30` }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden border transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl"
              style={{
                backgroundColor: colors.darker,
                borderColor: `${colors.primary}20`,
              }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-90" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3" style={{ color: colors.text }}>
                  {project.title}
                </h3>
                <p style={{ color: colors.textSecondary }}>{project.description}</p>
                <div className="flex flex-wrap gap-2 my-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full font-mono"
                      style={{
                        backgroundColor: `${colors.primary}10`,
                        color: colors.accent,
                        border: `1px solid ${colors.primary}30`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-md"
                    style={{
                      backgroundColor: `${colors.primary}20`,
                      color: colors.text,
                      border: `1px solid ${colors.primary}30`,
                    }}
                  >
                    Live Demo <FaExternalLinkAlt size={12} />
                  </a>
                  <a
                    href={project.sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-md"
                    style={{
                      backgroundColor: `${colors.primary}20`,
                      color: colors.text,
                      border: `1px solid ${colors.primary}30`,
                    }}
                  >
                    <FaGithubAlt size={14} /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-center mb-8" style={{ color: colors.text }}>
          Other Projects
        </h3>

        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full z-10 hover:shadow-md transition-all duration-300"
            style={{
              backgroundColor: colors.darker,
              border: `1px solid ${colors.primary}30`,
              color: colors.text,
            }}
            aria-label="Previous project"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full z-10 hover:shadow-md transition-all duration-300"
            style={{
              backgroundColor: colors.darker,
              border: `1px solid ${colors.primary}30`,
              color: colors.text,
            }}
            aria-label="Next project"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Fixed Carousel Container */}
          <div className="relative overflow-hidden h-80">
            {' '}
            {/* Added fixed height */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeProject * 100}%)` }}
            >
              {otherProjects.map((project, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4 transition-opacity duration-500"
                >
                  <div
                    className="rounded-lg p-8 border transition-all duration-300 hover:shadow-lg h-full"
                    style={{
                      backgroundColor: colors.darker,
                      borderColor: `${colors.primary}20`,
                    }}
                  >
                    <div className="text-center mb-8">
                      <h4 className="text-xl font-bold mb-2" style={{ color: colors.text }}>
                        {project.title}
                      </h4>
                      <p style={{ color: colors.textSecondary }}>{project.description}</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-full font-mono"
                          style={{
                            backgroundColor: `${colors.primary}10`,
                            color: colors.accent,
                            border: `1px solid ${colors.primary}30`,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-center gap-4">
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-md"
                        style={{
                          backgroundColor: `${colors.primary}20`,
                          color: colors.text,
                          border: `1px solid ${colors.primary}30`,
                        }}
                      >
                        Live Demo <FaExternalLinkAlt size={12} />
                      </a>
                      <a
                        href={project.sourceLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-md"
                        style={{
                          backgroundColor: `${colors.primary}20`,
                          color: colors.text,
                          border: `1px solid ${colors.primary}30`,
                        }}
                      >
                        <FaGithubAlt size={14} /> Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {otherProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeProject === index
                    ? 'bg-gradient-to-r from-[#8A2BE2] to-[#BA55D3] w-6'
                    : 'bg-[#1A1A1A] hover:bg-[#8A2BE2]/50'
                }`}
                aria-label={`View project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
