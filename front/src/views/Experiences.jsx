"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    title: "Luxora – Sophisticated Furniture",
    position: "Desarrollador Front-End",
    location: "Rosario, Argentina",
    period: "Feb 2025 – Abril 2025",
    type: "Proyecto",
    achievements: [
      "Diseñé y desarrollé interfaces escalables y responsive, optimizando el rendimiento con un 30% menos de tiempo de carga y mejorando la accesibilidad en distintos dispositivos.",
      "Integré Front-End y Back-End con RESTful APIs, garantizando comunicación fluida, respuestas seguras y consistentes en tiempo real.",
      "Implementé un enfoque UI/UX centrado en el usuario, con componentes reutilizables y pruebas de usabilidad que elevaron la satisfacción y la interacción del cliente."
    ],
    color: "green",
    icon: "FULL STACK"
  },
  {
    id: 2,
    title: "FinTrack",
    position: "QA Engineer",
    location: "Argentina",
    period: "Abril 2025 – Jul 2025",
    type: "Proyecto",
    achievements: [
      "Ejecución de pruebas manuales y automatizadas en funcionalidades críticas: registro, transferencias, gestión de cuentas y reportes.",
      "Uso de Postman, Cypress, Selenium y Jira para pruebas de API, UI, integración y gestión de incidencias.",
      "Reporte y documentación de bugs críticos, con casos de prueba y evidencias para el equipo de desarrollo.",
      "Participación en ceremonias Scrum y diseño de suites de pruebas funcionales, de regresión y exploratorias para cada release."
    ],
    color: "purple",
    icon: "TESTING"
  }
];

const Experiences = () => {
  const canvasRef = useRef(null);
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (cardId) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const getColorClasses = (color) => {
    const colors = {
      green: {
        border: "border-green-400/50",
        hoverBorder: "hover:border-green-400",
        text: "text-green-400",
        accent: "text-green-300",
        shadow: "hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]"
      },
      purple: {
        border: "border-purple-400/50",
        hoverBorder: "hover:border-purple-400",
        text: "text-purple-400",
        accent: "text-purple-300",
        shadow: "hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
      }
    };
    return colors[color] || colors.green;
  };

  return (
    <div>
      <style>{`
        .content-layer {
          position: relative;
          z-index: 2;
        }

        .roadmap-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, 
            rgba(34, 197, 94, 0.3) 0%, 
            rgba(34, 197, 94, 0.8) 50%, 
            rgba(34, 197, 94, 0.3) 100%);
          transform: translateX(-50%);
          animation: pulse-line 3s ease-in-out infinite;
        }

        @keyframes pulse-line {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
      `}</style>

      <section
        className="relative bg-black overflow-hidden py-8"
        id="experiences"
      >
        {/* Terminal grid background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-transparent"></div>
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(34, 197, 94, 0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34, 197, 94, 0.5) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
              animation: "terminal-grid 15s linear infinite",
            }}
          ></div>
        </div>


        <div className="content-layer container mx-auto px-4 relative z-10">
          {/* Terminal-style title */}
          <div className="text-center mb-8 relative">
            <div className="text-green-400 text-lg mb-4 tracking-wider">
              ~/portfolio/developer$ cat experience.txt
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold relative">
              <span className="text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-pulse">
                EXPERIENCE.EXE
              </span>
            </h2>
            <div className="mt-4 text-green-300 text-sm tracking-wider">
              [████████████████████████] 100% LOADED
            </div>
          </div>

          {/* Roadmap Container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Central Timeline Line */}
            <div className="roadmap-line"></div>

            {/* Experience Cards */}
            <div className="space-y-8">
              {experiences.map((exp, index) => {
                const colors = getColorClasses(exp.color);
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div
                    key={exp.id}
                    className={`relative flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
                    initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: index * 0.3 }}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                      <div className={`px-3 py-1 rounded-full border-2 ${colors.border} bg-black flex items-center justify-center text-xs font-mono ${colors.text}`}>
                        {exp.icon}
                      </div>
                    </div>

                    {/* Experience Card */}
                    <div className={`w-5/12 ${isEven ? 'pr-8' : 'pl-8'}`}>
                      <motion.div
                        className={`group bg-transparent rounded border-2 ${colors.border} ${colors.hoverBorder} ${colors.shadow} transform transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 overflow-hidden p-4`}
                        whileHover={{ scale: 1.02 }}
                        onMouseEnter={() => toggleCard(exp.id)}
                        onMouseLeave={() => toggleCard(exp.id)}
                      >
                        {/* Terminal window header */}
                        <div className="bg-black px-3 py-2 border-b border-gray-600 flex items-center mb-4 rounded-t">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-red-500 rounded-full opacity-70"></div>
                            <div className="w-2 h-2 bg-yellow-500 rounded-full opacity-70"></div>
                            <div className="w-2 h-2 bg-green-500 rounded-full opacity-70"></div>
                          </div>
                          <div className="flex-1 text-center">
                            <span className="text-green-400 text-xs opacity-70">
                              experience_{exp.id.toString().padStart(3, "0")}.exe
                            </span>
                          </div>
                        </div>

                        {/* Content area */}
                        <div className="space-y-3">
                          {/* Terminal prompt */}
                          <div className="text-green-400 text-xs mb-3 opacity-60">
                            $ ./view_experience
                          </div>

                          {/* Experience Info - Always visible */}
                          <div className="space-y-2">
                            <div>
                              <h3 className={`text-xl font-bold ${colors.text} mb-1`}>
                                {exp.title}
                              </h3>
                              <div className={`text-sm ${colors.accent} opacity-80`}>
                                {exp.type}
                              </div>
                            </div>

                            <div className="space-y-2">
                              <div className={`text-lg font-semibold ${colors.text}`}>
                                {exp.position}
                              </div>
                              <div className="text-green-300 text-sm">
                                📍 {exp.location}
                              </div>
                              <div className="text-green-300 text-sm">
                                📅 {exp.period}
                              </div>
                            </div>
                          </div>

                          {/* Achievements - Only shown when card is expanded */}
                          {expandedCards[exp.id] && (
                            <div className="mt-3">
                              <div className={`text-sm font-semibold ${colors.text} mb-2`}>
                                ACHIEVEMENTS:
                              </div>
                              <div className="space-y-1">
                                {exp.achievements.map((achievement, achIndex) => (
                                  <div key={achIndex} className="text-green-300 text-sm leading-relaxed">
                                    <span className="text-green-400">●</span> {achievement}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Status */}
                          <div className="mt-3 pt-2 border-t border-gray-600">
                            <div className="flex items-center justify-between">
                              <div className="text-green-500 text-xs opacity-50">
                                [COMPLETED]
                              </div>
                              <div className="text-green-400 text-xs opacity-60">
                                ID: {exp.id.toString().padStart(3, "0")}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Scan line effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="h-0.5 w-full bg-green-400 animate-pulse absolute top-1/2 shadow-[0_0_5px_rgba(34,197,94,0.8)]"></div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Timeline End */}
            <div className="text-center mt-8">
              <div className="text-green-400 text-sm opacity-60">
                <span className="animate-pulse">...</span> MORE EXPERIENCES COMING SOON <span className="animate-pulse">...</span>
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

export default Experiences;