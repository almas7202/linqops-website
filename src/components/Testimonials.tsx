import { Star } from "lucide-react";
import { motion, useInView, useAnimation, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Operations Director",
      company: "FastTrack Logistics",
      content:
        "LinqOps revolutionized our delivery management. From driver scheduling to dispatch coordination, it brought unmatched efficiency and visibility to our operations.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=faces&fit=crop&w=150&h=150"
    },
    {
      name: "Michael Rodriguez",
      role: "CEO",
      company: "Urban Delivery Co",
      content:
        "As a scaling company, we needed stability. LinqOps gave us the tools and confidence to handle high-volume delivery flows while keeping our team aligned.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Johnson",
      role: "Fleet Manager",
      company: "Metro Express",
      content:
        "Our fleet uptime has improved drastically. With pre/post-trip inspections and real-time asset tracking, we’ve minimized downtime and streamlined reporting.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];
  

  const companies = [
    "FastTrack Logistics",
    "Urban Delivery Co",
    "Metro Express",
    "QuickShip",
    "Logistics Pro",
    "DeliveryFirst"
  ];
  

  return (
    <section
      id="reviews"
      className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Empowering
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Leaders
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by logistics leaders to streamline dispatch, manage fleets,
            and optimize workforce performance—LinqOps powers efficiency at
            every stage.
          </p>
        </div>

        {/* Company Logos */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {companies.map((company, index) => (
              <div key={index} className="text-gray-600 font-semibold text-lg">
                {company}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {/* Rating */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="text-gray-900 font-semibold">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonial.role}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <StatsSection />
      </div>
    </section>
  );
};

// Stats section with animations
const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.div 
      ref={ref}
      className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
    >
      <StatItem 
        value={500} 
        suffix="+" 
        label="Enterprise Clients" 
        variants={itemVariants} 
      />
      <StatItem 
        value={99.9} 
        suffix="%" 
        label="Uptime SLA" 
        variants={itemVariants}
        decimals={1} 
      />
      <StatItem 
        value={35} 
        suffix="%" 
        label="Average Cost Reduction" 
        variants={itemVariants} 
      />
      <StatItem 
        value={24} 
        suffix="/7" 
        label="Expert Support" 
        variants={itemVariants} 
      />
    </motion.div>
  );
};

interface StatItemProps {
  value: number;
  suffix?: string;
  label: string;
  variants: Variants;
  decimals?: number;
}

const StatItem = ({ value, suffix = "", label, variants, decimals = 0 }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = value / (duration / 16); // 16ms per frame
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div 
      ref={ref}
      className="text-center" 
      variants={variants}
    >
      <motion.div className="text-3xl font-bold text-gray-900 mb-2">
        {count.toFixed(decimals)}{suffix}
      </motion.div>
      <div className="text-gray-600">{label}</div>
    </motion.div>
  );
};

export default Testimonials;
