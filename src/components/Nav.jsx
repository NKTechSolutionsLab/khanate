import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import logo from "../images/logo.png";

const navItems = [
  {
    label: "ABOUT",
    href: "#about",
  },
  {
    label: "FOCUS",
    href: "#focus",
  },
  {
    label: "OPPORTUNITIES",
    href: "#opportunities",
  },
  {
    label: "BRIDGEEUROPE™",
    href: "#bridge2europe",
  },
  {
    label: "INSIGHTS",
    href: "#insights",
  },
];

function Nav({ animate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useLayoutEffect(() => {
    if (!animate) return;

    const nav = navRef.current;

    if (!nav) return;

    const logoElement = nav.querySelector(".nav-logo");
    const links = nav.querySelectorAll(".nav-link");
    const accessButton = nav.querySelector(".nav-access");
    const mobileButton = nav.querySelector(".nav-mobile-button");

    const timeline = gsap.timeline();

    timeline.to(logoElement, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power3.out",
    });

    timeline.to(
      links,
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.06,
        ease: "power3.out",
      },
      "-=0.55"
    );

    timeline.to(
      [accessButton, mobileButton],
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.5"
    );

    return () => {
      timeline.kill();
    };
  }, [animate]);

  return (
    <header
      ref={navRef}
      className="absolute inset-x-0 top-0 z-50 w-full"
    >
      <nav className="mx-auto flex w-full max-w-360 items-center justify-between px-6 py-4 sm:px-8 lg:px-10 xl:px-12">

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          aria-label="KHĀNATE home"
          className="nav-logo relative z-60 flex h-13.5 w-44.5 translate-y-3.5 items-center overflow-hidden opacity-0"
        >
          <img
            src={logo}
            alt="KHĀNATE"
            className="h-21 w-51.25 max-w-none object-cover object-center"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center lg:flex">
          <div className="flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link relative translate-y-3.5 whitespace-nowrap py-2 text-[8px] font-semibold uppercase tracking-[0.16em] text-[#F5EEE7]/90 opacity-0 transition-colors duration-300 hover:text-[#B79A69] xl:text-[9px]"
              >
                {item.label}

                <span className="absolute bottom-0 left-0 h-px w-0 bg-[#B79A69] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Private Access */}
          <a
            href="#private-access"
            className="nav-access group ml-7 flex h-11 w-45 translate-y-3.5 items-center justify-between border border-[#B79A69]/70 bg-[#5A101C]/85 px-5 text-[8px] font-semibold uppercase tracking-[0.16em] text-[#F5EEE7] opacity-0 transition-all duration-300 hover:border-[#B79A69] hover:bg-[#B79A69] hover:text-[#191113] xl:ml-8 xl:h-11.5 xl:w-47 xl:text-[9px]"
          >
            <span>PRIVATE ACCESS</span>

            <span className="text-[16px] font-light leading-none transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={
            menuOpen ? "Close navigation" : "Open navigation"
          }
          aria-expanded={menuOpen}
          className="nav-mobile-button relative z-60 flex h-10 w-10 translate-y-3.5 flex-col items-center justify-center gap-1.25 border border-[#B79A69]/70 bg-[#130207]/80 opacity-0 lg:hidden"
        >
          <span
            className={`h-px w-4.25 bg-[#F5EEE7] transition-transform duration-300 ${
              menuOpen
                ? "translate-y-0.75 rotate-45"
                : ""
            }`}
          />

          <span
            className={`h-px w-4.25 bg-[#F5EEE7] transition-transform duration-300 ${
              menuOpen
                ? "-translate-y-0.75 -rotate-45"
                : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#130207] transition-all duration-500 lg:hidden ${
          menuOpen
            ? "visible pointer-events-auto opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      >
        <div className="flex min-h-screen flex-col px-6 pb-6 pt-28 sm:px-10">

          <div className="mb-7 flex items-center gap-4">
            <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-[#B79A69]">
              Navigation
            </span>

            <span className="h-px w-10 bg-[#B79A69]/60" />
          </div>

          <div className="flex flex-col">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="group grid min-h-15.5 grid-cols-[30px_1fr_22px] items-center border-b border-[#F5EEE7]/10 text-[#F5EEE7] transition-colors duration-300 hover:text-[#B79A69]"
              >
                <span className="text-[7px] tracking-[0.12em] text-[#B79A69]">
                  0{index + 1}
                </span>

                <span className="text-[11px] font-semibold uppercase tracking-[0.17em]">
                  {item.label}
                </span>

                <span className="text-[16px] font-light transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            ))}
          </div>

          <a
            href="#private-access"
            onClick={closeMenu}
            className="mt-7 flex h-12 items-center justify-between border border-[#B79A69]/70 bg-[#5A101C] px-5 text-[8px] font-semibold uppercase tracking-[0.17em] text-[#F5EEE7] transition-all duration-300 hover:bg-[#B79A69] hover:text-[#191113]"
          >
            <span>PRIVATE ACCESS</span>

            <span className="text-[16px] font-light">
              →
            </span>
          </a>

          <div className="mt-auto border-t border-[#B79A69]/25 pt-5">
            <div className="flex items-center justify-between text-[7px] uppercase tracking-[0.17em] text-[#817173]">
              <span>RIGA · LATVIA</span>
              <span>EUROPEAN UNION</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Nav;