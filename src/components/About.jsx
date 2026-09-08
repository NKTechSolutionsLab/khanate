import heroBg from "../images/hero_bg.png";

function About() {
  return (
    <section
      id="about"
      className="bg-[#F5EEE7] text-[#191113]"
    >
      <div className="mx-auto grid max-w-360 lg:grid-cols-2">
        <div className="px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
          <div className="flex items-center gap-4">
            <span className="text-[8px] font-semibold uppercase tracking-[0.2em]">
              THE HOUSE
            </span>

            <span className="h-px w-10 bg-[#B79A69]" />
          </div>

          <h2 className="mt-7 max-w-162.5 font-serif text-[2.45rem] font-medium leading-[0.96] tracking-tight sm:text-[3rem] lg:text-[3.4rem]">
            A global perspective.
            <br />
            A more connected world.
          </h2>

          <p className="mt-6 max-w-107.5 text-[12px] leading-[1.7] text-[#191113]/75 sm:text-[13px]">
            KHĀNATE brings together capital, intelligence and
            relationships where there is a credible basis for
            long-term alignment and real-world opportunity.
          </p>

          <a
            href="#focus"
            className="group mt-7 inline-flex items-center gap-4 text-[8px] font-bold uppercase tracking-[0.18em] transition-colors duration-300 hover:text-[#B79A69]"
          >
            OUR APPROACH
            <span className="text-[15px] font-light transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        <div className="grid min-h-100 grid-cols-2 lg:min-h-130">
          <div className="relative overflow-hidden">
            <img
              src={heroBg}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover object-[72%_center] grayscale-[20%]"
            />

            <div className="absolute inset-0 bg-[#130207]/15" />
          </div>

          <div className="flex items-end bg-[#DED0C7] px-6 py-10 sm:px-8 lg:px-10">
            <div>
              <p className="text-[7px] font-semibold uppercase leading-[2] tracking-[0.2em] text-[#191113]/70">
                DISCIPLINE
                <br />
                PERSPECTIVE
                <br />
                RELATIONSHIPS
                <br />
                REAL IMPACT
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;