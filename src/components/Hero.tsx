import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      
      <div className="container mx-auto px-6 text-center z-10 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-foreground">Empowering</span>{' '}
          <span className="text-primary">Students.</span>
          <br />
          <span className="text-foreground">Enabling</span>{' '}
          <span className="text-secondary">Institutions.</span>
          <br />
          <span className="text-foreground">Engaging</span>{' '}
          <span className="text-primary">Companies.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
          Delivering cutting-edge workshops, internships, and IT solutions to institutions and enterprises.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-gradient-primary text-white hover:opacity-90 transition-opacity px-8 py-4 text-lg"
          >
            Get in Touch
          </Button>
          
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-8 bg-primary/10 rounded flex items-center justify-center">
                <span className="text-primary font-semibold text-xs">MSME</span>
              </div>
              <span>Approved</span>
            </div>
            <div className="w-px h-6 bg-border"></div>
            <div className="flex items-center space-x-2">
              <div className="w-12 h-8 bg-secondary/10 rounded flex items-center justify-center">
                <span className="text-secondary font-semibold text-xs">AICTE</span>
              </div>
              <span>Approved</span>
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