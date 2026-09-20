import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const accessDetails = [
  {
    number: "01",
    label: "FOR",
    text:
      "Private Investors · Family Offices · Entrepreneurs · Developers · Corporates · Strategic Partners",
  },
  {
    number: "02",
    label: "AREAS OF INTEREST",
    text:
      "Investment · Real Estate · Business · Strategic Partnership · Technology",
  },
  {
    number: "03",
    label: "GEOGRAPHY",
    text:
      "Europe · Latvia · India–Europe · Middle East–Europe · Central Asia–Europe",
  },
];

function Private() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const introRef = useRef(null);
  const titleRef = useRef(null);
  const ctaRef = useRef(null);
  const detailsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const details = detailsRef.current.filter(Boolean);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 76%",
          once: true,
        },
        defaults: {
          ease: "power3.out",
        },
      });

      tl.fromTo(
        headerRef.current,
        {
          opacity: 0,
          y: 12,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        }
      )
        .fromTo(
          introRef.current,
          {
            opacity: 0,
            y: 18,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
          },
          "-=0.2"
        )
        .fromTo(
          titleRef.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.4"
        )
        .fromTo(
          ctaRef.current,
          {
            opacity: 0,
            y: 18,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "-=0.35"
        )
        .fromTo(
          details,
          {
            opacity: 0,
            y: 15,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.07,
          },
          "-=0.3"
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="private-access"
      className="relative overflow-hidden bg-[#130207] text-[#F5EEE7]"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Extremely subtle tonal depth — same maroon family */}
        <div className="absolute left-1/2 top-[35%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#22050B]/70 blur-[150px]" />

        {/* Fine architectural lines */}
        <div className="absolute left-[7%] top-0 hidden h-full w-px bg-[#F5EEE7]/[0.025] lg:block" />
        <div className="absolute right-[7%] top-0 hidden h-full w-px bg-[#F5EEE7]/[0.025] lg:block" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div
          ref={headerRef}
          className="flex items-center justify-between border-b border-[#F5EEE7]/10 pb-5"
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] tracking-[0.16em] text-[#B79A69]">
              07
            </span>

            <span className="h-px w-9 bg-[#B79A69]" />

            <span className="text-[13px] font-semibold uppercase tracking-[0.24em]">
              PRIVATE ACCESS
            </span>
          </div>

          <span className="hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F5EEE7]/25 sm:block">
            BY INVITATION · BY QUALIFICATION
          </span>
        </div>

        {/* =====================================================
            MAIN CLOSING STATEMENT
        ===================================================== */}

        <div className="flex min-h-[600px] flex-col justify-center py-20 text-center sm:min-h-[650px] sm:py-24 lg:min-h-[700px] lg:py-28">

          <div
            ref={introRef}
            className="flex items-center justify-center gap-4"
          >
            <span className="h-px w-10 bg-[#B79A69]" />

            <span className="text-[13px] font-semibold uppercase tracking-[0.27em] text-[#B79A69]">
              THE NEXT CONVERSATION
            </span>

            <span className="h-px w-10 bg-[#B79A69]" />
          </div>

          <h2
            ref={titleRef}
            className="mx-auto mt-8 max-w-[1000px] font-serif text-[4rem] font-medium leading-[0.84] tracking-[-0.06em] sm:text-[5rem] md:text-[6rem] lg:text-[6.5rem] xl:text-[7rem]"
          >
            Begin where
            <br />
            there is{" "}
            <span className="text-[#B79A69]">
              alignment.
            </span>
          </h2>

          <p className="mx-auto mt-9 max-w-[610px] lg:text-[17px] leading-[1.8] text-[#F5EEE7]/70 sm:text-[15px]">
            Introduce your area of interest, geography and context.
            Where there is a credible basis for collaboration, the
            conversation can move forward privately.
          </p>

          {/* =================================================
              PRIMARY ACTION
          ================================================= */}

          <div
            ref={ctaRef}
            className="mx-auto mt-12 w-full max-w-[900px]"
          >
            <a
              href="#contact"
              className="
                group
                relative
                flex
                min-h-[105px]
                items-center
                justify-between
                border-y
                border-[#B79A69]/35
                px-1
                text-left
                transition-colors
                duration-500
                hover:border-[#B79A69]
              "
            >
              {/* gold active line */}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-[#B79A69] transition-all duration-700 group-hover:w-full" />

              <div className="flex items-center gap-5 sm:gap-7">


                <div>
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F5EEE7]/40">
                    PRIVATE CONVERSATION
                  </span>


                  <span className="mt-2 block font-serif text-[1.65rem] leading-none tracking-[-0.025em] text-[#F5EEE7]/90 sm:text-[2rem]">
                    Initiate the conversation
                  </span>
                </div>
              </div>

              <span className="flex items-center gap-4">
                <span className="hidden text-[13px] uppercase tracking-[0.18em] text-[#F5EEE7]/40 sm:block">
                  BEGIN HERE
                </span>

                <span className="text-[33px] font-light text-[#B79A69] transition-transform duration-500 group-hover:translate-x-2">
                  →
                </span>
              </span>
            </a>

            <div className="mt-5 flex justify-center">
              <span className="text-[12px] uppercase tracking-[0.18em] text-[#F5EEE7]/25">
                PRIVATE · SELECTIVE · EUROPE
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================
            QUALIFICATION REGISTER
        ===================================================== */}

        <div className="border-t border-[#F5EEE7]/10">

          <div className="grid sm:grid-cols-3">

            {accessDetails.map((item, index) => (
              <div
                key={item.number}
                ref={(el) => {
                  detailsRef.current[index] = el;
                }}
                className={`
                  min-h-[155px]
                  py-7
                  sm:py-8
                  ${index > 0
                    ? "border-t border-[#F5EEE7]/10 sm:border-l sm:border-t-0 sm:pl-7"
                    : "sm:pr-7"
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[12px] tracking-[0.15em] text-[#B79A69]/55">
                    {item.number}
                  </span>

                  <span className="h-px w-5 bg-[#B79A69]/30" />

                  <span className="text-[15px] font-semibold uppercase tracking-[0.2em] text-[#B79A69]/80">
                    {item.label}
                  </span>
                </div>

                <p className="mt-4 max-w-[380px] text-[20px] leading-[1.75] text-[#F5EEE7]/50 sm:text-[16px]">
                  {item.text}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* =====================================================
            FINAL BRAND SIGNATURE
        ===================================================== */}

        <div className="mt-6 flex flex-col gap-4 border-t border-[#F5EEE7]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-3">
            <span className="font-serif text-[18px] text-[#B79A69]">
              K
            </span>

            <span className="h-px w-7 bg-[#B79A69]/45" />

            <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#B79A69]/65">
              KHĀNATE
            </span>
          </div>

          <span className="text-[12px] uppercase tracking-[0.16em] text-[#F5EEE7]/40 sm:text-right">
            ACCESS IS SELECTIVE · SUBJECT TO INITIAL QUALIFICATION
          </span>
        </div>
      </div>
    </section>
  );
}

export default Private;