import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiTailwindcss,
  SiNextdotjs,
  SiRedis,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const technologies = [
  { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
  { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
  { icon: FaJava, name: 'Java', color: '#ED8B00' },
  { icon: SiPython, name: 'Python', color: '#3776AB' },
  { icon: SiPostgresql, name: 'SQL', color: '#4169E1' },
  { icon: SiReact, name: 'React.js', color: '#61DAFB' },
  { icon: SiNextdotjs, name: 'Next.js', color: 'currentColor' },
  { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
  { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
  { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
  { icon: SiRedis, name: 'Redis', color: '#DC382D' },
  { icon: SiDocker, name: 'Docker', color: '#2496ED' },
  { icon: SiGit, name: 'Git', color: '#F05032' },
];

const TechStackSection = () => {
  return (
    <section className="py-12 border-y border-border/50 container">
      <div className="container">
        <h2 className="text-sm font-medium text-muted-foreground mb-2">Stack I use</h2>
        <p className="text-sm text-muted-foreground mb-8">
          Technologies I work with to build products that solve real problems
        </p>
      </div>

      {/* Infinite scroll container */}
      <div className="relative overflow-hidden">
        <div className="flex tech-scroll">
          {/* Double the items for seamless loop */}
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 px-8 py-4 min-w-[120px] group"
            >
              <div className="p-4 rounded-xl bg-card border border-border/50 group-hover:border-primary/30 group-hover:bg-card/80 transition-all duration-300">
                <tech.icon
                  className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: tech.color }}
                />
              </div>
              <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </section>
  );
};
export default TechStackSection;
