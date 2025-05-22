import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen p-8 sm:p-20">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      <p className="mb-4">
        Welcome to my portfolio website. I am a passionate developer with expertise in modern web technologies.
      </p>
      <p className="mb-4">
        This portfolio site is built with Next.js 15, featuring the latest App Router, TypeScript, and Tailwind CSS.
      </p>
      <div className="mt-8">
        <Link href="/" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
}