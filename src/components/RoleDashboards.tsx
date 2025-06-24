
import { useState } from 'react';
import { Monitor, Smartphone, PieChart, Users, ChevronLeft, ChevronRight } from 'lucide-react';

const RoleDashboards = () => {
  const [activeRole, setActiveRole] = useState('driver');
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const roleImages = {
    driver: [
      { src: '/images/driver-dashboard.png', alt: 'Driver Dashboard Interface' },
      { src: '/images/driver-inspection.png', alt: 'Driver Inspection Interface' },
      { src: '/images/driver-pre&post-inpsection-page.png', alt: 'Driver Pre/Post Inspection' },
    ],
    hr: [
      { src: '/images/employee-page.png', alt: 'HR Employee Management' },
      { src: '/images/applicants.png', alt: 'Applicant Tracking' },
      { src: '/images/employee-details.png', alt: 'Employee Details' },
      { src: '/images/termination.png', alt: 'Termination Records' },
    ],
    owner: [
      { src: '/images/organization.png', alt: 'Organization Overview' },
      { src: '/images/owner-inspection.png', alt: 'Inspection Reports' },
      { src: '/images/vehicle-fleet-mnagment.png', alt: 'Fleet Management' },
    ]
  };
  
  const nextSlide = () => {
    const images = roleImages[activeRole as keyof typeof roleImages];
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    const images = roleImages[activeRole as keyof typeof roleImages];
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  
  // Reset slide index when changing roles
  const handleRoleChange = (roleId: string) => {
    setActiveRole(roleId);
    setCurrentSlide(0);
  };

  const roles = [
    {
      id: 'driver',
      title: 'Driver Tools',
      icon: Smartphone,
      description: 'Essential features tailored for drivers to manage daily delivery operations.',
      features: [
        'Daily check-in and inspection (pre/post-trip)',
        'Route-specific bag order visibility',
        'Access to trip-related documents',
        'View trip notes and write-ups',
      ]
    },
    // {
    //   id: 'manager',
    //   title: 'Operations Manager',
    //   icon: Monitor,
    //   description: 'Full control over workforce, fleet, and dispatch with real-time visibility.',
    //   features: [
    //     'Driver scheduling and van assignment',
    //     'Inspection status and repair monitoring',
    //     'Incident and attendance tracking',
    //     'Real-time dispatch notes and updates',
    //   ]
    // },
    {
      id: 'hr',
      title: 'HR Panel',
      icon: Users, // Replace with appropriate icon
      description: 'Manage onboarding, termination, and role-based access control for all users.',
      features: [
        'Applicant onboarding and employee management',
        'Payroll and attendance monitoring',
        'Role-based user control and updates',
        'Employee termination records',
      ]
    },
    {
      id: 'owner',
      title: 'Owner Dashboard',
      icon: PieChart,
      description: 'High-level oversight of the entire organization, warehouses, and system access.',
      features: [
        'Multi-warehouse visibility and reports',
        'User management and permissions',
        'Strategic business insights and analytics',
        'Full access to all modules and actions',
      ]
    }
  ];
  

  return (
    <section id="roles" className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
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
              onClick={() => handleRoleChange(role.id)}
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

                {/* Dashboard Image Carousel */}
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 relative group">
                  {roleImages[role.id as keyof typeof roleImages] && (
                    <>
                      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
                        {roleImages[role.id as keyof typeof roleImages].map((image, index) => (
                          <div 
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                          >
                            <img 
                              src={image.src} 
                              alt={image.alt} 
                              className="w-full h-full object-contain"
                            />
                          </div>
                        ))}
                      </div>
                      
                      {/* Carousel Navigation */}
                      <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button 
                          onClick={prevSlide}
                          className="bg-white/80 hover:bg-white p-2 rounded-full shadow-lg text-gray-800 focus:outline-none"
                          aria-label="Previous slide"
                        >
                          <ChevronLeft className="h-6 w-6" />
                        </button>
                        <button 
                          onClick={nextSlide}
                          className="bg-white/80 hover:bg-white p-2 rounded-full shadow-lg text-gray-800 focus:outline-none"
                          aria-label="Next slide"
                        >
                          <ChevronRight className="h-6 w-6" />
                        </button>
                      </div>
                      
                      {/* Dots Indicator */}
                      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                        {roleImages[role.id as keyof typeof roleImages].map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? 'bg-blue-600 w-4' : 'bg-gray-400'}`}
                            aria-label={`Go to slide ${index + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
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
