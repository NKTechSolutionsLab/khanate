function Principal() {
  return (
    <section
      id="principal"
      className="bg-[#F5EEE7] text-[#191113]"
    >
      <div className="mx-auto max-w-360 px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex min-h-100 items-center justify-center bg-[#DED0C7] sm:min-h-125">
            <div className="text-center">
              <span className="text-[7px] font-semibold uppercase tracking-[0.2em] text-[#817173]">
                EDITORIAL PORTRAIT
              </span>

              <p className="mt-3 font-serif text-[1.4rem] text-[#191113]/60">
                Principal
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4">
              <span className="text-[8px] font-semibold uppercase tracking-[0.2em]">
                PRINCIPAL
              </span>

              <span className="h-px w-10 bg-[#B79A69]" />
            </div>

            <h2 className="mt-7 max-w-100 font-serif text-[2.8rem] font-medium leading-[0.92] tracking-tight sm:text-[3.5rem]">
              Relationships
              <br />
              Begin With Trust.
            </h2>

            <p className="mt-6 max-w-105 text-[11px] leading-[1.7] text-[#191113]/65 sm:text-[12px]">
              The principal profile brings together leadership,
              international business, European market access and
              selected engagements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Principal;