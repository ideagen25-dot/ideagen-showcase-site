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
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Official <span className="text-primary">Hiring Partners</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We collaborate with leading companies to connect talented students with exciting career opportunities.
          </p>
        </div>

        {/* Partner logos linear scroll */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-slow space-x-12 items-center">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`scroll-${index}`}
                className="flex-shrink-0 w-40 h-24 bg-card rounded-xl shadow-md flex items-center justify-center p-4 hover:shadow-lg transition-all hover:scale-105 border border-border/50"
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
