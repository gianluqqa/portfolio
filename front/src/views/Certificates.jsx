'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { slideFromRight } from '@/utilities/animation';

const certificates = [
  {
    id: 1,
    title: "Desarrollador Web Full Stack",
    description: "Certificación completa en desarrollo web frontend y backend",
    image: "/Certificado de DWFS.jpeg",
    date: "2025"
  },
  {
    id: 2,
    title: "Certificado de Inglés C1 Avanzado",
    description: "Nivel avanzado de inglés según el Marco Común Europeo",
    image: "/Certificado de ingles C1.png",
    date: "2025"
  },
  {
    id: 3,
    title: "Graduado en Economía",
    description: "Complejo Educativo Solis",
    image: "/Certificado de graduacion.jpg", 
    date: "2019"
  }
];

export default function Certificados() {
  return (
    <section className="py-12 px-4 sm:px-6 md:px-8 lg:px-16 bg-gradient-to-br from-red-100 via-green-100 to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-red-500 dark:text-red-500">
        Certificados
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            className="bg-white/80 dark:bg-gray-700/80 rounded-2xl shadow-md overflow-hidden hover:scale-[1.03] transition-transform duration-300 border border-gray-200 dark:border-gray-600 backdrop-blur-sm"
            variants={slideFromRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            transition={{ delay: 0.4 + index * 0.3 }}
          >
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-t-2xl"
                priority
              />
            </div>
            <div className="p-4 space-y-2">
              <h3 className="text-lg sm:text-xl font-semibold text-orange-600 dark:text-orange-300">{cert.title}</h3>
              <p className="text-green-700 dark:text-green-300 text-sm">{cert.description}</p>
              <p className="text-blue-600 dark:text-blue-300 text-xs">Año: {cert.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
