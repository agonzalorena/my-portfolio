import Btn from "@/app/components/Btn";
import { connectList } from "@/app/utils/data";

export default function Hero() {
  return (
    <section className="flex flex-col gap-6 h-[85vh] justify-center">
      <div className="flex flex-col gap-2">
        <p className="text-sm md:text-base text-primary">Hola, soy</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
          Agustín Gonzalorena
        </h1>
      </div>

      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">
        Backend & Infraestructura
      </h2>

      <p className="max-w-prose leading-relaxed text-base md:text-lg font-normal text-lightText z-10">
        Desarrollador backend con +3 años de experiencia construyendo software.
        Cuento con conocimientos prácticos en el despliegue, configuración y
        administración de servidores operativos 24/7.
      </p>

      <div className="flex flex-wrap gap-4 md:gap-5 pt-6 md:pt-8">
        {connectList.map((connect) => (
          <Btn
            key={connect.id}
            Icon={connect.icon}
            text={connect.name}
            link={connect.link}
          />
        ))}
      </div>
    </section>
  );
}
