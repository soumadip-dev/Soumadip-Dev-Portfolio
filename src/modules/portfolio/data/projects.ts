import type { Project } from '@/modules/portfolio/types/projects';
import {
  IconBrandCss3,
  IconBrandFramerMotion,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
} from '@tabler/icons-react';

import {
  SiJavascript,
  SiReact,
  SiExpress,
  SiGit,
  SiMongoose,
  SiPrisma,
  SiRecoil,
  SiTailwindcss,
  SiTypescript,
  SiZod,
  SiSocketdotio,
  SiNextdns,
  SiHono,
  SiNextdotjs,
  SiNodedotjs,
  SiDocker,
  SiMongodb,
  SiPostgresql,
  SiBootstrap,
  SiPassport,
  SiNpm,
  SiTrpc,
  SiReactrouter,
  SiReactquery,
  SiFramer,
  SiExpo,
  SiEjs,
} from 'react-icons/si';

export const PROJECTS: Project[] = [
  {
    id: 'logiqo',
    title: 'Logiqo',
    period: {
      start: '08.2025',
      end: '10.2025',
    },
    link: 'https://logiqo-temp.vercel.app/',
    githubUrl: 'https://github.com/soumadip-dev/logiqo',
    image: '/projects/logiqo.png',
    skills: [
      'React.js',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Prisma',
      'JWT',
      'Monaco Editor',
      'Judge0 API',
    ],
    tech: [IconBrandReact, SiExpress, SiPostgresql, SiPrisma],
    description: `Logiqo is a LeetCode-inspired platform for developers to practice coding in JavaScript, Python, and Java.

* Interactive Code Editor powered by Monaco Editor for real-time coding and testing
* Multi-language support with JavaScript, Python, and Java
* Automated test cases to validate submissions
* Submission tracking with runtime, memory usage, and status
* User profiles and custom playlist creation for organizing problems
* Secure authentication with JWT and responsive UI`,
    logo: '',
    shortDescription:
      'A LeetCode-inspired platform for developers to practice coding with real-time test execution.',
    isExpanded: true,
  },
  {
    id: 'bitebox',
    title: 'BiteBox',
    period: {
      start: '04.2025',
      end: '05.2025',
    },
    link: 'https://www.linkedin.com/posts/soumadip-majila-dgp_mern-fooddeliveryapp-fullstack-activity-7418151650302906368-oXpX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1aMJQBxnv5DdAHrtZuCweFePs_SWP_DFE',
    githubUrl: 'https://github.com/soumadip-dev/bitebox',
    skills: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Socket.io',
      'Firebase OAuth',
      'JWT',
      'Razorpay',
      'Cloudinary',
    ],
    tech: [IconBrandReact, SiExpress, SiMongodb, SiSocketdotio],
    description: `BiteBox is a full-stack MERN food delivery application with real-time order tracking and role-based access.
* Supports User, Restaurant Owner, and Delivery Boy roles
* Real-time order updates and delivery tracking using Socket.io
* Secure authentication with JWT and Firebase OAuth
* Integrated Razorpay payments and Cloudinary image uploads
* Restaurant owners can manage food items and order status
* Delivery partners can accept orders and update delivery status with OTP verification`,
    logo: '',
    isExpanded: false,
    shortDescription:
      'A full-stack MERN food delivery application with real-time order tracking and role-based access.',
    image: '/projects/bitebox.png',
  },
  {
    id: 'craftyai',
    image: '/projects/craftyai.png',
    title: 'Crafty.AI',
    period: {
      start: '09.2025',
      end: '10.2025',
    },
    link: 'https://crafty-ai.vercel.app/',
    githubUrl: 'https://github.com/soumadip-dev/craftyai',
    skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Clerk', 'Stripe', 'AI APIs'],
    tech: [IconBrandReact, IconBrandNodejs, SiExpress, SiMongodb],
    description: `Crafty.AI is an AI-powered SaaS platform that brings together multiple creative and productivity tools.
* AI-powered content and image generation tools
* Secure user authentication and subscription handling
* Responsive and modern user interface
* Multiple AI utilities integrated into a single platform
* Built with scalable full-stack architecture`,
    shortDescription:
      'An AI-powered SaaS platform that aggregates multiple creative and productivity AI utilities.',
    logo: '',
    isExpanded: false,
  },
  {
    id: 'debugdeer',
    title: 'DebugDeer',
    githubUrl: 'https://github.com/soumadip-dev/debugdeer',
    image: '/projects/debugdeer.png',
    period: {
      start: '04.2026',
      end: '05.2026',
    },
    link: 'https://www.linkedin.com/posts/soumadip-majila-dgp_ai-webdevelopment-fullstack-activity-7440252963677249538-gJyR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1aMJQBxnv5DdAHrtZuCweFePs_SWP_DFE',
    skills: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Express.js',
      'Bun',
      'PostgreSQL',
      'Drizzle ORM',
      'Gemini AI',
      'Pinecone',
      'Inngest',
      'GitHub OAuth',
      'Octokit',
    ],
    tech: [IconBrandReact, SiTailwindcss, SiExpress, SiPostgresql],
    description: `DebugDeer is an AI-powered code review and debugging assistant that analyzes pull requests, detects issues, and helps developers ship cleaner, more reliable code faster.

* AI-powered code reviews for pull requests and commits with actionable suggestions
* Automatic bug detection with contextual feedback directly on PRs
* Code quality analysis covering best practices and anti-patterns
* Repository-level insights with contextual feedback
* Secure authentication with GitHub OAuth integration
* Real-time analysis with fast and scalable architecture
* Language-agnostic design with extensible rule engine
* Powered by Gemini AI with Pinecone vector database for intelligent code understanding
* Background job processing with Inngest for scalable operations`,
    logo: '',
    isExpanded: false,
    shortDescription:
      'An AI-powered SaaS platform that aggregates multiple creative and productivity AI utilities.',
  },
  {
    id: 'vedacli',
    title: 'VedaCLI',
    period: {
      start: '01.2026',
      end: '02.2026',
    },
    link: 'https://www.linkedin.com/posts/soumadip-majila-dgp_cli-ai-nodejs-ugcPost-7399306384174923776-cKG0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1aMJQBxnv5DdAHrtZuCweFePs_SWP_DFE',
    githubUrl: 'https://github.com/soumadip-dev/vedacli',
    skills: [
      'React',
      'Next.js',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Prisma',
      'Gemini AI',
      'BetterAuth',
      'GitHub OAuth',
    ],
    tech: [IconBrandReact, SiExpress, SiPostgresql, SiPrisma],
    description: `VedaCLI is an intelligent command-line interface powered by Google's Gemini, bringing AI capabilities directly to your terminal.

* Device Authorization with GitHub OAuth for secure authentication
* Simple Chat for direct conversation with AI through your terminal
* Tool Calling with enhanced capabilities including Google Search, Code Execution (Python), and URL Context analysis (up to 20 URLs)
* Agent Mode with advanced AI agent for creating applications using structured output
* Built with modern tech stack including Next.js, Express.js, and PostgreSQL
* Global CLI installation for seamless terminal integration`,
    logo: '',
    isExpanded: false,
    shortDescription:
      "An intelligent command-line interface powered by Google's Gemini AI, running directly in the terminal.",
    image: '/projects/vedacli.png',
  },
  {
    id: 'grocerylist',
    title: 'Grocery List App',
    image: '/projects/grocerylist.png',
    period: {
      start: '05.2026',
      end: '06.2026',
    },
    link: 'https://github.com/soumadip-dev/FreshCart',
    githubUrl: 'https://github.com/soumadip-dev/FreshCart',
    skills: [
      'React Native',
      'Expo',
      'PostgreSQL',
      'Drizzle ORM',
      'Clerk',
      'NativeWind',
      'Zustand',
      'Sentry',
    ],
    tech: [IconBrandReact, SiNodedotjs, SiExpo, SiPostgresql],
    description: `Grocery List App is a full-featured grocery management application with authentication, real-time updates, and insightful analytics for both iOS and Android platforms.

* Secure authentication with Google, Apple & GitHub via Clerk
* Add, mark as purchased, update quantities, and delete grocery items
* Clear all purchased items with a single button
* Insights Dashboard with profile information and usage analytics
* Secure logout flow with protected routes
* Built-in user feedback for feature suggestions and bug reports
* Liquid Glass Tab Effect with iOS-style native tab bar
* Cross-platform support for both iOS and Android
* Type-safe database queries with Drizzle ORM and PostgreSQL on Neon
* Global state management with Zustand`,
    logo: '',
    isExpanded: false,
    shortDescription:
      'A React Native cross-platform grocery manager with secure auth, offline support, and insights.',
  },
];
