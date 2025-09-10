"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Contact from "@/components/contact/FormContact";
import Certificados from "@/views/Certificates";
import Experiences from "@/views/Experiences";
import Presentation from "@/views/Presentation";
import Projects from "@/views/Proyects";
import Skills from "@/views/Skills";

export default function Home() {
  const [isPresentationLoaded, setIsPresentationLoaded] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handlePresentationLoaded = () => {
    setIsPresentationLoaded(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div>
      <Presentation onLoadingComplete={handlePresentationLoaded} />
      
      <AnimatePresence>
        {isPresentationLoaded && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Certificados />
            <Experiences />
            <Skills />
            <Projects />
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollToTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 bg-green-500/20 hover:bg-green-500/30 border-2 border-green-400/50 hover:border-green-400 text-green-400 hover:text-green-300 p-3 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-300 font-mono"
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              fill="currentColor" 
              viewBox="0 0 16 16"
            >
              <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}