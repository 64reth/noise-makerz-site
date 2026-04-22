export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10 py-10">
      <div className="section-wrap grid gap-8 md:grid-cols-3">
        <div>
          <h4 className="text-sm font-black uppercase tracking-[0.22em] text-nmGreen">
            Noise Makerz
          </h4>
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">
            A creative training programme connecting local people to practical
            AV, live events and digital production skills.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-black uppercase tracking-[0.22em] text-nmGreen">
            Location
          </h4>
          <p className="mt-3 text-sm leading-6 text-white/70">
            Brunel Community Hub
            <br />
            Westminster, London
          </p>
        </div>

        <div>
          <h4 className="text-sm font-black uppercase tracking-[0.22em] text-nmGreen">
            Follow
          </h4>
          <p className="mt-3 text-sm leading-6 text-white/70">
            @noisemakerzuk
          </p>
        </div>
      </div>
    </footer>
  );
}
