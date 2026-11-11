"use client";

import { useEffect, useState } from "react";
import { GithubIcon, LinkedinIcon, MyLogo } from "../../utils/svgs";
import { connectList } from "@/app/utils/data";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-card mt-20">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between">
        {/* Logo + nombre + puesto */}
        <div className="flex items-center gap-4 ">
          <div className="h-12 w-12">
            <MyLogo />
          </div>
          <div className="min-w-0 flex flex-col gap-1">
            <p className="font-medium ">Agustín Gonzalorena</p>
            <p className="text-sm text-muted">Backend & Infrastructura</p>
          </div>
        </div>

        {/* Mail */}
        <a
          href={`mailto:agonzalorena@gmail.com`}
          title="mail agonzalorena@gmail.com"
          className="break-all text-sm text-muted underline decoration-muted underline-offset-4 hover:scale-110 transition-transform duration-200 hover:text-primary"
        >
          agonzalorena@gmail.com
        </a>

        {/* Redes */}
        <div className="flex items-center gap-3">
          {connectList.map((connect) => (
            <a
              key={connect.id}
              href={connect.link}
              title={connect.name}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={connect.name}
              className="flex items-center justify-center hover:scale-110 transition-transform duration-200 hover:text-primary"
            >
              <div className="h-8 w-8">
                <connect.icon />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Año */}
      <div className="w-full flex justify-center">
        <p className="mx-auto max-w-5xl px-6 py-4 text-xs text-muted/70">
          © {year} Agustín Gonzalorena.
        </p>
      </div>
    </footer>
  );
}
