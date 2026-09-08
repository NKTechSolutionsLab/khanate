function Legal() {
  return (
    <footer className="border-t border-[#B79A69]/30 bg-[#130207] text-[#F5EEE7]">
      <div className="mx-auto max-w-360 px-6 py-12 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-3 lg:items-end">
          <div>
            <div className="font-serif text-[1.4rem] tracking-[0.22em]">
              KHĀNATE
            </div>

            <p className="mt-2 text-[8px] font-semibold uppercase tracking-[0.2em] text-[#817173]">
              CAPITAL · CONNECTIONS · OPPORTUNITY
            </p>
          </div>

          <div className="flex gap-6 text-[7px] font-semibold uppercase tracking-[0.18em] text-[#F5EEE7]/65">
            <a
              href="#privacy"
              className="transition-colors duration-300 hover:text-[#B79A69]"
            >
              PRIVACY
            </a>

            <a
              href="#terms"
              className="transition-colors duration-300 hover:text-[#B79A69]"
            >
              TERMS
            </a>

            <a
              href="#contact"
              className="transition-colors duration-300 hover:text-[#B79A69]"
            >
              CONTACT
            </a>
          </div>

          <div className="lg:text-right">
            <p className="text-[8px] uppercase tracking-[0.18em] text-[#B79A69]">
              A MORE CONNECTED
              <br />
              TOMORROW.
            </p>

            <p className="mt-5 text-[8px] uppercase tracking-[0.15em] text-[#817173]">
              © 2026 KHĀNATE. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Legal;