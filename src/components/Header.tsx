import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/b4dfa061-68c1-4e57-8f96-b61f3ce7cffa.png" 
            alt="The Idea Gen Technologies Logo" 
            className="h-10 w-auto"
          />
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-foreground hover:text-primary transition-colors"
          >
            About Us
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('workshops')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Workshops
          </button>
          <button 
            onClick={() => scrollToSection('internships')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Internships
          </button>
          <button 
            onClick={() => scrollToSection('collaborations')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Collaborations
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Contact
          </button>
        </nav>

        <Button 
          onClick={() => scrollToSection('contact')}
          className="bg-gradient-primary text-white hover:opacity-90 transition-opacity"
        >
          Get in Touch
        </Button>
      </div>
    </header>
  );
};

export default Header;