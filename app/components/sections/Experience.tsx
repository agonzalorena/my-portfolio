import { experienceList } from "@/app/utils/data";
import ExperienceTimeLine from "@/app/components/ExperienceTimeLine";

export default function Experience() {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-3xl">Experiencia</h2>
      <ExperienceTimeLine items={experienceList} />
    </section>
  );
}
