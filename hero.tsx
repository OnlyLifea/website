import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useAnimatedCounter } from "@/hooks/use-animated-counter";

export default function Hero() {
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });
  
  const activeUsersCount = useAnimatedCounter({ end: 6000, isInView: isStatsInView, duration: 2500 });
  const discordMembersCount = useAnimatedCounter({ end: 85000, isInView: isStatsInView, duration: 2800 });
  const qualityCount = useAnimatedCounter({ end: 100, isInView: isStatsInView, duration: 2000 });

  const handleGetStarted = () => {
    // Handle get started action
    console.log("Get Started clicked");
  };

  const handleJoinDiscord = () => {
    // Handle Discord join action
    window.open("https://discord.gg/uglyscripts", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Enhanced Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.15),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.1),transparent_60%)]"></div>
      
      {/* Animated Code Rain Effect */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-ugly-green-400 opacity-20 font-mono text-xs"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-10%`,
            }}
            animate={{
              y: ["0vh", "110vh"],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          >
            {["loadstring()", "game.Players", "workspace", "script()", "wait()", "spawn()", "coroutine"][Math.floor(Math.random() * 7)]}
          </motion.div>
        ))}
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Status Badge */}
        <motion.div 
          className="inline-flex items-center space-x-2 bg-slate-800/50 border border-ugly-green-500/30 rounded-full px-4 py-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          data-testid="status-badge"
        >
          <i className="fas fa-code text-ugly-green-400"></i>
          <span className="text-sm text-slate-300">Your rules, our power</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          className="text-6xl md:text-8xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          data-testid="main-heading"
        >
          <span className="bg-gradient-to-r from-ugly-green-400 via-ugly-green-500 to-ugly-green-600 bg-clip-text text-transparent">
            Ugly's Script
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p 
          className="text-xl md:text-2xl text-slate-300 mb-4 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          data-testid="tagline"
        >
          The most reliable and powerful script provider for executors with{" "}
          <span className="text-ugly-green-400 font-semibold">100% UNC & sUNC</span> support.
        </motion.p>

        {/* Status Indicator */}
        <motion.div 
          className="inline-flex items-center space-x-2 bg-ugly-green-500/10 border border-ugly-green-500/30 rounded-lg px-4 py-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          data-testid="status-indicator"
        >
          <div className="w-2 h-2 bg-ugly-green-400 rounded-full animate-pulse-green"></div>
          <span className="text-sm text-ugly-green-400">Ugly's Script is currently active and operational</span>
        </motion.div>

        {/* Statistics */}
        <motion.div 
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center" data-testid="stat-users">
            <div className="text-4xl md:text-5xl font-bold text-ugly-green-400 mb-2">
              {activeUsersCount.toLocaleString()}+
            </div>
            <div className="text-slate-300">Active Users</div>
          </div>
          <div className="text-center" data-testid="stat-discord">
            <div className="text-4xl md:text-5xl font-bold text-ugly-green-400 mb-2">
              {Math.floor(discordMembersCount / 1000)}K+
            </div>
            <div className="text-slate-300">Discord Members</div>
          </div>
          <div className="text-center" data-testid="stat-quality">
            <div className="text-4xl md:text-5xl font-bold text-ugly-green-400 mb-2">
              {qualityCount}%
            </div>
            <div className="text-slate-300">Premium Quality</div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button 
            onClick={handleGetStarted}
            className="bg-gradient-to-r from-ugly-green-500 to-ugly-green-600 hover:from-ugly-green-600 hover:to-ugly-green-700 px-8 py-3 rounded-lg text-white font-semibold transition-all duration-200 flex items-center space-x-2 relative overflow-hidden group"
            data-testid="button-get-started"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-ugly-green-400 to-ugly-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10">Get Started</span>
            <motion.i 
              className="fas fa-arrow-right relative z-10"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            ></motion.i>
          </motion.button>
          <motion.button 
            onClick={handleJoinDiscord}
            className="bg-slate-800 hover:bg-slate-700 border border-slate-600 px-8 py-3 rounded-lg text-slate-300 font-semibold transition-all duration-200 flex items-center space-x-2 relative overflow-hidden group"
            data-testid="button-join-discord"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <motion.i 
              className="fab fa-discord relative z-10"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            ></motion.i>
            <span className="relative z-10">Join Discord</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
