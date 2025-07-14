import React from 'react';
import { 
  Code2, Figma, Globe, Database, Server, Cpu, 
  Layers, LayoutGrid, Palette, Gauge, Lock, Atom 
} from 'lucide-react';
import { IconCloud } from './magicui/icon-cloud';
import { useIsMobile } from '@/hooks/use-mobile';

const slugs = [
  "typescript",
  "javascript",
  "c",
  "haskell",
  "python",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazons3",
  "postgresql",
  "supabase",
  "vercel",
  "docker",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "figma",
  "springboot",
  "tailwindcss",
  "trpc",
  "drizzle"
];

type SkillCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const SkillCard = ({ icon, title, description }: SkillCardProps) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
    <div className="mb-4 text-blue-600">{icon}</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const formatTagName = (tag: string): string => {
  // Special case formatting
  if (tag === 'nodedotjs') return 'Node.js';
  if (tag === 'nextdotjs') return 'Next.js';
  if (tag === 'amazons3') return 'AWS S3';
  if (tag === 'visualstudiocode') return 'VS Code';
  if (tag === 'tailwindcss') return 'Tailwind CSS';
  if (tag === "html5") return "HTML";
  if (tag === "css3") return "CSS";
  if (tag === "trpc") return "tRPC";
  if (tag === "drizzle") return "Drizzle ORM";
  if (tag === "springboot") return "Spring Boot";
  if (tag === "figma") return "Figma";
  if (tag === "androidstudio") return "Android Studio";
  if (tag === "gitlab") return "GitLab";
  if (tag === "github") return "GitHub";
  if (tag === "git") return "Git";
  if (tag === "vercel") return "Vercel";
  if (tag === "docker") return "Docker";
  if (tag === "postgresql") return "PostgreSQL";
  if (tag === "supabase") return "Supabase";
  
  
  // Generic formatting - capitalize first letter and remove numbers
  return tag.charAt(0).toUpperCase() + tag.slice(1).replace(/\d/g, '');
};

const SkillTagList = ({ tags }: { tags: string[] }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 my-4 px-4">
      {tags.map((tag, index) => (
        <span 
          key={index}
          className="text-sm font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300 transition-all hover:scale-105 mb-2"
        >
          {formatTagName(tag)}
        </span>
      ))}
    </div>
  );
};

const Skills = () => {
  const isMobile = useIsMobile();
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="text-gradient">Technical Skills</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto px-4">
            I've developed a diverse set of skills throughout my study and work experience, 
            allowing me to create comprehensive web solutions.
          </p>

          {/* For mobile, show only SkillTagList */}
          {isMobile ? (
            <SkillTagList tags={slugs} />
          ) : (
            /* For desktop, show both IconCloud and SkillTagList */
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="flex justify-center items-center mb-8">
                <IconCloud images={images} />
              </div>
              <div className="w-full md:w-1/2">
                <SkillTagList tags={slugs} />
              </div>
            </div>
          )}

          {/* Additional skill cards section can be uncommented if needed */}
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard 
              icon={<Code2 size={32} />} 
              title="Front-end Development" 
              description="Next.js, React, TailwindCSS, HTML, CSS"
            />
            
            <SkillCard 
              icon={<Database size={32} />} 
              title="Back-end Development" 
              description="Spring Boot, tRPC, Express.js, Node.js, Flask"
            />
            
            <SkillCard 
              icon={<Figma size={32} />} 
              title="UI/UX Design" 
              description="Figma, Framer"
            />
            
            <SkillCard 
              icon={<Globe size={32} />} 
              title="Web Performance" 
              description="Optimization, Responsive Design, Cross-browser compatibility"
            />
            
            <SkillCard 
              icon={<Server size={32} />} 
              title="Database" 
              description="PostgreSQL, MySQL, Supabase, Neon"
            />
            
            <SkillCard 
              icon={<Cpu size={32} />} 
              title="DevOps" 
              description="Git, Vetcel, AWS S3, CI/CD"
            />
          </div> 
         
        </div>
      </div>
    </section>
  );
};

export default Skills;
