import { applyLink } from "../data/siteData";

export default function PathwaysSection() {
  const pathways = [
    {
      age: "13–19",
      title: "Youth Pathway",
      text: "A creative entry point for young people who want to build confidence, learn technical skills and explore opportunities in live events, AV and digital production.",
      points: [
        "Hands-on introduction to AV and event skills",
        "Creative confidence and teamwork",
        "Early exposure to career pathways",
      ],
    },
    {
      age: "18–25",
      title: "Progression Pathway",
      text: "Designed for young adults ready to build practical experience, strengthen employability and move toward volunteering, further training or entry-level opportunities.",
      points: [
        "Industry-facing practical skills",
        "Portfolio and experience building",
        "Pathways into work and further learning",
      ],
    },
    {
      age: "Adults",
      title: "Retraining Pathway",
      text: "A route for adults looking to upskill, retrain or reconnect with learning through accessible, community-based technical and creative training.",
      points: [
        "Supportive re-entry into learning",
        "Transferable digital and technical skills",
        "New routes into creative and technical work",
      ],
    },
  ];

  return (
    <section className="section-wrap relative py-14 sm:py-20">
      <div className="pointer-events-none absolute left-0 top-10 h-64 w-64 rounded-full bg-nmGreen/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-64 w-64 rounded-full bg-nmRed/10 blur-3xl" />

      <div className="relative mb-8">
        <p className="font-monoBrand text-sm font-bold uppercase tracking-[0.24em] text-nmRed">
          Choose your pathway
        </p>
        <h3 className="font-monoBrand mt-3 text-3xl font-bold uppercase text-white sm:text-5xl">
          Training pathways for different stages.
        </h3>
        <p className="font-sansBody mt-5 max-w-3xl text-base leading-7 text-white/75 sm:text-lg">
          Noise Makerz is built to support learners at different life stages,
          from first creative exposure through to progression and retraining.
        </p>
      </div>

      <div className="relative grid gap-5 lg:grid-cols-3">
        {pathways.map((pathway, index) => (
          <div
            key={pathway.title}
            className={`group rounded-[28px] border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-2 hover:border-nmGreen/40 hover:bg-white/[0.06] hover:shadow-glow ${
              index === 1 ? "lg:mt-8" : ""
            }`}
          >
            <div className="h-1 w-14 rounded-full bg-nmGreen transition duration-300 group-hover:w-20" />

            <div className="mt-5 inline-flex rounded-full border border-nmGreen/20 bg-nmGreen/10 px-3 py-2 transition duration-300 group-hover:scale-105 group-hover:border-nmGreen/40">
              <span className="font-monoBrand text-xs font-bold uppercase tracking-[0.18em] text-nmGreen">
                {pathway.age}
              </span>
            </div>

            <h4 className="font-monoBrand mt-5 text-2xl font-bold uppercase text-white transition duration-300 group-hover:text-nmGreen">
              {pathway.title}
            </h4>

            <p className="font-sansBody mt-4 text-sm leading-7 text-white/75">
              {pathway.text}
            </p>

            <div className="mt-5 space-y-3">
              {pathway.points.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="mt-2 h-2.5 w-2.5 rounded-full bg-nmGreen transition duration-300 group-hover:scale-110" />
                  <p className="font-sansBody text-sm leading-6 text-white/80">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <a
              href={applyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-monoBrand mt-6 inline-flex rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition duration-300 hover:scale-[1.03] hover:bg-white/10"
            >
              Register Interest
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}