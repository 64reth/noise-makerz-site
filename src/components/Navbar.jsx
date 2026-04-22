import { applyLink } from "../data/siteData";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="section-wrap flex items-center justify-between py-3 sm:py-4">
        <a href="/" className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="Noise Makerz logo"
            className="h-12 w-auto sm:h-14 lg:h-16"
          />

          <div className="hidden sm:block">
            <p className="font-monoBrand text-xs font-bold uppercase tracking-[0.28em] text-white">
              Noise Makerz
            </p>
            <p className="font-monoBrand mt-1 text-[10px] font-bold uppercase tracking-[0.24em] text-nmGreen">
              Learn. Create. Power the Future.
            </p>
          </div>
        </a>

        <a
          href={applyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="font-monoBrand rounded-2xl bg-nmGreen px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-black transition duration-200 hover:scale-[1.02] hover:shadow-glow sm:px-5 sm:text-sm"
        >
          Register Interest
        </a>
      </div>
    </header>
  );
}