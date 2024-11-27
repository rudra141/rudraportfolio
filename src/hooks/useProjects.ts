import { useState } from 'react';
import { Project } from '../types/Project';

const initialProjects: Project[] = [
  {
    id: 1,
    title: "AI Well Construction Advisor",
    description: "Machine learning model for detection of water quality using geospatial data and chemical properties",
    image: "https://elearn.nptel.ac.in/wp-content/uploads/2024/01/Water-Quality.jpg",
    tags: ["Scikit Learn", "Machine Learning", "Python" , "Pandas"],
    upvotes: 20,
    hasUpvoted: false,
    link: "https://github.com/rudra141/Water-Well-Predictor"
  },
  {
    id: 2,
    title: "LegalMate: AI Assistant for legal solutions",
    description: "AI-powered legal assistant for legal research and document analysis",
    image: "https://cdn.ielts.net/wp-content/uploads/2024/09/ai-legal-profession-impact-66f456.webp?strip=all&lossy=1&quality=60&webp=60&sharp=1&ssl=1",
    tags: ["Generative AI", "RAG", "Vector databse" , "Python"],
    upvotes: 20,
    hasUpvoted: false,
    link: "https://github.com/rudra141/LegalMate-AI-Legal-Assistant"
  },
  {
    id: 3,
    title: "SKYGUARD : Drone Detection using YOLO NAS",
    description: "Drone detection system YOLO Neural Architecture Search",
    image: "https://cdn.mos.cms.futurecdn.net/kXUY9hyetVzhZ2scwJP7p3-1200-80.jpg",
    tags: ["YOLO NAS", "Python", "OpenCV" , "Tensorflow"],
    upvotes: 15,
    hasUpvoted: false,
    link: "https://github.com/rudra141/SkyGuard"
  }
];

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);

  const handleUpvote = (id: number) => {
    setProjects(projects.map(project => 
      project.id === id 
        ? {
            ...project,
            upvotes: project.hasUpvoted ? project.upvotes - 1 : project.upvotes + 1,
            hasUpvoted: !project.hasUpvoted
          }
        : project
    ));
  };

  return { projects, handleUpvote };
}