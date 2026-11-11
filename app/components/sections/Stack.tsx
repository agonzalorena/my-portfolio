import { stackList } from "@/app/utils/data";
export default function Stack() {
  return (
    <section>
      <h2 className="text-3xl">Tecnologías</h2>
      <p className="text-muted pt-2">
        Tegnologías y herramientas que mas utilizo en mi dia a dia.
      </p>
      <div className="flex w-full pt-10">
        <div className="grid w-full grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-2 md:gap-4  rounded-xl p-1 shadow-md shadow-primary/10">
          {stackList.map((item, index) => (
            <div
              key={item}
              className="m-1 pb-1 border-b border-muted/20 flex flex-col items-center justify-center gap-2 text-xs md:text-base hover:cursor-pointer hover:text-primary hover:border-primary transition-colors duration-300"
            >
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
