import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Statistics from "@/components/statistics";
import Pricing from "@/components/pricing";
import Footer from "@/components/footer";
import AnimatedBackground from "@/components/animated-background";

export default function Home() {
  const [navTilt, setNavTilt] = useState(0);

  useEffect(() => {
    // Smooth scroll behavior
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-inter overflow-x-hidden relative">
      <AnimatedBackground />
      
      <motion.div
        style={{ transform: `rotateZ(${navTilt}deg)` }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="relative z-10"
      >
        <Navigation onMouseMove={setNavTilt} />
      </motion.div>
      
      <div className="relative z-10">
        <Hero />
        <Features />
        <Statistics />
        <Pricing />
        <Footer />
      </div>
    </div>
  );
}
