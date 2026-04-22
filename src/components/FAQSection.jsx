export default function FAQSection() {
  const faqs = [
    {
      q: "Who can join?",
      a: "The programme is open to young people and adults, subject to eligibility and available spaces.",
    },
    {
      q: "Does it cost anything?",
      a: "No. Noise Makerz is designed to be free and accessible for participants.",
    },
    {
      q: "What will I learn?",
      a: "Live sound, lighting, video production, streaming, podcasting, teamwork and event delivery skills.",
    },
    {
      q: "Do I need experience?",
      a: "No previous experience is required. Beginners are welcome.",
    },
  ];

  return (
    <section className="section-wrap py-14 sm:py-20">
      <div className="mb-8">
        <p className="font-monoBrand text-sm font-bold uppercase tracking-[0.24em] text-nmRed">
          FAQ
        </p>
        <h3 className="font-monoBrand mt-3 text-3xl font-bold uppercase sm:text-5xl">
          Questions people ask.
        </h3>
      </div>

      <div className="grid gap-4">
        {faqs.map((item) => (
          <div
            key={item.q}
            className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6"
          >
            <p className="font-monoBrand text-sm font-bold uppercase tracking-[0.18em] text-nmGreen">
              {item.q}
            </p>
            <p className="font-sansBody mt-3 text-sm leading-7 text-white/75">
              {item.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
