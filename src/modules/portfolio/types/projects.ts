import type { IconType } from 'react-icons';
import type { TablerIcon } from '@tabler/icons-react';

export type Project = {
  id: string;
  title: string;
  period: {
    start: string;
    end?: string;
  };
  link?: string;
  skills: string[];
  description?: string;
  logo?: string;
  isExpanded?: boolean;
  shortDescription?: string;
  image: string;
  githubUrl?: string;
  tech?: Array<IconType | TablerIcon>;
};
