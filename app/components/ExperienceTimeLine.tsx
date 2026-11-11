export default function ExperienceTimeLine({ items }: { items: any[] }) {
  return (
    <div>
      <ol>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li
              key={item.id}
              className="grid grid-cols-[1.25rem_1fr] gap-x-4 md:gap-x-8"
            >
              {/* Punto + línea continua */}
              <div className="flex flex-col items-center" aria-hidden="true">
                <span
                  className={[
                    "mt-1.75 h-2.5 w-2.5 shrink-0 rounded-full border border-primary bg-primary",
                  ].join(" ")}
                />
                {!isLast && <span className="mt-2 w-px flex-1 bg-primary" />}
              </div>

              {/* Contenido */}
              <article className={isLast ? "pb-0" : "pb-10"}>
                {/* Fila alineada con el punto: organización, tipo y período */}
                <header className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="text-base font-semibold">
                    {item.organization}
                  </h3>
                  <span
                    className={[
                      "rounded border px-1.5 py-0.5 text-xs text-muted",
                    ].join(" ")}
                  >
                    {item.type}
                  </span>
                  <time className="text-sm text-muted/70 sm:ml-auto">
                    {item.period}
                  </time>
                </header>

                <p className="mt-1 text-sm text-muted">{item.title}</p>

                {item.description && (
                  <p className="mt-3  leading-relaxed font-normal text-sm md:text-base text-muted md:max-w-2/3 whitespace-pre-line">
                    {item.description}
                  </p>
                )}
              </article>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
