'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const certificates = [
  {
    id: 1,
    title: "Desarrollador Web Full Stack",
    description: "Certificación completa en desarrollo web frontend y backend",
    image: "/Certificado de DWFS.jpeg",
    date: "2025",
    category: "DEVELOPMENT",
    level: "EXPERT"
  },
  {
    id: 2,
    title: "Certificado de Inglés C1 Avanzado",
    description: "Nivel avanzado de inglés según el Marco Común Europeo",
    image: "/Certificado de ingles C1.png",
    date: "2025",
    category: "LANGUAGE",
    level: "ADVANCED"
  },
  {
    id: 3,
    title: "Graduado en Economía",
    description: "Complejo Educativo Solis",
    image: "/Certificado de graduacion.jpg", 
    date: "2019",
    category: "ACADEMIC",
    level: "GRADUATE"
  }
];

export default function Certificados() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section 
      id="certificates" 
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
        
        {/* TITLE SECTION */}
        <motion.div
          className="w-full text-center"
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Title glow container */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg opacity-40 blur-lg animate-pulse" />
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 rounded-lg opacity-60 blur-md" />
            
            <div className="relative bg-black bg-opacity-60 backdrop-blur-sm rounded-lg border border-cyan-400 border-opacity-30 p-6">
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
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
                &gt; CERTIFICATES_DATABASE.EXE
              </motion.h1>
              
              <motion.p
                className="text-cyan-400 text-sm sm:text-base md:text-lg font-mono"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{
                  textShadow: '0 0 10px #00ffff'
                }}
              >
                &gt; Loading credentials and achievements...
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* CERTIFICATES GRID */}
        <motion.div 
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="relative group"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ 
                duration: 0.6, 
                delay: 0.9 + index * 0.2,
                ease: "easeOut"
              }}
            >
              {/* Outer glow container */}
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-xl opacity-40 blur-lg group-hover:opacity-60 transition-all duration-500" />
                <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 rounded-xl opacity-60 blur-md group-hover:opacity-80 transition-all duration-500" />
                
                {/* Main certificate container */}
                <div className="relative bg-black bg-opacity-80 backdrop-blur-sm rounded-xl border border-cyan-400 border-opacity-30 overflow-hidden group-hover:border-pink-400 transition-all duration-500">
                  
                  {/* Image section */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="group-hover:scale-110 transition-transform duration-700"
                      priority
                    />
                    
                    {/* Holographic overlay */}
                    <div 
                      className="absolute inset-0 opacity-20 mix-blend-overlay group-hover:opacity-30 transition-opacity duration-500"
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
                    
                    {/* Category badge */}
                    <div className="absolute top-3 right-3">
                      <div className="bg-black bg-opacity-70 backdrop-blur-sm px-2 py-1 rounded-md border border-cyan-400">
                        <span className="text-cyan-400 text-xs font-mono font-bold">
                          {cert.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Level indicator */}
                    <div className="absolute bottom-3 left-3">
                      <div className="bg-black bg-opacity-70 backdrop-blur-sm px-2 py-1 rounded-md border border-pink-400">
                        <span className="text-pink-400 text-xs font-mono font-bold">
                          {cert.level}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content section */}
                  <div className="p-4 space-y-3">
                    <motion.h3 
                      className="text-lg sm:text-xl font-bold text-cyan-400 font-mono"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.4, delay: 1.1 + index * 0.2 }}
                      style={{
                        textShadow: '0 0 8px #00ffff'
                      }}
                    >
                      &gt; {cert.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-green-400 text-sm font-mono leading-tight"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.4, delay: 1.3 + index * 0.2 }}
                      style={{
                        textShadow: '0 0 5px #00ff00'
                      }}
                    >
                      &gt; {cert.description}
                    </motion.p>
                    
                    <motion.div 
                      className="flex justify-between items-center"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.4, delay: 1.5 + index * 0.2 }}
                    >
                      <span className="text-yellow-400 text-xs font-mono font-bold">
                        &gt; YEAR: {cert.date}
                      </span>
                      <span className="text-purple-400 text-xs font-mono font-bold">
                        &gt; ID: {cert.id.toString().padStart(3, '0')}
                      </span>
                    </motion.div>
                  </div>

                  {/* Corner decorations */}
                  <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* STATUS BAR */}
        <motion.div
          className="w-full max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          <div className="bg-black bg-opacity-60 backdrop-blur-sm rounded-lg border border-cyan-400 border-opacity-30 p-4">
            <div className="flex justify-between items-center text-sm font-mono">
              <span className="text-green-400">
                &gt; STATUS: <span className="text-cyan-400">LOADED</span>
              </span>
              <span className="text-yellow-400">
                &gt; CERTIFICATES: <span className="text-pink-400">{certificates.length}</span>
              </span>
              <span className="text-purple-400">
                &gt; SYSTEM: <span className="text-cyan-400">ONLINE</span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
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
}
