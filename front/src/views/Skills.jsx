'use client';

import React from "react";
import Image from "next/image"; 
import { slideFromBottom } from "@/utilities/animation";
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
    { id: "frontend", title: "Frontend" },
    { id: "styling", title: "Styling" },
    { id: "backend", title: "Backend" },
    { id: "database", title: "Database" },
  ];

  return (
    <div className="bg-[#f0e6a3] py-16" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#3a4a3c] mb-12">
          Skills
        </h2>

        {categories.map((category) => (
          <div key={category.id} className="mb-12">
            <h3 className="text-2xl font-bold text-[#3a4a3c] mb-6 pl-4 border-l-4 border-[#3a4a3c]">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {skillsData[category.id].map((tech, index) => (
                <motion.div
                key={index}
                className="bg-[#f7f1cf] rounded-lg shadow-md p-4 flex flex-col items-center justify-center
                         border-2 border-[#4a5d4c] transition-all duration-300 
                         hover:bg-[#3a4a3c] hover:shadow-lg hover:-translate-y-1 hover:border-[#f7f1cf] 
                         group cursor-pointer"
                variants={slideFromBottom}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false }} // Permite la animación cada vez que el componente entre en vista
                transition={{ delay: index * 0.1 }}
              >
              
                  <div className="w-16 h-16 relative mb-3 bg-white rounded-full p-2 flex items-center justify-center
                                group-hover:bg-[#f7f1cf] transition-all duration-300">
                    <Image 
                      src={tech.logo} 
                      alt={tech.name} 
                      width={48} 
                      height={48} 
                      className="object-contain" 
                    />
                  </div>
                  <span className="font-medium text-[#3a4a3c] group-hover:text-[#f7f1cf] transition-colors duration-300">
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
