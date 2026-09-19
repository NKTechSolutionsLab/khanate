import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import about from "../images/about.png";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const introItems = section.querySelectorAll(".about-intro-item");
      const thesisItems = section.querySelectorAll(".about-thesis-item");
      const thesisImage = section.querySelector(".about-thesis-image");
      const thesisOverlay = section.querySelector(".about-thesis-overlay");
      const modelItems = section.querySelectorAll(".about-model-item");
      const closing = section.querySelector(".about-closing");

      gsap.set(introItems, {
        opacity: 0,
        y: 35,
      });

      gsap.set(thesisItems, {
        opacity: 0,
        y: 30,
      });

      gsap.set(thesisImage, {
        scale: 1.08,
      });

      gsap.set(thesisOverlay, {
        opacity: 0.35,
      });

      gsap.set(modelItems, {
        opacity: 0,
        y: 25,
      });

      gsap.set(closing, {
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

      tl.to(introItems, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
      })
        .to(
          thesisItems,
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.25"
        )
        .to(
          thesisImage,
          {
            scale: 1,
            duration: 1.5,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .to(
          thesisOverlay,
          {
            opacity: 0.05,
            duration: 1,
            ease: "power2.out",
          },
          "-=1.15"
        )
        .to(
          modelItems,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.35"
        )
        .to(
          closing,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.25"
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="overflow-hidden bg-[#F0E7DE] text-[#191113] my-10"
    >
      <div className="mx-auto max-w-360">

        {/* =========================================================
            01 — INSTITUTIONAL INTRO
        ========================================================== */}

        <div className="border-b border-[#191113]/15">

          <div className="px-6 py-8 sm:px-8 lg:px-12 lg:py-10 xl:px-16">

            {/* HEADER LINE */}

            <div className="about-intro-item flex items-center justify-between">

              <div className="flex items-center gap-4">

                <span className="font-mono text-[10px] tracking-[0.18em] text-[#A06A52]">
                  02
                </span>

                <span className="h-px w-10 bg-[#B79A69]" />

                {/* SUBHEADING / SECTION LABEL +20% */}

                <span className="text-[12px] font-semibold uppercase tracking-[0.24em]">
                  ABOUT KHĀNATE
                </span>

              </div>

              <span className="hidden text-[11px] font-semibold uppercase tracking-[0.2em] text-[#191113]/35 sm:block">
                PRIVATE CAPITAL · STRATEGIC ACCESS · EUROPE
              </span>

            </div>


            {/* MAIN STATEMENT */}

            <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_280px] lg:gap-20">

              {/* PRIMARY HEADING — UNCHANGED */}

              <h2
                className="
                  about-intro-item
                  max-w-215
                  font-serif
                  text-[3.2rem]
                  font-medium
                  leading-[0.91]
                  tracking-[-0.05em]
                  sm:text-[4.3rem]
                  lg:text-[5.15rem]
                "
              >
                KHĀNATE is built
                <br />
                around
                <span className="text-[#A06A52]">
                  {" "}
                  access.
                </span>
              </h2>


              <div className="about-intro-item self-end border-l border-[#191113]/15 pl-6">

                {/* SUBHEADING +20% */}

                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#A06A52]">
                  THE HOUSE
                </span>

                {/* DESCRIPTION +20% */}

                <p className="mt-5 text-[18px] leading-[1.8] text-[#191113]/65 sm:text-[19px]">
                  KHĀNATE brings together capital, intelligence and
                  relationships where there is a credible basis for
                  long-term alignment and real-world opportunity.
                </p>

              </div>

            </div>


            {/* SECONDARY POSITIONING */}

            <div className="about-intro-item mt-14 max-w-190 border-t border-[#191113]/12 pt-6">

              <div className="grid gap-5 sm:grid-cols-[130px_1fr]">

                {/* SUBHEADING +20% */}

                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#191113]/35">
                  POSITION
                </span>

                {/* DESCRIPTION +20% */}

                <p className="text-[17px] leading-[1.75] text-[#191113]/55 sm:text-[18px]">
                  A strategic platform connecting international
                  capital, European businesses, strategic partners
                  and relevant opportunities across borders.
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* =========================================================
            02 — MAROON THESIS
        ========================================================== */}

        <div className="bg-[#260506] text-white">

          <div className="px-6 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-16">

            {/* THESIS HEADER */}

            <div className="about-thesis-item flex items-center gap-4">

              <span className="h-px w-10 bg-[#B79A69]" />

              {/* SUBHEADING +20% */}

              <span className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#B79A69]">
                THE THESIS
              </span>

            </div>


            {/* LARGE THESIS */}

            <div className="mt-9 grid gap-12 lg:grid-cols-[1fr_330px] lg:items-end lg:gap-20">

              <div className="about-thesis-item">

                {/* PRIMARY HEADING — UNCHANGED */}

                <h3
                  className="
                    max-w-180
                    font-serif
                    text-[2.9rem]
                    leading-[0.96]
                    tracking-[-0.045em]
                    sm:text-[4rem]
                    lg:text-[4.55rem]
                  "
                >
                  Opportunity is not simply
                  <br />
                  what you find.
                  <br />

                  <span className="text-[#B79A69]">
                    It is what you can reach.
                  </span>
                </h3>

              </div>


              <div className="about-thesis-item">

                {/* SUBHEADING +20% */}

                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/35">
                  OUR POINT OF VIEW
                </span>

                {/* DESCRIPTION +20% */}

                <p className="mt-5 text-[17px] leading-[1.8] text-white/55 sm:text-[18px]">
                  The value of an opportunity is inseparable from
                  the quality of the network, context and access
                  surrounding it.
                </p>

              </div>

            </div>


            {/* IMAGE FRAME */}

            <div
              className="
                about-thesis-item
                relative
                mt-14
                overflow-hidden
                border
                border-white/15
              "
            >

              <div className="relative aspect-[2.15/1] w-full">

                <img
                  src={about}
                  alt=""
                  aria-hidden="true"
                  className="
                    about-thesis-image
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    object-[58%_center]
                    grayscale-[12%]
                  "
                />

                <div
                  className="
                    about-thesis-overlay
                    absolute
                    inset-0
                    bg-[#130207]
                  "
                />


                {/* IMAGE FRAME INFORMATION */}

                <div className="absolute inset-x-0 bottom-0 border-t border-white/20 bg-[#130207]/60 px-5 py-4 backdrop-blur-[3px] sm:px-7">

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3">

                      <span className="h-px w-8 bg-[#B79A69]" />

                      <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80">
                        EUROPE · GLOBAL
                      </span>

                    </div>

                    <span className="hidden text-[11px] font-mono tracking-[0.16em] text-white/30 sm:block">
                      KHĀNATE
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* =========================================================
            03 — WHITE OPERATING MODEL
        ========================================================== */}

        <div className="bg-[#F0E7DE]">

          <div className="px-6 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-18 xl:px-16">

            {/* MODEL HEADER */}

            <div className="about-model-item flex flex-col justify-between gap-7 sm:flex-row sm:items-end">

              <div>

                {/* SUBHEADING +20% */}

                <span className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#A06A52]">
                  THE KHĀNATE MODEL
                </span>

                {/* PRIMARY HEADING — UNCHANGED */}

                <h3
                  className="
                    mt-5
                    max-w-145
                    font-serif
                    text-[2.35rem]
                    leading-[1]
                    tracking-[-0.035em]
                    sm:text-[3rem]
                  "
                >
                  Four forces behind
                  <br />
                  meaningful access.
                </h3>

              </div>

              {/* SUBHEADING +20% */}

              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#191113]/30">
                HOW THE PLATFORM WORKS
              </span>

            </div>


            {/* CONNECTOR */}

            <div className="about-model-item mt-14 hidden items-center lg:flex">

              <span className="h-2 w-2 rounded-full bg-[#A06A52]" />

              <span className="h-px flex-1 bg-[#191113]/18" />

              <span className="h-2 w-2 rounded-full bg-[#A06A52]" />

              <span className="h-px flex-1 bg-[#191113]/18" />

              <span className="h-2 w-2 rounded-full bg-[#A06A52]" />

              <span className="h-px flex-1 bg-[#191113]/18" />

              <span className="h-2 w-2 rounded-full bg-[#A06A52]" />

            </div>


            {/* MODEL ITEMS */}

            <div className="mt-2 grid border-t border-[#191113]/15 lg:grid-cols-4 lg:border-t-0">

              {/* 01 — CAPITAL */}

              <div
                className="
                  about-model-item
                  border-b
                  border-[#191113]/15
                  py-7
                  lg:border-b-0
                  lg:border-r
                  lg:pr-8
                "
              >

                <div className="flex items-center justify-between">

                  <span className="font-mono text-[10px] tracking-[0.15em] text-[#A06A52]">
                    01
                  </span>

                  {/* SUBHEADING +20% */}

                  <span className="text-[11px] uppercase tracking-[0.18em] text-[#191113]/30">
                    CAPITAL
                  </span>

                </div>

                {/* SECONDARY HEADING +20% */}

                <h4 className="mt-6 font-serif text-[35px]">
                  Capital
                </h4>

                {/* DESCRIPTION +20% */}

                <p className="mt-3 text-[16px] leading-[1.7] text-[#191113]/55">
                  Relevant capital connected with credible
                  European opportunities.
                </p>

              </div>


              {/* 02 — INTELLIGENCE */}

              <div
                className="
                  about-model-item
                  border-b
                  border-[#191113]/15
                  py-7
                  lg:border-b-0
                  lg:border-r
                  lg:px-8
                "
              >

                <div className="flex items-center justify-between">

                  <span className="font-mono text-[10px] tracking-[0.15em] text-[#A06A52]">
                    02
                  </span>

                  {/* SUBHEADING +20% */}

                  <span className="text-[11px] uppercase tracking-[0.18em] text-[#191113]/30">
                    CONTEXT
                  </span>

                </div>

                {/* SECONDARY HEADING +20% */}

                <h4 className="mt-6 font-serif text-[35px]">
                  Intelligence
                </h4>

                {/* DESCRIPTION +20% */}

                <p className="mt-3 text-[16px] leading-[1.7] text-[#191113]/55">
                  Understanding markets, people and strategic
                  conditions before action.
                </p>

              </div>


              {/* 03 — RELATIONSHIPS */}

              <div
                className="
                  about-model-item
                  border-b
                  border-[#191113]/15
                  py-7
                  lg:border-b-0
                  lg:border-r
                  lg:px-8
                "
              >

                <div className="flex items-center justify-between">

                  <span className="font-mono text-[10px] tracking-[0.15em] text-[#A06A52]">
                    03
                  </span>

                  {/* SUBHEADING +20% */}

                  <span className="text-[11px] uppercase tracking-[0.18em] text-[#191113]/30">
                    ACCESS
                  </span>

                </div>

                {/* SECONDARY HEADING +20% */}

                <h4 className="mt-6 font-serif text-[35px]">
                  Relationships
                </h4>

                {/* DESCRIPTION +20% */}

                <p className="mt-3 text-[16px] leading-[1.7] text-[#191113]/55">
                  Strategic connections where relevance and
                  alignment are clear.
                </p>

              </div>


              {/* 04 — OPPORTUNITY */}

              <div className="about-model-item py-7 lg:pl-8">

                <div className="flex items-center justify-between">

                  <span className="font-mono text-[10px] tracking-[0.15em] text-[#A06A52]">
                    04
                  </span>

                  {/* SUBHEADING +20% */}

                  <span className="text-[11px] uppercase tracking-[0.18em] text-[#191113]/30">
                    OUTCOME
                  </span>

                </div>

                {/* SECONDARY HEADING +20% */}

                <h4 className="mt-6 font-serif text-[35px]">
                  Opportunity
                </h4>

                {/* DESCRIPTION +20% */}

                <p className="mt-3 text-[16px] leading-[1.7] text-[#191113]/55">
                  Moving relationships toward opportunities
                  with long-term potential.
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* =========================================================
            04 — MAROON CLOSING BAND
        ========================================================== */}

        <div
          className="
            about-closing
            bg-[#260506]
            px-6
            py-11
            text-white
            sm:px-8
            sm:py-14
            lg:px-12
            lg:py-16
            xl:px-16
          "
        >

          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

            <div>

              {/* SUBHEADING +20% */}

              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#B79A69]">
                THE HOUSE
              </span>

              {/* PRIMARY HEADING — UNCHANGED */}

              <p
                className="
                  mt-5
                  max-w-180
                  font-serif
                  text-[2.35rem]
                  leading-[1]
                  tracking-[-0.035em]
                  sm:text-[3rem]
                  lg:text-[3.4rem]
                "
              >
                Access is not the destination.
                <br />

                <span className="text-[#B79A69]">
                  It is the infrastructure.
                </span>

              </p>

            </div>


            <a
              href="#focus"
              className="
                group
                inline-flex
                w-fit
                items-center
                gap-4
                border
                border-[#B79A69]/60
                px-6
                py-4
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                transition-all
                duration-300
                hover:border-[#B79A69]
                hover:bg-[#B79A69]
                hover:text-[#130207]
              "
            >
              EXPLORE OUR APPROACH

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

        </div>

      </div>
    </section>
  );
}

export default About;