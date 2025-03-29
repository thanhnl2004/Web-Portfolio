
import React from 'react';
import { 
  Code2, Figma, Globe, Database, Server, Cpu, 
  Layers, LayoutGrid, Palette, Gauge, Lock, Atom 
} from 'lucide-react';

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

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="text-gradient">My Skills</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            I've developed a diverse set of skills throughout my career, 
            allowing me to create comprehensive web solutions.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard 
              icon={<Code2 size={32} />} 
              title="Front-end Development" 
              description="HTML, CSS, JavaScript, React, Vue, TypeScript, Tailwind CSS"
            />
            
            <SkillCard 
              icon={<Database size={32} />} 
              title="Back-end Development" 
              description="Node.js, Express, Python, Django, RESTful APIs"
            />
            
            <SkillCard 
              icon={<Figma size={32} />} 
              title="UI/UX Design" 
              description="Figma, Adobe XD, User Research, Wireframing, Prototyping"
            />
            
            <SkillCard 
              icon={<Globe size={32} />} 
              title="Web Performance" 
              description="Optimization, Responsive Design, Cross-browser compatibility"
            />
            
            <SkillCard 
              icon={<Server size={32} />} 
              title="Database" 
              description="MongoDB, PostgreSQL, MySQL, Firebase, Redis"
            />
            
            <SkillCard 
              icon={<Cpu size={32} />} 
              title="DevOps" 
              description="Git, CI/CD, Docker, AWS, Netlify, Vercel"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
