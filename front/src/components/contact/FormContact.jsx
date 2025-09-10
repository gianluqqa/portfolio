"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Contact = () => {
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
        
        .glitch {
          animation: glitch 2s infinite;
        }
        
        @keyframes glitch {
          0% { transform: translateX(0); }
          20% { transform: translateX(-2px); }
          40% { transform: translateX(2px); }
          60% { transform: translateX(-2px); }
          80% { transform: translateX(2px); }
          100% { transform: translateX(0); }
        }
        
        .cyber-button {
          transition: all 0.3s ease;
          font-weight: bold;
          text-transform: uppercase;
        }
        
        .cyber-button:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.5);
        }
        
        .terminal-border {
          border: 2px solid #10b981;
          background: rgba(0, 0, 0, 0.9);
        }
        
        .neon-text {
          text-shadow: 0 0 10px currentColor;
        }
        
        .content-layer {
          position: relative;
          z-index: 2;
        }
      `}</style>

      <section
        className="relative bg-gray-900 overflow-hidden py-8 sm:py-12 md:py-16"
        id="contact"
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

        {/* Matrix Background - Solo en esta section */}
        <canvas ref={canvasRef} className="matrix-bg" />

        <div className="content-layer container mx-auto px-2 sm:px-4 relative z-10">
          {/* Terminal-style title */}
          <motion.div 
            className="text-center mb-8 sm:mb-12 md:mb-16 relative"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-green-400 text-xs sm:text-sm md:text-lg mb-2 sm:mb-4 tracking-wider px-2">
              ~/portfolio/developer$ cat contact.txt
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold relative px-2">
              <span className="text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-pulse">
                CONTACT.EXE
              </span>
            </h2>
            <div className="mt-2 sm:mt-4 text-green-300 text-xs sm:text-sm tracking-wider px-2">
              [████████████████████████] 100% LOADED
            </div>
          </motion.div>

          {/* Terminal-style Contact Header */}
          <motion.div 
            className="mb-8 sm:mb-12 text-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-black/80 rounded border-2 border-green-400/50 p-3 sm:p-4 md:p-6 mb-6 sm:mb-8 mx-2 sm:mx-0">
              <div className="text-green-400 text-sm sm:text-base md:text-lg mb-2">
                <span className="text-green-500">user@portfolio:~$</span> whoami
              </div>
              <div className="text-green-300 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-4 glitch neon-text break-words">
                GIAN LUCA CARAVONE
              </div>
              <div className="text-cyan-400 text-sm sm:text-base md:text-lg lg:text-xl break-words">
                <span className="text-green-500">{">"}</span> F(&{"{"} FULL
                STACK WEB DEVELOPER & QA ENGINEER {"}"})
              </div>
              <div className="text-yellow-400 mt-2 sm:mt-4 text-sm sm:text-base">
                STATUS:{" "}
                <span className="bg-green-500 text-black px-2 sm:px-3 py-1 rounded font-bold text-xs sm:text-sm">
                  ONLINE
                </span>
              </div>
            </div>
          </motion.div>

          {/* Contact Information Terminal - Centrado */}
          <motion.div 
            className="max-w-4xl mx-auto px-2 sm:px-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-black/80 rounded border-2 border-green-400/50 p-3 sm:p-4 md:p-6 lg:p-8">
              <div className="text-green-400 text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 flex items-center justify-center break-words">
                <span className="text-green-500 mr-2">$</span> cat personal_info
              </div>

              {/* Personal Info Grid */}
              <div className="grid gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
                <motion.div 
                  className="border-l-4 border-green-500 pl-3 sm:pl-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="text-cyan-400 font-bold text-sm sm:text-base md:text-lg">NAME:</div>
                  <div className="text-green-300 text-sm sm:text-base md:text-lg break-words">
                    Gian Luca Caravone
                  </div>
                </motion.div>

                <motion.div 
                  className="border-l-4 border-blue-500 pl-3 sm:pl-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <div className="text-cyan-400 font-bold text-sm sm:text-base md:text-lg">PHONE:</div>
                  <div className="text-green-300 text-sm sm:text-base md:text-lg break-words">
                    (+54) 9 341 214 9033
                  </div>
                </motion.div>

                <motion.div 
                  className="border-l-4 border-purple-500 pl-3 sm:pl-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <div className="text-cyan-400 font-bold text-sm sm:text-base md:text-lg">EMAIL:</div>
                  <div className="text-green-300 text-sm sm:text-base md:text-lg break-words">
                    gianlucacaravone55@gmail.com
                  </div>
                </motion.div>

                <motion.div 
                  className="border-l-4 border-red-500 pl-3 sm:pl-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <div className="text-cyan-400 font-bold text-sm sm:text-base md:text-lg">
                    LOCATION:
                  </div>
                  <div className="text-green-300 text-sm sm:text-base md:text-lg">Argentina</div>
                </motion.div>
              </div>

              {/* Connect With Me Section */}
              <motion.div 
                className="border-t-2 border-green-500 pt-6 sm:pt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <div className="text-cyan-400 font-bold mb-4 sm:mb-6 text-base sm:text-lg md:text-xl text-center">
                  CONNECT_WITH_ME:
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <motion.a
                    href="https://wa.me/5493412149033"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-500/20 border border-green-400/50 hover:bg-green-500/30 hover:border-green-400 text-green-400 hover:text-green-300 px-4 py-2 rounded-sm font-bold text-sm transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_0_15px_rgba(34,197,94,0.4)] transform uppercase tracking-wider text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                  >
                    WHATSAPP
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/gian-luca-caravone-06463333a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-blue-500/20 border border-blue-400/50 hover:bg-blue-500/30 hover:border-blue-400 text-blue-400 hover:text-blue-300 px-4 py-2 rounded-sm font-bold text-sm transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transform uppercase tracking-wider text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    LINKEDIN
                  </motion.a>
                  <motion.a
                    href="https://github.com/gianluqqa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-purple-500/20 border border-purple-400/50 hover:bg-purple-500/30 hover:border-purple-400 text-purple-400 hover:text-purple-300 px-4 py-2 rounded-sm font-bold text-sm transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transform uppercase tracking-wider text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                  >
                    GITHUB
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>
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

export default Contact;