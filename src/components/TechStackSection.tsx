import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiPostgresql,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiGit,
  SiExpress,
} from 'react-icons/si';

const technologies = [
  { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
  { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
  { icon: SiReact, name: 'React', color: '#61DAFB' },
  { icon: SiRedux, name: 'Redux', color: '#764ABC' },
  { icon: SiNextdotjs, name: 'Next.js', color: 'currentColor' },
  { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
  { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
  { icon: SiExpress, name: 'Express.js', color: '#000000' },
  { icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1' },
  { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
  { icon: SiRedis, name: 'Redis', color: '#DC382D' },
  { icon: SiDocker, name: 'Docker', color: '#2496ED' },
  { icon: SiGit, name: 'Git', color: '#F05032' },
];

const TechStackSection = () => {
  return (
    <section className="py-12 border-y border-border/50 container">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-m font-medium text-muted-foreground">STACK I USE</h2>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex tech-scroll">
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

        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </section>
  );
};
export default TechStackSection;
