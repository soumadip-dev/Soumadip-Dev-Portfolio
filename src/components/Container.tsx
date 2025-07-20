import React from 'react';

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="max-w-4xl w-full mx-auto py-12 px-5 sm:px-8 md:px-10 lg:py-20">
      {children}
    </main>
  );
};
