'use client';

import Image from 'next/image';

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
    <section className="py-12 px-4 md:px-8 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">Certificados</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden transition-transform transform hover:scale-105"
          >
            <div className="relative w-full h-64">
              <Image
                src={cert.image}
                alt={cert.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-2xl"
                priority
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{cert.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{cert.description}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Año: {cert.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
