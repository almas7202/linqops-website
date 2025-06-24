
import { Bot, Zap, Truck, Building, Gem, BarChart3, Shield, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: "AI-Powered Workforce Management",
      description: "Intelligent screening, automated onboarding, and predictive analytics for optimal team performance.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Dynamic Operations Intelligence",
      description: "AI-driven scheduling with real-time optimization, weather integration, and conflict resolution.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Truck,
      title: "Smart Driver Platform",
      description: "Computer vision inspections, IoT documentation, and intelligent order assignment algorithms.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Building,
      title: "Enterprise Fleet Control",
      description: "Predictive maintenance, real-time tracking, and advanced analytics for complete fleet optimization.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Gem,
      title: "Advanced Financial Suite",
      description: "Automated payroll, dynamic pricing, and integrated invoicing with performance-based calculations.",
      gradient: "from-violet-500 to-purple-500"
    },
    {
      icon: BarChart3,
      title: "Business Intelligence Hub",
      description: "Real-time dashboards, predictive analytics, and custom KPI tracking for strategic insights.",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC2 compliance, advanced encryption, and granular permission management for enterprise peace of mind.",
      gradient: "from-slate-500 to-gray-500"
    },
    {
      icon: Users,
      title: "Multi-Tenant Architecture",
      description: "White-label support, scalable infrastructure, and advanced role-based access controls.",
      gradient: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for Modern
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Delivery Operations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your delivery business with cutting-edge AI technology and enterprise-grade infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gray-50/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              
              {/* Hover effect overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
