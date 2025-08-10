const crafty = '/images/crafty-ai.png';
const commitmate = '/images/commitmate.png';
const logiqo = '/images/logiqo.png';
const snipit = '/images/snipit.png';

export const products = [
  {
    href: 'https://crafty-ai.vercel.app/',
    github: 'https://github.com/soumadip-dev/Crafty.ai-PERN',
    title: 'Crafty-ai',
    description:
      'Crafty AI is a SaaS platform where you can write articles, generate blog titles, remove image backgrounds/objects, and review your resume.',
    thumbnail: crafty,
    images: [crafty],
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
    images: [logiqo],
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
    images: [commitmate],
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
  {
    href: 'https://github.com/soumadip-dev/URL-Shortener-MERN',
    github: 'https://github.com/soumadip-dev/URL-Shortener-MERN',
    title: 'SnipIt',
    description:
      'A URL shortening application developed using the MERN stack for efficient and modern web experience.',
    thumbnail: snipit,
    images: [snipit],
    stack: ['Node.js', 'Express.js', 'MongoDB', 'React.js', 'Redux', 'Tailwind CSS'],
    slug: 'snipit',
    content: (
      <div>
        <p>
          SnipIt is a full-stack application that allows users to shorten long URLs into sleek,
          shareable links. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), it
          provides a seamless user experience with a modern frontend and a robust backend API.
        </p>
        <p>
          Users can generate short, unique URLs for long URLs, create custom short URLs, and track
          URL usage with analytics. The application also includes secure user authentication using
          JWT.
        </p>
      </div>
    ),
  },
];
