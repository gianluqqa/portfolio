'use client';

import React from "react";
import Image from "next/image"; 
import { slideFromTop } from "@/utilities/animation"; 
import { motion } from "framer-motion";

const Skills = () => {
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
  };

  const categories = [
    { id: "frontend", title: "Frontend", color: "bg-red-100 border-red-300 hover:bg-red-300 text-red-900" },
    { id: "styling", title: "Styling", color: "bg-green-100 border-green-300 hover:bg-green-300 text-green-900" },
    { id: "backend", title: "Backend", color: "bg-orange-100 border-orange-300 hover:bg-orange-300 text-orange-900" },
    { id: "database", title: "Database", color: "bg-blue-100 border-blue-300 hover:bg-blue-300 text-blue-900" },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 py-16" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Skills
        </h2>

        {categories.map((category, catIndex) => (
          <div key={category.id} className="mb-12">
            <h3 className={`text-2xl font-bold mb-6 pl-4 border-l-4 ${category.color.split(' ')[1]}`}>
              {category.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {skillsData[category.id].map((tech, index) => (
                <motion.div
                  key={index}
                  className={`rounded-xl shadow-md p-4 flex flex-col items-center justify-center border-2 
                             transition-all duration-300 group cursor-pointer
                             ${category.color}`}
                  variants={slideFromTop} 
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 relative mb-3 bg-white rounded-full p-2 flex items-center justify-center group-hover:brightness-110 transition-all duration-300">
                    <Image 
                      src={tech.logo} 
                      alt={tech.name} 
                      width={48} 
                      height={48} 
                      className="object-contain" 
                    />
                  </div>
                  <span className="font-medium group-hover:font-semibold transition-colors duration-300">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
