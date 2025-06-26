import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const navigateToSection = (sectionId: string) => {
    setIsOpen(false); // Close mobile menu if open

    if (isHomePage) {
      // If already on home page, scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        // Get the element's position relative to the viewport
        const rect = element.getBoundingClientRect();

        // Calculate the absolute position by adding the current scroll position
        const absoluteTop = rect.top + window.pageYOffset;

        // Scroll with a slight offset to account for fixed header
        window.scrollTo({
          top: absoluteTop - 80, // Offset by header height
          behavior: "smooth",
        });
      }
    } else {
      // If on another page, navigate to home page with section hash
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => navigate("/")}
              className="flex items-center py-2"
            >
              <img 
                src="/iinqops.png" 
                alt="LinqOps Logo" 
                className="h-10 w-auto object-contain" 
                style={{ maxHeight: '40px' }}
              />
              <span className="ml-2 text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                LinqOps
              </span>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => navigateToSection("features")}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Features
            </button>
            <button
              onClick={() => navigateToSection("roles")}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Solution
            </button>
            <button
              onClick={() => navigateToSection("pricing")}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Pricing
            </button>
            <button
              onClick={() => navigateToSection("reviews")}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Reviews
            </button>
            <button
              onClick={() => navigateToSection("faqs")}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Faqs
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/contact">
              <Button
                variant="ghost"
                className="text-gray-600 hover:text-gray-900"
              >
                Contact us
              </Button>
            </Link>

            <Link to="/contact">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                Schedule Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => navigateToSection("features")}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => navigateToSection("roles")}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                For Your Team
              </button>
              <button
                onClick={() => navigateToSection("pricing")}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                Pricing
              </button>
              <button
                onClick={() => navigateToSection("reviews")}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                Reviews
              </button>
              <button
                onClick={() => navigateToSection("reviews")}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                Faqs
              </button>
              <div className="pt-4 pb-2 space-y-2">
                <Link to="/contact">
                  <Button
                    variant="ghost"
                    className="w-full text-gray-600 hover:text-gray-900"
                  >
                    Contact us
                  </Button>
                </Link>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  Schedule Demo
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
