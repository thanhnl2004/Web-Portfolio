
import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  Thanh Nguyen
                </span>
              </h2>
              <p className="text-gray-400 text-sm">
                Software Engineer & CS Student
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12">
              <div>
                <h3 className="text-lg font-medium mb-3">Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a 
                      href="#about" 
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#skills" 
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      Skills
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#projects" 
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#contact" 
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">Contact</h3>
                <ul className="space-y-2">
                  <li className="text-gray-400 text-sm">
                    lethanh300504@example.com
                  </li>
                  <li className="text-gray-400 text-sm">
                    +61 492 819 785
                  </li>
                  <li className="text-gray-400 text-sm">
                    Canberra, ACT, Australia
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <hr className="my-8 border-gray-800" />
          
          <div className="flex flex-col-reverse md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mt-4 md:mt-0">
              © {currentYear} Thanh Nguyen. All rights reserved.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="https://github.com/thanhnl2004" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/thanhnguyen2004" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://www.instagram.com/_thanh.nl_/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="mailto:lethanh300504@gmail.com" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
