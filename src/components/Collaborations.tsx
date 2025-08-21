import { Card, CardContent } from '@/components/ui/card';
const Collaborations = () => {
  const partners = [{
    name: "IIT Madras",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.svg/200px-IIT_Madras_Logo.svg.png"
  }, {
    name: "IIT Tirupati",
    logo: "/lovable-uploads/c35a68d2-3a0f-46c8-a004-e884787a94fc.png"
  }, {
    name: "IIT Kharagpur",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/IIT_Kharagpur_Logo.svg/200px-IIT_Kharagpur_Logo.svg.png"
  }, {
    name: "MSME",
    logo: "/lovable-uploads/d93e471d-8e84-412b-9cd5-d30cbbacddfa.png"
  }, {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/200px-Microsoft_logo_%282012%29.svg.png"
  }, {
    name: "Google",
    logo: "https://upload.wikimedia.org/commons/thumb/2/2f/Google_2015_logo.svg/200px-Google_2015_logo.svg.png"
  }, {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/commons/thumb/a/a9/Amazon_logo.svg/200px-Amazon_logo.svg.png"
  }];
  return <section id="collaborations" className="py-20 bg-muted/30">
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
              {partners.map((partner, index) => <Card key={index} className="flex-shrink-0 hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex flex-col items-center space-y-3 min-w-[180px]">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center overflow-hidden border">
                      <img src={partner.logo} alt={partner.name} className="w-12 h-12 object-contain" />
                    </div>
                    <span className="font-medium text-center">{partner.name}</span>
                  </CardContent>
                </Card>)}
              {/* Duplicate set for seamless loop */}
              {partners.map((partner, index) => <Card key={`duplicate-${index}`} className="flex-shrink-0 hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex flex-col items-center space-y-3 min-w-[180px]">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center overflow-hidden border">
                      <img src={partner.logo} alt={partner.name} className="w-12 h-12 object-contain" />
                    </div>
                    <span className="font-medium text-center">{partner.name}</span>
                  </CardContent>
                </Card>)}
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
    </section>;
};
export default Collaborations;