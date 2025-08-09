import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface NavigationProps {
  onMouseMove?: (tilt: number) => void;
}

export default function Navigation({ onMouseMove }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const navbar = e.currentTarget;
    const rect = navbar.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const mouseX = e.clientX;
    
    const tiltAmount = ((mouseX - centerX) / (rect.width / 2)) * 2;
    const clampedTilt = Math.max(-2, Math.min(2, tiltAmount));
    
    onMouseMove?.(clampedTilt);
  };

  const handleMouseLeave = () => {
    onMouseMove?.(0);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 backdrop-blur-md border-b border-slate-800/50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/95' : 'bg-slate-950/80'
      }`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-testid="navigation"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-ugly-green-400 to-ugly-green-600 rounded-lg flex items-center justify-center">
              <i className="fas fa-smile text-slate-900 text-xl"></i>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-ugly-green-400 to-ugly-green-600 bg-clip-text text-transparent">
              Ugly's Script
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-slate-300 hover:text-ugly-green-400 transition-colors duration-200"
              data-testid="link-features"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('benefits')}
              className="text-slate-300 hover:text-ugly-green-400 transition-colors duration-200"
              data-testid="link-benefits"
            >
              Benefits
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-slate-300 hover:text-ugly-green-400 transition-colors duration-200"
              data-testid="link-pricing"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-slate-300 hover:text-ugly-green-400 transition-colors duration-200"
              data-testid="link-faq"
            >
              FAQ
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              className="hidden md:flex items-center space-x-2 text-slate-300 hover:text-ugly-green-400 transition-colors duration-200"
              data-testid="button-login"
            >
              <i className="fas fa-sign-in-alt"></i>
              <span>Log in</span>
            </button>
            <button 
              className="bg-gradient-to-r from-ugly-green-500 to-ugly-green-600 hover:from-ugly-green-600 hover:to-ugly-green-700 px-4 py-2 rounded-lg text-white font-medium transition-all duration-200 transform hover:scale-105"
              data-testid="button-register"
            >
              <i className="fas fa-user-plus mr-2"></i>
              <span>Register</span>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
