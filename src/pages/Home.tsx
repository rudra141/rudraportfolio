import React from 'react';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import { useProjects } from '../hooks/useProjects';

export default function Home() {
  const { projects, handleUpvote } = useProjects();
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center text-indigo-600">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onUpvote={handleUpvote}
            />
          ))}
        </div>
      </main>
    </div>
  );
}