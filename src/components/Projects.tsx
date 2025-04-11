
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
              title="Airtable Clone"
              description="A full-stack database webapp that is easier to use than any other spreadsheets products."
              tags={["Next.js", "tRPC", "PostgreSQL", "Prisma", "TypeScript", "TailwindCSS", "NextAuth.js"]}
              imageUrl="/airtable-clone.png"
              githubUrl="https://github.com/thanhnguyen123-dev/Airtable-Clone"
              liveUrl="https://thanh-nguyen-airtable-clone.vercel.app"
            />
            
            <ProjectCard 
              title="Web Portfolio"
              description="A portfolio website to showcase my experience, skills and projects."
              tags={["React", "TypeScript", "TailwindCSS"]}
              imageUrl="/portfolio-hero.png"
              githubUrl="https://github.com/thanhnguyen123-dev/Web-Portfolio"
              liveUrl="https://thanh-web-portfolio.vercel.app"
            />
            
            <ProjectCard 
              title="Air Traffic Control System"
              description="A network simulation of an air traffic control system."
              tags={["C", "Linux", "PThreads", "Multi-threading"]}
              imageUrl="/network.jpg"
              githubUrl="https://github.com/thanhnguyen123-dev/air-traffic-controller"
              liveUrl="https://example.com"
            />
            
            <ProjectCard 
              title="Healthcare AI app"
              description="An LLM-powered fullstack healthcare app that tracks patient health data and provides personalized recommendations."
              tags={["React", "TailwindCSS", "Flask", "Python", "GeminiAPI"]}
              imageUrl="/healthcare.png"
              githubUrl="https://github.com/thanhnguyen123-dev/healthcare-app-backend"
              liveUrl="https://health-app-opal.vercel.app"
            />
            
            {/* <ProjectCard 
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
            /> */}
          </div>
          
          <div className="text-center mt-12">
            <a href="https://github.com/thanhnguyen123-dev?tab=repositories" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="rounded-full">
                View All Projects
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
