
import { ArrowDownCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { InteractiveHoverButton } from '@/components/ui/interactive-button';
import { Particles } from '@/components/ui/particles';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Particles 
          className="absolute inset-0 z-0" 
          quantity={100} 
          ease={80}
          color="#000000" 
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-radial from-blue-50 to-transparent dark:from-blue-950/30 dark:to-transparent z-0 opacity-70"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
               style={{ transitionDelay: '200ms' }}>
            Hi, I'm <span className="text-gradient">Thanh Nguyen</span>
          </h1>
          
          <h2 className={`text-2xl md:text-3xl font-medium mb-8 text-gray-700 dark:text-gray-300 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
               style={{ transitionDelay: '400ms' }}>
            CS student @ ANU
          </h2>
          
          <p className={`text-lg text-gray-600 dark:text-gray-400 mb-10 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
             style={{ transitionDelay: '600ms' }}>
            I love building webapps that are impactful.
          </p>
          
          <div className={`flex justify-center gap-4 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
               style={{ transitionDelay: '800ms' }}>
            <InteractiveHoverButton onClick={() => scrollToAbout()} className="rounded-full text-sm">
              Explore My Work
            </InteractiveHoverButton>
            
            <ShimmerButton 
              className="rounded-full text-sm dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
              shimmerSize="0.1em"
              onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
              Contact Me
            </ShimmerButton>
          </div>
        </div>
      </div>
      
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
           style={{ transitionDelay: '1200ms' }}>
        <button onClick={scrollToAbout} className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors animate-bounce">
          <ArrowDownCircle size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
