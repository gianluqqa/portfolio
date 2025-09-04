"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const certificates = [
  {
    id: 1,
    title: "Desarrollador Web Full Stack",
    description: "Certificación completa en desarrollo web frontend y backend",
    image: "/Certificado de DWFS.jpeg",
    date: "2025",
    category: "DEVELOPMENT",
    level: "EXPERT",
  },
  {
    id: 2,
    title: "Certificado de Inglés C1 Avanzado",
    description: "Nivel avanzado de inglés según el Marco Común Europeo",
    image: "/Certificado de ingles C1.png",
    date: "2025",
    category: "LANGUAGE",
    level: "ADVANCED",
  },
  {
    id: 3,
    title: "Graduado en Economía",
    description: "Complejo Educativo Solis",
    image: "/Certificado de graduacion.jpg",
    date: "2019",
    category: "ACADEMIC",
    level: "GRADUATE",
  },
];

export default function Certificados() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const canvasRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

    const handleCanvasResize = () => {
      updateCanvasSize();
    };

    window.addEventListener("resize", handleCanvasResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleCanvasResize);
    };
  }, []);

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
        id="certificates"
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
              ~/portfolio/developer$ cat certificates.txt
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold relative">
              <span className="text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-pulse">
                CERTIFICATES.EXE
              </span>
            </h2>
            <div className="mt-4 text-green-300 text-sm tracking-wider">
              [████████████████████████] 100% LOADED
            </div>
          </div>

          {/* Certificates grid - terminal windows */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
              >
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
                        {cert.category.toLowerCase()}.exe
                      </span>
                    </div>
                  </div>

                  {/* Content area */}
                  <div className="p-4 min-h-[200px] flex flex-col">
                    {/* Terminal prompt */}
                    <div className="text-green-400 text-xs mb-3 opacity-60">
                      $ ./view_certificate
                    </div>

                    {/* Image container */}
                    <div className="relative mb-4 w-full aspect-[4/3] overflow-hidden rounded border border-green-400/30 bg-gray-700 flex items-center justify-center group-hover:border-green-400 transition-colors duration-300">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        style={{ objectFit: "cover" }}
                        className="object-contain filter group-hover:brightness-125 transition-all duration-300"
                      />
                    </div>

                    {/* Certificate info */}
                    <div className="space-y-2 flex-1">
                      <div className="text-center">
                        <span className="block text-green-300 text-sm font-medium group-hover:text-green-400 transition-colors duration-300">
                          {cert.title}
                        </span>
                        <div className="text-green-500 text-xs opacity-50 mt-1">
                          [READY]
                        </div>
                      </div>

                      {/* Details */}
                      <div className="text-xs text-green-400/70 space-y-1">
                        <div>Category: {cert.category}</div>
                        <div>Level: {cert.level}</div>
                        <div>Date: {cert.date}</div>
                        <div>ID: {cert.id.toString().padStart(3, "0")}</div>
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
                </div>
              </motion.div>
            ))}
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
    </div>
  );
}
