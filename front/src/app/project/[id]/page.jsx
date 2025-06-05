"use client";

import React, { useState, use } from "react";
import { notFound } from "next/navigation";
import { projects } from "@/helpers/Projects";

const ProjectDetail = ({ params }) => {
  const resolvedParams = use(params); // desempaquetar params

  const proyecto = projects.find((p) => p.id === resolvedParams.id);
  const [imagenActiva, setImagenActiva] = useState(null);

  if (!proyecto) return notFound();

  return (
    <div className="min-h-screen bg-gray-950 text-white pt-24 pb-12 px-6">
      {/* HERO */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 mb-12">
        <div className="md:w-1/2">
          <img
            src={proyecto.imagen[0]}
            alt={proyecto.titulo}
            className="rounded-3xl shadow-lg border border-gray-700"
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold text-orange-400 mb-4">
            {proyecto.titulo}
          </h1>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed line-clamp-[10] hover:line-clamp-none transition-all duration-300 ease-in-out">
            {proyecto.descripcion}
          </p>
          <p className="text-sm text-gray-400 mt-auto">
            <span className="text-green-400 font-semibold">Tecnologías:</span>{" "}
            {proyecto.tecnologias.join(" · ")}
          </p>
        </div>
      </div>

      {/* GALERÍA */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {proyecto.imagen.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt={`${proyecto.titulo} ${index + 1}`}
            className="rounded-xl border border-gray-700 shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => setImagenActiva(imgSrc)}
          />
        ))}
      </div>

      {/* MODAL IMAGEN AMPLIADA */}
      {imagenActiva && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setImagenActiva(null)} // Cierra al clickear fuera
        >
          <div
            className="relative max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()} // Evita cerrar al click en la imagen
          >
            <button
              onClick={() => setImagenActiva(null)}
              className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-orange-400 transition"
              aria-label="Cerrar imagen"
            >
              &times;
            </button>
            <img
              src={imagenActiva}
              alt="Imagen ampliada"
              className="rounded-lg max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}

      {/* SECCIONES ADICIONALES */}
      <div className="max-w-6xl mx-auto space-y-10 mt-12">
        <div>
          <h3 className="text-xl text-orange-300 font-semibold mb-2">
            El Origen de Luxora
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Luxora nació como el proyecto final de un equipo multidisciplinario
            durante mi formación en SoyHenry. Junto a dos desarrolladores
            Frontend y tres Backend, nos propusimos crear una tienda online que
            combinara elegancia visual con una arquitectura robusta. La
            inspiración surgió de sitios web de mobiliario de alta gama, con el
            objetivo de replicar esa experiencia refinada en cada detalle de
            navegación, diseño y funcionalidad. Más que un desafío técnico, fue
            una oportunidad de trabajar en equipo, aplicar nuestras habilidades
            Full Stack y acercarnos a un entorno de desarrollo profesional real.
          </p>
        </div>
        <div>
          <h3 className="text-xl text-orange-300 font-semibold mb-2">
            Funcionalidades Principales
          </h3>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>Login manual y con Firebase</li>
            <li>Carrito y sistema de pagos</li>
            <li>Dashboard de usuario y administrador</li>
            <li>Estadísticas de ventas y usuarios</li>
            <li>Suscripción por email a novedades</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
