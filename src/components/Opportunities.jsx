const opportunities = [
  {
    number: "01",
    category: "REAL ESTATE",
    title: "Strategic Development Opportunity",
    location: "RIGA, LATVIA",
  },
  {
    number: "02",
    category: "INFRASTRUCTURE",
    title: "Strategic Partnership Opportunity",
    location: "CENTRAL EUROPE",
  },
  {
    number: "03",
    category: "INDUSTRIALS",
    title: "Expansion & Modernisation",
    location: "WESTERN EUROPE",
  },
];

function Opportunities() {
  return (
    <section
      id="opportunities"
      className="bg-[#22050B] text-[#F5EEE7]"
    >
      <div className="mx-auto max-w-360 px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="text-[8px] font-semibold uppercase tracking-[0.2em]">
              SELECTED OPPORTUNITIES
            </span>

            <span className="h-px w-10 bg-[#B79A69]" />
          </div>

          <span className="hidden text-[7px] font-semibold uppercase tracking-[0.18em] text-[#B79A69] sm:block">
            BY INVITATION ONLY
          </span>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {opportunities.map((item) => (
            <article
              key={item.number}
              className="group border border-[#B79A69]/35 bg-[#130207]/35 p-6 transition-all duration-300 hover:border-[#B79A69]/75 hover:bg-[#130207]/70 sm:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="text-[7px] font-semibold tracking-[0.18em] text-[#B79A69]">
                  {item.number} / {item.category}
                </span>
              </div>

              <h3 className="mt-7 max-w-65 font-serif text-[1.6rem] leading-[1] sm:text-[1.8rem]">
                {item.title}
              </h3>

              <p className="mt-5 text-[7px] font-bold uppercase tracking-[0.2em] text-[#D8BF8E]">
                {item.location}
              </p>

              <div className="mt-6 grid grid-cols-2 border-t border-[#F5EEE7]/10 pt-5">
                <div>
                  <span className="block text-[6px] font-semibold uppercase tracking-[0.18em] text-[#817173]">
                    STATUS
                  </span>

                  <span className="mt-2 block text-[9px] text-[#F5EEE7]/80">
                    Private Review
                  </span>
                </div>

                <div>
                  <span className="block text-[6px] font-semibold uppercase tracking-[0.18em] text-[#817173]">
                    ACCESS
                  </span>

                  <span className="mt-2 block text-[9px] text-[#F5EEE7]/80">
                    By Qualification
                  </span>
                </div>
              </div>

              <a
                href="#private-access"
                className="mt-7 inline-flex items-center gap-3 text-[7px] font-bold uppercase tracking-[0.18em]"
              >
                VIEW OPPORTUNITY
                <span className="text-[14px] font-light transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </article>
          ))}
        </div>

        <div className="mt-7 sm:hidden">
          <span className="text-[7px] font-semibold uppercase tracking-[0.18em] text-[#B79A69]">
            BY INVITATION ONLY
          </span>
        </div>
      </div>
    </section>
  );
}

export default Opportunities;