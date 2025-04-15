import React from 'react'

const Skills = () => {
 // Datos de las tecnologías organizados por categorías
 const skillsData = {
   frontend: [
     { name: 'HTML', logo: '/html.svg' },
     { name: 'CSS', logo: '/css.svg' },
     { name: 'JavaScript', logo: '/javascript.svg' },
     { name: 'TypeScript', logo: '/typescript.svg' },
     { name: 'React', logo: '/react.svg' },
     { name: 'Next.js', logo: '/nextjs.svg' },
   ],
   styling: [
     { name: 'Tailwind CSS', logo: '/tailwind.svg' },
     { name: 'Bootstrap', logo: '/bootstrap.svg' },
   ],
   backend: [
     { name: 'Node.js', logo: '/nodejs.svg' },
     { name: 'Express', logo: '/express.svg' },
     { name: 'TypeORM', logo: '/typeorm.svg' },
   ],
   database: [
     { name: 'PostgreSQL', logo: '/postgresql.svg' },
     { name: 'MongoDB', logo: '/mongodb.svg' },
     { name: 'Firebase', logo: '/firebase.svg' },
   ]
 };

 return (
   <div className="bg-[#f0e6a3] py-16" id="skills">
     <div className="container mx-auto px-4">
       <h2 className="text-4xl font-bold text-center text-[#3a4a3c] mb-12">Skills</h2>
       
       {/* Frontend */}
       <div className="mb-12">
         <h3 className="text-2xl font-semibold text-[#3a4a3c] mb-6 text-center">Frontend</h3>
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
           {skillsData.frontend.map((skill) => (
             <div key={skill.name} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow">
               <div className="w-16 h-16 flex items-center justify-center mb-4 bg-gray-100 rounded-full">
                 {/* Placeholder para el logo */}
                 <div className="text-2xl font-bold text-[#3a4a3c]">{skill.name[0]}</div>
                 {/* Cuando tengas los logos: */}
                 {/* <img src={skill.logo} alt={skill.name} className="w-12 h-12" /> */}
               </div>
               <h4 className="text-[#3a4a3c] font-medium text-center">{skill.name}</h4>
             </div>
           ))}
         </div>
       </div>
       
       {/* Styling */}
       <div className="mb-12">
         <h3 className="text-2xl font-semibold text-[#3a4a3c] mb-6 text-center">Styling</h3>
         <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {skillsData.styling.map((skill) => (
             <div key={skill.name} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow">
               <div className="w-16 h-16 flex items-center justify-center mb-4 bg-gray-100 rounded-full">
                 <div className="text-2xl font-bold text-[#3a4a3c]">{skill.name[0]}</div>
               </div>
               <h4 className="text-[#3a4a3c] font-medium text-center">{skill.name}</h4>
             </div>
           ))}
         </div>
       </div>
       
       {/* Backend */}
       <div className="mb-12">
         <h3 className="text-2xl font-semibold text-[#3a4a3c] mb-6 text-center">Backend</h3>
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
           {skillsData.backend.map((skill) => (
             <div key={skill.name} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow">
               <div className="w-16 h-16 flex items-center justify-center mb-4 bg-gray-100 rounded-full">
                 <div className="text-2xl font-bold text-[#3a4a3c]">{skill.name[0]}</div>
               </div>
               <h4 className="text-[#3a4a3c] font-medium text-center">{skill.name}</h4>
             </div>
           ))}
         </div>
       </div>
       
       {/* Database */}
       <div>
         <h3 className="text-2xl font-semibold text-[#3a4a3c] mb-6 text-center">Database</h3>
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
           {skillsData.database.map((skill) => (
             <div key={skill.name} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow">
               <div className="w-16 h-16 flex items-center justify-center mb-4 bg-gray-100 rounded-full">
                 <div className="text-2xl font-bold text-[#3a4a3c]">{skill.name[0]}</div>
               </div>
               <h4 className="text-[#3a4a3c] font-medium text-center">{skill.name}</h4>
             </div>
           ))}
         </div>
       </div>
     </div>
   </div>
 )
}

export default Skills