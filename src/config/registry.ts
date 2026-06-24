export const registryConfig = {
  namespace: process.env.NEXT_PUBLIC_REGISTRY_NAMESPACE || '@soumadip-dev',
  namespaceUrl:
    process.env.NEXT_PUBLIC_REGISTRY_NAMESPACE_URL || 'https://soumadip.vercel.app/{name}.json',
};

export const componentCategories = [
  {
    name: 'ui-components',
    title: 'UI Components',
    description:
      'Reusable and customizable React components built with Tailwind CSS and TypeScript for modern web applications.',
  },
  {
    name: 'animations',
    title: 'Animations',
    description:
      'Interactive animations, loaders, transitions, and visual effects designed to enhance user experience.',
  },
  {
    name: 'forms',
    title: 'Forms & Validation',
    description:
      'Form components with validation using React Hook Form, Zod, and modern form patterns.',
  },
  {
    name: 'authentication',
    title: 'Authentication',
    description:
      'Authentication-related components and examples using JWT, Firebase OAuth, and role-based access control.',
  },
  {
    name: 'dashboard',
    title: 'Dashboard Components',
    description:
      'Reusable dashboard layouts, charts, tables, and admin panel components for scalable applications.',
  },
  {
    name: 'integrations',
    title: 'API & Integrations',
    description:
      'Examples and utilities for integrating REST APIs, payments, cloud storage, and third-party services.',
  },
];
