"use client";
import React, { useEffect, useRef } from "react";

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
        className="relative bg-gray-900 overflow-hidden py-16"
        id="contact"
      >
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
              backgroundSize: "40px 40px",
              animation: "terminal-grid 15s linear infinite",
            }}
          ></div>
        </div>

        {/* Matrix Background - Solo en esta section */}
        <canvas ref={canvasRef} className="matrix-bg" />

        <div className="content-layer container mx-auto px-4 relative z-10">
          {/* Terminal-style title */}
          <div className="text-center mb-16 relative">
            <div className="text-green-400 text-lg mb-4 tracking-wider">
              ~/portfolio/developer$ cat contact.txt
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold relative">
              <span className="text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-pulse">
                CONTACT.EXE
              </span>
            </h2>
            <div className="mt-4 text-green-300 text-sm tracking-wider">
              [████████████████████████] 100% LOADED
            </div>
          </div>

          {/* Terminal-style Contact Header */}
          <div className="mb-12 font-mono text-center">
            <div className="bg-gray-800 rounded border-2 border-green-400/50 p-6 mb-8">
              <div className="text-green-400 text-lg mb-2">
                <span className="text-green-500">user@portfolio:~$</span> whoami
              </div>
              <div className="text-green-300 text-3xl md:text-4xl lg:text-5xl font-bold mb-4 glitch neon-text">
                GIAN LUCA CARAVONE
              </div>
              <div className="text-cyan-400 text-lg md:text-xl">
                <span className="text-green-500">{">"}</span> F(&{"{"} FULL
                STACK WEB DEVELOPER & QA ENGINEER {"}"})
              </div>
              <div className="text-yellow-400 mt-4">
                STATUS:{" "}
                <span className="bg-green-500 text-black px-3 py-1 rounded font-bold">
                  ONLINE
                </span>
              </div>
            </div>
          </div>

          {/* Contact Information Terminal - Centrado */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded border-2 border-green-400/50 p-6 md:p-8 font-mono">
              <div className="text-green-400 text-xl md:text-2xl mb-8 flex items-center justify-center">
                <span className="text-green-500 mr-2">$</span> cat personal_info
              </div>

              {/* Personal Info Grid */}
              <div className="grid gap-6 md:gap-8 mb-8">
                <div className="border-l-4 border-green-500 pl-4">
                  <div className="text-cyan-400 font-bold text-lg">NAME:</div>
                  <div className="text-green-300 text-lg">
                    Gian Luca Caravone
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="text-cyan-400 font-bold text-lg">PHONE:</div>
                  <div className="text-green-300 text-lg">
                    (+54) 341 214 9033
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <div className="text-cyan-400 font-bold text-lg">EMAIL:</div>
                  <div className="text-green-300 text-lg break-words">
                    gianlucacaravone55@gmail.com
                  </div>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <div className="text-cyan-400 font-bold text-lg">
                    LOCATION:
                  </div>
                  <div className="text-green-300 text-lg">Argentina</div>
                </div>
              </div>

              {/* Connect With Me Section */}
              <div className="border-t-2 border-green-500 pt-8">
                <div className="text-cyan-400 font-bold mb-6 text-xl text-center">
                  CONNECT_WITH_ME:
                </div>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a
                    href="https://wa.me/5493412149033"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-400 text-black px-6 py-3 rounded cyber-button flex-1 min-w-32 text-center sm:flex-none"
                  >
                    WHATSAPP
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gian-luca-caravone-06463333a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-400 text-black px-6 py-3 rounded cyber-button flex-1 min-w-32 text-center sm:flex-none"
                  >
                    LINKEDIN
                  </a>
                  <a
                    href="https://github.com/gianluqqa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-500 hover:bg-purple-400 text-black px-6 py-3 rounded cyber-button flex-1 min-w-32 text-center sm:flex-none"
                  >
                    GITHUB
                  </a>
                </div>
              </div>
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
    </div>
  );
};

export default Contact;
