import { gallery } from "../data/siteData";

export default function GalleryStrip() {
  return (
    <section className="section-wrap py-16">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {gallery.map((src, index) => (
          <div key={src} className="overflow-hidden rounded-[24px] border border-white/10">
            <img
              src={src}
              alt={`Noise Makerz gallery ${index + 1}`}
              className="h-72 w-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}