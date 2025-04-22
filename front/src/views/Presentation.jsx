"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideFromTop } from "@/utilities/animation";
import Button from "@/components/ui/Button"; // Asegúrate de que la ruta sea correcta

const photoProfile = "/Foto de perfil.jpg";
const background = "/Background.png";

const Presentation = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center py-16 px-4">
      <div className="absolute inset-0 -z-10">
        <Image
          src={background}
          alt="Background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      <div className="w-full max-w-screen-xl flex flex-col md:flex-row items-center justify-between gap-12">
        {/* FOTO */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          variants={slideFromTop}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          transition={{ delay: 1.5 }}
        >
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-xl overflow-hidden border-4 border-red-500 shadow-lg">
            <Image
              src={photoProfile}
              alt="Foto de perfil de Gian Luca Caravone"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </motion.div>

        {/* TEXTO */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6 px-2">
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-500"
            variants={slideFromTop}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            transition={{ delay: 0.9 }}
          >
            Gian Luca (Blake) Caravone
          </motion.h1>

          <motion.h2
            className="text-lg sm:text-xl md:text-2xl text-orange-300"
            variants={slideFromTop}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            transition={{ delay: 0.9 }}
          >
            Full Stack Developer (Specialized in Frontend)
          </motion.h2>

          <motion.p
            className="text-green-500 text-sm sm:text-base leading-relaxed sm:leading-loose"
            variants={slideFromTop}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            transition={{ delay: 0.9 }}
          >
            Full Stack Developer specialized in Front-End, with experience
            building interactive web applications using React, Next.js, Node.js,
            and Express. Skilled in working with databases such as MongoDB and
            PostgreSQL, and version control tools like Git and GitHub. I also
            have experience in customer service, systems management, and sales,
            which has helped me develop strong communication and problem-solving
            skills. I stand out for my proactive attitude, adaptability, and
            teamwork, consistently contributing innovative ideas to ensure
            project success.
          </motion.p>

          <motion.div
            variants={slideFromTop}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            transition={{ delay: 0.9 }}
          >
            {/* Reemplaza el botón existente con tu componente Button */}
            <Button className="bg-red-500 hover:bg-red-600 text-white">
              Download CV
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;