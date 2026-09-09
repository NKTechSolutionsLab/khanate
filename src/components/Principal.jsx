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
    const image = imageRef.current;

    if (!section || !content || !image) return;

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
              alt="Founder and Principal of KHĀNATE"
              className="
                absolute inset-0
                h-full w-full
                object-cover object-center
                transition-transform duration-1000 ease-out
                group-hover:scale-[1.035]
              "
            />

            {/* Editorial Overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#191113]/70 via-[#191113]/20 to-transparent px-6 pb-6 pt-20 sm:px-8 sm:pb-8">
              <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#F5EEE7]">
                FOUNDER & PRINCIPAL
              </span>

              <p className="mt-2 font-serif text-[1.5rem] text-[#F5EEE7]">
                KHĀNATE
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

            {/* Founder Introduction */}
            <p className="mt-7 max-w-115 text-[14px] leading-[1.75] text-[#191113]/70">
              KHĀNATE was founded on the belief that meaningful
              opportunities are built through trusted relationships,
              informed perspective and disciplined access.
            </p>

            <p className="mt-4 max-w-115 text-[14px] leading-[1.75] text-[#191113]/70">
              As Founder and Principal, the focus is on connecting
              capital, businesses and strategic relationships across
              Europe and international markets — identifying
              opportunities where alignment can create lasting value.
            </p>

            {/* Founder Philosophy */}
            <div className="mt-9 border-t border-[#191113]/15 pt-6">
              <div className="grid gap-6 sm:grid-cols-2">

                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#191113]">
                    THE APPROACH
                  </span>

                  <p className="mt-2 max-w-55 text-[13px] leading-[1.65] text-[#191113]/60">
                    Selective relationships. Informed decisions.
                    Long-term alignment.
                  </p>
                </div>

                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#191113]">
                    THE ROLE
                  </span>

                  <p className="mt-2 max-w-55 text-[13px] leading-[1.65] text-[#191113]/60">
                    Connecting the right people, capital and
                    opportunities with discretion.
                  </p>
                </div>

              </div>
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