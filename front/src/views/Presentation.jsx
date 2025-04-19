"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideFromTop } from "@/utilities/animation";

const photoProfile = "/Foto de perfil.jpg";

const Presentation = () => {
  return (
    <div className="bg-[#f0e6a3] min-h-screen flex items-center justify-center py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12 w-3/4">
        {/* FOTO */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center -mt-[35px]"
          variants={slideFromTop}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          transition={{ delay: 1.5 }}
        >
          <div className="relative w-80 h-80 rounded-lg overflow-hidden border-4 border-[#3a4a3c]">
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
        <div className="w-full md:w-1/2">
          <motion.h1
            className="text-4xl font-bold text-[#3a4a3c] mb-4"
            variants={slideFromTop}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            transition={{ delay: 0.9 }}
          >
            Gian Luca (Blake) Caravone
          </motion.h1>

          <motion.h2
            className="text-2xl text-[#3a4a3c] mb-6"
            variants={slideFromTop}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            transition={{ delay: 0.9 }}
          >
            Full Stack Developer (Specialized in Frontend)
          </motion.h2>

          <motion.p
            className="text-[#3a4a3c] mb-6"
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

          <motion.button
            className="bg-[#3a4a3c] text-[#f0e6a3] px-6 py-2 rounded-md hover:bg-opacity-90 transition-all"
            variants={slideFromTop}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            transition={{ delay: 0.9 }}
          >
            Download CV
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
