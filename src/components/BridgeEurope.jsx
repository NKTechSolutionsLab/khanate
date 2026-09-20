import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const networkNodes = [
  {
    id: "01",
    title: "INTERNATIONAL CAPITAL",
    position:
      "top-[8%] left-[2%] lg:left-[8%]",
    line:
      "top-[23%] left-[21%] w-[23%] rotate-[14deg] lg:top-[22%] lg:left-[20%] lg:w-[23%] lg:rotate-[14deg]",
  },
  {
    id: "02",
    title: "EUROPEAN BUSINESSES",
    position:
      "top-[2%] right-[2%] lg:right-[8%]",
    line:
      "top-[18%] right-[21%] w-[22%] -rotate-[13deg] lg:top-[17%] lg:right-[20%] lg:w-[22%] lg:-rotate-[12deg]",
  },
  {
    id: "03",
    title: "STRATEGIC PARTNERS",
    position:
      "bottom-[6%] left-[5%] lg:left-[14%]",
    line:
      "bottom-[22%] left-[25%] w-[22%] -rotate-[14deg] lg:bottom-[23%] lg:left-[25%] lg:w-[22%] lg:-rotate-[14deg]",
  },
  {
    id: "04",
    title: "FAMILY OFFICES",
    position:
      "bottom-[5%] right-[3%] lg:right-[11%]",
    line:
      "bottom-[19%] right-[23%] w-[22%] rotate-[13deg] lg:bottom-[20%] lg:right-[22%] lg:w-[22%] lg:rotate-[13deg]",
  },
];

const focusAreas = [
  {
    number: "01",
    title: "Investment Access",
    text: "Connecting international investors with relevant European opportunities.",
  },
  {
    number: "02",
    title: "Market Entry",
    text: "Creating pathways for businesses looking to establish or expand their European presence.",
  },
  {
    number: "03",
    title: "Strategic Introductions",
    text: "Bringing entrepreneurs, companies and potential partners into the same conversation.",
  },
  {
    number: "04",
    title: "Infrastructure",
    text: "Supporting access to relevant infrastructure-related investment interests through the wider network.",
  },
];

