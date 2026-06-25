'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import SectionBorders from '@/components/shared/SectionBorders';
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from '@/modules/portfolio/components/panel';
import { PROJECTS } from '@/modules/portfolio/data/projects';
import { CollapsibleList } from '../../../../components/collapsible-list';
import { ProjectItem } from '@/modules/portfolio/components/project-item';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const ID = 'projects';

const Projects = () => {
  return (
    <Panel id={ID}>
      <SectionBorders />
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Projects.</a>
          <PanelTitleSup>({PROJECTS.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={PROJECTS}
        max={3}
        renderItem={project => (
          <div className="border-b last:border-b-0">
            <ProjectItem project={project} />
          </div>
        )}
      />

      <div className="flex justify-center p-6 border-b border-dashed">
        <Button asChild variant="outline" className="group">
          <Link href="/projects" className="flex items-center gap-2">
            View All Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </Panel>
  );
};

export default Projects;
