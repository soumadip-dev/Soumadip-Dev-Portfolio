import { useEffect, useState } from 'react';

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface ContributionWeek {
  days: ContributionDay[];
}

const GitHubGraph = () => {
  const [contributions, setContributions] = useState<ContributionWeek[]>([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContributions();
  }, []);

  const fetchContributions = async () => {
    try {
      const response = await fetch(
        'https://github-contributions-api.jogruber.de/v4/soumadip-dev?y=last'
      );
      const data = await response.json();

      if (data.contributions) {
        const weeks: ContributionWeek[] = [];
        let week: ContributionDay[] = [];
        let total = 0;

        data.contributions.forEach(
          (day: { date: string; count: number; level: number }, index: number) => {
            total += day.count;
            week.push({
              date: day.date,
              count: day.count,
              level: day.level,
            });

            if (week.length === 7 || index === data.contributions.length - 1) {
              weeks.push({ days: [...week] });
              week = [];
            }
          }
        );

        setContributions(weeks);
        setTotalContributions(total);
      }
    } catch (error) {
      console.error('Failed to fetch GitHub contributions:', error);
      generatePlaceholderData();
    } finally {
      setLoading(false);
    }
  };

  const generatePlaceholderData = () => {
    const weeks: ContributionWeek[] = [];
    let total = 0;

    for (let w = 0; w < 52; w++) {
      const days: ContributionDay[] = [];
      for (let d = 0; d < 7; d++) {
        const count = Math.floor(Math.random() * 10);
        const level = count === 0 ? 0 : Math.min(4, Math.ceil(count / 2));
        total += count;
        days.push({ date: '', count, level });
      }
      weeks.push({ days });
    }

    setContributions(weeks);
    setTotalContributions(total);
  };

  const getLevelColor = (level: number) => {
    const colors = [
      'bg-secondary',
      'bg-muted-foreground/30',
      'bg-muted-foreground/50',
      'bg-muted-foreground/70',
      'bg-foreground/80',
    ];
    return colors[level] || colors[0];
  };

  if (loading) {
    return (
      <section className="container py-12">
        <div className="animate-pulse h-32 bg-card rounded-lg" />
      </section>
    );
  }

  return (
    <section className="container py-12">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-m font-medium text-muted-foreground">GITHUB CONTRIBUTIONS</h2>
        <a
          href="https://github.com/soumadip-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-m text-muted-foreground hover:text-primary transition-colors"
        >
          @soumadip-dev
        </a>
      </div>

      <div className="p-4 rounded-lg bg-card/50 border border-border/50">
        <div className="flex overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
          <div className="flex gap-[1px]">
            <div className="flex gap-[7px]">
              {contributions.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-[2px]">
                  {week.days.map((day, dayIndex) => (
                    <button
                      key={dayIndex}
                      className={`w-3 h-3 md:w-3 md:h-3 rounded-[2px] ${getLevelColor(
                        day.level
                      )} transition-all hover:scale-110 hover:ring-1 hover:ring-primary/50 active:scale-105 hover:!bg-yellow-500`}
                      title={`${day.count} contributions${day.date ? ` on ${day.date}` : ''}`}
                      aria-label={`${day.count} contributions on ${day.date || 'this day'}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-6 gap-3">
          <span className="text-xs text-muted-foreground">
            {totalContributions.toLocaleString()} contributions in the last year
          </span>
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-muted-foreground mr-2 whitespace-nowrap">Less</span>
            {[0, 1, 2, 3, 4].map(level => (
              <div
                key={level}
                className={`w-3 h-3 md:w-3 md:h-3 rounded-[2px] ${getLevelColor(level)}`}
              />
            ))}
            <span className="text-xs text-muted-foreground ml-2 whitespace-nowrap">More</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubGraph;
