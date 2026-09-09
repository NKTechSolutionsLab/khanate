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
  const contentRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const cards = cardsRef.current;

    if (!section || !content || !cards.length) return;

    const ctx = gsap.context(() => {
      const eyebrow = content.querySelector(".insights-eyebrow");
      const heading = content.querySelector(".insights-heading");
      const paragraph = content.querySelector(".insights-paragraph");
      const link = content.querySelector(".insights-link");

      gsap.set([eyebrow, heading, paragraph, link], {
        opacity: 0,
        y: 22,
      });

      gsap.set(cards, {
        opacity: 0,
        y: 25,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          once: true,
        },
      });

      tl.to(eyebrow, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      })
        .to(
          heading,
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
          },
          "-=0.35"
        )
        .to(
          paragraph,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
          },
          "-=0.45"
        )
        .to(
          link,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.35"
        )
        .to(
          cards,
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.12,
            ease: "power2.out",
          },
          "-=0.45"
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="insights"
      className="overflow-hidden bg-[#F5EEE7] text-[#191113]"
    >
      <div className="mx-auto max-w-360 px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          {/* LEFT CONTENT */}
          <div ref={contentRef}>
            <div className="insights-eyebrow flex items-center gap-4">
              <span className="text-[12px] font-semibold uppercase tracking-[0.2em]">
                INSIGHTS
              </span>

              <span className="h-px w-10 bg-[#B79A69]" />
            </div>

            <h2 className="insights-heading mt-7 max-w-100 font-serif text-[2.8rem] font-medium leading-[0.92] tracking-tight sm:text-[3.4rem]">
              Perspective
              <br />
              Before Position.
            </h2>

            <p className="insights-paragraph mt-6 max-w-90 text-[12px] leading-[1.65] text-[#191113]/65 sm:text-[13px]">
              Thoughts, analysis and perspectives on capital, markets and
              opportunity across Europe.
            </p>

            <a
              href="#private-access"
              className="insights-link group mt-7 inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.18em]"
            >
              EXPLORE INSIGHTS

              <span className="text-[15px] font-light transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* INSIGHT CARDS */}
          <div className="grid gap-4 sm:grid-cols-3">
            {insights.map((item, index) => (
              <article
                key={item.title}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="group relative min-h-55 overflow-hidden sm:min-h-65"
              >
                <img
                  src={item.img}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-[#130207]/60 transition-colors duration-300 group-hover:bg-[#130207]/45" />

                <div className="relative flex h-full flex-col justify-end p-5 text-[#F5EEE7]">
                  <h3 className="max-w-45 font-serif text-[1.3rem] leading-[1]">
                    {item.title}
                  </h3>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#D8BF8E]">
                      {item.category}
                    </span>

                    <span className="text-[18px] font-light transition-transform duration-300 group-hover:translate-x-1">
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