"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { projects } from "@/helpers/Projects";
import { motion } from "framer-motion";

const Projects = () => {
  const canvasRef = useRef(null);

  return (
    <div>
      <style>{`
        .content-layer {
          position: relative;
          z-index: 2;
        }
      `}</style>

      <section
        className="relative bg-black overflow-hidden py-16"
        id="projects"
      >
        {/* Terminal grid background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-transparent"></div>
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="content-layer container mx-auto px-4 relative z-10">
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
                className="group"
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
              >
                <div className="relative bg-black/70 rounded border-2 border-green-400/50 hover:border-green-400 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transform transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 overflow-hidden">
                  {/* Terminal window header */}
                  <div className="bg-black px-3 py-2 border-b border-gray-600 flex items-center">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full opacity-70"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full opacity-70"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full opacity-70 group-hover:animate-pulse"></div>
                    </div>
                    <div className="flex-1 text-center">
                      <span className="text-green-400 text-xs opacity-70">
                        project_{proyecto.id.toString().padStart(3, "0")}.exe
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
                        {proyecto.title}
                      </span>
                      <div className="text-green-500 text-xs opacity-50 mt-1">
                        [READY]
                      </div>
                    </div>

                    {/* Project description */}
                    <div className="text-green-400/70 text-sm leading-relaxed flex-1 mb-4">
                      {proyecto.description.slice(0, 100)}...
                    </div>

                    {/* View Project Button */}
                    <Link href={`/project/${proyecto.id}`} className="mt-auto">
                      <button className="w-full bg-purple-500/20 border border-purple-400/50 hover:bg-purple-500/30 hover:border-purple-400 text-purple-400 hover:text-purple-300 px-4 py-2 rounded-sm font-bold text-sm transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transform uppercase tracking-wider">
                        ＞ VIEW_PROJECT.EXE
                      </button>
                    </Link>

                    {/* Project details */}
                    <div className="text-xs text-green-400/60 mt-3 space-y-1">
                      <div>ID: {proyecto.id.toString().padStart(3, "0")}</div>
                      <div>Status: ACTIVE</div>
                    </div>
                  </div>

                  {/* Scan line effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="h-0.5 w-full bg-green-400 animate-pulse absolute top-1/2 shadow-[0_0_5px_rgba(34,197,94,0.8)]"></div>
                  </div>

                  {/* Terminal cursor blink */}
                  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 pointer-events-none">
                    <span className="text-green-400 text-xs animate-pulse">
                      _
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
};

export default Projects;