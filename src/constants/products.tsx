import crafty from 'public/images/crafty-ai.png';
import commitmate from 'public/images/commitmate.png';
import logiqo from 'public/images/logiqo.png';

export const products = [
  {
    href: 'https://crafty-ai.vercel.app/',
    github: 'https://github.com/soumadip-dev/Crafty.ai-PERN',
    title: 'Crafty-ai',
    description:
      'Crafty AI is a SaaS platform where you can write articles, generate blog titles, remove image backgrounds/objects, and review your resume.',
    thumbnail: crafty,
    stack: ['Nodejs', 'Expressjs', 'Postgresql', 'React js', 'Tailwindcss'],
    slug: 'crafty-ai',
    content: (
      <div>
        <p>
          Crafty AI is a versatile platform that helps users write full articles and create
          attention-grabbing blog titles in seconds. It also offers image editing features like
          background and object removal using advanced AI tools, making it ideal for bloggers,
          marketers, and designers.
        </p>
        <p>
          The app includes a resume review feature powered by smart algorithms to ensure your CV
          meets professional standards. With a clean interface and fast performance, Crafty AI
          simplifies creative workflows.
        </p>
      </div>
    ),
  },
  {
    href: 'https://github.com/soumadip-dev/Logiqo-PERN',
    github: 'https://github.com/soumadip-dev/Logiqo-PERN',
    title: 'Logiqo',
    description: 'Logiqo is a PERN stack project — a platform to solve coding problems.',
    thumbnail: logiqo,
    images: logiqo,
    stack: ['Nodejs', 'Expressjs', 'Postgresql', 'React js', 'Tailwindcss'],
    slug: 'algochurn',
    content: (
      <div>
        <p>
          Logiqo allows users to solve algorithmic challenges through an interactive interface. It
          uses a PERN stack to deliver a smooth user experience and enables easy submission,
          feedback, and code evaluation.
        </p>
        <p>
          The project focuses on learning through practice and helps developers sharpen their coding
          skills in a structured environment.
        </p>
      </div>
    ),
  },
  {
    href: 'https://commit-mate.vercel.app/',
    github: 'https://github.com/soumadip-dev/CommitMate-MERN',
    title: 'CommitMate',
    description: 'Connect with developers, manage your profile, and grow your network.',
    thumbnail: commitmate,
    stack: ['Nodejs', 'Expressjs', 'Mongodb', 'React js', 'Tailwindcss'],
    slug: 'moonbeam',
    content: (
      <div>
        <p>
          CommitMate is a social platform built for developers. It enables users to create profiles,
          connect with peers, and showcase their contributions. The goal is to foster collaboration
          and knowledge sharing among developers.
        </p>
        <p>
          With its clean UI and MERN stack backbone, CommitMate is designed for scalability,
          interaction, and productivity within developer communities.
        </p>
      </div>
    ),
  },
  // {
  //   href: 'https://tailwindmasterkit.com',
  //   title: 'Tailwind Master Kit',
  //   description:
  //     'A beautiful and comprehensive Tailwind CSS components library for building modern websites and applications.',
  //   thumbnail: sidefolioTailwindMasterKit,
  //   stack: ['Nextjs', 'Tailwindcss'],
  //   slug: 'tailwindmasterkit',
  //   content: (
  //     <div>
  //       <p>
  //         A component library that helps developers build beautiful websites using Tailwind CSS. It
  //         includes various layouts, UI kits, and templates for fast development.
  //       </p>
  //       <p>
  //         Ideal for those who want to save time and maintain design consistency across their
  //         projects with minimal effort.
  //       </p>
  //     </div>
  //   ),
  // },
];
