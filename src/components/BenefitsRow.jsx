import { benefits } from "../data/siteData";

export default function BenefitsRow() {
  return (
    <section className="section-wrap py-10 sm:py-14">
      <div className="mb-8">
        <p className="font-monoBrand text-sm font-bold uppercase tracking-[0.24em] text-nmRed">
          Why join
        </p>
        <h3 className="font-monoBrand mt-3 text-3xl font-bold uppercase text-white sm:text-4xl">
          More than a course
        </h3>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {benefits.map((item) => (
          <div
            key={item.title}
            className="group rounded-[24px] border border-white/10 bg-white/[0.04] p-6 transition duration-200 hover:-translate-y-1 hover:border-nmGreen/30 hover:bg-white/[0.06]"
          >
            <div className="h-1 w-12 rounded-full bg-nmGreen transition duration-200 group-hover:w-16" />
            <h4 className="font-monoBrand mt-5 text-lg font-bold uppercase text-nmGreen">
              {item.title}
            </h4>
            <p className="font-sansBody mt-3 text-sm leading-6 text-white/75">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}