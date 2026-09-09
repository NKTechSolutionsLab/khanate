import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroBg from "../images/hero_bg.png";

gsap.registerPlugin(ScrollTrigger);

function Private() {
  const sectionRef = useRef(null);
  const backgroundRef = useRef(null);
  const contentRef = useRef(null);
  const quoteRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const background = backgroundRef.current;
    const content = contentRef.current;
    const quote = quoteRef.current;

    if (!section || !background || !content || !quote) return;

    const ctx = gsap.context(() => {
      const eyebrow = content.querySelector(".private-eyebrow");
      const heading = content.querySelector(".private-heading");
      const paragraph = content.querySelector(".private-paragraph");
      const button = content.querySelector(".private-button");
      const quoteText = quote.querySelector(".private-quote");
      const quoteLine = quote.querySelector(".private-quote-line");

      // Initial states
      gsap.set(eyebrow, {
        opacity: 0,
        y: 20,
      });

      gsap.set(heading, {
        opacity: 0,
        y: 30,
      });

      gsap.set(paragraph, {
        opacity: 0,
        y: 20,
      });

      gsap.set(button, {
        opacity: 0,
        y: 15,
      });

      gsap.set(quoteText, {
        opacity: 0,
        y: 25,
      });

      gsap.set(quoteLine, {
        width: 0,
      });

      gsap.set(background, {
        scale: 1.05,
      });

      // Main reveal
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
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .to(
          paragraph,
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .to(
          button,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .to(
          quoteText,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.35"
        )
        .to(
          quoteLine,
          {
            width: 36,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.45"
        )
        .to(
          background,
          {
            scale: 1,
            duration: 1.5,
            ease: "power2.out",
          },
          "-=1"
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
      {/* =========================
          BACKGROUND
      ========================== */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={backgroundRef}
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-[68%_center] opacity-45"
        />

        <div className="absolute inset-0 bg-linear-to-r from-[#130207] via-[#130207]/85 to-[#130207]/55" />
      </div>

      {/* =========================
          CONTENT
      ========================== */}
      <div className="relative mx-auto max-w-360 px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

          {/* =========================
              LEFT — PRIVATE ACCESS
          ========================== */}
          <div ref={contentRef}>

            {/* Eyebrow */}
            <div className="private-eyebrow flex items-center gap-4">
              <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#F5EEE7]">
                PRIVATE ACCESS
              </span>

              <span className="h-px w-10 bg-[#B79A69]" />
            </div>

            {/* Heading */}
            <h2
              className="
                private-heading
                mt-7
                max-w-110
                font-serif
                text-[3rem]
                font-medium
                leading-[0.92]
                tracking-tight
                sm:text-[3.8rem]
              "
            >
              Initiate a
              <br />
              Private Conversation.
            </h2>

            {/* Description */}
            <p
              className="
                private-paragraph
                mt-7
                max-w-105
                text-[13px]
                leading-[1.75]
                text-[#F5EEE7]/72
              "
            >
              KHĀNATE engages selectively where there is a credible
              basis for collaboration. Private access is intended for
              investors, entrepreneurs, developers, corporate and
              strategic partners exploring relevant opportunities
              across Europe.
            </p>

            <p
              className="
                private-paragraph
                mt-4
                max-w-105
                text-[13px]
                leading-[1.75]
                text-[#F5EEE7]/72
              "
            >
              Introduce your area of interest, geography and context.
              Where there is alignment, the conversation can move
              forward privately.
            </p>

            {/* CTA */}
            <a
              href="#contact"
              className="
                private-button
                group
                mt-8
                inline-flex
                h-12
                items-center
                gap-7
                border
                border-[#B79A69]
                bg-[#5A101C]/75
                px-6
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.18em]
                transition-all
                duration-300
                hover:bg-[#B79A69]
                hover:text-[#191113]
              "
            >
              <span>INITIATE PRIVATE CONVERSATION</span>

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

          {/* =========================
              RIGHT — QUALIFICATION
          ========================== */}
          <div
            ref={quoteRef}
            className="
              border-l
              border-[#B79A69]/40
              pl-7
              lg:ml-auto
              lg:max-w-105
            "
          >
            <p
              className="
                private-quote
                font-serif
                text-[1.4rem]
                italic
                leading-[1.25]
                text-[#F5EEE7]/88
                sm:text-[1.65rem]
              "
            >
              The most valuable access is rarely the most visible.
            </p>

            <div className="mt-8 space-y-5 border-t border-[#F5EEE7]/15 pt-7">

              {/* Audience */}
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B79A69]">
                  FOR
                </span>

                <p className="mt-2 text-[12px] leading-[1.7] text-[#F5EEE7]/65">
                  Private Investors · Family Offices · Entrepreneurs ·
                  Developers · Corporates · Strategic Partners
                </p>
              </div>

              {/* Interests */}
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B79A69]">
                  AREAS OF INTEREST
                </span>

                <p className="mt-2 text-[12px] leading-[1.7] text-[#F5EEE7]/65">
                  Investment · Real Estate · Business · Strategic
                  Partnership · Technology
                </p>
              </div>

              {/* Geography */}
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B79A69]">
                  GEOGRAPHY
                </span>

                <p className="mt-2 text-[12px] leading-[1.7] text-[#F5EEE7]/65">
                  Europe · Latvia · India–Europe · Middle East–Europe ·
                  Central Asia–Europe
                </p>
              </div>
            </div>

            <span
              className="
                private-quote-line
                mt-8
                block
                h-px
                bg-[#B79A69]
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Private;