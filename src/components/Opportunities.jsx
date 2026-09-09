import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    if (!section || !cards.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 18,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
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
      id="opportunities"
      className="bg-[#22050B] text-[#F5EEE7]"
    >
      <div className="mx-auto max-w-360 px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

        {/* Header */}
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="text-[12px] font-semibold uppercase tracking-[0.2em]">
              SELECTED OPPORTUNITIES
            </span>

            <span className="h-px w-10 bg-[#B79A69]" />
          </div>

          <span className="hidden text-[9px] font-semibold uppercase tracking-[0.18em] text-[#B79A69] sm:block">
            BY INVITATION ONLY
          </span>
        </div>

        {/* Opportunity Cards */}
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {opportunities.map((item, index) => (
            <article
              key={item.number}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="
                group
                border
                border-[#B79A69]/35
                bg-[#130207]/35
                p-6
                transition-all
                duration-300
                hover:border-[#B79A69]/75
                hover:bg-[#130207]/70
                sm:p-7
              "
            >
              {/* Number / Category */}
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-semibold tracking-[0.18em] text-[#B79A69]">
                  {item.number} / {item.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-7 max-w-65 font-serif text-[1.8rem] leading-[1] sm:text-[1.8rem]">
                {item.title}
              </h3>

              {/* Location */}
              <p className="mt-5 text-[8px] font-bold uppercase tracking-[0.2em] text-[#D8BF8E]">
                {item.location}
              </p>

              {/* Details */}
              <div className="mt-6 grid grid-cols-2 border-t border-[#F5EEE7]/10 pt-5">
                <div>
                  <span className="block text-[8px] font-semibold uppercase tracking-[0.18em] text-[#817173]">
                    STATUS
                  </span>

                  <span className="mt-2 block text-[10px] text-[#F5EEE7]/80">
                    Private Review
                  </span>
                </div>

                <div>
                  <span className="block text-[8px] font-semibold uppercase tracking-[0.18em] text-[#817173]">
                    ACCESS
                  </span>

                  <span className="mt-2 block text-[10px] text-[#F5EEE7]/80">
                    By Qualification
                  </span>
                </div>
              </div>

              {/* CTA */}
              <a
                href="#private-access"
                className="
                  mt-7
                  inline-flex
                  items-center
                  gap-3
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                "
              >
                VIEW OPPORTUNITY

                <span
                  className="
                    text-[14px]
                    font-light
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </a>
            </article>
          ))}
        </div>

        {/* Mobile Label */}
        <div className="mt-7 sm:hidden">
          <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#B79A69]">
            BY INVITATION ONLY
          </span>
        </div>

      </div>
    </section>
  );
}

export default Opportunities;