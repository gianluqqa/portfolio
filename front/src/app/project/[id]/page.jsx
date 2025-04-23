import { notFound } from 'next/navigation'
import { projects } from "../../../helpers/projects";

const ProjectDetail = ({ params }) => {
  const proyecto = projects.find(p => p.id === params.id)

  if (!proyecto) return notFound()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-10 px-4">
      <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl p-8 max-w-6xl w-full flex items-center">
        <div className="flex-shrink-0 w-1/3 pr-8">
          <img
            src={proyecto.imagen}
            alt={proyecto.titulo}
            className="w-full h-auto rounded-xl shadow-md border border-gray-600"
          />
        </div>
        <div className="w-2/3">
          <h1 className="text-3xl font-bold mb-6 text-center text-orange-300 tracking-wide">
            {proyecto.titulo}
          </h1>
          <p className="text-base text-gray-300 mb-6 leading-relaxed">
            {proyecto.descripcion}
          </p>
          <p className="text-sm text-blue-300">
            <span className="font-semibold text-green-500">Tecnologías:</span> {proyecto.tecnologias.join(', ')}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
