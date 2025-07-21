'use client';
import React from 'react';

export const Footer = () => {
  return (
    <footer className="p-4 text-center text-xs text-neutral-500 border-t border-neutral-100">
      <span className="font-semibold">{new Date().getFullYear()}</span> &mdash; Crafted by
      Soumadip Majila
    </footer>
  );
};
