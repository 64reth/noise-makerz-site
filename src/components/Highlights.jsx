const items = [
  "Young people & adults welcome",
  "No experience needed",
  "Creative, technical and team-based learning",
  "Community-based delivery",
];

export default function Highlights() {
  return (
    <section className="section-wrap py-4">
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}