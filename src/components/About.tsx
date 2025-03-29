
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-soft">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-gradient">About Me</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Who am I?</h3>
              <p className="text-gray-700">
                I'm a passionate web developer with a strong foundation in front-end and back-end technologies. 
                With 5 years of experience, I specialize in creating responsive, accessible, and 
                performance-optimized web applications.
              </p>
              <p className="text-gray-700">
                My journey in web development started with a curiosity about how websites work, and it has 
                evolved into a fulfilling career where I get to solve problems and create digital experiences 
                that make a difference.
              </p>
              <p className="text-gray-700">
                When I'm not coding, you can find me hiking in the mountains, reading sci-fi novels, 
                or experimenting with new cooking recipes.
              </p>
              
              <div className="pt-4">
                <Button className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 opacity-10 rounded-bl-full"></div>
              
              <h3 className="text-xl font-semibold mb-6">My Journey</h3>
              
              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-blue-200">
                  <div className="absolute left-[-8px] top-0 w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                  <h4 className="font-medium">Senior Web Developer</h4>
                  <p className="text-sm text-gray-500">Company Name (2021 - Present)</p>
                  <p className="text-sm text-gray-700 mt-1">Leading development of enterprise web applications.</p>
                </div>
                
                <div className="relative pl-8 border-l-2 border-blue-200">
                  <div className="absolute left-[-8px] top-0 w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                  <h4 className="font-medium">Front-end Developer</h4>
                  <p className="text-sm text-gray-500">Company Name (2019 - 2021)</p>
                  <p className="text-sm text-gray-700 mt-1">Worked on responsive web design projects.</p>
                </div>
                
                <div className="relative pl-8 border-l-2 border-blue-200">
                  <div className="absolute left-[-8px] top-0 w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                  <h4 className="font-medium">Junior Developer</h4>
                  <p className="text-sm text-gray-500">Company Name (2018 - 2019)</p>
                  <p className="text-sm text-gray-700 mt-1">Started my journey as a web developer.</p>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute left-[-8px] top-0 w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                  <h4 className="font-medium">Computer Science Degree</h4>
                  <p className="text-sm text-gray-500">University Name (2014 - 2018)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
