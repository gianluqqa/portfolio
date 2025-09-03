'use client';

import React from 'react';
import Link from 'next/link';
import { projects } from '@/helpers/Projects';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section className="relative bg-gray-900 overflow-hidden py-16" id="projects">
      {/* Terminal grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-900 to-black opacity-90"></div>
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            animation: 'terminal-grid 15s linear infinite'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Terminal-style title */}
        <div className="text-center mb-16 relative">
          <div className="text-green-400 text-lg mb-4 tracking-wider">
            ~/portfolio/developer$ cat projects.txt
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold relative">
            <span className="text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-pulse">
              PROJECTS.EXE
            </span>
          </h2>
          <div className="mt-4 text-green-300 text-sm tracking-wider">
            [████████████████████████] 100% LOADED
          </div>
        </div>

        {/* Projects grid - terminal windows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {projects.map((proyecto, index) => (
            <motion.div
              key={proyecto.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
            >
              <Link href={`/project/${proyecto.id}`}>
                <div className="relative bg-gray-800 rounded border-2 border-green-400/50 hover:border-green-400 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transform transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 overflow-hidden">
                  {/* Terminal window header */}
                  <div className="bg-gray-700 px-3 py-2 border-b border-gray-600 flex items-center">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full opacity-70"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full opacity-70"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full opacity-70 group-hover:animate-pulse"></div>
                    </div>
                    <div className="flex-1 text-center">
                      <span className="text-green-400 text-xs opacity-70">
                        project_{proyecto.id.toString().padStart(3, '0')}.exe
                      </span>
                    </div>
                  </div>
                  
                  {/* Content area */}
                  <div className="p-4 min-h-[150px] flex flex-col">
                    {/* Terminal prompt */}
                    <div className="text-green-400 text-xs mb-3 opacity-60">
                      $ ./run_project
                    </div>
                    
                    {/* Project title */}
                    <div className="text-center mb-3">
                      <span className="block text-green-300 text-lg font-medium group-hover:text-green-400 transition-colors duration-300">
                        {proyecto.titulo}
                      </span>
                      <div className="text-green-500 text-xs opacity-50 mt-1">
                        [READY]
                      </div>
                    </div>
                    
                    {/* Project description */}
                    <div className="text-green-400/70 text-sm leading-relaxed flex-1">
                      {proyecto.descripcion.slice(0, 100)}...
                    </div>
                    
                    {/* Project details */}
                    <div className="text-xs text-green-400/60 mt-3 space-y-1">
                      <div>ID: {proyecto.id.toString().padStart(3, '0')}</div>
                      <div>Status: ACTIVE</div>
                    </div>
                  </div>
                  
                  {/* Scan line effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="h-0.5 w-full bg-green-400 animate-pulse absolute top-1/2 shadow-[0_0_5px_rgba(34,197,94,0.8)]"></div>
                  </div>
                  
                  {/* Terminal cursor blink */}
                  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100">
                    <span className="text-green-400 text-xs animate-pulse">_</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* Terminal footer */}
        <div className="mt-16 text-center text-green-400 text-sm opacity-70">
          <div className="animate-pulse">
            developer@portfolio:~$ █
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes terminal-grid {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(40px, 40px);
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
