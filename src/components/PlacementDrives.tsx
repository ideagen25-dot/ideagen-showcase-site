import { Users, GraduationCap } from 'lucide-react';

const PlacementDrives = () => {
  const svrmcImages = [
    "/lovable-uploads/svrmc-drive-1.jpeg",
    "/lovable-uploads/svrmc-drive-2.jpeg",
    "/lovable-uploads/svrmc-drive-3.jpeg",
    "/lovable-uploads/svrmc-drive-4.jpeg",
  ];

  const svceImages = [
    "/lovable-uploads/svce-drive-1.jpeg",
    "/lovable-uploads/svce-drive-2.jpeg",
  ];

  return (
    <section id="placement-drives" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-secondary font-medium uppercase tracking-wider text-sm">Career Support</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            We Support <span className="text-primary">Campus Placement Drives</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Helping students kickstart their careers through organized placement drives at leading educational institutions.
          </p>
        </div>

        {/* SVRMC Degree College */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <img 
              src="/lovable-uploads/svrmc-logo.jpeg" 
              alt="SVRMC Degree College Logo" 
              className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-full border-2 border-primary/20"
            />
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">SVRMC Degree College</h3>
              <p className="text-muted-foreground">Recent Placement Drive</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {svrmcImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={image} 
                  alt={`SVRMC Placement Drive ${index + 1}`}
                  className="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
          
          <div className="flex items-center justify-center gap-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6">
            <Users className="w-8 h-8 text-primary" />
            <span className="text-xl md:text-2xl font-bold text-foreground">150+ Students Placed</span>
            <GraduationCap className="w-8 h-8 text-secondary" />
          </div>
        </div>

        {/* SVCE Tirupati */}
        <div>
          <div className="flex items-center justify-center gap-4 mb-8">
            <img 
              src="/lovable-uploads/svce-logo.jpeg" 
              alt="SVCE Tirupati Logo" 
              className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-full border-2 border-primary/20"
            />
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">SVCE Tirupati</h3>
              <p className="text-muted-foreground">Recent Placement Drive</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-6">
            {svceImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={image} 
                  alt={`SVCE Tirupati Placement Drive ${index + 1}`}
                  className="w-full h-48 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
          
          <div className="flex items-center justify-center gap-3 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-xl p-6">
            <Users className="w-8 h-8 text-secondary" />
            <span className="text-xl md:text-2xl font-bold text-foreground">200+ Students Placed</span>
            <GraduationCap className="w-8 h-8 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementDrives;
