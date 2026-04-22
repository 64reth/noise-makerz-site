import { skills } from "../data/siteData";

export default function SkillsGrid() {
  return (
    <section id="skills" className="section-wrap py-16">
      <div className="mb-8">
        <p className="font-monoBrand text-sm font-bold uppercase tracking-[0.25em] text-nmRed">
          The course
        </p>
        <h3 className="font-monoBrand mt-3 text-3xl font-bold uppercase sm:text-4xl">
          Learn industry-ready skills
        </h3>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {skills.map((skill) => (
          <div key={skill} className="panel p-5">
            <p className="font-monoBrand text-sm font-bold uppercase tracking-[0.2em] text-nmGreen">
              Skill Area
            </p>
            <h4 className="font-monoBrand mt-3 text-xl font-bold uppercase">
              {skill}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}