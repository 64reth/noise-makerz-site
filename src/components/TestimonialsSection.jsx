export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "I learned how live events actually work and gained confidence using real equipment.",
      name: "Future Learner",
    },
    {
      quote:
        "This kind of programme can open doors for local people who just need a real opportunity.",
      name: "Community Supporter",
    },
    {
      quote:
        "Creative skills, teamwork and practical experience all in one place.",
      name: "Parent / Guardian",
    },
  ];

  return (
    <section className="section-wrap py-14 sm:py-20">
      <div className="mb-8">
        <p className="font-monoBrand text-sm font-bold uppercase tracking-[0.24em] text-nmRed">
          Testimonials
        </p>
        <h3 className="font-monoBrand mt-3 text-3xl font-bold uppercase sm:text-5xl">
          Real impact starts with opportunity.
        </h3>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {testimonials.map((item) => (
          <div
            key={item.name}
            className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6"
          >
            <p className="font-sansBody text-base leading-7 text-white/80">
              “{item.quote}”
            </p>
            <p className="font-monoBrand mt-5 text-xs font-bold uppercase tracking-[0.18em] text-nmGreen">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
