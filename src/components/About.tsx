import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-primary">Idea Gen Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            An innovative Ed-Tech platform providing cutting-edge technology workshops, career guidance sessions, 
            industry-driven internships, and custom IT solutions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="outline" className="border-primary text-primary px-4 py-2">
              MSME Approved
            </Badge>
            <Badge variant="outline" className="border-secondary text-secondary px-4 py-2">
              AICTE Approved
            </Badge>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-lg transition-shadow animate-slide-in-left">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To bridge the gap between academic learning and industry requirements by providing 
                practical, hands-on technology education and real-world project experience.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow animate-fade-in">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To become the leading Ed-Tech platform that empowers students and professionals 
                with modern technical skills while enabling institutions to deliver world-class education.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow animate-slide-in-right">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Approach</h3>
              <p className="text-muted-foreground">
                We collaborate with top-tier educational institutions and organizations to create 
                meaningful partnerships that benefit students, institutions, and industry partners.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;