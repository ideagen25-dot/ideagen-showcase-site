import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Workshops from '@/components/Workshops';
import Internships from '@/components/Internships';
import Collaborations from '@/components/Collaborations';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Workshops />
      <Internships />
      <Collaborations />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
