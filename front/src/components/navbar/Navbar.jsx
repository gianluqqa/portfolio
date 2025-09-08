"use client";
import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaLinkedin, FaGithub, FaWhatsapp, FaBars } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);

  const bgOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const navHeight = useTransform(scrollY, [0, 100], ["4rem", "3rem"]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ height: navHeight }}
    >
      {/* Fondo con opacidad variable */}
      <motion.div
        className="absolute inset-0 bg-black"
        style={{ opacity: bgOpacity }}
      />

      {/* Contenido de la navbar */}
      <div className="container mx-auto px-4 sm:px-6 md:px-10 h-full relative">
        <div className="flex justify-between items-center h-full">
          {/* Izquierda: Nombre */}
          <Link href={"/"}>
            <motion.div className="font-bold text-base sm:text-lg md:text-xl  text-purple-500">
              Gian Luca Caravone
            </motion.div>
          </Link>

          {/* Centro: Títulos en desktop / Botón hamburguesa en móvil */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
            {/* Botón hamburguesa centrado en móvil */}
            <button className=" text-purple-500 md:hidden" onClick={toggleMenu}>
              <FaBars size={24} />
            </button>

            {/* Enlaces de navegación - solo visibles en desktop */}
            <div className="hidden md:flex space-x-4 lg:space-x-8">
              <motion.a
                href="#presentation"
                className="font-medium text-sm sm:text-base transition-colors duration-300 text-purple-500 hover:text-cyan-400"
              >
                About Me
              </motion.a>
              <motion.a
                href="#projects"
                className="font-medium text-sm sm:text-base transition-colors duration-300  text-purple-500 hover:text-cyan-400"
              >
                Projects
              </motion.a>
              <motion.a
                href="#skills"
                className="font-medium text-sm sm:text-base transition-colors duration-300  text-purple-500 hover:text-cyan-400"
              >
                Skills
              </motion.a>
              <motion.a
                href="#contact"
                className="font-medium text-sm sm:text-base transition-colors duration-300  text-purple-500 hover:text-cyan-400"
              >
                Contact
              </motion.a>
            </div>
          </div>

          {/* Derecha: Redes sociales - Oculto en móvil, visible en desktop */}
          <div className="hidden md:flex space-x-4  text-purple-500">
            <a
              href="https://www.linkedin.com/in/gian-luca-caravone-06463333a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={18} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
            </a>
            <a
              href="https://wa.me/5493412149033"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={18} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
            </a>
            <a
              href="https://github.com/gianluqqa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={18} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
            </a>
          </div>

          {/* Espacio invisible a la derecha para mantener el centrado en móvil */}
          <div className="md:hidden invisible">
            <FaBars size={24} />
          </div>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div className="bg-gray-800 w-full py-4 px-6 md:hidden">
          <div className="flex flex-col space-y-4">
            <a
              href="#about"
              className="font-medium text-sm transition-colors duration-300  text-purple-500 hover:text-cyan-400"
              onClick={() => setMenuOpen(false)}
            >
              About Me
            </a>
            <a
              href="#projects"
              className="font-medium text-sm transition-colors duration-300  text-purple-500 hover:text-cyan-400"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#skills"
              className="font-medium text-sm transition-colors duration-300  text-purple-500 hover:text-cyan-400"
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="#contact"
              className="font-medium text-sm transition-colors duration-300  text-purple-500 hover:text-cyan-400"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
            <div className="flex space-x-4 pt-2  text-purple-500">
              <a
                href="https://linkedin.com/in/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://wa.me/tu_numero"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={18} />
              </a>
              <a
                href="https://github.com/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
