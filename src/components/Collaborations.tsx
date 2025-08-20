import { Card, CardContent } from '@/components/ui/card';

const Collaborations = () => {
  // Mock partner logos - in production, you'd replace these with actual partner logos
  const partners = [
    { name: "IIT Madras", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop&crop=center" },
    { name: "IIT Tirupati", logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=100&h=100&fit=crop&crop=center" },
    { name: "IIT Kharagpur", logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=100&h=100&fit=crop&crop=center" },
    { name: "SVRMC Nagarm", logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=100&h=100&fit=crop&crop=center" },
    { name: "NIT Warangal", logo: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=100&h=100&fit=crop&crop=center" },
    { name: "IIIT Hyderabad", logo: "https://images.unsplash.com/photo-1562774053-01a0dd3d9439?w=100&h=100&fit=crop&crop=center" },
    { name: "TechCorp", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop&crop=center" },
    { name: "InnovateX", logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop&crop=center" }
  ];

  return (
    <section id="collaborations" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-primary">Collaborations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proud to partner with leading institutions and organizations to deliver exceptional 
            educational experiences and innovative solutions.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center mb-8">Trusted by Leading Institutions</h3>
          
          {/* Scrolling Partner Logos */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-8">
              {/* First set of logos */}
              {partners.map((partner, index) => (
                <Card key={index} className="flex-shrink-0 hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex flex-col items-center space-y-3 min-w-[180px]">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center overflow-hidden">
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="font-medium text-center">{partner.name}</span>
                  </CardContent>
                </Card>
              ))}
              {/* Duplicate set for seamless loop */}
              {partners.map((partner, index) => (
                <Card key={`duplicate-${index}`} className="flex-shrink-0 hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex flex-col items-center space-y-3 min-w-[180px]">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center overflow-hidden">
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="font-medium text-center">{partner.name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Partner Institutions</div>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="text-3xl font-bold text-secondary mb-2">100+</div>
              <div className="text-muted-foreground">Successful Projects</div>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="text-3xl font-bold text-accent mb-2">5000+</div>
              <div className="text-muted-foreground">Students Impacted</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Collaborations;