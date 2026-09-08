const focusItems = [
  {
    number: "01",
    title: "PRIVATE CAPITAL",
    description:
      "Selected investment, real-estate and development opportunities.",
  },
  {
    number: "02",
    title: "STRATEGIC OPPORTUNITIES",
    description:
      "Joint ventures, business expansion, acquisitions, technology and projects.",
  },
  {
    number: "03",
    title: "EUROPEAN ACCESS",
    description:
      "Market entry, partner identification, business development and ecosystem access.",
  },
  {
    number: "04",
    title: "INTELLIGENCE",
    description:
      "Market perspectives, research and cross-border commercial insight.",
  },
];

const Arrow = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="transition-transform duration-300 group-hover:translate-x-1"
  >
    <path
      d="M2 8H13"
      stroke="currentColor"
      strokeWidth="1"
    />
    <path
      d="M9 4L13 8L9 12"
      stroke="currentColor"
      strokeWidth="1"
    />
  </svg>
);

export default function Focus() {
  return (
    <section className="bg-[#260506] text-[#f2e9df]">
      <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 lg:px-12 lg:py-20">

        {/* Section Header */}
        <div className="mb-10 flex items-center gap-4">
          <span className="text-[12px] font-medium uppercase tracking-[0.28em] text-[#e9dfd4]">
            Our Focus
          </span>

          <span className="h-px w-8 bg-[#9d8064]" />
        </div>

        {/* Focus Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {focusItems.map((item, index) => (
            <article
              key={item.number}
              className={`
                group
                min-h-[220px]
                px-0 py-2
                lg:px-8
                ${
                  index > 0
                    ? "border-t border-[#754d3e] md:border-t-0 md:border-l"
                    : ""
                }
              `}
            >
              {/* Number */}
              <span className="mb-6 block text-[12px] tracking-[0.2em] text-[#b79572]">
                {item.number}
              </span>

              {/* Title */}
              <h3 className="max-w-[190px] text-[15px] font-medium leading-[1.35] tracking-[0.2em] text-[#f1e7dc]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-5 max-w-[225px] text-[13px] font-light leading-[1.65] tracking-[0.02em] text-[#bba9a0]">
                {item.description}
              </p>

              {/* Explore */}
              <a
                href="#"
                className="group mt-7 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[#e6d9cc]"
              >
                <span>Explore</span>
                <Arrow />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}