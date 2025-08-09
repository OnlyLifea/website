import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: "fas fa-bolt",
    title: "Lightning Fast",
    description: "Execute scripts with unmatched speed and reliability. Our optimized engine ensures minimal latency."
  },
  {
    icon: "fas fa-shield-alt",
    title: "Secure & Safe",
    description: "Advanced protection mechanisms keep your account safe while using our script executor."
  },
  {
    icon: "fas fa-cogs",
    title: "Full Compatibility",
    description: "100% UNC and sUNC support with compatibility across all major script libraries."
  },
  {
    icon: "fas fa-users",
    title: "Community Driven",
    description: "Join our active community of 85K+ members sharing scripts and providing support."
  },
  {
    icon: "fas fa-clock",
    title: "24/7 Support",
    description: "Round-the-clock assistance from our dedicated support team whenever you need help."
  },
  {
    icon: "fas fa-rocket",
    title: "Regular Updates",
    description: "Continuous improvements and new features to keep you ahead of the curve."
  }
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-20 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="features-heading">
            <span className="bg-gradient-to-r from-ugly-green-400 to-ugly-green-600 bg-clip-text text-transparent">
              Premium Features
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Experience the most advanced script execution capabilities with our comprehensive feature set
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-ugly-green-500/50 transition-all duration-300 group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              data-testid={`feature-card-${index}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-ugly-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <motion.div 
                className="w-12 h-12 bg-gradient-to-br from-ugly-green-400 to-ugly-green-600 rounded-lg flex items-center justify-center mb-4 relative z-10"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <i className={`${feature.icon} text-slate-900`}></i>
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-3 relative z-10" data-testid={`feature-title-${index}`}>
                {feature.title}
              </h3>
              <p className="text-slate-300 relative z-10" data-testid={`feature-description-${index}`}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
