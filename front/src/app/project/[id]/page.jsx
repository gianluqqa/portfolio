import { notFound } from 'next/navigation'
import { projects } from '@/app/helpers/Projects'

const ProjectDetail = ({ params }) => {
  const proyecto = projects.find(p => p.id === params.id)

  if (!proyecto) return notFound()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-10 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">{proyecto.titulo}</h1>
        <img
          src={proyecto.imagen}
          alt={proyecto.titulo}
          className="w-full h-auto rounded-xl shadow-md mb-6"
        />
        <p className="text-lg text-gray-700 mb-4">{proyecto.descripcion}</p>
        <p className="text-sm text-gray-600">
          <span className="font-semibold">Tecnologías:</span> {proyecto.tecnologias.join(', ')}
        </p>
      </div>
    </div>
  )
}

export default ProjectDetail
