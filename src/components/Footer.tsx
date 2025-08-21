import { Badge } from '@/components/ui/badge';
import { Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/cca388c5-42ff-486a-9aba-03396ede96d4.png" 
                alt="The Idea Gen Technologies" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-background/80 mb-4 max-w-md">
              Empowering students, enabling institutions, and engaging companies through 
              cutting-edge technology education and innovative solutions.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-background/20 text-background">
                MSME Approved
              </Badge>
              <Badge variant="outline" className="border-background/20 text-background">
                AICTE Approved
              </Badge>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('home')}
                className="block text-background/80 hover:text-background transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-background/80 hover:text-background transition-colors"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-background/80 hover:text-background transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('workshops')}
                className="block text-background/80 hover:text-background transition-colors"
              >
                Workshops
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="space-y-2">
              <a 
                href="https://www.instagram.com/theideagentechnologies/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-background/80 hover:text-background transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-background/60 mb-4 md:mb-0">
            © 2024 Idea Gen Technologies. All rights reserved.
          </div>
          <div className="flex space-x-6 text-background/60">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-background transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;