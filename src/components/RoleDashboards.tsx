
import { useState } from 'react';
import { Monitor, Smartphone, PieChart } from 'lucide-react';

const RoleDashboards = () => {
  const [activeRole, setActiveRole] = useState('driver');

  const roles = [
    {
      id: 'driver',
      title: 'Driver Experience',
      icon: Smartphone,
      description: 'Mobile-first interface designed for drivers on the go',
      features: ['Real-time order updates', 'Route optimization', 'Digital proof of delivery', 'Performance tracking']
    },
    {
      id: 'manager',
      title: 'Manager Command',
      icon: Monitor,
      description: 'Advanced analytics and team oversight capabilities',
      features: ['Team performance dashboards', 'Route planning tools', 'Real-time monitoring', 'Resource allocation']
    },
    {
      id: 'executive',
      title: 'Executive Suite',
      icon: PieChart,
      description: 'Strategic insights and organizational control',
      features: ['Business intelligence', 'Financial analytics', 'Operational metrics', 'Strategic planning']
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tailored Experiences for
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Every Role</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From drivers to executives, LinqOps provides role-specific interfaces optimized for each user's needs
          </p>
        </div>

        {/* Role Tabs */}
        <div className="flex flex-col lg:flex-row justify-center mb-12 space-y-4 lg:space-y-0 lg:space-x-4">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => setActiveRole(role.id)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeRole === role.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/80 text-gray-600 hover:bg-white hover:text-gray-900 border border-gray-200'
              }`}
            >
              <role.icon className="h-5 w-5" />
              <span>{role.title}</span>
            </button>
          ))}
        </div>

        {/* Dashboard Preview */}
        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 lg:p-12 shadow-xl">
          {roles.map((role) => (
            <div
              key={role.id}
              className={`${activeRole === role.id ? 'block' : 'hidden'} space-y-8`}
            >
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{role.title}</h3>
                <p className="text-xl text-gray-600 mb-8">{role.description}</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Features List */}
                <div className="space-y-4">
                  {role.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Dashboard Mockup */}
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-6 border border-gray-200">
                  <div className="space-y-4">
                    <div className="flex space-x-2 mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded"></div>
                      <div className="h-3 bg-gray-400/50 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-400/50 rounded w-1/2"></div>
                      <div className="grid grid-cols-2 gap-2 mt-6">
                        <div className="h-16 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-lg"></div>
                        <div className="h-16 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoleDashboards;
