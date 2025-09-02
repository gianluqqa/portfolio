"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideFromTop } from "@/utilities/animation";
import Button from "@/components/ui/Button";

const photoProfile = "/Foto de perfil.jpg";
const background = "/Background.png";

const Presentation = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial size
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
         <section 
       id="about" 
       className="relative min-h-screen w-full flex items-center justify-center pt-32 pb-16 px-4 overflow-hidden"
      style={{
        background: `
          linear-gradient(45deg, #0a0a0a 25%, transparent 25%),
          linear-gradient(-45deg, #0a0a0a 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, #0a0a0a 75%),
          linear-gradient(-45deg, transparent 75%, #0a0a0a 75%),
          linear-gradient(135deg, #1a0033 0%, #000000 50%, #001a33 100%)
        `,
        backgroundSize: '20px 20px, 20px 20px, 20px 20px, 20px 20px, 100% 100%',
        backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px, 0 0'
      }}
    >
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Animated scan lines */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30"
          animate={{ y: ['0vh', '100vh'] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Glitch effect overlay */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(255, 0, 255, 0.1) 2px,
            rgba(255, 0, 255, 0.1) 4px
          )`
        }}
      />

             <div className="w-full max-w-screen-xl flex flex-col items-center gap-12 md:gap-16 relative z-10">
         
         {/* FOTO */}
         <motion.div
           className="w-full flex justify-center relative"
           initial={{ opacity: 0, y: -30, scale: 0.9 }}
           whileInView={{ opacity: 1, y: 0, scale: 1 }}
           viewport={{ once: false }}
           transition={{ duration: 0.8, ease: "easeOut" }}
         >
          {/* Outer glow container */}
          <div className="relative">
            {/* Multiple glowing borders */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg opacity-40 blur-lg animate-pulse" />
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 rounded-lg opacity-60 blur-md" />
            
                         {/* Main image container */}
             <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80">
              {/* Hexagonal border effect */}
              <div 
                className="absolute inset-0 rounded-lg overflow-hidden"
                style={{
                  background: 'linear-gradient(45deg, #00ffff, #ff00ff, #ffff00, #00ffff)',
                  padding: '3px'
                }}
              >
                <div className="w-full h-full rounded-lg overflow-hidden bg-black">
                  <Image
                    src={photoProfile}
                    alt="Foto de perfil de Gian Luca Caravone"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                    className="filter contrast-110 brightness-110"
                  />
                  
                  {/* Holographic overlay */}
                  <div 
                    className="absolute inset-0 opacity-20 mix-blend-overlay"
                    style={{
                      background: `
                        linear-gradient(45deg, 
                          rgba(0, 255, 255, 0.3) 0%, 
                          rgba(255, 0, 255, 0.3) 50%, 
                          rgba(255, 255, 0, 0.3) 100%
                        )
                      `
                    }}
                  />
                </div>
              </div>

              {/* Corner decorations */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-pink-400" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-yellow-400" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-purple-400" />
            </div>
          </div>
        </motion.div>

                  {/* TEXTO */}
         <motion.div 
           className="w-full max-w-3xl lg:max-w-4xl text-center relative px-4"
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: false }}
           transition={{ duration: 0.8, ease: "easeOut" }}
         >
           
                       {/* Background panel for text */}
            <motion.div 
              className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm rounded-lg border border-cyan-400 border-opacity-30"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            
            <div className="relative z-10 p-3 sm:p-4">
              <motion.h1
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3"
                initial={{ opacity: 0, y: -15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.3 }}
               style={{
                 fontFamily: 'monospace',
                 textShadow: `
                   0 0 10px #00ffff,
                   0 0 20px #00ffff,
                   0 0 30px #00ffff,
                   2px 2px 0px #ff00ff
                 `,
                 background: 'linear-gradient(45deg, #00ffff, #ff00ff, #ffff00)',
                 WebkitBackgroundClip: 'text',
                 WebkitTextFillColor: 'transparent',
                 backgroundClip: 'text'
               }}
             >
               GIAN LUCA (BLAKE) CARAVONE
             </motion.h1>

                           <motion.h2
                className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-3 sm:mb-4 font-mono"
                initial={{ opacity: 0, y: -15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.5 }}
               style={{
                 color: '#ffff00',
                 textShadow: '0 0 10px #ffff00, 0 0 20px #ffff00, 1px 1px 0px #ff00ff'
               }}
             >
               &gt; FULL STACK WEB DEVELOPER & QA ENGINEER
             </motion.h2>

                           <motion.div
                className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                {[
                  "Full Stack Web Developer and QA Engineer with experience in designing,",
                  "developing, and validating complete web applications. Skilled in React,",
                  "Next.js, Node.js, Express, PostgreSQL, and MongoDB, creating scalable",
                  "and responsive interfaces.",
                  "",
                  "In QA, I practice manual and automated testing using Selenium, Cypress,",
                  "and Postman, validating APIs and databases with detailed bug reporting.",
                  "My development background enhances my analytical approach to error",
                  "detection and resolution.",
                  "",
                  "I thrive in agile environments (Scrum), contributing with clear",
                  "communication and collaborative teamwork. I stand out for my proactive",
                  "mindset, adaptability, and focus on quality, ensuring project success",
                  "and scalability."
                ].map((line, index) => (
                  <motion.p
                    key={index}
                    className="text-green-400 text-xs sm:text-sm md:text-base font-mono leading-tight"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.8 + index * 0.08,
                      ease: "easeOut"
                    }}
                    style={{
                      textShadow: '0 0 5px #00ff00',
                      filter: line === "" ? 'opacity(0)' : 'none'
                    }}
                  >
                    {line === "" ? "\u00A0" : `> ${line}`}
                  </motion.p>
                ))}
              </motion.div>

                                                       <motion.div
                 initial={{ opacity: 0, scale: 0.8, y: 20 }}
                 whileInView={{ opacity: 1, scale: 1, y: 0 }}
                 viewport={{ once: false }}
                 transition={{ duration: 0.6, delay: 2.0 }}
                 className="flex justify-center"
               >
               <div className="relative group">
                 {/* Button glow effect */}
                 <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg opacity-60 group-hover:opacity-80 blur transition-all duration-300" />
                 
                 <div 
                   className="relative px-4 sm:px-6 py-2.5 sm:py-3 bg-black rounded-lg font-mono text-cyan-400 font-bold text-sm sm:text-base border-2 border-cyan-400 hover:border-pink-400 hover:text-pink-400 transition-all duration-300 cursor-pointer group-hover:bg-gray-900"
                   style={{
                     textShadow: '0 0 10px currentColor',
                     boxShadow: 'inset 0 0 20px rgba(0, 255, 255, 0.1)'
                   }}
                 >
                   &gt; DOWNLOAD_RESUME.EXE
                 </div>

                 {/* Button corner effects */}
                 <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                 <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                 <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                 <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
               </div>
             </motion.div>
           </div>
         </motion.div>
      </div>

             {/* Floating particles effect */}
       <div className="absolute inset-0 pointer-events-none overflow-hidden">
         {[...Array(20)].map((_, i) => (
           <motion.div
             key={i}
             className="absolute w-1 h-1 bg-cyan-400 rounded-full"
             initial={{
               x: Math.random() * (windowSize.width || 1200),
               y: (windowSize.height || 800) + 10,
             }}
             animate={{
               y: -10,
               x: Math.random() * (windowSize.width || 1200),
             }}
             transition={{
               duration: Math.random() * 10 + 10,
               repeat: Infinity,
               ease: "linear",
               delay: Math.random() * 5,
             }}
             style={{
               boxShadow: '0 0 6px #00ffff',
             }}
           />
         ))}
       </div>
    </section>
  );
};

export default Presentation;