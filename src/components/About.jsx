import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import about from "../images/about.png";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const keywordsRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const image = imageRef.current;
    const keywords = keywordsRef.current;

    if (!section || !content || !image || !keywords) return;

    const ctx = gsap.context(() => {
      const eyebrow = content.querySelector(".about-eyebrow");
      const heading = content.querySelector(".about-heading");
      const paragraph = content.querySelector(".about-paragraph");
      const link = content.querySelector(".about-link");
      const keywordLines = keywords.querySelectorAll(".about-keyword");

      // Initial states
      gsap.set([eyebrow, heading, paragraph, link], {
        opacity: 0,
        y: 25,
      });

      gsap.set(image, {
        opacity: 0,
        scale: 1.06,
      });

      gsap.set(keywordLines, {
        opacity: 0,
        x: 15,
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
          "-=0.35"
        )
        .to(
          paragraph,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .to(
          link,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.35"
        )
        .to(
          image,
          {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power2.out",
          },
          "-=0.9"
        )
        .to(
          keywordLines,
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.7"
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="overflow-hidden bg-[#F5EEE7] text-[#191113]"
    >
      <div className="mx-auto grid max-w-360 lg:grid-cols-2">

        {/* =========================
            CONTENT
        ========================== */}
        <div
          ref={contentRef}
          className="
            px-6
            py-14
            sm:px-8
            sm:py-20
            lg:px-12
            lg:py-24
            xl:px-16
          "
        >
          {/* Eyebrow */}
          <div className="about-eyebrow flex items-center gap-4">
            <span className="text-[12px] font-semibold uppercase tracking-[0.2em]">
              THE HOUSE
            </span>

            <span className="h-px w-10 bg-[#B79A69]" />
          </div>

          {/* Heading */}
          <h2
            className="
              about-heading
              mt-7
              max-w-162.5
              font-serif
              text-[2.45rem]
              font-medium
              leading-[0.96]
              tracking-tight
              sm:text-[3rem]
              lg:text-[3.4rem]
            "
          >
            A global perspective.
            <br />
            A more connected world.
          </h2>

          {/* Paragraph */}
          <p
            className="
              about-paragraph
              mt-6
              max-w-107.5
              text-[12px]
              leading-[1.7]
              text-[#191113]/75
              sm:text-[13px]
            "
          >
            KHĀNATE brings together capital, intelligence and
            relationships where there is a credible basis for
            long-term alignment and real-world opportunity.
          </p>

          {/* CTA */}
          <a
            href="#focus"
            className="
              about-link
              group
              mt-7
              inline-flex
              items-center
              gap-4
              text-[10px]
              font-bold
              uppercase
              tracking-[0.18em]
              transition-colors
              duration-300
              hover:text-[#B79A69]
            "
          >
            OUR APPROACH

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
            VISUAL SIDE
        ========================== */}
        <div
          className="
            grid
            min-h-0
            grid-cols-1
            lg:min-h-130
            lg:grid-cols-2
          "
        >
          {/* =========================
              IMAGE
          ========================== */}
          <div
            className="
              relative
              h-70
              overflow-hidden
              sm:h-90
              lg:h-auto
            "
          >
            <img
              ref={imageRef}
              src={about}
              alt=""
              aria-hidden="true"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-[72%_center]
                grayscale-[20%]
                lg:object-[72%_center]
              "
            />

            <div className="absolute inset-0 bg-[#130207]/15" />
          </div>

          {/* =========================
              KEYWORDS
          ========================== */}
          <div
            ref={keywordsRef}
            className="
              flex
              min-h-32
              items-center
              bg-[#DED0C7]
              px-6
              py-8
              sm:min-h-36
              sm:px-8
              lg:items-end
              lg:px-10
              lg:py-10
            "
          >
            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                leading-[2]
                tracking-[0.2em]
                text-[#191113]/70
                sm:text-[10px]
              "
            >
              <span className="about-keyword block">
                DISCIPLINE
              </span>

              <span className="about-keyword block">
                PERSPECTIVE
              </span>

              <span className="about-keyword block">
                RELATIONSHIPS
              </span>

              <span className="about-keyword block">
                REAL IMPACT
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;