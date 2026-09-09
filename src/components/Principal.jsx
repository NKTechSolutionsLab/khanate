import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img from "../images/shehzad2.png";

gsap.registerPlugin(ScrollTrigger);

function Principal() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (!section || !content) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        content,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
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
      id="principal"
      className="bg-[#F5EEE7] text-[#191113]"
    >
      <div className="mx-auto max-w-360 px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* =========================
              PRINCIPAL PORTRAIT
          ========================== */}
          <div
            ref={imageRef}
            className="group relative min-h-100 overflow-hidden bg-[#DED0C7] sm:min-h-125"
          >
            <img
              src={img}
              alt="Shehzad Khan — Founder and Principal of KHĀNATE"
              className="
                absolute inset-0
                h-full w-full
                object-cover object-center
                transition-transform duration-1000 ease-out
                group-hover:scale-[1.035]
              "
            />

            {/* Editorial Overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#191113]/75 via-[#191113]/20 to-transparent px-6 pb-6 pt-24 sm:px-8 sm:pb-8">
              <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#F5EEE7]">
                FOUNDER & PRINCIPAL
              </span>

              <p className="mt-2 font-serif text-[1.5rem] text-[#F5EEE7]">
                Shehzad Khan
              </p>
            </div>
          </div>

          {/* =========================
              FOUNDER CONTENT
          ========================== */}
          <div ref={contentRef}>

            {/* Label */}
            <div className="flex items-center gap-4">
              <span className="text-[12px] font-semibold uppercase tracking-[0.2em]">
                FOUNDER & PRINCIPAL
              </span>

              <span className="h-px w-10 bg-[#B79A69]" />
            </div>

            {/* Main Heading */}
            <h2 className="mt-7 max-w-110 font-serif text-[3rem] font-medium leading-[0.92] tracking-tight sm:text-[3.7rem]">
              Relationships
              <br />
              Begin With Trust.
            </h2>

            {/* Founder Biography */}
            <p className="mt-7 max-w-115 text-[14px] leading-[1.75] text-[#191113]/70">
              Shehzad Khan is the Founder and Managing Partner of
              E-Khānate WorldWide, based in Riga, Latvia, with a focus on
              cross-border business, market access and strategic
              relationships across Europe and international markets.
            </p>

            <p className="mt-4 max-w-115 text-[14px] leading-[1.75] text-[#191113]/70">
              His work sits at the intersection of market entry,
              relationship-building and cultural strategy, connecting
              businesses, investors and strategic partners while helping
              international stakeholders navigate opportunities in Latvia
              and the wider European market.
            </p>

            {/* Current Roles */}
            <div className="mt-9 border-t border-[#191113]/15 pt-6">
              <div className="grid gap-6 sm:grid-cols-2">

                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">
                    E-KHĀNATE WORLDWIDE
                  </span>

                  <p className="mt-2 text-[13px] leading-[1.65] text-[#191113]/60">
                    Founder & Managing Partner
                  </p>
                </div>

                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">
                    AIFLO EUROPE
                  </span>

                  <p className="mt-2 text-[13px] leading-[1.65] text-[#191113]/60">
                    Commercial Director
                  </p>
                </div>

              </div>
            </div>

            {/* International Perspective */}
            <div className="mt-8">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">
                INTERNATIONAL PERSPECTIVE
              </span>

              <p className="mt-2 max-w-115 text-[13px] leading-[1.65] text-[#191113]/60">
                Professional relationships across Europe, South Asia and
                the Middle East, with a particular focus on Latvia and
                European market entry.
              </p>
            </div>

            {/* Company Positioning */}
            <div className="mt-8 flex items-center gap-4">
              <span className="h-px w-8 bg-[#B79A69]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#817173]">
                CAPITAL · CONNECTIONS · OPPORTUNITY
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Principal;
