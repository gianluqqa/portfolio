import React from 'react'
import Link from 'next/link'
import { projects } from '../helpers/projects'

const Projects = () => {
  return (
    <div className="min-h-screen py-10 px-6 bg-gradient-to-br from-red-100 via-green-100 to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <h1 className="text-4xl font-bold text-center mb-10 text-red-500">Mis Proyectos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((proyecto) => (
          <Link key={proyecto.id} href={`/project/${proyecto.id}`}>
            <div className="bg-white rounded-xl border border-[#556B2F]/30 p-6 shadow-md hover:shadow-lg transition-transform hover:scale-105 cursor-pointer">
              <h2 className="text-2xl font-semibold text-[#556B2F] mb-2">{proyecto.titulo}</h2>
              <p className="text-gray-700 text-sm">{proyecto.descripcion.slice(0, 100)}...</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Projects
