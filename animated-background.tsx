import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated Green Waves */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(16, 185, 129, 0.1)" />
            <stop offset="50%" stopColor="rgba(16, 185, 129, 0.05)" />
            <stop offset="100%" stopColor="rgba(16, 185, 129, 0.1)" />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(16, 185, 129, 0.08)" />
            <stop offset="50%" stopColor="rgba(16, 185, 129, 0.03)" />
            <stop offset="100%" stopColor="rgba(16, 185, 129, 0.08)" />
          </linearGradient>
        </defs>
        
        {/* Wave 1 */}
        <motion.path
          d="M0,200 Q480,100 960,200 T1920,200 L1920,0 L0,0 Z"
          fill="url(#waveGradient1)"
          animate={{
            d: [
              "M0,200 Q480,100 960,200 T1920,200 L1920,0 L0,0 Z",
              "M0,150 Q480,250 960,150 T1920,150 L1920,0 L0,0 Z",
              "M0,200 Q480,100 960,200 T1920,200 L1920,0 L0,0 Z"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Wave 2 */}
        <motion.path
          d="M0,400 Q480,300 960,400 T1920,400 L1920,0 L0,0 Z"
          fill="url(#waveGradient2)"
          animate={{
            d: [
              "M0,400 Q480,300 960,400 T1920,400 L1920,0 L0,0 Z",
              "M0,350 Q480,450 960,350 T1920,350 L1920,0 L0,0 Z",
              "M0,400 Q480,300 960,400 T1920,400 L1920,0 L0,0 Z"
            ]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Bottom Wave */}
        <motion.path
          d="M0,1080 Q480,980 960,1080 T1920,1080 L1920,1080 L0,1080 Z"
          fill="url(#waveGradient1)"
          animate={{
            d: [
              "M0,1080 Q480,980 960,1080 T1920,1080 L1920,1080 L0,1080 Z",
              "M0,1080 Q480,1180 960,1080 T1920,1080 L1920,1080 L0,1080 Z",
              "M0,1080 Q480,980 960,1080 T1920,1080 L1920,1080 L0,1080 Z"
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-ugly-green-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100, -20],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Glowing Orbs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%)",
            top: "10%",
            left: "80%",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute w-64 h-64 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%)",
            bottom: "20%",
            left: "10%",
          }}
          animate={{
            scale: [1, 0.8, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px"
        }}
      />
    </div>
  );
}