import { useState, useEffect } from "react";
import { Monitor, Smartphone, PieChart, Users } from "lucide-react";
import { motion } from "framer-motion";

const RoleDashboards = () => {
  const [activeRole, setActiveRole] = useState("driver");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const roles = [
    {
      id: "driver",
      title: "Driver Tools",
      icon: Smartphone,
      description: "Essential features tailored for drivers to manage daily delivery operations.",
      images: [
        "/images/driver-dashboard.png",
<<<<<<< HEAD
=======
        "/images/driver-inspection.png", 
>>>>>>> 0e4e0698dc4d68ada19148efaedf533e2af5461f
        "/images/driver-pre&post-inpsection-page.png",
        "/images/driver-inspection-scanner.png",
        "/images/image (6).png"
      ],
      features: [
        "Daily check-in and inspection (pre/post-trip)",
        "Route-specific bag order visibility", 
        "Access to trip-related documents",
        "View trip notes and write-ups",
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "hr",
      title: "HR Panel",
      icon: Users,
      description: "Manage onboarding, termination, and role-based access control for all users.",
      images: [
<<<<<<< HEAD
        "/images/employee-details-1.png",
        "/images/employee-notes-1.png",
        "/images/employee-details-list.png",
=======
        "/images/employee-page.png",
        "/images/applicants.png",
        "/images/employee-details.png", 
        "/images/termination.png",
>>>>>>> 0e4e0698dc4d68ada19148efaedf533e2af5461f
      ],
      features: [
        "Applicant onboarding and employee management",
        "Payroll and attendance monitoring",
        "Role-based user control and updates",
        "Employee termination records",
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: "owner", 
      title: "Owner Dashboard",
      icon: PieChart,
      description: "High-level oversight of the entire organization, warehouses, and system access.",
      images: [
        "/images/owner-inspection-1.png",
        "/images/owner-vehicals-view.png",
        "/images/Vehivals-details.png",
      ],
      features: [
        "Multi-warehouse visibility and reports",
        "User management and permissions", 
        "Strategic business insights and analytics",
        "Full access to all modules and actions",
      ],
      color: "from-emerald-500 to-teal-500"
    },
  ];

  const currentRole = roles.find((role) => role.id === activeRole);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentRole) {
        setCurrentImageIndex((prev) => (prev + 1) % currentRole.images.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentRole]);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [activeRole]);

  const nextImage = () => {
    if (currentRole) {
      setCurrentImageIndex((prev) => (prev + 1) % currentRole.images.length);
    }
  };

  const prevImage = () => {
    if (currentRole) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? currentRole.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 left-1/3 w-64 h-64 bg-pink-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Role-Specific
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Dashboard Experience
            </span>
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover how LinqOps adapts to every role with specialized interfaces designed for maximum efficiency
          </motion.p>
        </motion.div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          {/* Role Cards Sidebar */}
          <motion.div 
            className="lg:col-span-1 space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {roles.map((role, index) => (
              <motion.div
                key={role.id}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-500 border-2 ${
                  activeRole === role.id
                    ? `bg-gradient-to-r ${role.color} text-white border-transparent shadow-xl scale-105`
                    : "bg-white/70 backdrop-blur-sm text-gray-700 border-gray-200/50 hover:bg-white/90 hover:shadow-lg hover:scale-102"
                }`}
                onClick={() => setActiveRole(role.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                <div className="flex items-center space-x-4 mb-3">
                  <div className={`p-3 rounded-xl ${
                    activeRole === role.id
                      ? "bg-white/20"
                      : `bg-gradient-to-r ${role.color}/10`
                  }`}>
                    <role.icon className={`h-6 w-6 ${
                      activeRole === role.id ? "text-white" : "text-gray-700"
                    }`} />
                  </div>
                  <h3 className="text-lg font-bold">{role.title}</h3>
                </div>
                <p className={`text-sm leading-relaxed ${
                  activeRole === role.id ? "text-white/90" : "text-gray-600"
                }`}>
                  {role.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

<<<<<<< HEAD
        {/* Dashboard Preview */}
        <div className="bg-white border border-gray-200 rounded-3xl shadow-xl overflow-hidden">
          {roles.map((role) => (
            <div
              key={role.id}
              className={`${activeRole === role.id ? "block" : "hidden"}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                {/* Image Section */}
                <div className="relative bg-white lg:col-span-3">
                  <div className="relative w-full h-full">
                    <div className="relative overflow-hidden rounded-l-3xl bg-gray-50 shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:translate-y-1 h-full flex items-center justify-center">
                      <div className="relative w-full" style={{ height: "650px" }}>
                        {role.images.map((image, index) => (
                          <div
                            key={index}
                            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                              index === currentImageIndex
                                ? "opacity-100"
                                : "opacity-0"
                            }`}
                          >
                            <img
                              src={image}
                              alt={`${role.title} Interface ${index + 1}`}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        ))}
                      </div>
=======
          {/* Dashboard Preview Area */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {currentRole && (
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
                {/* Image Display Area */}
                <div className="relative bg-gradient-to-br from-gray-50 to-gray-100">
                  <div className="relative overflow-hidden">
                    {/* Optimized container for 1890x903 aspect ratio */}
                    <div className="relative w-full" style={{ aspectRatio: '1890/903' }}>
                      {/* Left side click area for previous image */}
                      <div 
                        className="absolute left-0 top-0 bottom-0 w-1/2 z-10 cursor-pointer" 
                        onClick={prevImage}
                        aria-label="Previous image"
                      />
                      
                      {/* Right side click area for next image */}
                      <div 
                        className="absolute right-0 top-0 bottom-0 w-1/2 z-10 cursor-pointer" 
                        onClick={nextImage}
                        aria-label="Next image"
                      />
                      
                      {currentRole.images.map((image, index) => (
                        <div
                          key={index}
                          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                            index === currentImageIndex
                              ? "opacity-100 scale-100"
                              : "opacity-0 scale-105"
                          }`}
                        >
                          <img
                            src={image}
                            alt={`${currentRole.title} Interface ${index + 1}`}
                            className="w-full h-full object-cover object-center"
                            loading="lazy"
                          />
                        </div>
                      ))}
>>>>>>> 0e4e0698dc4d68ada19148efaedf533e2af5461f

                      {/* Image Indicators */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {currentRole.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                              index === currentImageIndex
                                ? "bg-white shadow-lg scale-125"
                                : "bg-white/60 hover:bg-white/80"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${currentRole.color}`}>
                      <currentRole.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {currentRole.title}
                      </h3>
                      <p className="text-gray-600">
                        {currentRole.description}
                      </p>
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentRole.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-3 p-4 bg-gray-50/80 rounded-xl hover:bg-gray-100/80 transition-colors duration-200 group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentRole.color} mt-2 group-hover:scale-125 transition-transform duration-200 flex-shrink-0`}></div>
                        <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-200">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {[
            { value: "99%", label: "Efficiency Improvement", color: "from-blue-500 to-cyan-500" },
            { value: "24/7", label: "Enterprise Support", color: "from-purple-500 to-pink-500" },
            { value: "SOC2", label: "Security Compliant", color: "from-emerald-500 to-teal-500" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40 hover:shadow-xl hover:bg-white/80 transition-all duration-500 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                {stat.value}
              </div>
              <div className="text-gray-600 font-semibold group-hover:text-gray-800 transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RoleDashboards;
