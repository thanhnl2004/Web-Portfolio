import React from 'react';
import { 
  Code2, Figma, Globe, Database, Server, Cpu, 
  Layers, LayoutGrid, Palette, Gauge, Lock, Atom 
} from 'lucide-react';
import { IconCloud } from './magicui/icon-cloud';

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
  
  
  // Generic formatting - capitalize first letter and remove numbers
  return tag.charAt(0).toUpperCase() + tag.slice(1).replace(/\d/g, '');
};

const SkillCardList = ({ tags }: { tags: string[] }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
    {tags.map((tag, index) => (
      <span 
        key={index}
        className="text-sm font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-600"
      >
        {formatTagName(tag)}
      </span>
    ))}
  </div>
  );
};

const Skills = () => {
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
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            I've developed a diverse set of skills throughout my study and work experience, 
            allowing me to create comprehensive web solutions.
          </p>

          <div className="flex justify-center items-center gap-4">
            <IconCloud images={images} />
            <SkillCardList tags={slugs} />
          </div>


          
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
            
            <SkillCard 
              icon={<Layers size={32} />} 
              title="CMS" 
              description="WordPress, Shopify, Contentful, Strapi"
            />
            
            <SkillCard 
              icon={<LayoutGrid size={32} />} 
              title="State Management" 
              description="Redux, Context API, Vuex, Recoil"
            />
            
            <SkillCard 
              icon={<Lock size={32} />} 
              title="Authentication" 
              description="OAuth, JWT, Firebase Auth, Role-based access control"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
