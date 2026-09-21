import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const standards = [
  {
    number: "01",
    title: "RELEVANCE",
    text: "Over volume.",
  },
  {
    number: "02",
    title: "PERSPECTIVE",
    text: "Before action.",
  },
  {
    number: "03",
    title: "CREDIBILITY",
    text: "Evidence matters.",
  },
  {
    number: "04",
    title: "ALIGNMENT",
    text: "The right counterparties.",
  },
  {
    number: "05",
    title: "DISCRETION",
    text: "Privacy with purpose.",
  },
  {
    number: "06",
    title: "STEWARDSHIP",
    text: "Reputation is an asset.",
  },
];

function KhanateStandards() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const heroRef = useRef(null);
  const wordmarkRef = useRef(null);
  const manifestoRef = useRef(null);
  const copyRef = useRef(null);
  const principlesRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const principles = principlesRef.current.filter(Boolean);

    const ctx = gsap.context(() => {
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 76%",
          once: true,
        },
      });

      heroTl
        .fromTo(
          headerRef.current,
          {
            opacity: 0,
            y: 15,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: "power3.out",
          }
        )
        .fromTo(
          wordmarkRef.current,
          {
            opacity: 0,
            x: 50,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1.1,
            ease: "power3.out",
          },
          "-=0.2"
        )
        .fromTo(
          manifestoRef.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
          },
          "-=0.7"
        )
        .fromTo(
          copyRef.current,
          {
            opacity: 0,
            y: 22,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.45"
        );

      gsap.fromTo(
        principles,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: principles[0],
            start: "top 88%",
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
      id="khanate-standard"
      className="relative overflow-hidden bg-[#260506] text-[#F1E7DC]"
    >
      {/* subtle background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[28%] h-[500px] w-[500px] rounded-full bg-[#5A101C]/10 blur-[140px]" />

        <div className="absolute right-[-5%] top-[8%] h-[450px] w-[450px] rounded-full bg-[#B79A69]/[0.025] blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}
        <div
          ref={headerRef}
          className="flex items-center justify-between border-b border-[#E8DDD3]/10 pb-5"
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] tracking-[0.18em] text-[#B79A69]">
              05
            </span>

            <span className="h-px w-9 bg-[#B79A69]" />

            <span className="text-[18px] font-semibold uppercase tracking-[0.24em] text-[#E8DDD3]/85">
              THE KHĀNATE STANDARD
            </span>
          </div>

          <span className="hidden text-[12px] uppercase tracking-[0.2em] text-[#D4C3BA]/30 sm:block">
            HOUSE PRINCIPLES
          </span>
        </div>

        {/* =====================================================
            HERO / BRAND STATEMENT
        ===================================================== */}
        <div
          ref={heroRef}
          className="relative grid min-h-[620px] gap-14 py-20 sm:min-h-[660px] sm:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-20 lg:py-28"
        >
          {/* LEFT — BRAND MANIFESTO */}
          <div
            ref={manifestoRef}
            className="relative z-10"
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-11 bg-[#B79A69]" />

              <span className="text-[16px] font-semibold uppercase tracking-[0.28em] text-[#B79A69]">
                THE HOUSE PRINCIPLES
              </span>
            </div>

            <h2 className="mt-8 max-w-[850px] font-serif text-[4rem] font-medium leading-[0.86] tracking-[-0.06em] sm:text-[5.5rem] md:text-[6.5rem] lg:text-[7.2rem] xl:text-[8rem]">
              Selectivity
              <br />
              is a{" "}
              <span className="text-[#B79A69]">
                discipline.
              </span>
            </h2>

            <div className="mt-10 flex items-center gap-4">
              <span className="font-serif text-[18px] text-[#B79A69]">
                K
              </span>

              <span className="h-px w-12 bg-[#B79A69]/50" />

              <span className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#B79A69]/70">
                KHĀNATE
              </span>
            </div>
          </div>

          {/* RIGHT — PHILOSOPHY */}
          <div
            ref={copyRef}
            className="relative z-10 flex h-full items-end lg:pb-8"
          >
            <div className="max-w-[480px] lg:ml-auto">

              <div className="mb-7 flex items-center justify-between border-b border-[#E8DDD3]/10 pb-5">
                <span className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#D4C3BA]/45">
                  HOW WE OPERATE
                </span>

                <span className="font-mono text-[12px] tracking-[0.15em] text-[#B79A69]/55">
                  05 / 06
                </span>
              </div>

              <p className="max-w-[450px] font-serif text-[1.8rem] leading-[1.05] tracking-[-0.03em]  text-[#D4C3BA]/50 sm:text-[2.15rem] lg:text-[2.5rem]">
                Not every opportunity deserves attention.
                <span className="text-[#F1E7DC]/90">
                  {" "}The right ones deserve depth.
                </span>
              </p>

              <p className="mt-7 max-w-[390px] lg:text-[21px] leading-[1.8] text-[#F1E7DC] sm:text-[15px]">
                These principles shape how KHĀNATE evaluates opportunities,
                relationships and long-term reputation.
              </p>

              <div className="mt-12 flex items-center gap-3">
                <span className="h-px w-8 bg-[#B79A69]/60" />

                <span className="text-[10px] lg:text-[20px] uppercase tracking-[0.2em] text-[#D4C3BA]/45">
                  THE STANDARD OF THE HOUSE
                </span>
              </div>
            </div>
          </div>

          {/* LARGE BACKGROUND WORDMARK
              Kept safely behind the layout and far enough away
              from the actual content so nothing overlaps. */}
          <div
            ref={wordmarkRef}
            className="pointer-events-none absolute bottom-[5%] right-[-3%] hidden select-none lg:block"
          >
            <span className="font-serif text-[15vw] leading-none tracking-[-0.09em] text-[#F1E7DC]/[0.025]">
              KHĀNATE
            </span>
          </div>
        </div>

        {/* =====================================================
            PRINCIPLES
        ===================================================== */}
        <div className="border-t border-[#E8DDD3]/10">

          {/* principles heading */}
          <div className="flex flex-col gap-4 py-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-[16px] font-semibold uppercase tracking-[0.24em] text-[#B79A69]">
                THE HOUSE CODE
              </span>

              <p className="mt-3 font-serif text-[1.55rem] leading-[1.05] tracking-[-0.025em] text-[#F1E7DC]/80 sm:text-[1.8rem]">
                Six principles. One standard.
              </p>
            </div>

            <span className="text-[11px] uppercase tracking-[0.18em] text-[#D4C3BA]/35 sm:text-right">
              RELEVANCE · PERSPECTIVE · CREDIBILITY · ALIGNMENT · DISCRETION ·
              STEWARDSHIP
            </span>
          </div>

          {/* clean principle list */}
          <div className="border-t border-[#E8DDD3]/10">

            {standards.map((standard, index) => (
              <article
                key={standard.number}
                ref={(el) => {
                  principlesRef.current[index] = el;
                }}
                className="group border-b border-[#E8DDD3]/10 last:border-b-0"
              >
                <div className="grid min-h-[145px] items-center gap-5 py-7 sm:grid-cols-[60px_190px_1fr_30px] sm:gap-8 sm:py-8 lg:min-h-[155px] lg:grid-cols-[70px_240px_1fr_35px] lg:gap-10">

                  {/* number */}
                  <span className="font-mono text-[10px] tracking-[0.18em] text-[#B79A69]/60 transition-colors duration-300 group-hover:text-[#B79A69]">
                    {standard.number}
                  </span>

                  {/* title */}
                  <div className="flex items-center gap-3">
                    <span className="h-px w-7 shrink-0 bg-[#B79A69]/35 transition-all duration-500 group-hover:w-10 group-hover:bg-[#B79A69]" />

                    <h3 className="lg:text-[2rem]  font-semibold uppercase tracking-[0.23em] text-[#D4C3BA]/65 transition-colors duration-300 group-hover:text-[#D8BF8E] sm:text-[1.5em]">
                      {standard.title}
                    </h3>
                  </div>

                  {/* statement */}
                  <p className="font-serif text-[1.65rem] w-full leading-none tracking-[-0.025em] text-[#F1E7DC]/85 transition-transform duration-500 group-hover:translate-x-1 sm:text-[1.9rem] lg:text-[2.1rem] lg:mx-20">
                    {standard.text}
                  </p>

                  {/* arrow */}
                  <span className="hidden text-[14px] text-[#D4C3BA]/15 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#B79A69] sm:block">
                    ↗
                  </span>
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