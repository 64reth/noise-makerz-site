export default function PartnersStrip() {
  const items = [
    "Community Partners",
    "Education Pathways",
    "Local Venues",
    "Future Employers",
    "Supporters Welcome",
  ];

  return (
    <section className="section-wrap py-10">
      <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
        <div className="grid gap-3 md:grid-cols-3 xl:grid-cols-5">
          {items.map((item) => (
            <div
              key={item}
              className="font-monoBrand rounded-2xl bg-white/[0.04] px-4 py-4 text-center text-xs font-bold uppercase tracking-[0.18em] text-white/75"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
