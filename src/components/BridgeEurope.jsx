import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const bridgeItems = [
  {
    number: "01",
    title: "ENTER",
    text: "Market entry and European positioning.",
  },
  {
    number: "02",
    title: "CONNECT",
    text: "Partners, businesses and ecosystem relationships.",
  },
  {
    number: "03",
    title: "GROW",
    text: "Commercial development and long-term European presence.",
  },
];

function BridgeEurope() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const cardsRef = useRef([]);
  const lineRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const cards = cardsRef.current;
    const line = lineRef.current;

    if (!section || !content || !cards.length || !line) return;

    const ctx = gsap.context(() => {
      const eyebrow = content.querySelector(".bridge-eyebrow");
      const heading = content.querySelector(".bridge-heading");
      const paragraph = content.querySelector(".bridge-paragraph");
      const link = content.querySelector(".bridge-link");

      // Initial states
      gsap.set([eyebrow, heading, paragraph, link], {
        opacity: 0,
        y: 20,
      });

      gsap.set(cards, {
        opacity: 0,
        y: 20,
      });

      gsap.set(line, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      // Reveal animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          once: true,
        },
      });

      tl.to(eyebrow, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      })
        .to(
          heading,
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out",
          },
          "-=0.2"
        )
        .to(
          paragraph,
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: "power2.out",
          },
          "-=0.35"
        )
        .to(
          link,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.25"
        )
        .to(
          line,
          {
            scaleX: 1,
            duration: 0.7,
            ease: "power2.out",
          },
          "-=0.2"
        )
        .to(
          cards,
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.4"
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="bridge2europe"
      className="overflow-hidden bg-[#DED0C7] text-[#191113]"
    >
      <div className="mx-auto max-w-360 px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-14">

          {/* =====================================
              LEFT — INTRO
          ====================================== */}
          <div ref={contentRef}>

            {/* Eyebrow */}
            <div className="bridge-eyebrow flex items-center gap-4">
              <span className="text-[12px] font-semibold uppercase tracking-[0.22em]">
                BRIDGEEUROPE™
              </span>

              <span className="h-px w-10 bg-[#B79A69]" />
            </div>

            {/* Heading */}
            <h2
              className="
                bridge-heading
                mt-6
                max-w-100
                font-serif
                text-[2.8rem]
                font-medium
                leading-[0.92]
                tracking-tight
                sm:text-[3.4rem]
              "
            >
              Your Gateway
              <br />
              to Europe.
            </h2>

            {/* Description */}
            <p
              className="
                bridge-paragraph
                mt-5
                max-w-105
                text-[13px]
                leading-[1.7]
                text-[#191113]/68
              "
            >
              A strategic market-access platform within the KHĀNATE
              ecosystem, connecting international capital and
              businesses with opportunity across Europe.
            </p>

            {/* CTA */}
            <a
              href="#private-access"
              className="
                bridge-link
                group
                mt-6
                inline-flex
                items-center
                gap-4
                text-[11px]
                font-bold
                uppercase
                tracking-[0.18em]
                transition-colors
                duration-300
                hover:text-[#B79A69]
              "
            >
              EXPLORE BRIDGEEUROPE™

              <span
                className="
                  text-[16px]
                  font-light
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </a>
          </div>

          {/* =====================================
              RIGHT — EDITORIAL PROCESS
          ====================================== */}
          <div className="relative">

            {/* Connecting Line */}
            <div
              ref={lineRef}
              className="
                absolute
                left-0
                right-0
                top-[17px]
                hidden
                h-px
                bg-[#B79A69]/55
                sm:block
              "
            />

            <div className="grid sm:grid-cols-3">

              {bridgeItems.map((item, index) => (
                <article
                  key={item.number}
                  ref={(el) => {
                    cardsRef.current[index] = el;
                  }}
                  className={`
                    group
                    relative
                    py-5
                    sm:px-5
                    sm:py-0
                    lg:px-6
                    ${
                      index > 0
                        ? "border-t border-[#191113]/12 sm:border-t-0 sm:border-l"
                        : ""
                    }
                  `}
                >

                  {/* Number */}
                  <div
                    className="
                      relative
                      z-10
                      mb-5
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#B79A69]
                      bg-[#DED0C7]
                    "
                  >
                    <span className="text-[9px] font-medium tracking-[0.14em] text-[#817173]">
                      {item.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      text-[14px]
                      font-semibold
                      uppercase
                      tracking-[0.22em]
                      transition-colors
                      duration-300
                      group-hover:text-[#B79A69]
                    "
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-3
                      max-w-48
                      text-[12px]
                      leading-[1.6]
                      text-[#191113]/62
                    "
                  >
                    {item.text}
                  </p>

                  {/* Editorial Accent */}
                  <span
                    className="
                      mt-5
                      block
                      h-px
                      w-6
                      bg-[#B79A69]
                      transition-all
                      duration-500
                      group-hover:w-10
                    "
                  />
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BridgeEurope;