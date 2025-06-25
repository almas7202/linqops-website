
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import RoleDashboards from '@/components/RoleDashboards';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import ScheduleDemo from '@/components/ScheduleDemo';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if there's a hash in the URL
    if (location.hash) {
      // Remove the # character
      const sectionId = location.hash.substring(1);
      
      // Find the element with the matching ID
      const element = document.getElementById(sectionId);
      
      if (element) {
        // Wait a bit for the page to fully render
        setTimeout(() => {
          // Get the element's position
          const rect = element.getBoundingClientRect();
          const absoluteTop = rect.top + window.pageYOffset;
          
          // Scroll to the element with offset for the fixed header
          window.scrollTo({
            top: absoluteTop - 80,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero />
      <div id="features">
        <Features />
      </div>
      <div id="roles">
        <RoleDashboards />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="reviews">
        <Testimonials />
      </div>
      <ScheduleDemo />
      <Footer />
    </div>
  );
};

export default Index;
