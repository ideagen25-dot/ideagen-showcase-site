const HiringPartners = () => {
  const partners = [
    { name: "TCS", logo: "/lovable-uploads/partner-tcs.jpeg" },
    { name: "Tata Electronics", logo: "/lovable-uploads/partner-tata.jpeg" },
    { name: "Foxconn", logo: "/lovable-uploads/partner-foxconn.png" },
    { name: "TCL", logo: "/lovable-uploads/partner-tcl.png" },
    { name: "Premier Energies", logo: "/lovable-uploads/partner-premier.png" },
    { name: "Young Minds", logo: "/lovable-uploads/partner-youngminds.jpeg" },
    { name: "Allset Business Solutions", logo: "/lovable-uploads/partner-allset.webp" },
    { name: "Emmadi Silver", logo: "/lovable-uploads/partner-emmadi.jpeg" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Official <span className="text-primary">Hiring Partners</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We collaborate with leading companies to connect talented students with exciting career opportunities.
          </p>
        </div>

        {/* Circular rotating logos container */}
        <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] animate-spin-slow">
              {partners.map((partner, index) => {
                const angle = (index * 360) / partners.length;
                const radius = 140; // Radius for mobile
                const radiusMd = 180; // Radius for desktop
                
                return (
                  <div
                    key={partner.name}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      transform: `rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle}deg)`,
                    }}
                  >
                    <div 
                      className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-full shadow-lg flex items-center justify-center p-2 md:p-3 animate-counter-spin hover:scale-110 transition-transform duration-300 border-2 border-primary/10"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                      }}
                    >
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-full h-full object-contain rounded-full"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Center text */}
          <div className="relative z-10 text-center bg-gradient-primary rounded-full w-32 h-32 md:w-40 md:h-40 flex flex-col items-center justify-center shadow-xl">
            <span className="text-2xl md:text-3xl font-bold text-white">{partners.length}+</span>
            <span className="text-xs md:text-sm text-white/90">Partners</span>
          </div>
        </div>

        {/* Partner logos linear scroll for visibility */}
        <div className="mt-12 relative overflow-hidden">
          <div className="flex animate-scroll-slow space-x-12 items-center">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`scroll-${index}`}
                className="flex-shrink-0 w-32 h-20 bg-white rounded-lg shadow-md flex items-center justify-center p-4 hover:shadow-lg transition-shadow"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringPartners;
