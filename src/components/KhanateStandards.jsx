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
      className="bg-[#260506] text-[#F1E7DC]"
    >
      <div className="mx-auto max-w-360 px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

          {/* LEFT — Heading */}
          <div>
            <div className="flex items-center gap-4">
              <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#E8DDD3]">
                THE KHĀNATE STANDARD
              </span>

              <span className="h-px w-10 bg-[#B79A69]" />
            </div>

            <h2
              className="
                mt-7
                max-w-110
                font-serif
                text-[3rem]
                font-medium
                leading-[0.92]
                tracking-tight
                text-[#F1E7DC]
                sm:text-[3.7rem]
                lg:text-[4rem]
              "
            >
              Selectivity
              <br />
              Is a Discipline.
            </h2>
          </div>

          {/* RIGHT — Standards */}
          <div className="grid border-t border-[#DCCFC5]/20 sm:grid-cols-2">
            {standards.map((standard, index) => (
              <article
                key={standard.title}
                className={`
                  flex
                  items-start
                  gap-5
                  border-b
                  border-[#DCCFC5]/20
                  py-6
                  sm:px-6
                  sm:py-7
                  ${
                    index % 2 === 0
                      ? "sm:border-r sm:border-[#DCCFC5]/20"
                      : ""
                  }
                  ${index === 0 ? "sm:pl-0" : ""}
                  ${index === 1 ? "sm:pr-0" : ""}
                  ${index === 2 ? "sm:pl-0" : ""}
                  ${index === 3 ? "sm:pr-0" : ""}
                  ${index === 4 ? "sm:pl-0" : ""}
                  ${index === 5 ? "sm:pr-0" : ""}
                `}
              >
                {/* Icon */}
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#B79A69]/70
                  "
                >
                  <span
                    className="
                      h-2.5
                      w-2.5
                      rounded-full
                      border
                      border-[#B79A69]
                    "
                  />
                </div>

                {/* Content */}
                <div className="pt-0.5">
                  <h3
                    className="
                      text-[11.5px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-[#F1E7DC]
                    "
                  >
                    {standard.title}
                  </h3>

                  <p
                    className="
                      mt-2.5
                      text-[13px]
                      font-light
                      leading-relaxed
                      text-[#C9B8AD]/75
                    "
                  >
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