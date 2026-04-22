import { applyLink } from "../data/siteData";

export default function Hero() {
  return (
    <section className="section-wrap py-8 sm:py-10">
      <div className="relative min-h-[620px] overflow-hidden rounded-[32px] border border-white/10 shadow-glow sm:min-h-[720px]">
        <img
          src="/images/hero-engineer.png"
          alt="Live events engineer working at mixing desk"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />

        <div className="relative z-10 flex h-full items-end">
          <div className="w-full max-w-4xl p-6 sm:p-10 lg:p-14">
            <div className="font-monoBrand inline-flex rounded-full border border-nmGreen/30 bg-nmGreen/15 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-white sm:text-xs">
              Free 12-Week Programme
            </div>

            <h2 className="font-monoBrand mt-5 text-4xl font-bold uppercase leading-[0.92] text-white sm:text-5xl lg:text-7xl">
              Turn your passion for{" "}
              <span className="text-nmGreen">music</span>,{" "}
              <span className="text-nmGreen">events</span> &{" "}
              <span className="text-nmGreen">tech</span>
              <br />
              into real opportunities.
            </h2>

            <p className="font-sansBody mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
              Build confidence, creative skills and industry-ready experience
              across live sound, lighting, video production, streaming,
              podcasting and event production.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-monoBrand rounded-2xl bg-nmGreen px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-black transition duration-200 hover:scale-[1.02]"
              >
                Register Interest
              </a>

              <a
                href="#skills"
                className="font-monoBrand rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition duration-200 hover:bg-white/15"
              >
                Explore the Course
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}