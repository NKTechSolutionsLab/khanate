import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img from "../images/shehzad2.png";

gsap.registerPlugin(ScrollTrigger);

function Principal() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const imageInnerRef = useRef(null);
  const contentRef = useRef(null);
  const nameRef = useRef(null);
  const statementRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const imageInner = imageInnerRef.current;
    const content = contentRef.current;
    const name = nameRef.current;
    const statement = statementRef.current;

    if (
      !section ||
      !image ||
      !imageInner ||
      !content ||
      !name ||
      !statement
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      const intro = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          once: true,
        },
      });

      gsap.set(image, {
        opacity: 0,
        y: 25,
      });

      gsap.set(name, {
        opacity: 0,
        x: 22,
      });

      gsap.set(content, {
        opacity: 0,
        y: 20,
      });

      gsap.set(statement, {
        opacity: 0,
        y: 16,
      });

      intro
        .to(image, {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
        })
        .to(
          name,
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .to(
          content,
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out",
          },
          "-=0.38"
        )
        .to(
          statement,
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power2.out",
          },
          "-=0.25"
        );

      gsap.to(imageInner, {
        yPercent: -4,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="principal"
      className="overflow-hidden bg-[#F5EEE7] text-[#191113]"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-[84px] xl:px-16">

        {/* =========================================================
            SECTION MARKER
        ========================================================== */}

        <div className="mb-9 flex items-center justify-between lg:mb-10">

          <div className="flex items-center gap-4">

            <span className="font-mono text-[11px] tracking-[0.16em] text-[#A06A52]">
              06
            </span>

            <span className="h-px w-10 bg-[#B79A69]" />

            <span className="text-[13px] font-semibold uppercase tracking-[0.24em]">
              THE PRINCIPAL
            </span>

          </div>


        </div>


        {/* =========================================================
            MAIN COMPOSITION
        ========================================================== */}

        <div className="relative lg:min-h-[670px]">

          {/* =======================================================
              MAROON BACKDROP
          ======================================================== */}

          <div
            className="
              absolute
              bottom-[4%]
              left-0
              top-[21%]
              hidden
              w-[39%]
              bg-[#260506]
              lg:block
            "
          />


          {/* =======================================================
              PORTRAIT
          ======================================================== */}

          <div
            ref={imageRef}
            className="
              group
              relative
              z-10
              h-[500px]
              overflow-hidden
              bg-[#DED0C7]
              sm:h-[585px]
              lg:absolute
              lg:left-[7%]
              lg:top-0
              lg:h-[610px]
              lg:w-[42%]
            "
          >

            <img
              ref={imageInnerRef}
              src={img}
              alt="Shehzad Khan, Founder and Principal of KHĀNATE"
              className="
                absolute
                inset-0
                h-[108%]
                w-full
                object-cover
                object-[50%_12%]
                transition-transform
                duration-[1200ms]
                ease-out
                group-hover:scale-[1.02]
                lg:object-center
              "
            />

            {/* image wash */}

            <div className="absolute inset-0 bg-gradient-to-t from-[#130207]/80 via-transparent to-transparent" />


            {/* portrait identity */}

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">

              <div className="flex items-end justify-between gap-5">

                <div>

                  <span className="text-[14px] font-semibold uppercase tracking-[0.22em] text-[#D8BF8E] sm:text-[11px]">
                    FOUNDER & PRINCIPAL
                  </span>

                  <div className="mt-3 h-px w-10 bg-[#B79A69]" />

                </div>

                <span className="font-mono text-[10px] tracking-[0.16em] text-[#F5EEE7]/45">
                  KHĀNATE
                </span>

              </div>

            </div>

          </div>


          {/* =======================================================
              NAME
          ======================================================== */}

          <div
            ref={nameRef}
            className="
              relative
              z-30
              mt-7
              lg:absolute
              lg:right-0
              lg:top-0
              lg:mt-0
              lg:w-[51%]
              lg:pl-3
            "
          >

            <span
              className="
                block
                font-serif
                text-[3.5rem]
                leading-[0.81]
                tracking-[-0.06em]
                text-[#260506]
                sm:text-[4.45rem]
                lg:text-[5.25rem]
                xl:text-[5.8rem]
              "
            >
              Shehzad
            </span>

            <span
              className="
                ml-[0.64em]
                block
                font-serif
                text-[3.5rem]
                leading-[0.81]
                tracking-[-0.06em]
                text-[#A06A52]
                sm:text-[4.45rem]
                lg:text-[5.25rem]
                xl:text-[5.8rem]
              "
            >
              Khan
            </span>

          </div>


          {/* =======================================================
              INFORMATION PANEL
          ======================================================== */}

          <div
            ref={contentRef}
            className="
              relative
              z-30
              mt-9
              w-full
              bg-[#260506]
              px-7
              py-8
              text-[#F1E7DC]
              sm:px-9
              sm:py-10
              lg:absolute
              lg:right-0
              lg:top-[166px]
              lg:mt-0
              lg:w-[57%]
              lg:px-11
              lg:py-11
              xl:px-13
            "
          >

            {/* top marker */}

            <div className="flex items-center gap-4">

              <span className="h-px w-10 bg-[#B79A69]" />

              <span className="text-[13px] font-semibold uppercase tracking-[0.22em] text-[#B79A69]">
                THE PERSON BEHIND THE PLATFORM
              </span>

            </div>


            {/* Main heading */}

            <h2
              className="
                mt-6
                max-w-[650px]
                font-serif
                text-[2.7rem]
                leading-[0.92]
                tracking-[-0.05em]
                sm:text-[3.4rem]
                lg:text-[3.95rem]
              "
            >
              Relationships
              <br />
              begin with
              <span className="text-[#B79A69]">
                {" "}
                trust.
              </span>
            </h2>


            {/* Body */}

            <div className="mt-7 grid gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:gap-8">

              <div>

                <p className="lg:text-[18px] leading-[1.75] text-[#D4C3BA]/75 text-[17px]">
                  KHĀNATE was founded on the belief that meaningful
                  opportunities are built through trusted relationships,
                  informed perspective and disciplined access.
                </p>

                <p className="mt-4 text-[18px] leading-[1.75] text-[#D4C3BA]/75 lg:text-[17px]">
                  As Founder and Principal, the focus is on connecting
                  capital, businesses and strategic relationships across
                  Europe and international markets — identifying
                  opportunities where alignment can create lasting value.
                </p>

              </div>


              {/* Approach */}

              <div className="border-l border-[#E8DDD3]/10 pl-6">

                <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#B79A69]">
                  PRINCIPAL'S APPROACH
                </span>

                <div className="mt-5 space-y-3">

                  <p className="font-serif text-[1.45rem] leading-none text-[#F1E7DC]">
                    Selective relationships.
                  </p>

                  <p className="font-serif text-[1.45rem] leading-none text-[#F1E7DC]/85">
                    Informed decisions.
                  </p>

                  <p className="font-serif text-[1.45rem] leading-none text-[#D8BF8E]">
                    Long-term alignment.
                  </p>

                </div>

              </div>

            </div>


            {/* identity strip */}

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[#E8DDD3]/10 pt-5">

              <span className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-[#F1E7DC]/60">
                CAPITAL
              </span>

              <span className="h-3 w-px bg-[#F1E7DC]/15" />

              <span className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-[#F1E7DC]/60">
                CONNECTIONS
              </span>

              <span className="h-3 w-px bg-[#F1E7DC]/15" />

              <span className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-[#F1E7DC]/60">
                OPPORTUNITY
              </span>

            </div>

          </div>

        </div>


        {/* =========================================================
            TRUST STATEMENT
        ========================================================== */}

        <div
          ref={statementRef}
          className="
            mt-6
            border-t
            border-[#191113]/12
            pt-6
            lg:mt-5
            lg:pt-5
          "
        >

          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between mt-8 lg:mt-26">

            <p
              className="
                max-w-[760px]
                font-serif
                text-[1.85rem]
                leading-[1.02]
                tracking-[-0.03em]
                sm:text-[2.2rem]
                lg:text-[2.35rem]
              "
            >
              Meaningful opportunities are built through
              <span className="text-[#A06A52]">
                {" "}
                trusted relationships.
              </span>
            </p>

         

          </div>

        </div>

      </div>
    </section>
  );
}

export default Principal;