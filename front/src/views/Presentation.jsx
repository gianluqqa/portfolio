"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const photoProfile = "/Foto de perfil.jpg";

const Presentation = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [currentTime, setCurrentTime] = useState("");
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showComponents, setShowComponents] = useState({
    header: false,
    image: false,
    name: false,
    title: false,
    description: false,
    button: false,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString("en-US", { hour12: false }));
    };

    handleResize();
    updateTime();

    window.addEventListener("resize", handleResize);
    const timeInterval = setInterval(updateTime, 1000);

    // Loading simulation
    const loadingInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(loadingInterval);
          setTimeout(() => setIsLoaded(true), 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 150);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(timeInterval);
      clearInterval(loadingInterval);
    };
  }, []);

  // Progressive component reveal after loading
  useEffect(() => {
    if (isLoaded) {
      const delays = [
        { key: "header", delay: 200 },
        { key: "image", delay: 800 },
        { key: "name", delay: 1400 },
        { key: "title", delay: 2000 },
        { key: "description", delay: 2600 },
        { key: "button", delay: 3200 },
      ];

      delays.forEach(({ key, delay }) => {
        setTimeout(() => {
          setShowComponents((prev) => ({ ...prev, [key]: true }));
        }, delay);
      });
    }
  }, [isLoaded]);

  const LoadingScreen = () => (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
      {/* ASCII Art Logo */}
      <motion.div
        className="text-center font-mono text-green-400 text-xl md:text-2xl"
        style={{ textShadow: "0 0 20px #00ff41" }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div>╔══════════════════════════════════╗</div>
        <div>║ DEVELOPER PROFILE V2.0 ║</div>
        <div>║ LOADING SYSTEM ║</div>
        <div>╚══════════════════════════════════╝</div>
      </motion.div>

      {/* Loading Messages */}
      <motion.div
        className="space-y-2 text-center font-mono text-cyan-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="flex items-center justify-center gap-2">
          <span className="text-magenta-400">SYSTEM:</span>
          <span>Loading developer profile...</span>
        </div>
        <motion.div
          className="text-yellow-400"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          {loadingProgress < 30 && "► Initializing neural networks..."}
          {loadingProgress >= 30 &&
            loadingProgress < 60 &&
            "► Decrypting skill databases..."}
          {loadingProgress >= 60 &&
            loadingProgress < 90 &&
            "► Compiling experience data..."}
          {loadingProgress >= 90 && "► Profile ready for deployment..."}
        </motion.div>
      </motion.div>

      {/* Progress Bar */}
      <div className="w-80 max-w-sm">
        <div className="flex justify-between text-sm font-mono text-green-400 mb-2">
          <span>LOADING</span>
          <span>{Math.round(loadingProgress)}% COMPLETE</span>
        </div>
        <div className="w-full bg-gray-900 h-3 rounded-full overflow-hidden border border-green-400">
          <motion.div
            className="h-full bg-gradient-to-r from-green-400 via-cyan-400 to-magenta-400 rounded-full"
            style={{
              width: `${Math.min(loadingProgress, 100)}%`,
              boxShadow: "0 0 20px rgba(0, 255, 65, 0.8)",
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Blinking cursor */}
      <motion.div
        className="text-green-400 text-xl font-mono"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      >
        █
      </motion.div>
    </div>
  );

  const DecodingText = ({
    children,
    show,
    delay = 0,
    className = "",
    style = {},
  }) => {
    const [displayText, setDisplayText] = useState("");
    const [isDecoding, setIsDecoding] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const text = typeof children === "string" ? children : "";

    useEffect(() => {
      if (!show || !text || hasStarted) return;

      setHasStarted(true);
      const chars =
        "!@#$%^&*()_+-=[]{}|;:,.<>?ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      const startDecoding = () => {
        setIsDecoding(true);
        let currentIndex = 0;

        const interval = setInterval(() => {
          if (currentIndex <= text.length) {
            const decoded = text.slice(0, currentIndex);
            const remaining = text.slice(currentIndex);

            // Scramble only the next few characters that are being "decoded"
            const scrambleLength = Math.min(3, remaining.length);
            const scrambled = remaining
              .slice(0, scrambleLength)
              .split("")
              .map(() => chars[Math.floor(Math.random() * chars.length)])
              .join("");

            const unprocessed = remaining.slice(scrambleLength);
            setDisplayText(decoded + scrambled + unprocessed);

            currentIndex++;

            // When fully decoded, set final text and stop
            if (currentIndex > text.length) {
              setDisplayText(text);
              setIsDecoding(false);
              clearInterval(interval);
            }
          }
        }, 120);
      };

      if (delay > 0) {
        setTimeout(startDecoding, delay);
      } else {
        startDecoding();
      }
    }, [show, text, delay, hasStarted]);

    if (!show) return null;

    // If hasn't started yet, show empty
    if (!hasStarted) {
      return <div className={className} style={style}></div>;
    }

    return (
      <div className={className} style={style}>
        {typeof children === "string" ? displayText || text : children}
        {isDecoding && (
          <motion.span
            className="text-cyan-400"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            █
          </motion.span>
        )}
      </div>
    );
  };

  if (!isLoaded) {
    return (
      <section className="relative min-h-screen w-full overflow-hidden bg-black">
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
        <LoadingScreen />
      </section>
    );
  }

  return (
    <section
      className="relative bg-black overflow-hidden py-16"
      id="presentation"
    >
      {/* Terminal grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-90"></div>
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

      <div className="container mx-auto px-4 relative z-10">
        {/* Terminal-style title */}
        <div className="text-center mb-16 relative">
          <div className="text-green-400 text-lg mb-4 tracking-wider">
            ~/portfolio/developer$ cat profile.txt
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold relative">
            <span className="text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-pulse">
              PROFILE.EXE
            </span>
          </h2>
          <div className="mt-4 text-green-300 text-sm tracking-wider">
            [████████████████████████] 100% LOADED
          </div>
        </div>

        {/* Terminal Header */}
        <AnimatePresence>
          {showComponents.header && (
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-transparent rounded border-2 border-green-400/50 p-4 font-mono text-sm">
                <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500 opacity-70"></div>
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500 opacity-70"></div>
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500 opacity-70"></div>
                  </div>
                  <DecodingText
                    show={showComponents.header}
                    className="text-green-400 text-sm"
                  >
                    ~/portfolio/developer$ cat profile.txt
                  </DecodingText>
                  <div className="text-cyan-400 text-sm">{currentTime}</div>
                </div>
                <DecodingText
                  show={showComponents.header}
                  className="text-green-400 text-sm"
                  delay={500}
                >
                  <span className="text-magenta-400">SYSTEM:</span> Profile
                  loaded successfully ✓
                </DecodingText>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Column - Profile Image */}
          <div className="flex justify-center order-1">
            <AnimatePresence>
              {showComponents.image && (
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Terminal window header */}
                  <div className="bg-black px-3 py-2 border-b border-green-400 flex items-center mb-3 rounded-t">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full opacity-70"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full opacity-70"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full opacity-70"></div>
                    </div>
                    <div className="flex-1 text-center">
                      <span className="text-green-400 text-xs opacity-70">
                        profile.jpg
                      </span>
                    </div>
                  </div>

                  <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-b overflow-hidden bg-gray-900 border-2 border-green-400/50">
                    <Image
                      src={photoProfile}
                      alt="Gian Luca Caravone Profile"
                      fill
                      style={{ objectFit: "cover" }}
                      priority
                      className="filter contrast-110 brightness-110"
                    />

                    {/* Scan line effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="h-0.5 w-full bg-green-400 animate-pulse absolute top-1/2 shadow-[0_0_5px_rgba(34,197,94,0.8)]"></div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column - Name and Title */}
          <div className="space-y-4 md:space-y-6 order-2">
            {/* Name */}
            <AnimatePresence>
              {showComponents.name && (
                <motion.div
                  className="bg-transparent rounded border-2 border-cyan-400/50 p-4 md:p-6 text-center"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="text-cyan-400 text-sm mb-2 opacity-70">
                    ~/profile$ cat name.txt
                  </div>
                  <DecodingText
                    show={showComponents.name}
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-mono font-bold mb-2 md:mb-4 text-cyan-400 drop-shadow-[0_0_8px_currentColor]"
                  >
                    GIAN LUCA CARAVONE
                  </DecodingText>
                  <div className="text-cyan-300 text-xs opacity-60">
                    Found 1 item | Size: 1.2KB
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Title */}
            <AnimatePresence>
              {showComponents.title && (
                <motion.div
                  className="bg-transparent rounded border-2 border-purple-400 p-4 md:p-6 text-center"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="text-purple-400 text-sm mb-2 opacity-70">
                    ~/profile$ cat title.txt
                  </div>
                  <DecodingText
                    show={showComponents.title}
                    className="text-sm sm:text-base md:text-lg lg:text-xl font-mono mb-3 md:mb-4 text-purple-400 drop-shadow-[0_0_8px_currentColor]"
                  >
                    ＞ FULL STACK WEB DEVELOPER & QA ENGINEER
                  </DecodingText>

                  <div className="flex justify-center">
                    <motion.div
                      className="px-3 py-1 md:px-4 md:py-1 border rounded-full text-xs md:text-sm font-mono border-purple-400/50 text-purple-400 bg-transparent"
                      animate={{ opacity: [1, 0.7, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      STATUS: ONLINE
                    </motion.div>
                  </div>
                  <div className="text-purple-400 text-xs opacity-60 mt-2">
                    Found 1 item | Size: 0.8KB
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Description - Full Width Below matching the grid width */}
        <div className="mt-8 md:mt-12 order-3">
          <AnimatePresence>
            {showComponents.description && (
              <motion.div
                className="bg-transparent rounded border-2 border-green-400/50 p-4 md:p-6 w-full"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-green-400 text-sm mb-3 opacity-70">
                  ~/profile$ cat description.txt
                </div>
                <div className="space-y-1 md:space-y-2 text-green-400 font-mono text-xs sm:text-sm leading-relaxed">
                  {[
                    "█ Full Stack Web Developer and QA Engineer with experience",
                    "█ in designing, developing, and validating complete web apps.",
                    "█ Skilled in React, Next.js, Node.js, Express, PostgreSQL,",
                    "█ and MongoDB, creating scalable and responsive interfaces.",
                    "",
                    "█ In QA, I practice manual and automated testing using",
                    "█ Selenium, Cypress, and Postman, validating APIs and",
                    "█ databases with detailed bug reporting. My development",
                    "█ background enhances my analytical approach to error",
                    "█ detection and resolution.",
                    "",
                    "█ I thrive in agile environments (Scrum), contributing with",
                    "█ clear communication and collaborative teamwork. I stand",
                    "█ out for my proactive mindset, adaptability, and focus on",
                    "█ quality, ensuring project success and scalability.",
                  ].map((line, index) => (
                    <DecodingText
                      key={index}
                      show={showComponents.description}
                      delay={index * 150}
                      className="block"
                    >
                      {line === "" ? "\u00A0" : line}
                    </DecodingText>
                  ))}
                </div>
                <div className="text-green-300 text-xs opacity-60 mt-3">
                  Found 15 items | Size: 2.1KB
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Download Button - Centered Below Description */}
        <div className="mt-6 md:mt-8 order-4">
          <AnimatePresence>
            {showComponents.button && (
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative group cursor-pointer">
                  <div className="bg-transparent rounded border-2 border-purple-400/50 p-4 hover:border-purple-400 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transform transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1">
                    <div className="text-purple-400 text-sm mb-2 opacity-70">
                      ~/profile$ ./download_resume
                    </div>
                    <DecodingText
                      show={showComponents.button}
                      className="text-purple-400 font-mono font-bold text-sm md:text-base"
                    >
                      ＞ DOWNLOAD_RESUME.EXE
                    </DecodingText>
                    <div className="text-purple-400 text-xs opacity-60 mt-2">
                      [READY] Click to execute
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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

export default Presentation;
