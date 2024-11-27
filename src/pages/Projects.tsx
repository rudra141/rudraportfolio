import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { useProjects } from '../hooks/useProjects';

export default function Projects() {
  const { projects, handleUpvote } = useProjects();

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4"
      >
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onUpvote={handleUpvote}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}