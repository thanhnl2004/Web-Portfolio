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
                I'm a a 3rd year Computer Science student @ ANU. My interest is in Software Engineering and Full Stack Development.
              </p>
              <div className="text-gray-700 flex flex-col gap-2">
                <span>My personal interests:</span>
                <li>
                  <span><strong>Basketball</strong> (Favourite team:<span className=""><a href="https://www.nba.com/cavaliers" target="_blank" rel="noopener noreferrer"> Cleveland Cavaliers</a></span>)</span>
                </li>
                <li>
                  <span><strong>Football</strong> (Favourite team:<span className="text-    "><a href="https://www.manutd.com" target="_blank" rel="noopener noreferrer"> Manchester United</a></span>)</span>
                </li>
                <li>
                  <span><strong>Pool</strong> and <strong>Table Tennis</strong></span>
                </li>
              </div>
              
              <div className="pt-4">
                <a href="/Thanh_Nguyen_Resume.pdf" download>
                  <Button className="rounded-full bg-gray-800 hover:bg-gray-900 text-white">
                    <Download className="mr-2 h-4 w-4" /> Download Resume
                  </Button>
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10 rounded-bl-full"></div>
              
              <h3 className="text-xl font-semibold mb-6">Experience</h3>              
              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute left-[-8px] top-0 w-3 h-3 rounded-full bg-gray-500"></div>
                    <h4 className="font-semibold">National Institute of Education</h4>
                    <p className="text-sm font-semibold text-gray-500">Software Engineer (Contract)<span className="font-normal">(Jul 2025 - Present)</span></p>
                </div>
                <div className="relative pl-8 border-l-2 border-blue-200">
                  <div className="absolute left-[-8px] top-0 w-3 h-3 rounded-full bg-gray-500"></div>
                  <h4 className="font-semibold">Australian National University</h4>
                  <p className="text-sm font-semibold text-gray-500">Research Assistant<span className="font-normal">(Jul 2025 - Present)</span></p>
                </div>
                <div className="relative pl-8 border-l-2 border-blue-200">
                  <div className="absolute left-[-8px] top-0 w-3 h-3 rounded-full bg-gray-500"></div>
                  <h4 className="font-semibold">Lyra</h4>
                  <p className="text-sm font-semibold text-gray-500">Software Engineer Intern <span className="font-normal">(Feb 2025 - Mar 2025)</span></p>
                </div>
                
                <div className="relative pl-8 border-l-2 border-blue-200">
                  <div className="absolute left-[-8px] top-0 w-3 h-3 rounded-full bg-gray-500"></div>
                  <h4 className="font-semibold">FPT Software</h4>
                  <p className="text-sm font-semibold text-gray-500">Software Engineer Intern <span className="font-normal">(Nov 2024 - Jan 2025)</span></p>
                </div>
  
                <div className="relative pl-8 border-l-2 border-blue-200">
                  <div className="absolute left-[-8px] top-0 w-3 h-3 rounded-full bg-gray-500"></div>
                  <h4 className="font-semibold">Australian National University</h4>
                  <p className="text-sm font-semibold text-gray-500">Undergraduate Researcher <span className="font-normal">(May 2024 - Sep 2024)</span></p>
                </div>

                                
                <div className="relative pl-8 border-l-2 border-blue-200">
                  <div className="absolute left-[-8px] top-0 w-3 h-3 rounded-full bg-gray-500"></div>
                  <h4 className="font-semibold">Mobifone</h4>
                  <p className="text-sm font-semibold text-gray-500">Software Engineer Intern <span className="font-normal">(Nov 2023 - Jan 2024)</span></p>
                </div>
                
                <h3 className="text-xl font-semibold mb-6">Education</h3>
                <div className="relative pl-8">
                  <div className="absolute left-[-8px] top-0 w-3 h-3 rounded-full bg-gray-500"></div>
                  <h4 className="font-bold">Australian National University</h4>
                  <p className="text-sm font-semibold text-gray-500">Bachelor of Information Technology, Major in Software Development <span className="font-normal">(Expected Graduation: 2025)</span></p>
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
