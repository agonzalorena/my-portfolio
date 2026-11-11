import Experience from "@/app/components/sections/Experience";
import Footer from "@/app/components/sections/Footer";
import Hero from "@/app/components/sections/Hero";
import Project from "@/app/components/sections/Project";
import Stack from "@/app/components/sections/Stack";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col gap-10 p-2">
        <div className="curved"></div>
        <div className="flex flex-col items-center ">
          <section className="flex flex-col gap-8 p-5 w-full md:max-w-4xl lg:max-w-6xl xl:max-w-7xl">
            <Hero />
            <div className="flex flex-col gap-28 md:gap-40">
              <Experience />
              <Project />
              <Stack />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
