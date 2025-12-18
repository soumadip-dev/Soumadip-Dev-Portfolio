import { technologies } from '@/constants/techConstants';

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
