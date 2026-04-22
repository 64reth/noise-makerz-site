import { applyLink } from "../data/siteData";

export default function ApplyCTA() {
  return (
    <section id="apply" className="section-wrap py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-nmGreen to-[#b8d963] p-6 text-black shadow-glow sm:p-10">
        <div className="absolute right-[-40px] top-[-40px] h-40 w-40 rounded-full bg-white/20 blur-2xl" />
        <div className="absolute bottom-[-50px] left-[-20px] h-40 w-40 rounded-full bg-black/10 blur-2xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="font-monoBrand text-sm font-bold uppercase tracking-[0.22em] text-black/70">
              Recruitment open
            </p>

            <h3 className="font-monoBrand mt-3 text-3xl font-bold uppercase leading-[0.95] sm:text-5xl">
              Spaces limited.
              <br />
              Register your interest now.
            </h3>

            <p className="font-sansBody mt-5 max-w-2xl text-base leading-7 text-black/75">
              Join a free 12-week programme focused on live sound, lighting,
              video production, streaming, podcasting and event production.
              Build creative confidence, technical skills and a pathway into
              future opportunities.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <div className="font-monoBrand rounded-full border border-black/10 bg-black/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em]">
                Free to join
              </div>

              <div className="font-monoBrand rounded-full border border-black/10 bg-black/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em]">
                Community based
              </div>

              <div className="font-monoBrand rounded-full border border-black/10 bg-black/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em]">
                Industry focused
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 lg:items-center">
            <div className="rounded-[24px] bg-white p-2 shadow-lg">
              <img
                src="/images/qr-code.png"
                alt="QR code to register interest"
                className="h-40 w-40 rounded-xl object-cover"
              />
            </div>

            <a
              href={applyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-monoBrand rounded-2xl bg-black px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition duration-200 hover:scale-[1.02]"
            >
              Register Interest
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}