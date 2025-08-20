import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Award, Mail } from 'lucide-react';

const Internships = () => {
  const benefits = [
    "Real-world project experience",
    "Industry mentorship program", 
    "Performance-based certificates",
    "Career guidance sessions",
    "Networking opportunities",
    "Skill development workshops"
  ];

  const eligibility = [
    "Strong academic performance",
    "Passion for technology",
    "Basic programming knowledge",
    "Commitment to learning",
    "Team collaboration skills"
  ];

  return (
    <section id="internships" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Internship <span className="text-primary">Opportunities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our internship program to gain practical experience, work on real projects, 
            and accelerate your career in technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 animate-slide-in-left">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Award className="w-6 h-6 text-primary" />
                <span>Program Benefits</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-primary" />
                  Program Structure
                </h4>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <h5 className="font-medium">Orientation</h5>
                    <p className="text-sm text-muted-foreground">Introduction & Goal Setting</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-secondary font-bold">2</span>
                    </div>
                    <h5 className="font-medium">Project Work</h5>
                    <p className="text-sm text-muted-foreground">Hands-on Development</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-accent font-bold">3</span>
                    </div>
                    <h5 className="font-medium">Presentation</h5>
                    <p className="text-sm text-muted-foreground">Project Showcase</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-slide-in-right">
            <CardHeader>
              <CardTitle>Eligibility Criteria</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-6">
                {eligibility.map((criteria, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">{criteria}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Duration:</span>
                  <Badge variant="outline">2-6 months</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Mode:</span>
                  <Badge variant="outline">Remote/Hybrid</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Stipend:</span>
                  <Badge variant="outline">Performance-based</Badge>
                </div>
              </div>

              <Button 
                className="w-full mt-6 bg-gradient-primary text-white hover:opacity-90"
                onClick={() => window.open('mailto:contactsupport@theideagen.com', '_blank')}
              >
                <Mail className="w-4 h-4 mr-2" />
                Apply Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Internships;