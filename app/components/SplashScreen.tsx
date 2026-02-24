"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { FaScissors } from "react-icons/fa6";

export default function SplashScreen({ children }: { children: React.ReactNode }) {
  const [isCut, setIsCut] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (showSplash) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showSplash]);

  const handleCut = () => {
    setIsCut(true);
    
    // Initial center explosion
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.5 },
      colors: ['#FFD700', '#FF0000', '#00FF00', '#0000FF', '#FF00FF'],
      zIndex: 10000
    });

    // Continuous falling confetti
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.8 },
        colors: ['#FFD700', '#FF0000', '#00FF00', '#0000FF', '#FF00FF'],
        zIndex: 10000
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.8 },
        colors: ['#FFD700', '#FF0000', '#00FF00', '#0000FF', '#FF00FF'],
        zIndex: 10000
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();

    // Change URL seamlessly without reloading
    window.history.replaceState(null, '', '/');

    // Remove splash screen after animations
    setTimeout(() => {
      setShowSplash(false);
    }, 2000);
  };

  if (!isMounted) return null;

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <motion.div
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-neutral-950 text-white overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
          >
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900 to-black z-0" />
            
            {/* Content Container */}
            <motion.div 
              className="relative z-10 flex flex-col items-center w-full h-full justify-between py-24"
              animate={isCut ? { opacity: 0, scale: 1.1 } : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Top Text */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: -20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                className="text-center mt-12"
              >
                <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 animate-gradient-x drop-shadow-lg">
                  µLearn
                </h1>
              </motion.div>

              {/* Bottom Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                className="text-center mb-12"
              >
                <p className="text-xl md:text-3xl font-light text-white tracking-[0.3em] uppercase drop-shadow-md">
                  Official Inauguration
                </p>
                <p className="text-sm text-neutral-400 mt-4 tracking-widest animate-pulse">
                </p>
              </motion.div>
            </motion.div>

            {/* Ribbon Container */}
            <div className="absolute top-1/2 left-0 w-full h-16 -translate-y-1/2 flex items-center justify-center z-30">
              {/* Left Ribbon */}
              <motion.div 
                className="h-12 bg-gradient-to-b from-red-500 via-red-600 to-red-700 w-1/2 shadow-[0_0_30px_rgba(220,38,38,0.8)] border-y-2 border-yellow-400/80"
                animate={isCut ? { x: "-100vw", y: "20vh", rotate: -20, opacity: 0 } : { x: 0, y: 0, rotate: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                style={{ transformOrigin: "left center" }}
              />
              
              {/* Right Ribbon */}
              <motion.div 
                className="h-12 bg-gradient-to-b from-red-500 via-red-600 to-red-700 w-1/2 shadow-[0_0_30px_rgba(220,38,38,0.8)] border-y-2 border-yellow-400/80"
                animate={isCut ? { x: "100vw", y: "20vh", rotate: 20, opacity: 0 } : { x: 0, y: 0, rotate: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                style={{ transformOrigin: "right center" }}
              />

              {/* Scissors / Cut Button */}
              {!isCut && (
                <motion.button
                  onClick={handleCut}
                  className="absolute w-32 h-32 flex items-center justify-center group cursor-pointer z-40"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="absolute inset-0 bg-white/5 rounded-full blur-xl group-hover:bg-white/20 transition-all duration-500" />
                  <motion.div
                    animate={{ rotate: [-10, 10, -10] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <FaScissors className="text-6xl text-gray-200 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] group-hover:text-white transition-colors duration-300" style={{ transform: 'rotate(-90deg)' }} />
                  </motion.div>
                </motion.button>
              )}
            </div>
            
            {/* Decorative glowing orbs */}
            <motion.div 
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] z-0"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-[100px] z-0"
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="relative z-0">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={!showSplash ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </div>
    </>
  );
}
