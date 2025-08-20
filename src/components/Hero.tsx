import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import msmeImage from '@/assets/msme-logo.png';

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["Students", "Institutions", "Companies", "Innovation", "Future"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      
      <div className="container mx-auto px-6 text-center z-10 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-foreground">Empower your business with</span>
          <br />
          <span className="text-secondary italic">strategic</span>{' '}
          <span className="text-foreground">IT solutions</span>
          <br />
          <div className="h-20 overflow-hidden relative">
            <div 
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateY(-${currentWordIndex * 80}px)` }}
            >
              {words.map((word, index) => (
                <div key={index} className="h-20 flex items-center">
                  <span className="text-primary">for {word}</span>
                </div>
              ))}
            </div>
          </div>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
          Delivering cutting-edge workshops, internships, and IT solutions to institutions and enterprises.
        </p>
        
        <Button 
          onClick={scrollToContact}
          size="lg"
          className="bg-gradient-primary text-white hover:opacity-90 transition-opacity px-8 py-4 text-lg mb-16"
        >
          Talk To Our Experts
        </Button>
        
        <div className="flex justify-center items-center space-x-8 mb-16">
          <div className="flex items-center space-x-3">
            <img src="/aicte-logo.png" alt="AICTE Approved" className="w-16 h-16 object-contain" />
            <div>
              <div className="font-semibold text-primary">AICTE</div>
              <div className="text-sm text-muted-foreground">Approved</div>
            </div>
          </div>
          <div className="w-px h-12 bg-border"></div>
          <div className="flex items-center space-x-3">
            <img src={msmeImage} alt="MSME Approved" className="w-16 h-16 object-contain" />
            <div>
              <div className="font-semibold text-secondary">MSME</div>
              <div className="text-sm text-muted-foreground">Approved</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;