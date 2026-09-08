import heroBg from "../images/hero_bg.png";

function Private() {
  return (
    <section
      id="private-access"
      className="relative overflow-hidden bg-[#130207] text-[#F5EEE7]"
    >
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-[68%_center] opacity-45"
        />

        <div className="absolute inset-0 bg-linear-to-r from-[#130207] via-[#130207]/85 to-[#130207]/55" />
      </div>

      <div className="relative mx-auto max-w-360 px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="flex items-center gap-4">
              <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#F5EEE7]">
                PRIVATE ACCESS
              </span>

              <span className="h-px w-10 bg-[#B79A69]" />
            </div>

            <h2 className="mt-7 max-w-100 font-serif text-[2.8rem] font-medium leading-[0.92] tracking-tight sm:text-[3.6rem]">
              A Conversation
              <br />
              Starts Here.
            </h2>

            <p className="mt-6 max-w-95 text-[11px] leading-[1.7] text-[#F5EEE7]/70 sm:text-[12px]">
              Access to selected opportunities, insights and
              discussions. By invitation only.
            </p>

            <a
              href="#contact"
              className="group mt-7 inline-flex h-11 items-center gap-6 border border-[#B79A69] bg-[#5A101C]/80 px-5 text-[8px] font-semibold uppercase tracking-[0.17em] transition-all duration-300 hover:bg-[#B79A69] hover:text-[#191113]"
            >
              <span>REQUEST PRIVATE ACCESS</span>

              <span className="text-[15px] font-light transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          <div className="border-l border-[#B79A69]/40 pl-7 lg:ml-auto lg:max-w-90">
            <p className="font-serif text-[1.35rem] italic leading-[1.2] text-[#F5EEE7]/85 sm:text-[1.6rem]">
              “Stronger connections create a more prosperous tomorrow.”
            </p>

            <span className="mt-7 block h-px w-9 bg-[#B79A69]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Private;