import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, Users, Code, Handshake } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Workshops & Training",
      description: "Hands-on training on modern technologies like Cloud Computing, Cybersecurity, AI/ML, and Web Development.",
      features: ["Live Interactive Sessions", "Industry Expert Trainers", "Practical Projects", "Certification Programs"]
    },
    {
      icon: Users,
      title: "Internships",
      description: "Real-world projects and industry-ready internships for highly capable students seeking career growth.",
      features: ["Live Projects", "Mentorship Program", "Industry Exposure", "Performance Certificates"]
    },
    {
      icon: Code,
      title: "Corporate Solutions",
      description: "Custom website development, problem-solving solutions, and technical consultancy for businesses.",
      features: ["Web Development", "Custom Solutions", "Technical Consulting", "Digital Transformation"]
    },
    {
      icon: Handshake,
      title: "Project Collaborations",
      description: "Ready to take up projects from companies and institutions for mutual growth and innovation.",
      features: ["Research Projects", "Industry Partnerships", "Custom Development", "Innovation Labs"]
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions designed to empower students, enable institutions, and engage companies 
            in the ever-evolving technology landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;