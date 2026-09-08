const standards = [
  {
    title: "RELEVANCE",
    text: "Over volume.",
  },
  {
    title: "PERSPECTIVE",
    text: "Before action.",
  },
  {
    title: "CREDIBILITY",
    text: "Evidence matters.",
  },
  {
    title: "ALIGNMENT",
    text: "The right counterparties.",
  },
  {
    title: "DISCRETION",
    text: "Privacy with purpose.",
  },
  {
    title: "STEWARDSHIP",
    text: "Reputation is an asset.",
  },
];

function KhanateStandards() {
  return (
    <section
      id="khanate-standard"
      className="bg-[#DED0C7] text-[#191113]"
    >
      <div className="mx-auto max-w-360 px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="flex items-center gap-4">
              <span className="text-[8px] font-semibold uppercase tracking-[0.2em]">
                THE KHĀNATE STANDARD
              </span>

              <span className="h-px w-10 bg-[#B79A69]" />
            </div>

            <h2 className="mt-7 max-w-100 font-serif text-[2.8rem] font-medium leading-[0.92] tracking-tight sm:text-[3.5rem]">
              Selectivity
              <br />
              Is a Discipline.
            </h2>
          </div>

          <div className="grid border-t border-[#191113]/15 sm:grid-cols-2">
            {standards.map((standard) => (
              <article
                key={standard.title}
                className="flex items-start gap-4 border-b border-[#191113]/15 py-5 sm:px-5 sm:first:pl-0 sm:nth-[odd]:border-r"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#B79A69]/70">
                  <span className="h-2 w-2 rounded-full border border-[#B79A69]" />
                </div>

                <div>
                  <h3 className="text-[7px] font-bold uppercase tracking-[0.18em]">
                    {standard.title}
                  </h3>

                  <p className="mt-2 text-[10px] text-[#191113]/60">
                    {standard.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default KhanateStandards;