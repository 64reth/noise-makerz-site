export default function TrustStrip() {
  const items = [
    "Free 12-Week Programme",
    "Westminster Based",
    "AV & Live Events Skills",
    "Open to Young People & Adults",
  ];

  return (
    <section className="section-wrap -mt-2 pb-6 sm:pb-8">
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <div
            key={item}
            className="font-monoBrand rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-center text-xs font-bold uppercase tracking-[0.18em] text-white/90"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
