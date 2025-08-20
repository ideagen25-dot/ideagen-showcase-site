import { Card, CardContent } from '@/components/ui/card';
import workshop1 from '@/assets/workshop-1.jpg';
import workshop2 from '@/assets/workshop-2.jpg';
import workshop3 from '@/assets/workshop-3.jpg';
import { Badge } from '@/components/ui/badge';

const Workshops = () => {
  const workshops = [
    {
      image: workshop1,
      title: "Cloud Computing Workshop",
      institution: "IIT Madras",
      date: "March 2024",
      participants: 120
    },
    {
      image: workshop2,
      title: "Cybersecurity Bootcamp",
      institution: "IIT Tirupati",
      date: "February 2024",
      participants: 85
    },
    {
      image: workshop3,
      title: "AI/ML Workshop",
      institution: "NIT Warangal",
      date: "January 2024",
      participants: 150
    }
  ];

  const institutions = [
    "IIT Madras",
    "IIT Tirupati", 
    "IIT Kharagpur",
    "SVRMC Nagarm",
    "NIT Warangal",
    "IIIT Hyderabad"
  ];

  const technologies = [
    "Cloud Computing",
    "Cybersecurity",
    "Artificial Intelligence",
    "Machine Learning",
    "Web Development",
    "Data Science",
    "DevOps",
    "Blockchain"
  ];

  return (
    <section id="workshops" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Workshops & <span className="text-primary">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We've successfully conducted cutting-edge technology workshops at premier institutions, 
            empowering thousands of students with industry-relevant skills.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-8 text-center">Recent Workshop Gallery</h3>
          
          {/* Workshop Timeline */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-6">
              {/* First set of workshops */}
              {workshops.map((workshop, index) => (
                <Card key={index} className="flex-shrink-0 hover:shadow-lg transition-shadow min-w-[300px]">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={workshop.image} 
                        alt={workshop.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute top-4 right-4 bg-primary/90 text-white px-3 py-1 rounded-full text-sm">
                        {workshop.date}
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold mb-2">{workshop.title}</h4>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        {workshop.institution}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="w-4 h-4 mr-1" />
                        {workshop.participants} participants
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              {/* Duplicate set for seamless loop */}
              {workshops.map((workshop, index) => (
                <Card key={`duplicate-${index}`} className="flex-shrink-0 hover:shadow-lg transition-shadow min-w-[300px]">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={workshop.image} 
                        alt={workshop.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute top-4 right-4 bg-primary/90 text-white px-3 py-1 rounded-full text-sm">
                        {workshop.date}
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold mb-2">{workshop.title}</h4>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        {workshop.institution}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="w-4 h-4 mr-1" />
                        {workshop.participants} participants
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-6">Premier Institution Partnerships</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {institutions.map((institution, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="font-medium">{institution}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <h4 className="font-semibold mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-primary" />
                Workshop Statistics
              </h4>
              <div className="grid sm:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">150+</div>
                  <div className="text-sm text-muted-foreground">Workshops Conducted</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">5000+</div>
                  <div className="text-sm text-muted-foreground">Students Trained</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">25+</div>
                  <div className="text-sm text-muted-foreground">Partner Institutions</div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-semibold mb-6">Technology Domains</h3>
            <div className="flex flex-wrap gap-3 mb-8">
              {technologies.map((tech, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="px-4 py-2 hover:bg-primary hover:text-white transition-colors cursor-pointer"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            <Card className="bg-gradient-primary text-white">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Users className="w-6 h-6" />
                  <h4 className="text-lg font-semibold">Why Choose Our Workshops?</h4>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                    <span>Industry-expert trainers with real-world experience</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                    <span>Hands-on practical sessions with live projects</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                    <span>Certificates recognized by top institutions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                    <span>Post-workshop mentorship and career guidance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshops;