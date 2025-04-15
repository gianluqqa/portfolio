import React from 'react'
import Image from 'next/image'

const Certificates = () => {
 const certificates = [
   {
     id: 1,
     title: "Desarrollador Web Full Stack",
     description: "Certificación completa en desarrollo web frontend y backend",
     image: "/placeholder-certificate.jpg", // Reemplazar con tu imagen
     date: "2023"
   },
   {
     id: 2,
     title: "Certificado de Inglés C1 Avanzado",
     description: "Nivel avanzado de inglés según el Marco Común Europeo",
     image: "/placeholder-certificate.jpg", // Reemplazar con tu imagen
     date: "2022"
   },
   {
     id: 3,
     title: "Graduado en Economía",
     description: "Complejo Educativo Solis",
     image: "/placeholder-certificate.jpg", // Reemplazar con tu imagen
     date: "2021"
   }
 ];

 return (
   <div className="bg-[#f0e6a3] py-16" id="certificates">
     <div className="container mx-auto px-4">
       <h2 className="text-4xl font-bold text-center text-[#3a4a3c] mb-12">Certificates & Education</h2>
       
       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
         {certificates.map((cert) => (
           <div 
             key={cert.id} 
             className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
           >
             {/* Área de imagen con proporción fija */}
             <div className="relative h-48 w-full">
               <div className="w-full h-full bg-gray-200 flex items-center justify-center text-[#3a4a3c]">
                 <p>Certificate Image</p>
               </div>
               {/* Cuando tengas las imágenes: */}
               {/* <Image 
                 src={cert.image} 
                 alt={cert.title} 
                 layout="fill" 
                 objectFit="cover" 
               /> */}
             </div>
             
             <div className="p-6">
               <h3 className="text-xl font-bold text-[#3a4a3c] mb-2">{cert.title}</h3>
               <p className="text-gray-600 mb-4">{cert.description}</p>
               <div className="flex justify-between items-center">
                 <span className="text-sm text-gray-500">{cert.date}</span>
                 <button 
                   className="text-[#3a4a3c] border border-[#3a4a3c] px-4 py-1 rounded-md hover:bg-[#3a4a3c] hover:text-[#f0e6a3] transition-colors"
                 >
                   Ver certificado
                 </button>
               </div>
             </div>
           </div>
         ))}
       </div>
     </div>
   </div>
 )
}

export default Certificates