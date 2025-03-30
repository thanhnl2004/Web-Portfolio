import { ArrowDownCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-blue-50 to-transparent dark:from-blue-950/30 dark:to-transparent z-0 opacity-70"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Hi, I'm <span className="text-gradient">Thanh Nguyen</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium mb-8 text-gray-700 dark:text-gray-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            CS student @ ANU
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            I love building webapps that are impactful.
          </p>
          
          <div className="flex justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button onClick={() => scrollToAbout()} className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              Explore My Work
            </Button>
            
            <Button variant="outline" className="rounded-full dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800" onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToAbout} className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
          <ArrowDownCircle size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
