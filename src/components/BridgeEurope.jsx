const bridgeItems = [
  {
    number: "01",
    title: "ENTER",
    text: "Market entry and European positioning.",
  },
  {
    number: "02",
    title: "CONNECT",
    text: "Partners, businesses and ecosystem relationships.",
  },
  {
    number: "03",
    title: "GROW",
    text: "Commercial development and long-term European presence.",
  },
];

function BridgeEurope() {
  return (
    <section
      id="bridge2europe"
      className="relative overflow-hidden bg-[#DED0C7] text-[#191113]"
    >
      <div className="absolute right-0 top-0 hidden h-full w-1/2 bg-linear-to-l from-[#DED0C7]/20 to-transparent lg:block" />

      <div className="relative mx-auto max-w-360 px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="flex items-center gap-4">
              <span className="text-[8px] font-semibold uppercase tracking-[0.2em]">
                BRIDGEEUROPE™
              </span>

              <span className="h-px w-10 bg-[#B79A69]" />
            </div>

            <h2 className="mt-7 max-w-100 font-serif text-[2.8rem] font-medium leading-[0.92] tracking-tight sm:text-[3.5rem]">
              Your Gateway
              <br />
              to Europe.
            </h2>

            <p className="mt-6 max-w-100 text-[11px] leading-[1.7] text-[#191113]/70 sm:text-[12px]">
              A strategic market-access platform within the KHĀNATE
              ecosystem, connecting international capital and
              businesses with opportunity across Europe.
            </p>

            <a
              href="#private-access"
              className="group mt-7 inline-flex items-center gap-4 text-[8px] font-bold uppercase tracking-[0.18em]"
            >
              EXPLORE BRIDGEEUROPE™
              <span className="text-[15px] font-light transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          <div className="grid border border-[#191113]/10 sm:grid-cols-3">
            {bridgeItems.map((item) => (
              <article
                key={item.number}
                className="group min-h-45 border-b border-[#191113]/10 p-6 transition-colors duration-300 hover:bg-[#F5EEE7]/45 sm:border-b-0 sm:border-r last:border-r-0"
              >
                <span className="text-[7px] font-semibold tracking-[0.2em] text-[#B79A69]">
                  {item.number}
                </span>

                <h3 className="mt-5 text-[9px] font-bold uppercase tracking-[0.2em]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[10px] leading-[1.6] text-[#191113]/65">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BridgeEurope;