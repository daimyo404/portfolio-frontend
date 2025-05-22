import React from 'react';
import Link from 'next/link';

export default function Projects() {
  // Sample project data - in a real app, this would come from a database or API
  const projects = [
    { id: 1, title: 'Project 1', description: 'A sample project description' },
    { id: 2, title: 'Project 2', description: 'Another sample project description' },
    { id: 3, title: 'Project 3', description: 'Yet another sample project' },
  ];

  return (
    <div className="min-h-screen p-8 sm:p-20">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
            <button className="text-blue-500 hover:underline">View Details</button>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Link href="/" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
}