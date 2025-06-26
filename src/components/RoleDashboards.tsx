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
      description:
        "Essential features tailored for drivers to manage daily delivery operations.",
      images: [
        "/images/driver-dashboard.png",
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
    },
    {
      id: "hr",
      title: "HR Panel",
      icon: Users,
      description:
        "Manage onboarding, termination, and role-based access control for all users.",
      images: [
        "/images/employee-details-1.png",
        "/images/employee-notes-1.png",
        "/images/employee-details-list.png",
      ],
      features: [
        "Applicant onboarding and employee management",
        "Payroll and attendance monitoring",
        "Role-based user control and updates",
        "Employee termination records",
      ],
    },
    {
      id: "owner",
      title: "Owner Dashboard",
      icon: PieChart,
      description:
        "High-level oversight of the entire organization, warehouses, and system access.",
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
    },
  ];

  const currentRole = roles.find((role) => role.id === activeRole);

  // Auto-slide effect with longer interval
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentRole) {
        setCurrentImageIndex((prev) => (prev + 1) % currentRole.images.length);
      }
    }, 5000); // 5 seconds interval

    return () => clearInterval(interval);
  }, [currentRole]);

  // Reset image index when role changes
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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tailored Experiences for
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Every Role
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From drivers to executives, LinqOps provides role-specific
            interfaces optimized for each user's needs
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
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-gray-200 hover:shadow-md"
              }`}
            >
              <role.icon className="h-5 w-5" />
              <span>{role.title}</span>
            </button>
          ))}
        </div>

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

                      {/* Invisible navigation areas */}
                      <button
                        onClick={prevImage}
                        className="absolute left-0 top-0 w-1/2 h-full bg-transparent hover:bg-gradient-to-r hover:from-black/5 hover:to-transparent transition-all duration-200 z-10"
                        aria-label="Previous image"
                      />
                      <button
                        onClick={nextImage}
                        className="absolute right-0 top-0 w-1/2 h-full bg-transparent hover:bg-gradient-to-l hover:from-black/5 hover:to-transparent transition-all duration-200 z-10"
                        aria-label="Next image"
                      />
                    </div>

                    {/* Removed dot indicators */}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-12 flex flex-col justify-center bg-gray-50 lg:col-span-2">
                  <div className="mb-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                        <role.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900">
                        {role.title}
                      </h3>
                    </div>
                    <p className="text-xl text-gray-600 leading-relaxed mb-8">
                      {role.description}
                    </p>
                  </div>

                  {/* Key Capabilities */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-6">
                      Key Capabilities:
                    </h4>
                    <div className="space-y-4">
                      {role.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-3 group"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-200"></div>
                          <span className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-200">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  {/* <div>
                    <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      Explore {role.title}
                      <svg
                        className="ml-2 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Stat Card 1 */}
          <motion.div 
            className="text-center p-6 bg-white/80 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              50+
            </motion.div>
            <motion.div 
              className="text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              Reliable
            </motion.div>
          </motion.div>
          
          {/* Stat Card 2 */}
          <motion.div 
            className="text-center p-6 bg-white/80 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              99.9%
            </motion.div>
            <motion.div 
              className="text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              Scalable
            </motion.div>
          </motion.div>
          
          {/* Stat Card 3 */}
          <motion.div 
            className="text-center p-6 bg-white/80 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              24/7
            </motion.div>
            <motion.div 
              className="text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              Supported
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RoleDashboards;
