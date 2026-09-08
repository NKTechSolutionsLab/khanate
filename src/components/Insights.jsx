import heroBg from "../images/hero_bg.png";

const insights = [
  {
    title: "Europe Beyond the Headline",
    category: "MARKETS",
  },
  {
    title: "Why Strategic Access Matters",
    category: "STRATEGY",
  },
  {
    title: "Riga and the Northern Corridor",
    category: "GEOGRAPHY",
  },
];

function Insights() {
  return (
    <section
      id="insights"
      className="bg-[#F5EEE7] text-[#191113]"
    >
      <div className="mx-auto max-w-360 px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="text-[8px] font-semibold uppercase tracking-[0.2em]">
                INSIGHTS
              </span>

              <span className="h-px w-10 bg-[#B79A69]" />
            </div>

            <h2 className="mt-7 max-w-100 font-serif text-[2.8rem] font-medium leading-[0.92] tracking-tight sm:text-[3.4rem]">
              Perspective
              <br />
              Before Position.
            </h2>

            <p className="mt-6 max-w-90 text-[11px] leading-[1.65] text-[#191113]/65 sm:text-[12px]">
              Thoughts, analysis and perspectives on capital,
              markets and opportunity across Europe.
            </p>

            <a
              href="#private-access"
              className="group mt-7 inline-flex items-center gap-4 text-[8px] font-bold uppercase tracking-[0.18em]"
            >
              EXPLORE INSIGHTS
              <span className="text-[15px] font-light transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {insights.map((item) => (
              <article
                key={item.title}
                className="group relative min-h-55 overflow-hidden sm:min-h-65"
              >
                <img
                  src={heroBg}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-[#130207]/60 transition-opacity duration-300 group-hover:bg-[#130207]/45" />

                <div className="relative flex h-full flex-col justify-end p-5 text-[#F5EEE7]">
                  <h3 className="max-w-45 font-serif text-[1.3rem] leading-[1]">
                    {item.title}
                  </h3>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-[6px] font-bold uppercase tracking-[0.2em] text-[#D8BF8E]">
                      {item.category}
                    </span>

                    <span className="text-[14px] font-light transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Insights;