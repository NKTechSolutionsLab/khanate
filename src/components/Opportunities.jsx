import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const opportunities = [
  {
    number: "01",
    category: "REAL ESTATE",
    title: "Strategic Development Opportunity",
    description:
      "A selected development opportunity positioned around European property, investment and long-term value creation.",
    location: "RIGA, LATVIA",
    status: "PRIVATE REVIEW",
    access: "BY QUALIFICATION",
  },
  {
    number: "02",
    category: "INFRASTRUCTURE",
    title: "Strategic Partnership Opportunity",
    description:
      "A partnership opportunity involving strategic relationships, commercial alignment and infrastructure-led growth across Central Europe.",
    location: "CENTRAL EUROPE",
    status: "PRIVATE REVIEW",
    access: "BY QUALIFICATION",
  },
  {
    number: "03",
    category: "INDUSTRIALS",
    title: "Expansion & Modernisation",
    description:
      "An industrial opportunity focused on expansion, modernisation and connecting established operations with new strategic possibilities.",
    location: "WESTERN EUROPE",
    status: "PRIVATE REVIEW",
    access: "BY QUALIFICATION",
  },
];

function Arrow() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-transform duration-500 group-hover:translate-x-1"
    >
      <path d="M2 8H13" stroke="currentColor" strokeWidth="1" />
      <path d="M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function Opportunities() {
  const sectionRef = useRef(null);
  const gatewayRef = useRef(null);
  const mobileGatewayRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const active = opportunities[activeIndex];

  /* -------------------------------------------------------------
     SECTION REVEAL
  -------------------------------------------------------------- */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const items = section.querySelectorAll(".opp-reveal");

      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
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

  /* -------------------------------------------------------------
     ACTIVE OPPORTUNITY TRANSITION
  -------------------------------------------------------------- */

  useEffect(() => {
    const desktopGateway = gatewayRef.current;
    const mobileGateway = mobileGatewayRef.current;

    const targets = [desktopGateway, mobileGateway].filter(Boolean);

    if (!targets.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        {
          opacity: 0.4,
          y: 10,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: "power2.out",
          clearProps: "transform",
        }
      );
    });

    return () => ctx.revert();
  }, [activeIndex]);

  return (
    <section
      ref={sectionRef}
      id="opportunities"
      className="overflow-hidden bg-[#22050B] text-[#F5EEE7]"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">

        {/* =========================================================
            INTRO
        ========================================================== */}

        <div className="opp-reveal">
          <div className="flex items-center justify-between gap-6">

            <div className="flex items-center gap-4">
              <span className="font-mono text-[11px] tracking-[0.16em] text-[#B79A69]">
                04
              </span>

              <span className="h-px w-10 bg-[#B79A69]" />

              <span className="text-[13px] font-semibold uppercase tracking-[0.25em]">
                SELECTED OPPORTUNITIES
              </span>
            </div>

            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B79A69] sm:block">
              PRIVATE ACCESS
            </span>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">

            <h2 className="max-w-[760px] font-serif text-[3rem] leading-[0.94] tracking-[-0.05em] sm:text-[4rem] lg:text-[4.7rem]">
              The right opportunity
              <br />
              begins with{" "}
              <span className="text-[#B79A69]">
                access.
              </span>
            </h2>

            <p className="max-w-[370px] text-[16px] leading-[1.85] text-[#C5B2AA] sm:text-[17px]">
              A selective presentation of opportunities where capital,
              relationships and European access create a credible basis
              for engagement.
            </p>
          </div>
        </div>

        {/* =========================================================
            GATEWAY
        ========================================================== */}

        <div className="opp-reveal mt-14 lg:mt-20">

          <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-10">

            {/* =====================================================
                OPPORTUNITY ENTRANCE LIST
            ====================================================== */}

            <div className="border-t border-[#B79A69]/25">

              <div className="border-b border-[#B79A69]/15 py-5">
                <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#8E7875]">
                  AVAILABLE ENTRY POINTS
                </span>
              </div>

              {opportunities.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                  <div key={item.number}>

                    {/* =================================================
                        OPPORTUNITY SELECTOR
                    ================================================== */}

                    <button
                      type="button"
                      onMouseEnter={() => setActiveIndex(index)}
                      onFocus={() => setActiveIndex(index)}
                      onClick={() => setActiveIndex(index)}
                      className={`
                        group
                        relative
                        block
                        w-full
                        border-b
                        border-[#B79A69]/15
                        py-5
                        text-left
                        transition-all
                        duration-500
                        sm:py-8
                        ${
                          isActive
                            ? "pl-5"
                            : "pl-0"
                        }
                      `}
                    >
                      {/* active vertical indicator */}
                      <span
                        className={`
                          absolute
                          bottom-0
                          left-0
                          top-0
                          w-[2px]
                          origin-center
                          bg-[#B79A69]
                          transition-transform
                          duration-500
                          ${
                            isActive
                              ? "scale-y-100"
                              : "scale-y-0"
                          }
                        `}
                      />

                      <div className="flex items-start justify-between gap-5">

                        <div>

                          <div className="flex items-center gap-3">
                            <span
                              className={`
                                font-mono
                                text-[11px]
                                tracking-[0.16em]
                                transition-colors
                                duration-300
                                ${
                                  isActive
                                    ? "text-[#B79A69]"
                                    : "text-[#F5EEE7]/35"
                                }
                              `}
                            >
                              {item.number}
                            </span>

                            <span className="h-px w-5 bg-[#B79A69]/40" />

                            <span
                              className={`
                                text-[12px]
                                font-semibold
                                uppercase
                                tracking-[0.2em]
                                transition-colors
                                duration-300
                                ${
                                  isActive
                                    ? "text-[#D8BF8E]"
                                    : "text-[#F5EEE7]/45"
                                }
                              `}
                            >
                              {item.category}
                            </span>
                          </div>

                          <h3
                            className={`
                              mt-4
                              max-w-[420px]
                              font-serif
                              text-[1.55rem]
                              leading-[1.03]
                              tracking-[-0.025em]
                              transition-all
                              duration-500
                              sm:mt-5
                              sm:text-[2.2rem]
                              ${
                                isActive
                                  ? "text-[#F5EEE7]"
                                  : "text-[#F5EEE7]/55"
                              }
                            `}
                          >
                            {item.title}
                          </h3>

                        </div>

                        <span
                          className={`
                            mt-1
                            hidden
                            text-[18px]
                            font-light
                            transition-all
                            duration-500
                            sm:block
                            ${
                              isActive
                                ? "translate-x-0 text-[#B79A69] opacity-100"
                                : "-translate-x-2 text-[#F5EEE7] opacity-0"
                            }
                          `}
                        >
                          →
                        </span>

                      </div>
                    </button>

                    {/* =================================================
                        MOBILE ACTIVE OPPORTUNITY DETAILS

                        This is intentionally rendered immediately
                        beneath the active option on mobile.
                    ================================================== */}

                    {isActive && (
                      <div
                        ref={mobileGatewayRef}
                        className="mt-6 mb-8 lg:hidden"
                      >
                        <div className="relative overflow-hidden border border-[#B79A69]/25 bg-[#F0E7DE] text-[#191113]">

                          {/* top marker */}
                          <div className="flex items-center justify-between border-b border-[#191113]/10 px-5 py-4">
                            <div className="flex items-center gap-3">
                              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A06A52]">
                                {active.category}
                              </span>

                              <span className="h-px w-5 bg-[#B79A69]" />
                            </div>

                            <span className="font-mono text-[10px] tracking-[0.15em] text-[#A06A52]/70">
                              {active.number}
                            </span>
                          </div>

                          {/* content */}
                          <div className="p-6">

                            <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#191113]/40">
                              SELECTED OPPORTUNITY
                            </span>

                            <h3 className="mt-4 font-serif text-[2rem] leading-[0.95] tracking-[-0.04em]">
                              {active.title}
                            </h3>

                            <p className="mt-5 text-[14px] leading-[1.75] text-[#191113]/60">
                              {active.description}
                            </p>

                            {/* meta */}
                            <div className="mt-7 grid grid-cols-2 gap-5 border-t border-[#191113]/12 pt-5">

                              <div>
                                <span className="block text-[8px] font-semibold uppercase tracking-[0.18em] text-[#191113]/35">
                                  LOCATION
                                </span>

                                <span className="mt-2 block text-[10px] font-semibold uppercase tracking-[0.12em] text-[#191113]/70">
                                  {active.location}
                                </span>
                              </div>

                              <div>
                                <span className="block text-[8px] font-semibold uppercase tracking-[0.18em] text-[#191113]/35">
                                  ACCESS
                                </span>

                                <span className="mt-2 block text-[10px] font-semibold uppercase tracking-[0.12em] text-[#191113]/70">
                                  {active.access}
                                </span>
                              </div>

                            </div>

                            {/* CTA */}
                            <a
                              href="#private-access"
                              className="
                                group
                                mt-7
                                inline-flex
                                items-center
                                gap-3
                                border
                                border-[#5A101C]
                                bg-[#5A101C]
                                px-5
                                py-3.5
                                text-[10px]
                                font-semibold
                                uppercase
                                tracking-[0.2em]
                                text-[#F5EEE7]
                                transition-all
                                duration-300
                                hover:bg-[#260506]
                              "
                            >
                              ENTER ACCESS
                              <Arrow />
                            </a>

                          </div>
                        </div>
                      </div>
                    )}

                  </div>
                );
              })}

              {/* =====================================================
                  QUALIFIED ACCESS
              ====================================================== */}

              <div className="pt-7">

                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#B79A69]" />

                  <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#B79A69]">
                    QUALIFIED ACCESS
                  </span>
                </div>

                <p className="mt-4 max-w-[360px] text-[16px] leading-[1.75] text-[#F5EEE7]/45">
                  Opportunity information is shared selectively following
                  an initial qualification discussion.
                </p>
              </div>

            </div>

            {/* =====================================================
                DESKTOP OPEN DOOR
            ====================================================== */}

            <div className="relative hidden min-h-[570px] sm:min-h-[610px] lg:block">

              {/* architectural frame */}
              <div className="absolute inset-0 border border-[#B79A69]/25" />

              <div className="absolute inset-[14px] border border-[#B79A69]/10 sm:inset-[18px]" />

              {/* top architectural line */}
              <div className="absolute left-1/2 top-[-1px] h-[22px] w-px bg-[#B79A69]/60" />

              {/* gateway glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_42%,rgba(183,154,105,0.13),transparent_42%)]" />

              {/* doorway */}
              <div
                ref={gatewayRef}
                className="
                  absolute
                  bottom-[34px]
                  left-[9%]
                  right-[9%]
                  top-[34px]
                  overflow-hidden
                  border
                  border-[#B79A69]/35
                  bg-[#F0E7DE]
                  text-[#191113]
                  shadow-[0_25px_90px_rgba(0,0,0,0.28)]
                  sm:bottom-[48px]
                  sm:left-[13%]
                  sm:right-[13%]
                  sm:top-[48px]
                "
              >

                {/* light opening */}
                <div className="absolute inset-0 bg-[linear-gradient(145deg,#F7F1E9_0%,#E8DDD2_58%,#D9C9BC_100%)]" />

                {/* subtle perspective opening */}
                <div className="absolute bottom-0 right-[-18%] top-0 w-[48%] skew-x-[-12deg] bg-[#FFFFFF]/25" />

                {/* door-frame shadow */}
                <div className="absolute bottom-0 left-0 top-0 w-[1px] bg-[#A06A52]/30" />
                <div className="absolute bottom-0 right-0 top-0 w-[1px] bg-[#A06A52]/30" />

                {/* content */}
                <div className="relative flex h-full flex-col justify-between p-7 sm:p-10 lg:p-12">

                  {/* top */}
                  <div className="flex items-start justify-between">

                    <div>
                      <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#A06A52]">
                        {active.category}
                      </span>

                      <div className="mt-3 h-px w-10 bg-[#B79A69]" />
                    </div>

                    <span className="font-mono text-[12px] tracking-[0.16em] text-[#A06A52]/70">
                      {active.number}
                    </span>

                  </div>

                  {/* center */}
                  <div className="max-w-[620px]">

                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#191113]/70">
                      SELECTED OPPORTUNITY
                    </span>

                    <h3 className="mt-5 max-w-[570px] font-serif text-[2.7rem] leading-[0.96] tracking-[-0.04em] sm:text-[3.6rem] lg:text-[4.1rem]">
                      {active.title}
                    </h3>

                    <p className="mt-6 max-w-[540px] text-[16px] leading-[1.8] text-[#191113]/75 sm:text-[17px]">
                      {active.description}
                    </p>

                  </div>

                  {/* bottom */}
                  <div className="border-t border-[#191113]/15 pt-5">

                    <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

                      <div>
                        <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#191113]/90">
                          LOCATION
                        </span>

                        <span className="mt-2 block text-[12px] font-semibold uppercase tracking-[0.12em] text-[#191113]/70">
                          {active.location}
                        </span>
                      </div>

                      <div>
                        <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#191113]/90">
                          ACCESS
                        </span>

                        <span className="mt-2 block text-[12px] font-semibold uppercase tracking-[0.12em] text-[#191113]/70">
                          {active.access}
                        </span>
                      </div>

                      <a
                        href="#private-access"
                        className="
                          group
                          inline-flex
                          items-center
                          gap-3
                          border
                          border-[#5A101C]
                          bg-[#5A101C]
                          px-5
                          py-3.5
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.2em]
                          text-[#F5EEE7]
                          transition-all
                          duration-300
                          hover:bg-[#260506]
                        "
                      >
                        ENTER ACCESS
                        <Arrow />
                      </a>

                    </div>
                  </div>

                </div>
              </div>

              {/* lower threshold */}
              <div className="absolute bottom-[15px] left-1/2 flex -translate-x-1/2 items-center gap-3 sm:bottom-[22px]">
                <span className="h-px w-7 bg-[#B79A69]/50" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B79A69]">
                  STEP INSIDE
                </span>

                <span className="h-px w-7 bg-[#B79A69]/50" />
              </div>

            </div>

          </div>
        </div>

        {/* =========================================================
            CLOSING STATEMENT
        ========================================================== */}

        <div className="opp-reveal mt-10 border-t border-[#B79A69]/20 pt-7">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#B79A69]">
              KHĀNATE · PRIVATE CAPITAL · EUROPE
            </span>

            <span className="max-w-[470px] text-[12px] uppercase leading-[1.7] tracking-[0.14em] text-[#F5EEE7]/45 sm:text-right">
              Access is selective and subject to initial qualification.
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Opportunities;