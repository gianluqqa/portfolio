"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    title: "Marketer AI",
    position: "Front-End Developer & Manual QA",
    company: "IAra Labs",
    location: "Buenos Aires, Argentina",
    period: "Jul 2025 – Sept 2025",
    type: "Job (Internship)",
    achievements: [
      "Designed and developed prototypes and landing pages using React and Tailwind CSS to showcase the personalized marketing agent’s features, ensuring modern, scalable, and product-aligned interfaces.",
      "Performed functional validation and usability testing on implemented mockups, identifying inconsistencies and proposing improvements that optimized user experience prior to final integration.",
      "Executed systematic manual QA tasks, acting as an end-user to ensure a smooth, accessible, and reliable product experience, contributing to the overall quality of the final delivery.",
    ],
    color: "cyan",
    icon: "Front-End/Testing",
  },
  {
    id: 2,
    title: "Luxora – Sophisticated Furniture",
    position: "Front-End Developer",
    location: "Rosario, Argentina",
    period: "Feb 2025 – Apr 2025",
    type: "Project",
    achievements: [
      "Designed and developed scalable and responsive interfaces, optimizing performance with a 30% reduction in loading times and enhancing accessibility across multiple devices.",
      "Integrated Front-End and Back-End with RESTful APIs, ensuring seamless communication, secure responses, and real-time consistency.",
      "Implemented a user-centered UI/UX approach with reusable components and usability testing, which boosted customer satisfaction and engagement.",
    ],
    color: "green",
    icon: "FULL STACK",
  },
  {
    id: 3,
    title: "FinTrack",
    position: "QA Engineer",
    location: "Argentina",
    period: "Apr 2025 – Jul 2025",
    type: "Project",
    achievements: [
      "Executed manual and automated testing on critical features: registration, transfers, account management, and reporting.",
      "Utilized Postman, Cypress, Selenium, and Jira for API, UI, integration testing, and issue tracking.",
      "Reported and documented critical bugs, providing test cases and evidence for the development team.",
      "Participated in Scrum ceremonies and designed functional, regression, and exploratory test suites for each release.",
    ],
    color: "purple",
    icon: "TESTING",
  },
];

const Experiences = () => {
  const canvasRef = useRef(null);
  const [expandedCards, setExpandedCards] = useState({});

  const getColorClasses = (color) => {
    const colors = {
      green: {
        border: "border-green-400/50",
        hoverBorder: "hover:border-green-400",
        text: "text-green-400",
        accent: "text-green-300",
        shadow: "hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]",
      },
      purple: {
        border: "border-purple-400/50",
        hoverBorder: "hover:border-purple-400",
        text: "text-purple-400",
        accent: "text-purple-300",
        shadow: "hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]",
      },
      cyan: {
        border: "border-cyan-400/50",
        hoverBorder: "hover:border-cyan-400",
        text: "text-cyan-400",
        accent: "text-cyan-300",
        shadow: "hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]",
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
                    className={`relative flex items-center ${
                      isEven ? "flex-row" : "flex-row-reverse"
                    }`}
                    initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: index * 0.3 }}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                      <div
                        className={`px-3 py-1 rounded-full border-2 ${colors.border} bg-black flex items-center justify-center text-xs font-mono ${colors.text}`}
                      >
                        {exp.icon}
                      </div>
                    </div>

                    {/* Experience Card */}
                    <div className={`w-5/12 ${isEven ? "pr-8" : "pl-8"}`}>
                      <div
                        className="relative"
                        onMouseEnter={() =>
                          setExpandedCards((prev) => ({
                            ...prev,
                            [exp.id]: true,
                          }))
                        }
                        onMouseLeave={() =>
                          setExpandedCards((prev) => ({
                            ...prev,
                            [exp.id]: false,
                          }))
                        }
                      >
                        <motion.div
                          className={`group bg-transparent rounded border-2 ${colors.border} ${colors.hoverBorder} ${colors.shadow} transform transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 overflow-hidden p-4 cursor-pointer`}
                          whileHover={{ scale: 1.02 }}
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
                                experience_{exp.id.toString().padStart(3, "0")}
                                .exe
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
                                <h3
                                  className={`text-xl font-bold ${colors.text} mb-1`}
                                >
                                  {exp.title}
                                </h3>
                                <h3
                                  className={`text-md font-bold ${colors.text} mb-1`}
                                >
                                  {exp.company}
                                </h3>
                                <div
                                  className={`text-sm ${colors.accent} opacity-80`}
                                >
                                  {exp.type}
                                </div>
                              </div>

                              <div className="space-y-2">
                                <div
                                  className={`text-lg font-semibold ${colors.text}`}
                                >
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

                            {/* Achievements - Smooth height transition */}
                            <motion.div
                              initial={false}
                              animate={{
                                height: expandedCards[exp.id] ? "auto" : 0,
                                opacity: expandedCards[exp.id] ? 1 : 0,
                              }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="mt-3">
                                <div
                                  className={`text-sm font-semibold ${colors.text} mb-2`}
                                >
                                  ACHIEVEMENTS:
                                </div>
                                <div className="space-y-1">
                                  {exp.achievements.map(
                                    (achievement, achIndex) => (
                                      <div
                                        key={achIndex}
                                        className="text-green-300 text-sm leading-relaxed"
                                      >
                                        <span className="text-green-400">
                                          ●
                                        </span>{" "}
                                        {achievement}
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>
                            </motion.div>

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
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Timeline End */}
            <div className="text-center mt-8">
              <div className="text-green-400 text-sm opacity-60">
                <span className="animate-pulse">...</span> MORE EXPERIENCES
                COMING SOON <span className="animate-pulse">...</span>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Experiences;
