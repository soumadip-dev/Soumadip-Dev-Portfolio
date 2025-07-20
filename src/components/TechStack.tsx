import Image from 'next/image';
import React from 'react';

export const TechStack = () => {
  const stack = [
    { title: 'JavaScript', src: '/images/logos/java-script.png' },
    { title: 'React.js', src: '/images/logos/react.png' },
    { title: 'Node.js', src: '/images/logos/node.png' },
    { title: 'Express.js', src: '/images/logos/express.png' },
    { title: 'TypeScript', src: '/images/logos/typescript.png' },
    { title: 'Git', src: '/images/logos/github.png' },
    { title: 'MongoDB', src: '/images/logos/mongodb.png' },
    { title: 'PostgreSQL', src: '/images/logos/postgresql.png' },
    { title: 'Vercel', src: '/images/logos/vercel.png' },
    { title: 'Render', src: '/images/logos/render.jpg' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {stack.map(item => (
          <div
            key={item.title}
            className="flex flex-col items-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 hover:border-primary/20"
          >
            <div className="relative h-14 w-14 mb-4 flex items-center justify-center bg-gray-50 rounded-lg p-2">
              <Image
                src={item.src}
                width={48}
                height={48}
                alt={item.title}
                className="object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
