"use client";
import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaBars,
  FaArrowLeft,
} from "react-icons/fa";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const bgOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const navHeight = useTransform(scrollY, [0, 100], ["4rem", "3rem"]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleGoBack = () => router.back();

  // Función para navegar a sección
  const navigateToSection = (sectionId) => {
    if (pathname === "/") {
      // Si estás en Home, scroll directo
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      // Si no estás en Home, vas a Home con hash
      router.push(`/#${sectionId}`);
    }
    setMenuOpen(false); // cerrar menú en móvil
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ height: navHeight }}
    >
      <motion.div
        className="absolute inset-0 bg-black"
        style={{ opacity: bgOpacity }}
      />
      <div className="container mx-auto px-4 sm:px-6 md:px-10 h-full relative">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center space-x-3">
            {pathname !== "/" && (
              <button
                onClick={handleGoBack}
                className="text-purple-500 hover:text-cyan-400 transition-colors duration-300"
              >
                <FaArrowLeft
                  size={18}
                  className="sm:w-4 sm:h-4 md:w-5 md:h-5"
                />
              </button>
            )}
            <Link href={"/"}>
              <motion.div className="font-bold text-base sm:text-lg md:text-xl text-purple-500">
                Gian Luca Caravone
              </motion.div>
            </Link>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
            <button className=" text-purple-500 md:hidden" onClick={toggleMenu}>
              <FaBars size={24} />
            </button>
            <div className="hidden md:flex space-x-4 lg:space-x-8">
              <button
                onClick={() => navigateToSection("presentation")}
                className="font-medium text-sm sm:text-base transition-colors duration-300 text-purple-500 hover:text-cyan-400"
              >
                About Me
              </button>
              <button
                onClick={() => navigateToSection("projects")}
                className="font-medium text-sm sm:text-base transition-colors duration-300 text-purple-500 hover:text-cyan-400"
              >
                Projects
              </button>
              <button
                onClick={() => navigateToSection("skills")}
                className="font-medium text-sm sm:text-base transition-colors duration-300 text-purple-500 hover:text-cyan-400"
              >
                Skills
              </button>
              <button
                onClick={() => navigateToSection("contact")}
                className="font-medium text-sm sm:text-base transition-colors duration-300 text-purple-500 hover:text-cyan-400"
              >
                Contact
              </button>
            </div>
          </div>

          <div className="hidden md:flex space-x-4 text-purple-500">
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

          <div className="md:hidden invisible">
            <FaBars size={24} />
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="bg-black w-full py-4 px-6 md:hidden">
          <div className="flex flex-col space-y-4">
            <button
              className="font-medium text-sm transition-colors duration-300 text-purple-500 hover:text-cyan-400"
              onClick={() => navigateToSection("presentation")}
            >
              About Me
            </button>
            <button
              className="font-medium text-sm transition-colors duration-300 text-purple-500 hover:text-cyan-400"
              onClick={() => navigateToSection("projects")}
            >
              Projects
            </button>
            <button
              className="font-medium text-sm transition-colors duration-300 text-purple-500 hover:text-cyan-400"
              onClick={() => navigateToSection("skills")}
            >
              Skills
            </button>
            <button
              className="font-medium text-sm transition-colors duration-300 text-purple-500 hover:text-cyan-400"
              onClick={() => navigateToSection("contact")}
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
