"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Contact from "@/components/contact/FormContact";
import Certificados from "@/views/Certificates";
import Experiences from "@/views/Experiences";
import Presentation from "@/views/Presentation";
import Projects from "@/views/Proyects";
import Skills from "@/views/Skills";

export default function Home() {
  const [isPresentationLoaded, setIsPresentationLoaded] = useState(false);

  const handlePresentationLoaded = () => {
    setIsPresentationLoaded(true);
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
    </div>
  );
}
