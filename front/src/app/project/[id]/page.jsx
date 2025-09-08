"use client";

import React, { useState, use } from "react";
import { notFound } from "next/navigation";
import { projects } from "@/helpers/Projects";

const ProjectDetail = ({ params }) => {
  const resolvedParams = use(params);
  const project = projects.find((p) => p.id === resolvedParams.id);
  const [activeImage, setActiveImage] = useState(null);

  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-black text-green-400 relative overflow-hidden">
      {/* Fondo cuadrícula */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(74, 222, 128, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(74, 222, 128, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: "35px 35px",
          }}
        />
      </div>

      <div className="relative z-10 pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        {/* Header tipo terminal */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="bg-black border border-purple-500 rounded-sm">
            <div className="flex items-center gap-2 p-3 border-b border-purple-500/40">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="ml-4 text-sm text-green-400">
                ~/portfolio/project$ cat {project.title.toLowerCase()}.txt
              </span>
            </div>
          </div>
        </div>

        {/* HERO */}
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 mb-12">
          {/* Imagen */}
          <div className="lg:w-1/2">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full rounded-sm border border-green-400/60"
            />
          </div>

          {/* Info */}
          <div className="lg:w-1/2 flex flex-col justify-center space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-purple-500 tracking-wider mb-2">
              {project.title.toUpperCase()}
            </h1>
            <div className="w-full h-0.5 bg-green-400"></div>

            <div className="bg-black/70 border border-green-400/50 rounded-sm p-6">
              <p className="text-sm sm:text-base text-green-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="bg-black/70 border border-purple-500/50 rounded-sm p-4">
              <p className="text-xs sm:text-sm text-green-300">
                <span className="text-purple-500 font-bold">TECHNOLOGIES:</span>{" "}
                {project.technologies.join(" · ")}
              </p>
            </div>
          </div>
        </div>

        {/* GALLERY */}
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-purple-500 mb-4">
            GALLERY
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {project.images.map((imgSrc, index) => (
              <div key={index} className="cursor-pointer">
                <img
                  src={imgSrc}
                  alt={`${project.title} ${index + 1}`}
                  className="w-full h-48 sm:h-56 object-cover rounded-sm border border-green-400/50"
                  onClick={() => setActiveImage(imgSrc)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* MODAL IMAGEN */}
        {activeImage && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            onClick={() => setActiveImage(null)}
          >
            <div
              className="relative max-w-4xl max-h-[90vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveImage(null)}
                className="absolute -top-10 right-0 text-green-400 text-2xl font-bold hover:text-purple-500 transition-colors bg-black/50 w-8 h-8 rounded-sm border border-green-400/30 flex items-center justify-center"
              >
                ×
              </button>
              <img
                src={activeImage}
                alt="Expanded"
                className="rounded-sm max-w-full max-h-[90vh] object-contain border border-green-400"
              />
            </div>
          </div>
        )}

        {/* SECCIÓN INFO */}
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="bg-black/70 border border-green-400/50 rounded-sm p-6 sm:p-8">
            <h3 className="text-xl text-purple-500 font-bold mb-4">
              ORIGIN
            </h3>
            <p className="text-green-300 leading-relaxed text-sm sm:text-base whitespace-pre-line">
              {project.info}
            </p>
          </div>

          <div className="bg-black/70 border border-purple-500/50 rounded-sm p-6 sm:p-8">
            <h3 className="text-xl text-purple-500 font-bold mb-4">
              MAIN FEATURES
            </h3>
            <ul className="space-y-2 text-green-300 text-sm sm:text-base">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="inline-block bg-black border border-green-400/50 px-2 py-1 rounded-sm"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FOOTER limpio */}
        <div className="max-w-6xl mx-auto mt-12">
          <div className="bg-black border border-green-400/30 rounded-sm p-4">
            <p className="text-green-400 text-xs sm:text-sm">
              Process completed successfully. Press [ESC] to return to portfolio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