function BridgeEurope() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      /* -----------------------------
         GENERAL REVEALS
      ----------------------------- */

      gsap.utils.toArray(".be-reveal").forEach((el) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 28,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 84%",
              once: true,
            },
          }
        );
      });

      /* -----------------------------
         HERO NETWORK
      ----------------------------- */

      gsap.fromTo(
        ".be-network-line",
        {
          scaleX: 0,
          transformOrigin: "left center",
        },
        {
          scaleX: 1,
          duration: 1.1,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".be-network",
            start: "top 72%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".be-network-node",
        {
          scale: 0.8,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: ".be-network",
            start: "top 72%",
            once: true,
          },
        }
      );

      /* -----------------------------
         FOCUS ROWS
      ----------------------------- */

      gsap.fromTo(
        ".be-focus-row",
        {
          opacity: 0,
          x: -24,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.65,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".be-focus",
            start: "top 78%",
            once: true,
          },
        }
      );

      /* -----------------------------
         HISTORY TIMELINE
      ----------------------------- */

      const historySection = section.querySelector(".be-history");

      const historyItems = gsap.utils.toArray(
        ".be-history-item",
        historySection
      );

      const historyProgress = historySection?.querySelector(
        ".be-history-progress"
      );

      if (historySection && historyProgress && historyItems.length) {
        gsap.set(historyProgress, {
          scaleY: 0,
          transformOrigin: "top center",
        });

        historyItems.forEach((item) => {
          const circleFill = item.querySelector(
            ".be-history-circle-fill"
          );
          const card = item.querySelector(".be-history-card");
          const meta = item.querySelector(".be-history-meta");

          gsap.set(circleFill, {
            scale: 0,
            transformOrigin: "center center",
          });

          gsap.set(card, {
            opacity: 0,
            y: 34,
          });

          gsap.set(meta, {
            opacity: 0.45,
            x: -8,
          });
        });

        gsap.to(historyProgress, {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: historySection,
            start: "top 65%",
            end: "bottom 65%",
            scrub: true,
          },
        });

        historyItems.forEach((item) => {
          const circleFill = item.querySelector(
            ".be-history-circle-fill"
          );
          const card = item.querySelector(".be-history-card");
          const meta = item.querySelector(".be-history-meta");

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: item,
              start: "top 72%",
              end: "top 42%",
              scrub: true,
            },
          });

          tl.to(
            circleFill,
            {
              scale: 1,
              ease: "none",
              duration: 0.45,
            },
            0
          )
            .to(
              meta,
              {
                opacity: 1,
                x: 0,
                ease: "none",
                duration: 0.25,
              },
              0.05
            )
            .to(
              card,
              {
                opacity: 1,
                y: 0,
                ease: "power2.out",
                duration: 0.5,
              },
              0.12
            );
        });
      }

      /* -----------------------------
         FINAL
      ----------------------------- */

      gsap.fromTo(
        ".be-final-mark",
        {
          rotation: -25,
          scale: 0.8,
          opacity: 0,
        },
        {
          rotation: 0,
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: ".be-final",
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
      id="bridge2europe"
      className="overflow-hidden bg-[#E9DED4] text-[#191113]"
    >
      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#130207] text-[#F5EEE7]">
        {/* Architectural grid */}

        <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
          <div className="absolute inset-y-0 left-[18%] w-px bg-[#D8BF8E]" />
          <div className="absolute inset-y-0 left-[50%] w-px bg-[#D8BF8E]" />
          <div className="absolute inset-y-0 right-[18%] w-px bg-[#D8BF8E]" />

          <div className="absolute inset-x-0 top-[30%] h-px bg-[#D8BF8E]" />
          <div className="absolute inset-x-0 top-[62%] h-px bg-[#D8BF8E]" />
        </div>

        <div className="mx-auto max-w-360 px-6 pb-16 pt-28 sm:px-8 lg:px-12 lg:pb-20 lg:pt-36">
          {/* Top utility */}

          <div className="be-reveal flex items-center justify-between border-b border-[#F5EEE7]/10 pb-5">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#B79A69]" />

              <span className="text-[13px] font-semibold uppercase tracking-[0.23em] text-[#B79A69]">
                BRIDGEEUROPE™
              </span>
            </div>

            <span className="hidden text-[11px] uppercase tracking-[0.2em] text-[#F5EEE7]/45 sm:block">
              LATVIA · EUROPEAN UNION
            </span>
          </div>

          {/* Main hero */}

          <div className="grid gap-12 py-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-8 lg:py-20">
            <div className="be-reveal relative z-10 lg:pt-10">
              <p className="max-w-32 text-[12px] font-semibold uppercase leading-[1.7] tracking-[0.2em] text-[#B79A69]">
                CROSS-BORDER
                <br />
                ACCESS
                <br />
                CAPITAL
                <br />
                RELATIONSHIPS
              </p>

              <h1 className="mt-8 max-w-145 font-serif text-[4.2rem] font-medium leading-[0.87] tracking-[-0.035em] sm:text-[5.8rem] lg:text-[6.4rem]">
                Europe's
                <br />
                <span className="text-[#D8BF8E]">bridge</span>
                <br />
                to the world.
              </h1>

              <p className="mt-8 max-w-115 text-[17px] leading-[1.75] text-[#F5EEE7]/55 sm:text-[18px]">
                A strategic platform connecting international capital,
                European businesses, strategic partners and relevant
                opportunities across borders.
              </p>

              <div className="mt-10 flex items-center gap-5">
                <a
                  href="#private-access"
                  className="group inline-flex items-center gap-8 border border-[#B79A69] bg-[#5A101C] px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 hover:bg-[#B79A69] hover:text-[#191113]"
                >
                  <span>PRIVATE ACCESS</span>

                  <span className="text-[17px] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <span className="text-[13px] uppercase tracking-[0.18em] text-[#F5EEE7]/38">
                  01 / BRIDGE2EUROPE
                </span>
              </div>
            </div>

            {/* NETWORK GRAPHIC */}

            <div className="be-network relative min-h-[460px] lg:min-h-[560px]">

              {/* Central rings */}

              <div className="absolute left-1/2 top-1/2 z-0 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#B79A69]/30 sm:h-80 sm:w-80">
                <div className="absolute inset-7 rounded-full border border-[#B79A69]/20" />

                <div className="absolute inset-[22%] rounded-full bg-[#5A101C]/65 shadow-[0_0_100px_rgba(183,154,105,0.08)]" />

                <div className="absolute left-1/2 top-1/2 flex h-[136px] w-[136px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#B79A69] bg-[#130207] text-center sm:h-36 sm:w-36">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B79A69]">
                    BRIDGEEUROPE™
                  </span>

                  <span className="mt-2 font-serif text-[24px]">
                    ACCESS
                  </span>

                  <span className="mt-1 text-[11px] uppercase tracking-[0.18em] text-[#F5EEE7]/35">
                    CONNECTION
                  </span>
                </div>
              </div>

              {/* Orbit */}

              <div className="absolute left-1/2 top-1/2 z-0 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#B79A69]/20 sm:h-[460px] sm:w-[460px]" />

              {/* Network lines */}

              {networkNodes.map((node) => (
                <div
                  key={node.id}
                  className={`
                    be-network-line
                    pointer-events-none
                    absolute
                    z-10
                    block
                    h-px
                    bg-[#B79A69]/45
                    ${node.line}
                  `}
                />
              ))}

              {/* Nodes */}

              {networkNodes.map((node) => (
                <div
                  key={node.id}
                  className={`
                    be-network-node
                    absolute
                    z-20
                    ${node.position}
                  `}
                >
                  <div className="flex max-w-34 items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#B79A69]/70 text-[11px] text-[#B79A69]">
                      {node.id}
                    </span>

                    <span className="text-[13px] font-semibold uppercase leading-[1.5] tracking-[0.14em] text-[#F5EEE7]/70">
                      {node.title}
                    </span>
                  </div>
                </div>
              ))}

              {/* Bottom information */}

              <div className="absolute bottom-0 left-0 right-0 z-30 border-t border-[#F5EEE7]/10 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-[12px] uppercase tracking-[0.18em] text-[#F5EEE7]/38">
                    CAPITAL
                  </span>

                  <span className="mx-5 h-px flex-1 bg-[#F5EEE7]/10" />

                  <span className="text-[12px] uppercase tracking-[0.18em] text-[#F5EEE7]/38">
                    EUROPE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          NETWORK STRIP
      ====================================================== */}

      <section className="border-b border-[#191113]/10 bg-[#E2D6CC]">
        <div className="mx-auto max-w-360 px-6 sm:px-8 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "INTERNATIONAL CAPITAL"],
              ["02", "EUROPEAN ENTERPRISE"],
              ["03", "STRATEGIC PARTNERS"],
              ["04", "RELEVANT OPPORTUNITIES"],
            ].map(([number, title], index) => (
              <div
                key={number}
                className={`be-reveal group border-[#191113]/10 py-7 sm:px-6 lg:px-7 ${
                  index % 2 === 0 ? "sm:border-r" : ""
                } lg:border-r lg:first:pl-0 lg:last:border-r-0`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold tracking-[0.2em] text-[#A06A52]">
                    {number}
                  </span>

                  <span className="h-px w-7 bg-[#A06A52] transition-all duration-500 group-hover:w-12" />
                </div>

                <p className="mt-5 max-w-42 text-[12px] font-semibold uppercase leading-[1.6] tracking-[0.13em] text-[#191113]/70">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          INTRODUCTION
      ====================================================== */}

      <section className="bg-[#F0E7DE]">
        <div className="mx-auto max-w-360 px-6 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
          <div className="be-reveal relative max-w-250">
            <span className="absolute -left-1 top-1 h-2 w-2 rounded-full bg-[#A06A52]" />

            <p className="pl-7 font-serif text-[2.5rem] leading-[1.05] tracking-[-0.02em] text-[#191113] sm:text-[3.6rem] lg:text-[4.5rem]">
              Bridge2Europe is built around a simple idea:
              <span className="text-[#A06A52]">
                {" "}
                the right opportunity often begins with the right
                relationship.
              </span>
            </p>
          </div>

          <div className="mt-12 grid border-t border-[#191113]/14 sm:grid-cols-3">
            {/* MARKET */}
            <div className="be-reveal group relative py-8 sm:pr-10 lg:py-9 lg:pr-14">
              <span className="pointer-events-none absolute right-6 top-5 font-serif text-[4.5rem] leading-none tracking-[-0.08em] text-[#A06A52]/[0.07] transition-all duration-500 group-hover:text-[#A06A52]/[0.12] lg:right-10">
                01
              </span>

              <div className="relative">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[10px] tracking-[0.16em] text-[#A06A52]">
                    01
                  </span>

                  <span className="h-px w-10 bg-[#A06A52]/60 transition-all duration-500 group-hover:w-16 group-hover:bg-[#A06A52]" />
                </div>

                <span className="mt-7 block text-[12px] font-semibold uppercase tracking-[0.22em] text-[#A06A52]">
                  MARKET
                </span>

                <p className="mt-5 max-w-[340px] text-[17px] leading-[1.75] text-[#191113]/72 transition-colors duration-300 group-hover:text-[#191113]/90 sm:text-[18px]">
                  European businesses seeking access to international markets.
                </p>

                <div className="mt-8 h-px w-12 bg-[#191113]/12 transition-all duration-500 group-hover:w-20 group-hover:bg-[#A06A52]/50" />
              </div>
            </div>

            {/* CAPITAL */}
            <div className="be-reveal group relative border-t border-[#191113]/12 py-8 sm:border-l sm:border-t-0 sm:px-10 lg:py-9 lg:px-14">
              <span className="pointer-events-none absolute right-6 top-5 font-serif text-[4.5rem] leading-none tracking-[-0.08em] text-[#A06A52]/[0.07] transition-all duration-500 group-hover:text-[#A06A52]/[0.12] lg:right-10">
                02
              </span>

              <div className="relative">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[10px] tracking-[0.16em] text-[#A06A52]">
                    02
                  </span>

                  <span className="h-px w-10 bg-[#A06A52]/60 transition-all duration-500 group-hover:w-16 group-hover:bg-[#A06A52]" />
                </div>

                <span className="mt-7 block text-[12px] font-semibold uppercase tracking-[0.22em] text-[#A06A52]">
                  CAPITAL
                </span>

                <p className="mt-5 max-w-[340px] text-[17px] leading-[1.75] text-[#191113]/72 transition-colors duration-300 group-hover:text-[#191113]/90 sm:text-[18px]">
                  Investors and family offices looking toward relevant opportunities
                  in Europe.
                </p>

                <div className="mt-8 h-px w-12 bg-[#191113]/12 transition-all duration-500 group-hover:w-20 group-hover:bg-[#A06A52]/50" />
              </div>
            </div>

            {/* CONNECTION */}
            <div className="be-reveal group relative border-t border-[#191113]/12 py-8 sm:border-l sm:border-t-0 sm:px-10 lg:py-9 lg:pl-14">
              <span className="pointer-events-none absolute right-6 top-5 font-serif text-[4.5rem] leading-none tracking-[-0.08em] text-[#A06A52]/[0.07] transition-all duration-500 group-hover:text-[#A06A52]/[0.12] lg:right-10">
                03
              </span>

              <div className="relative">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[10px] tracking-[0.16em] text-[#A06A52]">
                    03
                  </span>

                  <span className="h-px w-10 bg-[#A06A52]/60 transition-all duration-500 group-hover:w-16 group-hover:bg-[#A06A52]" />
                </div>

                <span className="mt-7 block text-[12px] font-semibold uppercase tracking-[0.22em] text-[#A06A52]">
                  CONNECTION
                </span>

                <p className="mt-5 max-w-[340px] text-[17px] leading-[1.75] text-[#191113]/72 transition-colors duration-300 group-hover:text-[#191113]/90 sm:text-[18px]">
                  Entrepreneurs and businesses seeking strategic partners across
                  borders.
                </p>

                <div className="mt-8 h-px w-12 bg-[#191113]/12 transition-all duration-500 group-hover:w-20 group-hover:bg-[#A06A52]/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          FOCUS — INTELLIGENCE BOARD
      ====================================================== */}

      <section className="be-focus bg-[#130207] text-[#F5EEE7]">
        <div className="mx-auto max-w-360 px-6 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
          <div className="flex flex-col justify-between gap-10 border-b border-[#F5EEE7]/10 pb-12 lg:flex-row lg:items-end">
            <div className="be-reveal">
              <span className="text-[13px] font-semibold uppercase tracking-[0.22em] text-[#B79A69]">
                AREAS OF FOCUS
              </span>

              <h2 className="mt-5 max-w-160 font-serif text-[3.2rem] leading-[0.92] tracking-[-0.03em] sm:text-[4.8rem]">
                Where the
                <br />
                network moves.
              </h2>
            </div>

            <div className="be-reveal max-w-70">
              <p className="text-[13px] uppercase leading-[1.8] tracking-[0.12em] text-[#F5EEE7]/35">
                INVESTMENT
                <br />
                MARKET ACCESS
                <br />
                RELATIONSHIPS
                <br />
                INFRASTRUCTURE
              </p>
            </div>
          </div>

          <div className="mt-12">
            {focusAreas.map((item) => (
              <article
                key={item.number}
                className="be-focus-row group grid gap-5 border-b border-[#F5EEE7]/10 py-7 sm:grid-cols-[70px_270px_1fr] sm:items-center"
              >
                <span className="text-[11px] tracking-[0.18em] text-[#B79A69]">
                  {item.number}
                </span>

                <h3 className="font-serif text-[26px] transition-transform duration-500 group-hover:translate-x-2 sm:text-[32px]">
                  {item.title}
                </h3>

                <div className="flex items-center gap-5">
                  <span className="hidden h-px w-8 bg-[#B79A69] sm:block" />

                  <p className="max-w-130 text-[16px] leading-[1.7] text-[#F5EEE7]/55">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          HISTORY
      ====================================================== */}

      <section className="be-history bg-[#E9DED4]">
        <div className="mx-auto max-w-360 px-6 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            {/* HISTORY INTRO */}

            <div className="be-reveal lg:sticky lg:top-32 lg:h-fit">
              <span className="text-[13px] font-semibold uppercase tracking-[0.22em] text-[#A06A52]">
                THE HISTORY
              </span>

              <h2 className="mt-5 max-w-85 font-serif text-[3.2rem] leading-[0.9] tracking-[-0.03em] sm:text-[4.7rem]">
                From
                <br />
                Bridge2Europe
                <br />
                to today.
              </h2>

              <p className="mt-7 max-w-75 text-[15px] leading-[1.75] text-[#191113]/75">
                A European platform shaped around relationships,
                access and cross-border opportunity.
              </p>
            </div>

            {/* TIMELINE */}

            <div className="relative">
              <div className="absolute bottom-0 left-[11px] top-0 w-px bg-[#A06A52]/20" />

              <div
                className="be-history-progress absolute left-[11px] top-0 w-px bg-[#A06A52]"
                style={{ height: "100%" }}
              />

              <div className="space-y-16 sm:space-y-[4.5rem]">
                {/* 01 — PLATFORM */}

                <article className="be-history-item relative pl-10 sm:pl-14">
                  <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-[#A06A52] bg-[#E9DED4]">
                    <div className="be-history-circle-fill h-2.5 w-2.5 scale-0 rounded-full bg-[#A06A52]" />
                  </div>

                  <div className="be-history-card">
                    <div className="be-history-meta">
                      <span className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[#A06A52]">
                        PLATFORM
                      </span>

                      <span className="mt-2 block text-[10px] uppercase tracking-[0.18em] text-[#191113]">
                        01 / ORIGIN
                      </span>
                    </div>

                    <h3 className="mt-5 max-w-125 font-serif text-[31px] leading-[1.05]">
                      Bridge2Europe
                    </h3>

                    <p className="mt-5 max-w-125 text-[17px] leading-[1.75] text-[#191113]/85">
                      A cross-border platform built around connecting
                      European businesses, international markets,
                      capital and strategic relationships.
                    </p>

                    <div className="mt-7 border-t border-[#191113]/10 pt-4">
                      <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#A06A52]">
                        FOUNDATION
                      </span>
                    </div>
                  </div>
                </article>

                {/* 02 — LEADERSHIP */}

                <article className="be-history-item relative pl-10 sm:pl-14">
                  <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-[#A06A52] bg-[#E9DED4]">
                    <div className="be-history-circle-fill h-2.5 w-2.5 scale-0 rounded-full bg-[#A06A52]" />
                  </div>

                  <div className="be-history-card">
                    <div className="be-history-meta">
                      <span className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[#A06A52]">
                        LEADERSHIP
                      </span>

                      <span className="mt-2 block text-[10px] uppercase tracking-[0.18em] text-[#191113]">
                        02 / STEWARDSHIP
                      </span>
                    </div>

                    <h3 className="mt-5 max-w-125 font-serif text-[31px] leading-[1.05]">
                      Shehzad Khan
                    </h3>

                    <p className="mt-5 max-w-125 text-[17px] leading-[1.75] text-[#191113]/85">
                      Shehzad has served as a former Chairman of
                      Bridge2Europe and continues to work across
                      the intersection of European opportunity,
                      international capital and strategic
                      relationships.
                    </p>

                    <div className="mt-7 border-t border-[#191113]/10 pt-4">
                      <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#A06A52]">
                        STRATEGIC RELATIONSHIPS
                      </span>
                    </div>
                  </div>
                </article>

                {/* 03 — TODAY */}

                <article className="be-history-item relative pl-10 sm:pl-14">
                  <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-[#A06A52] bg-[#E9DED4]">
                    <div className="be-history-circle-fill h-2.5 w-2.5 scale-0 rounded-full bg-[#A06A52]" />
                  </div>

                  <div className="be-history-card">
                    <div className="be-history-meta">
                      <span className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[#A06A52]">
                        TODAY
                      </span>

                      <span className="mt-2 block text-[10px] uppercase tracking-[0.18em] text-[#191113]">
                        03 / PRESENT
                      </span>
                    </div>

                    <h3 className="mt-5 max-w-125 font-serif text-[31px] leading-[1.05]">
                      Capital. Infrastructure. Europe.
                    </h3>

                    <p className="mt-5 max-w-125 text-[17px] leading-[1.75] text-[#191113]/85">
                      The current focus is increasingly oriented toward
                      investors and capital interested in European
                      opportunities, including infrastructure-related
                      interests.
                    </p>

                    <div className="mt-7 border-t border-[#191113]/10 pt-4">
                      <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#A06A52]">
                        CURRENT DIRECTION
                      </span>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          FINAL STATEMENT
      ====================================================== */}

      <section className="be-final relative overflow-hidden bg-[#22050B] text-[#F5EEE7]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_20%,rgba(90,16,28,0.32),transparent_32%),radial-gradient(circle_at_10%_90%,rgba(183,154,105,0.035),transparent_34%)]" />

        <div className="pointer-events-none absolute right-[-8%] top-[-20%] h-[500px] w-[500px] rounded-full border border-[#D8BF8E]/10" />

        <div className="mx-auto max-w-360 px-6 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
          <div className="grid items-end gap-14 lg:grid-cols-[1fr_auto]">
            <div className="be-reveal">
              <span className="text-[13px] font-semibold uppercase tracking-[0.22em] text-[#D8BF8E]">
                BRIDGEEUROPE™
              </span>

              <h2 className="mt-6 max-w-170 font-serif text-[3.6rem] leading-[0.88] tracking-[-0.03em] sm:text-[5rem] lg:text-[6.4rem]">
                When capital
                <br />
                meets the
                <br />
                <span className="text-[#D8BF8E]">
                  right network.
                </span>
              </h2>
            </div>

            <div className="be-final-mark relative flex h-36 w-36 items-center justify-center rounded-full border border-[#D8BF8E]/50 lg:h-44 lg:w-44">
              <div className="absolute inset-4 rounded-full border border-[#D8BF8E]/20" />

              <div className="text-center">
                <span className="block text-[13px] uppercase tracking-[0.18em] text-[#D8BF8E]">
                  EUROPE
                </span>

                <span className="mt-1 block font-serif text-[22px]">
                  ↔
                </span>

                <span className="block text-[13px] uppercase tracking-[0.18em] text-[#D8BF8E]">
                  CAPITAL
                </span>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col justify-between gap-8 border-t border-[#F5EEE7]/12 pt-6 sm:flex-row sm:items-end">
            <div>
              <p className="max-w-105 text-[18px] leading-[1.75] text-[#F5EEE7]/55">
                For investors, businesses and strategic partners
                exploring relevant opportunities across Europe.
              </p>
            </div>

            <a
              href="#private-access"
              className="group inline-flex items-center justify-between gap-10 border border-[#B79A69] px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 hover:bg-[#B79A69] hover:text-[#191113]"
            >
              <span>REQUEST PRIVATE ACCESS</span>

              <span className="text-[17px] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}

export default BridgeEurope;