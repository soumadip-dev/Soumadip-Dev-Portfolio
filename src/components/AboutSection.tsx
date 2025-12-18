import { aboutContent } from '@/constants/aboutConstants';
import TechBadge from './TechBadge';

const AboutSection = () => {
  return (
    <section
      className="container py-9 border-b border-border animate-fade-in"
      style={{ animationDelay: '0.2s' }}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-m font-bold text-muted-foreground">{aboutContent.title}</h2>
      </div>
      <div className="space-y-5 text-base leading-relaxed text-muted-foreground text-sm">
        {aboutContent.paragraphs.map(paragraph => (
          <p key={paragraph.id}>
            {paragraph.text}

            {paragraph.highlightedWords &&
              paragraph.highlightedWords.map((word, index) => (
                <span key={index} className="relative inline-block px-1 mx-1">
                  <span className="relative z-10 font-bold text-foreground bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                    {word}
                  </span>
                  <span
                    className={`absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-md transform -skew-x-3 ${
                      index === 0 ? 'animate-pulse-glow' : ''
                    }`}
                  ></span>
                </span>
              ))}

            {paragraph.technologies &&
              paragraph.technologies.map((tech, index) => (
                <span key={tech.name}>
                  {' '}
                  <TechBadge name={tech.name} color={tech.color} darkColor={tech.darkColor} />
                  {index < paragraph.technologies!.length - 1 ? ',' : ''}
                </span>
              ))}

            {paragraph.textAfter && (
              <span className="text-muted-foreground"> {paragraph.textAfter}</span>
            )}

            {paragraph.badge && (
              <>
                {' '}
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 mx-1 rounded-md bg-gradient-to-r from-emerald-500/15 to-teal-500/15 border border-emerald-500/30 text-sm font-semibold text-emerald-700 dark:text-emerald-300 animate-glow">
                  {paragraph.badge.showDot && (
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  )}
                  {paragraph.badge.text}
                </span>{' '}
              </>
            )}

            {paragraph.textAfter2 && (
              <span className="text-muted-foreground"> {paragraph.textAfter2}</span>
            )}
          </p>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
