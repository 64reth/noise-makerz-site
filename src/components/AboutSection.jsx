import { applyLink } from "../data/siteData";

export default function AboutSection() {
  return (
    <section className="section-wrap py-14 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div>
          <p className="font-monoBrand text-sm font-bold uppercase tracking-[0.24em] text-nmRed">
            About Noise Makerz
          </p>

          <h3 className="font-monoBrand mt-4 text-3xl font-bold uppercase leading-[0.95] text-white sm:text-5xl">
            Creative training for the next generation of live events talent.
          </h3>

          <p className="font-sansBody mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
            Noise Makerz is a free training programme designed to help young
            people and adults build practical skills across live sound,
            lighting, video production, streaming, podcasting and event
            production.
          </p>

          <p className="font-sansBody mt-5 max-w-2xl text-base leading-7 text-white/75">
            The programme focuses on real-world learning, creative confidence
            and accessible pathways into further education, volunteering,
            employment and community-led event delivery.
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
              className="font-monoBrand rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition duration-200 hover:bg-white/10"
            >
              View Skills
            </a>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6">
            <p className="font-monoBrand text-xs font-bold uppercase tracking-[0.2em] text-nmGreen">
              Practical learning
            </p>
            <p className="font-sansBody mt-3 text-sm leading-6 text-white/75">
              Hands-on sessions built around equipment, workflows and creative
              teamwork.
            </p>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6">
            <p className="font-monoBrand text-xs font-bold uppercase tracking-[0.2em] text-nmGreen">
              Industry focused
            </p>
            <p className="font-sansBody mt-3 text-sm leading-6 text-white/75">
              Skills aligned to the live events, AV and digital production
              space.
            </p>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6">
            <p className="font-monoBrand text-xs font-bold uppercase tracking-[0.2em] text-nmGreen">
              Community rooted
            </p>
            <p className="font-sansBody mt-3 text-sm leading-6 text-white/75">
              Built to serve local residents and support real community activity
              and events.
            </p>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6">
            <p className="font-monoBrand text-xs font-bold uppercase tracking-[0.2em] text-nmGreen">
              Pathways forward
            </p>
            <p className="font-sansBody mt-3 text-sm leading-6 text-white/75">
              Designed to help learners move toward education, opportunities and
              future work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}