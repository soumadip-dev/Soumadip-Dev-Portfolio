import type { Metadata } from 'next';
import SectionBorders from '@/components/shared/SectionBorders';
import { Panel, PanelContent, PanelHeader, PanelTitle } from '@/modules/portfolio/components/panel';
import { PROJECTS as PROJECTS_SHOWCASE } from '@/modules/portfolio/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Icons } from '@/components/icons/icons';
import type { Route } from 'next';

const title = 'Projects';
const description = 'A showcase of my prominent works, web applications, and side projects.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: 'projects',
  },
};

export default function ProjectsPage() {
  return (
    <Panel className="flex-1">
      <SectionBorders />
      <PanelHeader>
        <PanelTitle>All Projects.</PanelTitle>
      </PanelHeader>

      <PanelContent className="flex flex-col">
        <div className="p-6 md:p-8 border-b border-dashed">
          <div className="relative rounded-sm border bg-zinc-50/50 p-5 md:p-6 dark:bg-zinc-900/30">
            <div className="absolute top-0 left-0 bottom-0 w-1 bg-zinc-400 dark:bg-zinc-600" />
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed pl-2">
              These are my some prominent works which i listed here . I have done a lot more
              projects ,some are ongoing & some are on the verge of ending.So if you want to see
              more projects , you can visit my{' '}
              <Link
                href={'https://github.com/soumadip-dev'}
                target="_blank"
                className="text-blue-500 font-bold"
              >
                Github
              </Link>{' '}
              profile
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8">
          {PROJECTS_SHOWCASE.map((project, idx) => (
            <div
              className="rounded-xl border dark:border-neutral-800 dark:bg-neutral-900/30 bg-white shadow-sm hover:shadow-md flex flex-col overflow-hidden"
              key={project.id}
            >
              <div className="relative aspect-video w-full bg-zinc-100 dark:bg-zinc-800">
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={idx < 3}
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 flex items-center gap-2 z-20">
                  <Link
                    href={project.githubUrl as Route}
                    target="_blank"
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-black/60 backdrop-blur-sm text-white hover:bg-black/80 border border-white/10"
                    title="View Source Code"
                  >
                    <Icons.github className="h-4 w-4" />
                  </Link>
                  <Link
                    href={project.link as Route}
                    target="_blank"
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-black/60 backdrop-blur-sm text-white hover:bg-black/80 border border-white/10"
                    title="Live Demo"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>

                <div className="absolute -bottom-4 right-4 flex flex-row gap-1.5 bg-white dark:bg-neutral-800 rounded-lg px-3 py-2 shadow-lg border dark:border-neutral-700 z-30">
                  {project?.tech?.map((TechIcon, i) => (
                    <TechIcon
                      key={i}
                      className="size-4 text-neutral-700 dark:text-neutral-300"
                      strokeWidth={1.75}
                    />
                  ))}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6 pt-6">
                <h3 className="text-neutral-900 dark:text-white font-semibold text-xl tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-2 flex-1">
                  {project.shortDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </PanelContent>
    </Panel>
  );
}
