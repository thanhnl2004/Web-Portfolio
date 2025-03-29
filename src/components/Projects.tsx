
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
};

const ProjectCard = ({ 
  title, 
  description, 
  tags, 
  imageUrl, 
  githubUrl, 
  liveUrl 
}: ProjectCardProps) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
    <div className="h-48 overflow-hidden">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-500"
      />
    </div>
    
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      
      <p className="text-gray-600 mb-4 text-sm">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span 
            key={index}
            className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-600"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex gap-3 mt-4">
        {githubUrl && (
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black transition-colors"
          >
            <Github size={20} />
          </a>
        )}
        
        {liveUrl && (
          <a 
            href={liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            <ExternalLink size={20} />
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-gradient-soft">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="text-gradient">My Projects</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="E-commerce Platform"
              description="A full-featured online store with product catalog, shopping cart, and payment integration."
              tags={["React", "Node.js", "MongoDB", "Stripe"]}
              imageUrl="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />
            
            <ProjectCard 
              title="Social Media Dashboard"
              description="A responsive dashboard to monitor and analyze social media performance metrics."
              tags={["React", "TypeScript", "Tailwind", "Chart.js"]}
              imageUrl="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />
            
            <ProjectCard 
              title="Task Management App"
              description="A productivity app for organizing tasks, setting deadlines, and tracking progress."
              tags={["Vue.js", "Firebase", "Vuetify"]}
              imageUrl="https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />
            
            <ProjectCard 
              title="Weather Application"
              description="A real-time weather forecast app with location detection and interactive maps."
              tags={["JavaScript", "API Integration", "Geolocation"]}
              imageUrl="https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />
            
            <ProjectCard 
              title="Portfolio Website"
              description="A personal portfolio website to showcase my projects and skills."
              tags={["React", "Tailwind CSS", "Framer Motion"]}
              imageUrl="https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />
            
            <ProjectCard 
              title="Blog Platform"
              description="A content management system for creating and publishing blog articles."
              tags={["Next.js", "GraphQL", "Prisma"]}
              imageUrl="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="rounded-full">
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
