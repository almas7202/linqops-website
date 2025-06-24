
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    setIsOpen(false); // Close mobile menu if open
    
    const element = document.getElementById(sectionId);
    if (element) {
      // Get the element's position relative to the viewport
      const rect = element.getBoundingClientRect();
      
      // Calculate the absolute position by adding the current scroll position
      const absoluteTop = rect.top + window.pageYOffset;
      
      // Scroll with a slight offset to account for fixed header
      window.scrollTo({
        top: absoluteTop - 80, // Offset by header height
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              LinqOps
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Features</button>
            <button onClick={() => scrollToSection('roles')} className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Roles</button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Pricing</button>
            <button onClick={() => scrollToSection('reviews')} className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Reviews</button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('features')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors">Features</button>
              <button onClick={() => scrollToSection('roles')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors">Roles</button>
              <button onClick={() => scrollToSection('pricing')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors">Pricing</button>
              <button onClick={() => scrollToSection('reviews')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors">Reviews</button>
              <div className="pt-4 pb-2 space-y-2">
                <Button variant="ghost" className="w-full text-gray-600 hover:text-gray-900">
                  Sign In
                </Button>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
