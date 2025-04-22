"use client"
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
  const { scrollY } = useScroll();
  
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const navHeight = useTransform(scrollY, [0, 100], ['4rem', '3rem']);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ height: navHeight }}
    >
      {/* Fondo con opacidad variable */}
      <motion.div 
        className="absolute inset-0 bg-gray-800"
        style={{ opacity: bgOpacity }}
      />

      {/* Contenido de la navbar */}
      <div className="container mx-auto px-4 h-full relative">
        <div className="flex justify-between items-center h-full">

          {/* Izquierda: Nombre */}
          <motion.div className="font-bold text-xl text-green-500">
            Gian Luca Caravone
          </motion.div>

          {/* Centro: Títulos */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-8">
            <motion.a 
              href="#about" 
              className="font-medium transition-colors duration-300 text-green-500 hover:text-red-500"
            >
              About Me
            </motion.a>
            <motion.a 
              href="#projects" 
              className="font-medium transition-colors duration-300 text-green-500 hover:text-red-500"
            >
              Projects
            </motion.a>
            <motion.a 
              href="#skills" 
              className="font-medium transition-colors duration-300 text-green-500 hover:text-red-500"
            >
              Skills
            </motion.a>
            <motion.a 
              href="#contact" 
              className="font-medium transition-colors duration-300 text-green-500 hover:text-red-500"
            >
              Contact
            </motion.a>
          </div>

          {/* Derecha: Redes sociales */}
          <div className="hidden md:flex space-x-4 text-green-500">
            <a href="https://www.linkedin.com/in/gian-luca-caravone-06463333a/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={20} />
            </a>
            <a href="https://wa.me/5493412149033" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={20} />
            </a>
            <a href="https://github.com/gianluqqa" target="_blank" rel="noopener noreferrer">
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
