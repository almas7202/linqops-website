
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import RoleDashboards from '@/components/RoleDashboards';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero />
      <Features />
      <RoleDashboards />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
