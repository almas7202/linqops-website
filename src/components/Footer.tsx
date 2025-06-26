
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Footer Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Company */}
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="/iinqops.png" 
                  alt="LinqOps Logo" 
                  className="h-10 w-auto object-contain" 
                  style={{ maxHeight: '40px' }}
                />
                <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  LinqOps
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                Revolutionizing delivery operations with next-generation AI and enterprise-grade infrastructure.
              </p>
              <div className="flex space-x-4">
                <a href="https://twitter.com/linqops" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                  <span className="text-gray-700">𝕏</span>
                </a>
                <a href="https://linkedin.com/company/linqops" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                  <span className="text-gray-700">in</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-gray-900 font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</Link></li>
                <li><Link to="/#roles" className="text-gray-600 hover:text-gray-900 transition-colors">Solution</Link></li>
                <li><Link to="/#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</Link></li>
                <li><Link to="/#reviews" className="text-gray-600 hover:text-gray-900 transition-colors">Testimonials</Link></li>
                <li><Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-gray-900 font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-600">
                  <span className="font-medium">Email:</span> info@linqops.com
                </li>
                <li className="text-gray-600">
                  <span className="font-medium">Address:</span> Silicon Valley, California
                </li>
                <li className="mt-4">
                  <Link to="/contact">
                    <Button variant="outline" className="flex items-center gap-2">
                      Schedule a Demo <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div></div>
          <div className="mt-12 pt-8 border-t  flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 text-sm">
              © {new Date().getFullYear()} LinqOps. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
