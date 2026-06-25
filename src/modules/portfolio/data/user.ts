import type { User } from '@/modules/portfolio/types/user';

const baseUrl = process.env.NEXT_PUBLIC_APP_URL!;

export const USER: User = {
  firstName: 'Soumadip',
  lastName: 'Majila',
  displayName: 'Soumadip',
  username: 'soumadipmajila',
  gender: 'male',
  pronouns: 'he/him',
  bio: `Hey, I'm Soumadip, a Full-Stack Developer and MCA graduate. I enjoy building web applications and learning new technologies.`,
  additionalInfo: `- Currently learning: React Native,Generative AI`,
  address: 'West Bengal, India',
  phoneNumberB64: 'OTg4Mzg0MzUxMg==',
  emailB64: 'c291bWFkaXBtYWppbGFAZ21haWwuY29t',
  website: 'https://soumadip.vercel.app/',
  jobTitle: 'Full-Stack Developer',
  flipSentences: ['Full-Stack Developer', 'Backend Developer'],
  jobs: [
    {
      title: 'Full-Stack Developer',
      company: 'Wisnolect',
      website: 'https://www.wisnolect.com/',
      experienceId: 'wisnolect',
    },
  ],
  about: `
- I recently completed my MCA (2025) from Dr. B. C. Roy Engineering College, Durgapur.
- I have experience building full-stack web applications using React.js, Node.js, Express.js, MongoDB, PostgreSQL, TypeScript, and JavaScript.
- I enjoy designing APIs, building backend systems, and creating responsive user interfaces.
- I like learning new technologies and continuously improving my problem-solving and software engineering skills.
`,
  avatar: `${baseUrl}/profile.png`,
  ogImage: `${baseUrl}/opengraph-image.png`,
  timeZone: 'Asia/Kolkata',
  keywords: [
    'soumadip',
    'soumadip majila',
    'Soumadip Majila',
    'soumadipmajila',
    'soumadip portfolio',
    'full-stack developer',
    'backend developer',
    'mern stack developer',
    'software engineer',
    'web developer',
    'developer',
    'react',
    'reactjs',
    'nextjs',
    'typescript',
    'javascript',
    'nodejs',
    'expressjs',
    'mongodb',
    'postgresql',
    'tailwindcss',
  ],
  dateCreated: '2026-06-24',
};
