import React from 'react';
import { motion } from 'framer-motion';
import { HandThumbUpIcon } from '@heroicons/react/24/outline';
import { HandThumbUpIcon as HandThumbUpSolidIcon } from '@heroicons/react/24/solid';
import { Project } from '../types/Project';

interface ProjectCardProps {
  project: Project;
  onUpvote: (id: number) => void;
}

export default function ProjectCard({ project, onUpvote }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <button 
            onClick={() => onUpvote(project.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
              project.hasUpvoted 
                ? 'text-indigo-600 bg-indigo-50' 
                : 'text-gray-500 hover:text-indigo-600 hover:bg-indigo-50'
            }`}
          >
            {project.hasUpvoted ? (
              <HandThumbUpSolidIcon className="h-5 w-5" />
            ) : (
              <HandThumbUpIcon className="h-5 w-5" />
            )}
            <span>{project.upvotes} upvotes</span>
          </button>
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800"
          >
            View Project →
          </a>
        </div>
      </div>
    </motion.div>
  );
}
