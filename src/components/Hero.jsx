import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import heroBg from "../images/hero_bg.png";
import heroBgSm from "../images/hero_bg_sm2.png";

function Hero({ animate }) {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    if (!animate) return;

    const hero = heroRef.current;

    if (!hero) return;

    const background = hero.querySelector(".hero-background");
    const eyebrow = hero.querySelector(".hero-eyebrow");
    const heading = hero.querySelector(".hero-heading");
    const description = hero.querySelector(".hero-description");
    const cta = hero.querySelector(".hero-cta");
    const pagination = hero.querySelector(".hero-pagination");
    const desktopStatement = hero.querySelector(
      ".hero-statement-desktop"
    );
    const mobileStatement = hero.querySelector(
      ".hero-statement-mobile"
    );

    const timeline = gsap.timeline();

    /*
      Background
    */
    timeline.to(background, {
      opacity: 1,
      scale: 1,
      duration: 1.8,
      ease: "power2.out",
    });

    /*
      Eyebrow
    */
    timeline.to(
      eyebrow,
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        ease: "power3.out",
      },
      "-=1.25"
    );

    /*
      Main heading
    */
    timeline.to(
      heading,
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
      },
      "-=0.5"
    );

    /*
      Description
    */
    timeline.to(
      description,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.6"
    );

    /*
      CTA
    */
    timeline.to(
      cta,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.45"
    );

    /*
      Pagination
    */
    timeline.to(
      pagination,
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
      },
      "-=0.4"
    );

    /*
      Quiet authority
    */
    timeline.to(
      [desktopStatement, mobileStatement],
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.55"
    );

    return () => {
      timeline.kill();
    };
  }, [animate]);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#130207]"
    >
      {/* Background */}
      <div className="hero-background absolute inset-0 scale-[1.035] opacity-0">
        <picture>
  <source
    media="(max-width: 640px)"
    srcSet={heroBgSm}
  />

  <img
    src={heroBg}
    alt=""
    aria-hidden="true"
    className="
      absolute inset-0
      h-full w-full
      object-cover
      object-[57%_center]
      sm:object-[56%_center]
      lg:object-[55%_center]
      xl:object-[54%_center]
    "
  />
</picture>

        <div
          className="
            absolute inset-0
            bg-linear-to-r
            from-[#130207]/88
            via-[#130207]/38
            to-transparent
          "
        />

        <div
          className="
            absolute inset-x-0 bottom-0
            h-24
            bg-linear-to-t
            from-[#130207]/70
            to-transparent
          "
        />
      </div>

      {/* Main Content */}
      <div
        className="
          relative z-10
          mx-auto flex min-h-screen w-full
          max-w-360
          items-center
          px-6
          pb-16
          pt-24
          sm:px-8
          lg:px-10
          lg:pb-10
          lg:pt-16
          xl:px-12
        "
      >
        <div className="flex w-full items-center justify-between">

          {/* Left Content */}
          <div className="w-full max-w-162.5">

            {/* Eyebrow */}
            <div className="hero-eyebrow mb-5 flex translate-y-6 items-center gap-4 opacity-0">
              <span className="h-px w-8 shrink-0 bg-[#B79A69]" />

              <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#B79A69]">
                PRIVATE CAPITAL. STRATEGIC ACCESS. EUROPEAN OPPORTUNITIES.
              </p>
            </div>

            {/* Heading */}
            <h1
              className="
                hero-heading
                max-w-162.5
                translate-y-6
                font-serif
                text-[2.65rem]
                font-medium
                leading-[0.94]
                tracking-tight
                text-[#F5EEE7]
                opacity-0
                sm:text-[3.15rem]
                lg:text-[3.55rem]
                xl:text-[3.9rem]
              "
            >
              <span className="block">
                PRIVATE CAPITAL.
              </span>

              <span className="block">
                STRATEGIC ACCESS.
              </span>

              <span className="block text-[#D8BF8E]">
                EUROPEAN
              </span>

              <span className="block text-[#D8BF8E]">
                OPPORTUNITIES.
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                hero-description
                mt-5
                max-w-97.5
                translate-y-6
                text-[11px]
                leading-[1.55]
                text-[#F5EEE7]/80
                opacity-0
                sm:text-[12px]
                lg:mt-6
                lg:max-w-107.5
                lg:text-[13px]
              "
            >
              A discreet European platform connecting capital,
              enterprise and selected opportunities.
            </p>

            {/* CTA */}
            <a
              href="#private-access"
              className="
                hero-cta
                group
                mt-6
                inline-flex
                h-11
                translate-y-6
                items-center
                gap-6
                border
                border-[#B79A69]
                bg-[#5A101C]/80
                px-5
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.17em]
                text-[#F5EEE7]
                opacity-0
                transition-all
                duration-300
                hover:bg-[#B79A69]
                hover:text-[#191113]
                lg:mt-7
                lg:h-11.5
              "
            >
              <span>REQUEST PRIVATE ACCESS</span>

              <span
                className="
                  text-[15px]
                  font-light
                  leading-none
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </a>

            {/* Pagination */}
            <div className="hero-pagination mt-7 flex translate-y-6 items-center gap-4 opacity-0 lg:mt-8">
              <span className="text-[7px] font-semibold tracking-[0.15em] text-[#B79A69]">
                01 / 06
              </span>

              <span className="h-px w-14 bg-[#B79A69]/70" />
            </div>
          </div>

          {/* Desktop Statement */}
          <div className="hero-statement-desktop mr-8 hidden translate-y-6 opacity-0 lg:block xl:mr-12">
            <div className="border-l border-[#B79A69]/50 pl-6">
              <p
                className="
                  max-w-26.25
                  text-[8px]
                  font-semibold
                  uppercase
                  leading-loose
                  tracking-[0.2em]
                  text-[#F5EEE7]/90
                "
              >
                QUIET
                <br />
                AUTHORITY
                <br />
                CREATES
                <br />
                OPPORTUNITY.
              </p>

              <span className="mt-5 block h-px w-9 bg-[#B79A69]" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Statement */}
      <div className="hero-statement-mobile absolute bottom-7 left-6 z-10 translate-y-6 opacity-0 lg:hidden sm:left-8">
        <div className="border-l border-[#B79A69]/60 pl-3">
          <p className="text-[6px] font-semibold uppercase leading-[1.85] tracking-[0.2em] text-[#F5EEE7]/80 sm:text-[7px]">
            QUIET
            <br />
            AUTHORITY
            <br />
            CREATES
            <br />
            OPPORTUNITY.
          </p>

          <span className="mt-3 block h-px w-7 bg-[#B79A69]" />
        </div>
      </div>
    </section>
  );
}

export default Hero;