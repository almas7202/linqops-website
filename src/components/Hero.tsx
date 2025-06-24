
import { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [animatedCount, setAnimatedCount] = useState(0);
  const [animatedVisibility, setAnimatedVisibility] = useState(0);

  useEffect(() => {
    const efficiencyTimer = setInterval(() => {
      setAnimatedCount(prev => {
        if (prev < 95) return prev + 1;
        return prev;
      });
    }, 30);
    
    const visibilityTimer = setInterval(() => {
      setAnimatedVisibility(prev => {
        if (prev < 100) return prev + 1;
        return prev;
      });
    }, 25);
    
    return () => {
      clearInterval(efficiencyTimer);
      clearInterval(visibilityTimer);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent leading-tight">
              Transform Delivery Operations
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              with Next-Gen Intelligence
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            LinqOps revolutionizes enterprise delivery operations with AI-powered workforce management, 
            intelligent scheduling, and advanced analytics for modern DSP businesses.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
              Start Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="text-3xl font-bold text-gray-900">{animatedCount}%</div>
                <div className="text-gray-600">Operational Efficiency</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-gray-600">Real-Time Monitoring</div>
              </div>
            
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="text-3xl font-bold text-gray-900">{animatedVisibility}%</div>
                <div className="text-gray-600">Complete Visibility</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
