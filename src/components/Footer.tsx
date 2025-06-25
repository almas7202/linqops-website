
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* CTA Section */}
     

      {/* Footer Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company */}
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                LinqOps
              </div>
              <p className="text-gray-600 mb-4">
                Revolutionizing delivery operations with next-generation AI and enterprise-grade infrastructure.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                  <span className="text-gray-700">𝕏</span>
                </div>
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                  <span className="text-gray-700">in</span>
                </div>
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                  <span className="text-gray-700">yt</span>
                </div>
              </div>
            </div>

            {/* Product */}
            <div>
              <h3 className="text-gray-900 font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Integrations</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">API</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Security</a></li>
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-gray-900 font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">E-commerce</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Food Delivery</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Logistics</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Enterprise</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">White Label</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-gray-900 font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Case Studies</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Support</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Status</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 text-sm">
              © 2024 LinqOps. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
