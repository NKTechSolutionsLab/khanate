import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import eumarket from "../images/market.png";
import strategy from "../images/strategy.png";
import geo from "../images/geo.png";

gsap.registerPlugin(ScrollTrigger);

const insights = [
  {
    title: "Europe Beyond the Headline",
    category: "MARKETS",
    img: eumarket,
  },
  {
    title: "Why Strategic Access Matters",
    category: "STRATEGY",
    img: strategy,
  },
  {
    title: "Riga and the Northern Corridor",
    category: "GEOGRAPHY",
    img: geo,
  },
];

function Insights() {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const items = itemsRef.current.filter(Boolean);

    if (!section || !items.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: 22,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            once: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="insights"
      className="bg-[#F5EEE7] text-[#191113]"
    >
      <div className="mx-auto max-w-360 px-6 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16 xl:px-16">

        {/* =========================================================
            HEADER
        ========================================================== */}

        <div className="flex flex-col gap-5 border-b border-[#191113]/20 pb-7 sm:flex-row sm:items-end sm:justify-between">

          <div>

            <div className="flex items-center gap-3">

              <span className="text-[18px] font-semibold uppercase tracking-[0.22em] text-[#A06A52]">
                INSIGHTS
              </span>

              <span className="h-px w-8 bg-[#B79A69]" />

            </div>

            {/* KEPT SAME SIZE */}

            <h2 className="mt-4 font-serif text-[2.35rem] leading-[0.98] tracking-[-0.035em] sm:text-[2.8rem]">
              Perspective before position.
            </h2>

          </div>

          <div className="flex items-center gap-5 sm:pb-1">

            {/* INCREASED SIZE + VISIBILITY */}

            <p className="hidden max-w-[300px] text-[16px] leading-[1.7] text-[#191113]/70 md:block">
              Thoughts on capital, markets and opportunity across Europe.
            </p>

            {/* INCREASED SIZE + VISIBILITY */}

            <a
              href="#private-access"
              className="group inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#191113]/85 transition-colors duration-300 hover:text-[#A06A52]"
            >
              EXPLORE

              <span className="text-[16px] font-light transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

          </div>

        </div>


        {/* =========================================================
            INSIGHTS
        ========================================================== */}

        <div className="grid sm:grid-cols-3">

          {insights.map((item, index) => (
            <article
              key={item.title}
              ref={(el) => {
                itemsRef.current[index] = el;
              }}
              className={`
    group
    mb-4
    overflow-hidden
    rounded-[2px]
    border
    border-[#191113]/12
    bg-[#F0E7DE]
    px-4
    py-4
    shadow-[0_8px_30px_rgba(25,17,19,0.04)]
    last:mb-0

    sm:mb-0
    sm:rounded-none
    sm:border-0
    sm:border-b
    sm:border-[#191113]/20
    sm:bg-transparent
    sm:px-6
    sm:py-7
    sm:shadow-none

    ${index > 0
                  ? "sm:border-l sm:border-[#191113]/20"
                  : ""
                }

    ${index === 0
                  ? "sm:pl-0"
                  : ""
                }

    ${index === insights.length - 1
                  ? "sm:pr-0"
                  : ""
                }
  `}
            >
              <div className="grid grid-cols-1 gap-0 sm:block">

                {/* IMAGE */}
                <div className="aspect-[16/9] overflow-hidden sm:aspect-[1.5/1]">
                  <img
                    src={item.img}
                    alt=""
                    aria-hidden="true"
                    className="
          h-full
          w-full
          object-cover
          transition-transform
          duration-700
          group-hover:scale-[1.04]
        "
                  />
                </div>

                {/* CONTENT */}
                <div className="flex flex-col justify-between pt-4 sm:mt-5 sm:pt-0">

                  <div>

                    <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#A06A52]">
                      {item.category}
                    </span>

                    <h3 className="mt-2 max-w-[300px] font-serif text-[1.35rem] leading-[1.05] tracking-[-0.02em] sm:text-[1.5rem]">
                      {item.title}
                    </h3>

                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-[#191113]/10 pt-3 sm:mt-6 sm:border-0 sm:pt-0">

                    <span className="text-[11px] uppercase tracking-[0.16em] text-[#191113]/70">
                      ARTICLE
                    </span>

                    <span className="text-[17px] font-light text-[#191113]/70 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#A06A52]">
                      →
                    </span>

                  </div>

                </div>

              </div>
            </article>
          ))}

        </div>


        {/* =========================================================
            FOOTER
        ========================================================== */}

        <div className="flex items-center justify-between pt-5">

          {/* INCREASED SIZE + VISIBILITY */}

          <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#191113]/55">
            KHĀNATE
          </span>

          {/* INCREASED SIZE + VISIBILITY */}

          <span className="text-[10px] uppercase tracking-[0.16em] text-[#191113]/50">
            MARKETS · STRATEGY · GEOGRAPHY
          </span>

        </div>

      </div>
    </section>
  );
}

export default Insights;