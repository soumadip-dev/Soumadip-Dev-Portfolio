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
    description: `Logiqo is a coding practice platform that supports JavaScript, Python, and Java with real-time code execution.

* Supports 3 programming languages: JavaScript, Python, and Java
* Monaco Editor integration for real-time coding and testing
* Automated test case validation for accurate submissions
* Tracks runtime, memory usage, and execution status for every submission
* Custom playlists and user profiles for problem organization
* JWT-based authentication with secure access control
* Responsive interface optimized for desktop and mobile devices`,
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
    description: `BiteBox is a full-stack food delivery platform with real-time order management, payments, and role-based workflows.

* Supports 3 distinct roles: Customer, Restaurant Owner, and Delivery Partner
* Real-time order tracking and status updates using Socket.io
* JWT and OAuth authentication for secure user access
* Razorpay payment gateway integration for online payments
* Cloudinary-powered image upload and management
* OTP-based delivery verification workflow
* Responsive MERN architecture built for scalable order processing`,
    logo: '',
    isExpanded: false,
    shortDescription:
      'A MERN food delivery platform with 3 user roles, real-time order tracking, OTP verification, and online payments.',
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
    description: `Crafty.AI is an AI-powered SaaS platform that centralizes multiple creative and productivity tools into a single application.

* Multiple AI-powered tools for content and image generation
* Secure authentication and user management with Clerk
* Subscription and premium access management
* Unified dashboard for accessing all AI utilities
* Centralized workflow eliminating the need for multiple AI platforms`,
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
    description: `DebugDeer is an AI-powered code review platform that helps developers identify bugs, review pull requests, and maintain code quality.

* Automated AI review for pull requests and commits
* GitHub OAuth integration for repository access
* Repository-level code analysis with contextual feedback
* Intelligent bug detection powered by Gemini AI
* Semantic code understanding using Pinecone vector search
* Background processing with Inngest for scalable analysis workflows
* Actionable recommendations for best practices and maintainability
* Language-agnostic architecture supporting diverse codebases`,
    logo: '',
    isExpanded: false,
    shortDescription:
      'An AI-powered GitHub code reviewer that analyzes pull requests, detects issues, and improves code quality.',
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
    description: `VedaCLI is an AI-powered command-line assistant that brings conversational AI and advanced tooling directly into the terminal.

* GitHub OAuth Device Authorization for secure CLI authentication
* AI chat experience directly from the terminal
* Built-in tool calling for web search, Python execution, and URL analysis
* Agent mode capable of generating applications through structured workflows
* Supports context processing across multiple URLs simultaneously
* Global CLI installation for seamless developer workflows
* Powered by Gemini AI with PostgreSQL-backed user management
* Designed for productivity-focused terminal-first development`,
    logo: '',
    isExpanded: false,
    shortDescription:
      'An AI-powered CLI with Gemini integration, tool calling, GitHub authentication, and agent-based workflows.',
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
    description: `Grocery List App is a React Native application for managing grocery purchases with authentication, analytics, and cross-platform support.

* Supports Google, Apple, and GitHub authentication via Clerk
* Cross-platform experience for both iOS and Android devices
* Create, update, track, and remove grocery items efficiently
* One-click cleanup for completed purchases
* Personal insights dashboard with account and usage statistics
* Type-safe PostgreSQL integration using Drizzle ORM
* Zustand-powered global state management
* Built-in feedback system for collecting user suggestions and bug reports
* Native mobile UI with modern iOS-inspired interactions`,
    logo: '',
    isExpanded: false,
    shortDescription:
      'A cross-platform React Native grocery manager with auth, analytics, and real-time state management.',
  },
];
