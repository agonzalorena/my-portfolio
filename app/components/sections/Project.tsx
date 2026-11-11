import Image from "next/image";
import { projectList, projectsUrl } from "@/app/utils/data";
import { ArrowDiagonalTopRight } from "@/app/utils/svgs";

export default function Project() {
  return (
    <section className="flex flex-col gap-6">
      <div>
        <h2 className="text-3xl">Proyectos Destacados</h2>
        <p className="text-muted">
          Aplicaciones, infrastructuras y herramientas que desarrollé.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-12">
        {projectList.map((project, index) => (
          <div
            key={project.name}
            className="flex flex-col md:flex-row overflow-hidden rounded-xl bg-card shadow-lg shadow-secondary/10 "
          >
            <div className="relative aspect-video w-full overflow-hidden md:aspect-auto min-h-55 md:min-h-80 md:w-5/12 md:shrink-0">
              <Image
                src={project.img}
                alt={project.name}
                title={`Imagen del proyecto ${project.name}`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                priority={index === 0}
                className="object-cover"
              />
            </div>
            <section className="flex flex-col justify-between w-full">
              <div className="flex flex-1 flex-col gap-4 p-5 md:px-5 md:pt-10 ">
                <h3 className="text-3xl font-bold md:text-5xl">
                  {project.name}
                </h3>
                <p className="text-sm md:text-base max-w-prose leading-relaxed font-normal text-muted">
                  {project.description}
                </p>

                {/* Mobile: desplegable */}
                <details className="group md:hidden">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-2 font-bold text-xs text-primary [&::-webkit-details-marker]:hidden">
                    Desafío y Solución
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 transition-transform duration-200 group-open:rotate-180"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </summary>
                  <p className="border-t pt-2 text-sm max-w-prose leading-relaxed font-normal text-muted">
                    {project.challenge}
                  </p>
                </details>

                {/* Desktop: texto siempre visible */}
                <div className="hidden md:flex md:flex-col md:gap-2">
                  <p className="text-xs font-semibold text-primary">
                    Desafío y Solución
                  </p>
                  <p className="text-base max-w-prose leading-relaxed font-normal text-muted">
                    {project.challenge}
                  </p>
                </div>
              </div>
              <div className="flex justify-end p-5 md:px-12 md:py-5">
                {project.link != null ? (
                  <a
                    href={project.link}
                    title={`Ir al proyecto ${project.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border px-3 py-2 rounded-xl text-primary flex items-center gap-2 hover:bg-primary/10 transition-colors duration-200"
                  >
                    <p>Ir al proyecto</p>
                    <div className="w-6">
                      <ArrowDiagonalTopRight />
                    </div>
                  </a>
                ) : (
                  <span
                    aria-disabled="true"
                    className="text-muted/40 border px-3 py-2 rounded-xl flex items-center gap-2 cursor-not-allowed"
                  >
                    <p>Ir al proyecto</p>
                    <div className="w-6">
                      <ArrowDiagonalTopRight />
                    </div>
                  </span>
                )}
              </div>
            </section>
          </div>
        ))}
      </div>
      <div className="flex justify-center pt-12">
        <a
          href={projectsUrl}
          title="Ver más proyectos en GitHub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary border px-3 py-2 rounded-xl flex items-center gap-2 hover:bg-primary/10 transition-colors duration-200 w-fit"
        >
          <p>Ver más proyectos en GitHub</p>
          <div className="w-6">
            <ArrowDiagonalTopRight />
          </div>
        </a>
      </div>
    </section>
  );
}
