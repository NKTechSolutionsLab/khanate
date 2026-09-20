import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
      "Market entry, partner identification, business development and market access.",
  },
  {
    number: "04",
    title: "INTELLIGENCE",
    description:
      "Market perspectives, research and cross-border commercial insight.",
  },
];

export default function Focus() {
  const sectionRef = useRef(null);
  const introRef = useRef(null);
  const rowsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const intro = introRef.current;
    const rows = rowsRef.current.filter(Boolean);

    if (!section || !intro || !rows.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        intro,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        rows,
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 68%",
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
      id="focus"
      className="overflow-hidden bg-[#260506] text-[#F2E9DF]"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">

        {/* INTRO */}
        <div
          ref={introRef}
          className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24"
        >
          {/* LEFT */}
          <div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-[11px] tracking-[0.16em] text-[#B79572]">
                03
              </span>

              <span className="h-px w-10 bg-[#B79572]" />

              <span className="text-[13px] font-semibold uppercase tracking-[0.24em] text-[#E9DFD4]">
                OUR FOCUS
              </span>
            </div>

            <div className="mt-12 hidden lg:block">
              <span className="font-serif text-[8rem] leading-none tracking-[-0.09em] text-[#B79A69]/[0.055]">
                04
              </span>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <h2 className="max-w-[850px] font-serif text-[3rem] leading-[0.94] tracking-[-0.055em] sm:text-[3.8rem] lg:text-[4.6rem]">
              Where capital,
              <br />
              access and{" "}
              <span className="text-[#B79572]">
                intelligence
              </span>{" "}
              meet.
            </h2>

            <p className="mt-7 max-w-[560px] text-[18px] leading-[1.85] text-[#C7B5AC]/70 sm:text-[15px]">
              KHĀNATE operates across a concentrated set of commercial,
              investment and cross-border domains, connecting opportunities
              with the capital, relationships and insight required to move
              them forward.
            </p>
          </div>
        </div>

        {/* FOCUS INDEX */}
        <div className="mt-20 border-t border-[#E8DDD3]/12 lg:mt-24">
          {focusItems.map((item, index) => (
            <article
              key={item.number}
              ref={(el) => {
                rowsRef.current[index] = el;
              }}
              className="group relative border-b border-[#E8DDD3]/12"
            >
              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-full
                  w-px
                  origin-top
                  scale-y-0
                  bg-[#D8BF8E]
                  transition-transform
                  duration-500
                  group-hover:scale-y-100
                "
              />

              <div className="grid items-center gap-7 py-8 transition-all duration-500 group-hover:px-4 sm:py-10 lg:grid-cols-[100px_1fr_1.15fr_40px] lg:gap-10 lg:py-12">

                {/* NUMBER */}
                <div>
                  <span
                    className="
                      font-mono
                      text-[11px]
                      tracking-[0.16em]
                      text-[#B79572]/65
                      transition-colors
                      duration-300
                      group-hover:text-[#D8BF8E]
                    "
                  >
                    {item.number}
                  </span>
                </div>

                {/* TITLE */}
                <div>
                  <h3
                    className="
                      font-serif
                      text-[1.8rem]
                      leading-none
                      tracking-[-0.035em]
                      text-[#F1E7DC]
                      transition-colors
                      duration-300
                      group-hover:text-[#D8BF8E]
                      sm:text-[2.15rem]
                    "
                  >
                    {item.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <div>
                  <p className="max-w-[480px] text-[20px] leading-[1.75] text-[#C7B5AC]/65 transition-colors duration-300 group-hover:text-[#D9C9C1] sm:text-[14px]">
                    {item.description}
                  </p>
                </div>

                {/* ARROW */}
                <div className="hidden justify-end lg:flex">
                  <span
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      text-[18px]
                      text-[#B79572]/50
                      transition-all
                      duration-500
                      group-hover:translate-x-1
                      group-hover:text-[#D8BF8E]
                    "
                  >
                    ↗
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* FOOTER LINE */}
        <div className="mt-6 flex items-center justify-between">
          <span className="text-[15px] font-semibold uppercase tracking-[0.2em] text-[#B79572]">
            KHĀNATE
          </span>

          <span className="hidden text-[12px] uppercase tracking-[0.16em] text-[#C7B5AC]/40 sm:block">
            CAPITAL · ACCESS · INTELLIGENCE · EUROPE
          </span>
        </div>
      </div>
    </section>
  );
}