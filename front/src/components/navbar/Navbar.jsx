import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#3a4a3c] sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-[#f0e6a3] font-bold text-xl">Gian Luca Caravone</div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-[#f0e6a3] hover:text-[#f8f0c8] transition-colors font-medium">
              About Me
            </a>
            <a href="#projects" className="text-[#f0e6a3] hover:text-[#f8f0c8] transition-colors font-medium">
              Projects
            </a>
            <a href="#skills" className="text-[#f0e6a3] hover:text-[#f8f0c8] transition-colors font-medium">
              Skills
            </a>
            <a href="#contact" className="text-[#f0e6a3] hover:text-[#f8f0c8] transition-colors font-medium">
              Contact
            </a>
          </div>
          
          {/* Menú móvil (hamburguesa) - solo estructura */}
          <div className="md:hidden">
            <button className="text-[#f0e6a3]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;