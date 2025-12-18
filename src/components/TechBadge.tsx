interface TechBadgeProps {
  name: string;
  color: string;
  darkColor?: string;
}

const TechBadge = ({ name, color, darkColor }: TechBadgeProps) => {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary/80 text-sm font-medium text-foreground hover:bg-secondary transition-colors duration-200">
      <span
        className="h-2.5 w-2.5 rounded-full flex-shrink-0"
        style={{
          backgroundColor: color,
          filter: darkColor ? 'brightness(0.9)' : undefined,
        }}
      />
      {name}
    </span>
  );
};

export default TechBadge;
