"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { slideFromTop } from "@/utilities/animation";
import { motion } from "framer-motion";

const Skills = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const updateCanvasSize = () => {
      const section = canvas.parentElement;
      canvas.width = section.offsetWidth;
      canvas.height = section.offsetHeight;
    };

    updateCanvasSize();

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");

    const font_size = 10;
    const columns = canvas.width / font_size;

    const drops = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00ff41";
      ctx.font = font_size + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text =
          matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        if (drops[i] * font_size > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 35);

    const handleResize = () => {
      updateCanvasSize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const skillsData = {
    frontend: [
      { name: "HTML", logo: "/HTML - logo.png" },
      { name: "CSS", logo: "/Css - logo.png" },
      { name: "JavaScript", logo: "/Javascript - logo.webp" },
      { name: "TypeScript", logo: "/Typescript - logo.png" },
      { name: "React", logo: "/React - logo.webp" },
      { name: "Next.js", logo: "/NextJs - logo.png" },
    ],
    styling: [
      { name: "Tailwind CSS", logo: "/Tailwind Css - logo.png" },
      { name: "Bootstrap", logo: "/Bootstrap - logo.png" },
    ],
    backend: [
      { name: "Node.js", logo: "/NodeJs - logo.png" },
      { name: "Express", logo: "/Express - logo.png" },
      { name: "TypeORM", logo: "/TypeOrm - logo.png" },
    ],
    database: [
      { name: "PostgreSQL", logo: "/PostgreSQL - logo.png" },
      { name: "MongoDB", logo: "/MongoDb - logo.png" },
      { name: "Firebase", logo: "/Firebase - logo.png" },
    ],
    testing: [
      { name: "Postman", logo: "/postman-icon.webp" },
      { name: "Cypress", logo: "/cypress-logo.webp" },
      { name: "Thunder Client", logo: "/thunder-client.png" },
      { name: "Selenium", logo: "/selenium.png" },
      { name: "Manual Testing", logo: "/manual-testing.png" },
      { name: "Automated Testing", logo: "/automated-testing.png" },
      { name: "Jest", logo: "/jest-icon.png" },
      { name: "React Testing Library", logo: "/octopus-testing.png" },
    ],
  };

  const categories = [
    {
      id: "frontend",
      title: ">>> FRONTEND",
      accent: "text-red-400",
      border: "border-red-400/50",
    },
    {
      id: "styling",
      title: ">>> STYLING",
      accent: "text-yellow-400",
      border: "border-yellow-400/50",
    },
    {
      id: "backend",
      title: ">>> BACKEND",
      accent: "text-orange-400",
      border: "border-orange-400/50",
    },
    {
      id: "database",
      title: ">>> DATABASE",
      accent: "text-blue-400",
      border: "border-blue-400/50",
    },
    {
      id: "testing",
      title: ">>> TESTING & QA",
      accent: "text-purple-400",
      border: "border-purple-400/50",
    },
  ];

  return (
    <div>
      <style>{`
        .matrix-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.3;
          z-index: 1;
          pointer-events: none;
        }
        
        .content-layer {
          position: relative;
          z-index: 2;
        }
      `}</style>

      <section
        className="relative bg-gray-900 overflow-hidden py-16"
        id="skills"
      >
        {/* Terminal grid background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-90"></div>
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
              animation: "terminal-grid 15s linear infinite",
            }}
          ></div>
        </div>

        {/* Matrix Background */}
        <canvas ref={canvasRef} className="matrix-bg" />

        <div className="content-layer container mx-auto px-4 relative z-10">
          {/* Terminal-style title */}
          <div className="text-center mb-16 relative">
            <div className="text-green-400 text-lg mb-4 tracking-wider">
              ~/portfolio/developer$ cat skills.txt
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold relative">
              <span className="text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-pulse">
                SKILLS.EXE
              </span>
            </h2>
            <div className="mt-4 text-green-300 text-sm tracking-wider">
              [████████████████████████] 100% LOADED
            </div>
          </div>

          {categories.map((category, catIndex) => (
            <div key={category.id} className="mb-16">
              {/* Category header - terminal style */}
              <div className="mb-8">
                <div className="text-green-400 text-sm mb-2 opacity-70">
                  ~/skills/{category.id}$ ls -la
                </div>
                <h3
                  className={`text-2xl md:text-3xl font-bold ${category.accent} mb-4 tracking-wider drop-shadow-[0_0_8px_currentColor]`}
                >
                  {category.title}
                </h3>
                <div className="text-green-300 text-xs opacity-60 mb-4">
                  Found {skillsData[category.id].length} items | Size:{" "}
                  {(skillsData[category.id].length * 1.2).toFixed(1)}KB
                </div>
              </div>

              {/* Skills grid - terminal windows */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 md:gap-4">
                {skillsData[category.id].map((tech, index) => (
                  <motion.div
                    key={index}
                    className="group cursor-pointer"
                    variants={slideFromTop}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <div
                      className={`
                      relative bg-black/70 rounded border-2 ${category.border}
                      hover:border-green-400 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]
                      transform transition-all duration-300 ease-out
                      hover:scale-105 hover:-translate-y-1
                      overflow-hidden
                    `}
                    >
                      {/* Terminal window header */}
                      <div className="bg-black px-2 py-1 border-b border-gray-600 flex items-center">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-red-500 rounded-full opacity-70"></div>
                          <div className="w-2 h-2 bg-yellow-500 rounded-full opacity-70"></div>
                          <div className="w-2 h-2 bg-green-500 rounded-full opacity-70 group-hover:animate-pulse"></div>
                        </div>
                        <div className="flex-1 text-center">
                          <span className="text-green-400 text-xs opacity-70">
                            {tech.name.toLowerCase().replace(/\s+/g, "")}.exe
                          </span>
                        </div>
                      </div>

                      {/* Content area */}
                      <div className="p-3 md:p-4 min-h-[100px] flex flex-col items-center justify-center">
                        {/* Terminal prompt */}
                        <div className="text-green-400 text-xs mb-2 opacity-60">
                          $ ./run
                        </div>

                        {/* Icon container */}
                        <div className="relative mb-3 w-10 h-10 md:w-12 md:h-12">
                          <div className="absolute inset-0 rounded border border-green-400/30 bg-gray-700 flex items-center justify-center group-hover:border-green-400 transition-colors duration-300">
                            <Image
                              src={tech.logo}
                              alt={tech.name}
                              width={32}
                              height={32}
                              className="object-contain filter group-hover:brightness-125 transition-all duration-300"
                            />
                          </div>
                        </div>

                        {/* Tech name */}
                        <div className="text-center">
                          <span className="block text-green-300 text-xs md:text-sm font-medium group-hover:text-green-400 transition-colors duration-300">
                            {tech.name}
                          </span>
                          <div className="text-green-500 text-xs opacity-50 mt-1">
                            [READY]
                          </div>
                        </div>
                      </div>

                      {/* Scan line effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="h-0.5 w-full bg-green-400 animate-pulse absolute top-1/2 shadow-[0_0_5px_rgba(34,197,94,0.8)]"></div>
                      </div>

                      {/* Terminal cursor blink */}
                      <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100">
                        <span className="text-green-400 text-xs animate-pulse">
                          _
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Terminal separator */}
              {catIndex < categories.length - 1 && (
                <div className="mt-12 text-green-400 text-center opacity-50">
                  <div className="flex items-center justify-center">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent"></div>
                    <span className="px-4 text-xs">EOF</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
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
    </div>
  );
};

export default Skills;
