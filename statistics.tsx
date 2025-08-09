import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useAnimatedCounter } from "@/hooks/use-animated-counter";

const statistics = [
  {
    target: 6000,
    suffix: "+",
    label: "Active Users",
    growth: "↗ +15% this month",
    testId: "stat-active-users"
  },
  {
    target: 85000,
    suffix: "K+",
    label: "Discord Members",
    growth: "↗ +8% this month",
    testId: "stat-discord-members",
    divideBy: 1000
  },
  {
    target: 1200,
    suffix: "+",
    label: "Total Sales",
    growth: "Happy Customers!",
    testId: "stat-sales"
  },
  {
    target: 100,
    suffix: "%",
    label: "Premium Quality",
    growth: "Always reliable",
    testId: "stat-quality"
  }
];

export default function Statistics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Create all the animated counters outside the map function
  const counters = statistics.map((stat, index) => 
    useAnimatedCounter({ 
      end: stat.target, 
      isInView: isInView, 
      duration: 2500 + (index * 200) 
    })
  );

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="statistics-heading">
            <span className="bg-gradient-to-r from-ugly-green-400 to-ugly-green-600 bg-clip-text text-transparent">
              Growing Fast
            </span>
          </h2>
          <p className="text-xl text-slate-300">See how our community continues to expand</p>
        </motion.div>

        {/* Enhanced Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => {
            const count = counters[index];
            const displayValue = stat.divideBy 
              ? Math.floor(count / stat.divideBy) 
              : count.toLocaleString();
            
            return (
              <motion.div
                key={index}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center hover:border-ugly-green-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                data-testid={stat.testId}
              >
                <div className="text-5xl font-bold text-ugly-green-400 mb-2" data-testid={`${stat.testId}-value`}>
                  {displayValue}{stat.suffix}
                </div>
                <div className="text-slate-300 mb-1" data-testid={`${stat.testId}-label`}>
                  {stat.label}
                </div>
                <div className="text-sm text-ugly-green-500" data-testid={`${stat.testId}-growth`}>
                  {stat.growth}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
