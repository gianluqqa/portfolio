import React from 'react'
import Image from 'next/image'

const Presentation = () => {
 return (
   <div className="bg-[#f0e6a3] min-h-screen flex items-center justify-center py-16">
     <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12 w-3/4">
       {/* Contenedor de imagen */}
       <div className="w-full md:w-1/2 flex justify-center">
         <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-[#3a4a3c]">
           {/* Placeholder para tu imagen - reemplaza con tu imagen real */}
           <div className="w-full h-full bg-[#3a4a3c] flex items-center justify-center text-[#f0e6a3]">
             Tu Foto
           </div>
           {/* Cuando tengas tu imagen: */}
           {/* <Image 
             src="/ruta-a-tu-imagen.jpg" 
             alt="Tu Nombre" 
             layout="fill" 
             objectFit="cover" 
           /> */}
         </div>
       </div>
       
       {/* Contenedor de texto */}
       <div className="w-full md:w-1/2">
         <h1 className="text-4xl font-bold text-[#3a4a3c] mb-4">Gianluca Developer</h1>
         <h2 className="text-2xl text-[#3a4a3c] mb-6">Frontend Developer</h2>
         <p className="text-[#3a4a3c] mb-6">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
         </p>
         <button className="bg-[#3a4a3c] text-[#f0e6a3] px-6 py-2 rounded-md hover:bg-opacity-90 transition-all">
           Download CV
         </button>
       </div>
     </div>
   </div>
 )
}

export default Presentation