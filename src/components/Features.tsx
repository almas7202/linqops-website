import {
  Bot,
  Zap,
  Truck,
  Building,
  Gem,
  BarChart3,
  Shield,
  Users,
  XCircle,
  CalendarCheck,
  Package,
  FileText,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: "Applicants Management",
      description:
        "Track applicants and employees with onboarding status, training progress, and profile updates.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Active Employees",
      description:
        "View, filter, and manage current system employees by active, inactive, or onboarding status.",
      gradient: "from-teal-500 to-sky-500",
    },
    {
      icon: Zap,
      title: "Dispatch Operations",
      description:
        "Schedule drivers, assign vans by route code, manage check-ins, and attach driver-specific documents and notes.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Truck,
      title: "Fleet Management",
      description:
        "Oversee vehicle status, manage notes, assign drivers, and monitor damage and repairs in real time.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Gem,
      title: "Asset Tracking",
      description:
        "Track driver-issued assets like phones, toll tags, and gas cards with assignment history and status logs.",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: BarChart3,
      title: "Daily Inspections",
      description:
        "Conduct and review pre- and post-trip inspections with photo/video uploads for accurate vehicle status tracking.",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      icon: Shield,
      title: "User Management",
      description:
        "Owner-level control to update roles, reset passwords, and delete or manage system users securely.",
      gradient: "from-slate-500 to-gray-500",
    },
    {
      icon: Building,
      title: "Organization Overview",
      description:
        "View and manage multiple warehouses and departments under a unified DSP organizational structure.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: XCircle, // You can replace this with any termination-related icon
      title: "Termination Records",
      description:
        "Maintain a complete log of all terminated employees, including context and historical status.",
      gradient: "from-rose-500 to-pink-500",
    },
    {
      icon: CalendarCheck, // Make sure to import this or replace with your own calendar icon
      title: "Attendance Tracking",
      description:
        "Monitor daily attendance, check-in times, and note incidents or absences across all roles.",
      gradient: "from-yellow-500 to-amber-500",
    },
    {
      icon: Package, // Replace with a bag or order-related icon
      title: "Bag Order View",
      description:
        "Drivers can view route-specific bag orders, ensuring accurate delivery without manual confusion.",
      gradient: "from-lime-500 to-green-400",
    },
    {
      icon: FileText, // Replace with document-related icon if needed
      title: "Driver Document Access",
      description:
        "Drivers can access all relevant trip documents like license, ID, and insurance—uploaded by admins or HR.",
      gradient: "from-fuchsia-500 to-rose-500",
    },
  ];
  

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for Modern Delivery Operations
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Delivery Operations
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your delivery business with cutting-edge automation,
            intelligent scheduling, and centralized fleet and workforce control.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gray-50/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div
                className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4`}
              >
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover effect overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
