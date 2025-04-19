"use client"
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Navbar = () => {
  const { scrollY } = useScroll();
  
  // Transformación para la opacidad del fondo
  const bgOpacity = useTransform(
    scrollY,
    [0, 100],
    [0, 1]
  );
  
  // Transformación para la altura
  const navHeight = useTransform(
    scrollY,
    [0, 100],
    ['4rem', '3rem']
  );
  
  // Transformación para los colores del texto
  // Invertimos colores: oscuros al inicio, claros al hacer scroll
  const textColor = useTransform(
    scrollY,
    [0, 100],
    ["#3a4a3c", "#f0e6a3"]
  );
  
  const hoverTextColor = useTransform(
    scrollY,
    [0, 100],
    ["#2a3a2c", "#f8f0c8"]
  );

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ height: navHeight }}
    >
      {/* Fondo con opacidad variable */}
      <motion.div 
        className="absolute inset-0 bg-[#3a4a3c]"
        style={{ opacity: bgOpacity }}
      />
      
      {/* Contenido de la navbar siempre visible */}
      <div className="container mx-auto px-4 h-full relative">
        <div className="flex justify-between items-center h-full">
          <motion.div className="font-bold text-xl" style={{ color: textColor }}>
            Gian Luca Caravone
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            <motion.a 
              href="#about" 
              className="font-medium transition-colors duration-300"
              style={{ color: textColor }}
              whileHover={{ color: hoverTextColor }}
            >
              About Me
            </motion.a>
            <motion.a 
              href="#projects" 
              className="font-medium transition-colors duration-300"
              style={{ color: textColor }}
              whileHover={{ color: hoverTextColor }}
            >
              Projects
            </motion.a>
            <motion.a 
              href="#skills" 
              className="font-medium transition-colors duration-300"
              style={{ color: textColor }}
              whileHover={{ color: hoverTextColor }}
            >
              Skills
            </motion.a>
            <motion.a 
              href="#contact" 
              className="font-medium transition-colors duration-300"
              style={{ color: textColor }}
              whileHover={{ color: hoverTextColor }}
            >
              Contact
            </motion.a>
          </div>
          
          {/* Menú móvil (hamburguesa) */}
          <motion.div className="md:hidden" style={{ color: textColor }}>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;