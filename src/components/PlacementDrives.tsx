import { Card, CardContent } from '@/components/ui/card';
import { Users, GraduationCap, Building2, TrendingUp } from 'lucide-react';

const PlacementDrives = () => {
  const institutions = [
    {
      name: "SVRMC Degree College",
      logo: "/lovable-uploads/svrmc-logo.jpeg",
      studentsPlaced: "150+"
    },
    {
      name: "KVR & MKR Degree College",
      logo: "/lovable-uploads/kvr-logo.jpg",
      studentsPlaced: "120+"
    },
    {
      name: "SVCE Tirupati",
      logo: "/lovable-uploads/svce-logo.jpeg",
      studentsPlaced: "200+"
    }
  ];

  const placementImages = [
    "/lovable-uploads/svrmc-drive-1.jpeg",
    "/lovable-uploads/svrmc-drive-2.jpeg",
    "/lovable-uploads/svrmc-drive-3.jpeg",
    "/lovable-uploads/svrmc-drive-4.jpeg",
    "/lovable-uploads/svce-drive-1.jpeg",
    "/lovable-uploads/svce-drive-2.jpeg",
  ];

  return (
    <section id="placement-drives" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-secondary font-medium uppercase tracking-wider text-sm">Career Support</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            We Support <span className="text-primary">Campus Placement Drives</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Helping students kickstart their careers through organized placement drives at leading educational institutions.
          </p>
        </div>

        {/* Scrolling Placement Gallery */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-8 text-center">Recent Placement Drives Gallery</h3>
          
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-6">
              {/* First set of images */}
              {placementImages.map((image, index) => (
                <div key={index} className="flex-shrink-0 min-w-[300px] h-48">
                  <img 
                    src={image}
                    alt={`Placement Drive ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {placementImages.map((image, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0 min-w-[300px] h-48">
                  <img 
                    src={image}
                    alt={`Placement Drive ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Institutions List */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Building2 className="w-6 h-6 text-primary" />
              Partner Institutions
            </h3>
            <div className="space-y-4">
              {institutions.map((institution, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-4">
                      <img 
                        src={institution.logo} 
                        alt={`${institution.name} Logo`}
                        className="w-14 h-14 object-contain rounded-full border-2 border-primary/20 bg-background p-1"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg text-foreground">{institution.name}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <Users className="w-4 h-4 text-primary" />
                          <span className="text-primary font-bold">{institution.studentsPlaced}</span>
                          <span className="text-muted-foreground text-sm">Students Placed</span>
                        </div>
                      </div>
                      <GraduationCap className="w-8 h-8 text-secondary/50" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Statistics & Why Choose Us */}
          <div className="animate-slide-in-right space-y-6">
            <div className="bg-card p-6 rounded-lg border">
              <h4 className="font-semibold mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-primary" />
                Placement Statistics
              </h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">470+</div>
                  <div className="text-sm text-muted-foreground">Students Placed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">15+</div>
                  <div className="text-sm text-muted-foreground">Hiring Partners</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">3+</div>
                  <div className="text-sm text-muted-foreground">Partner Colleges</div>
                </div>
              </div>
            </div>

            <Card className="bg-gradient-primary text-white">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <GraduationCap className="w-6 h-6" />
                  <h4 className="text-lg font-semibold">Why Our Placement Support?</h4>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                    <span>Direct connections with top hiring companies</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                    <span>Resume building and interview preparation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                    <span>On-campus recruitment drives</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                    <span>Post-placement support and mentorship</span>
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

export default PlacementDrives;
