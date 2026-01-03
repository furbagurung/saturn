import React from "react";
import Image from "next/image";
import { cn } from "./ui/cn";
import { Container } from "./ui/container";
import { ASSETS, NAV } from "@/lib/site-data";

type Theme = "dark" | "light";

function Logo({ theme }: { className: string; theme: Theme }) {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={ASSETS.LOGO}
        width={500}
        height={50}
        alt="Saturn Multipurpose Logo"
        className="h-10 w-auto object-contain"
        loading="eager"
        decoding="async"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
          const next = e.currentTarget.nextElementSibling as HTMLElement | null;
          if (next) next.style.display = "flex";
        }}
      />
      <span
        className={cn(
          "hidden items-center font-semibold tracking-tight",
          theme === "light" ? "text-neutral-900" : "text-white"
        )}
        aria-hidden
      >
        Saturn<span className="opacity-70">Multipurpose</span>
      </span>
    </div>
  );
}
function SiteHeader() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isLightHeader, setIsLightHeader] = React.useState(false);
  const heroRef = React.useRef<HTMLElement | null>(null);
  React.useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsLightHeader(!entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Close mobile menu when switching to desktop
  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const topBarClass = cn(
    "backdrop-blur-md",
    isLightHeader
      ? "bg-white/85 border-b border-neutral-200"
      : "bg-[#061B2B]"
  );

  const topBarTextClass = cn(
    "flex flex-col gap-2 py-3 text-xs sm:flex-row sm:items-center sm:justify-between",
    isLightHeader ? "text-neutral-600" : "text-white/75"
  );

  const navHeaderClass = cn(
    "backdrop-blur-md drop-shadow-md transition-colors duration-300 ",
    isLightHeader
      ? "border-b border-neutral-200 bg-white/90"
      : "border-none bg-[#ffffff]/100"
  );
  const navLinkClass = (activeLight: boolean) =>
    cn(
      "text-sm font-medium transition-colors",
      activeLight
        ? "text-neutral-700 hover:text-neutral-900"
        : "text-black hover:text-neutral-500 "
    );

  const topLinkClass = cn(
    isLightHeader ? "hover:text-neutral-900" : "hover:text-white"
  );

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      {/* Top Bar (hidden on mobile) */}
      <div className={cn("hidden md:block", topBarClass)}>
        <Container>
          <div className={topBarTextClass}>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2">
                <span
                  className={cn(
                    "font-semibold",
                    isLightHeader ? "text-neutral-900" : "text-white"
                  )}
                >
                  Saturn Multipurpose
                </span>
                <span
                  className={
                    isLightHeader ? "text-neutral-300" : "text-white/40"
                  }
                >
                  •
                </span>
                <span>Import & Export Company • Nepal</span>
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                className={topLinkClass}
                href="mailto:saturnmultipurpose@gmail.com"
              >
                saturnmultipurpose@gmail.com
              </a>
              <a className={topLinkClass} href="tel:+9779761908555">
                +977 9761908555
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Navbar */}
      <header className={navHeaderClass}>
        <Container>
          <div className="flex items-center justify-between py-4 md:py-5">
            <a href="#home" className="flex items-center gap-3">
              <Logo
                className="h-10 w-auto object-contain"
                theme={isLightHeader ? "light" : "dark"}
              />
              <span className="sr-only">Saturn Multipurpose</span>
            </a>

            <nav className="hidden items-center gap-6 md:flex">
              {NAV.map((i) => (
                <a
                  key={i.href}
                  href={i.href}
                  className={navLinkClass(isLightHeader)}
                >
                  {i.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              {/* Mobile menu button */}
              <button
                type="button"
                className={cn(
                  "md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border shadow-sm transition",
                  isLightHeader
                    ? "border-neutral-200 bg-[#1a385d]/80 text-neutral-900 hover:bg-white"
                    : "border-white/15 bg-[#1a385d] text-white hover:bg-[#1a385d]/85"
                )}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav"
                onClick={() => setMobileOpen((v) => !v)}
              >
                {/* Hamburger / X */}
                <span className="relative block h-4 w-5">
                  <span
                    className={cn(
                      "absolute left-0 top-0 block h-0.5 w-5 rounded-full transition-transform",
                      isLightHeader ? "bg-neutral-900" : "bg-white",
                      mobileOpen ? "translate-y-1.75 rotate-45" : ""
                    )}
                  />
                  <span
                    className={cn(
                      "absolute left-0 top-1.75 block h-0.5 w-5 rounded-full transition-opacity",
                      isLightHeader ? "bg-neutral-900" : "bg-white",
                      mobileOpen ? "opacity-0" : "opacity-100"
                    )}
                  />
                  <span
                    className={cn(
                      "absolute left-0 top-3.5 block h-0.5 w-5 rounded-full transition-transform",
                      isLightHeader ? "bg-neutral-900" : "bg-white",
                      mobileOpen ? "-translate-y-1.75 -rotate-45" : ""
                    )}
                  />
                </span>
              </button>

              {/* Desktop CTA only */}
              <a
                href="#contact"
                className="hidden md:inline-flex items-center justify-center rounded-xl bg-[#F5B301] px-4 py-2 text-sm font-semibold text-[#081F33] shadow-sm hover:opacity-95"
              >
                Get a Quote
              </a>
            </div>
          </div>

          {/* Mobile menu panel (CTA moved to bottom inside menu) */}
          <div
            id="mobile-nav"
            className={cn(
              "md:hidden overflow-hidden transition-all duration-900 ",
              mobileOpen ? "max-h-96 pb-4 pt-2 " : "max-h-0"
            )}
          >
            <div
              className={cn(
                "mt-2 rounded-2xl border p-3 shadow-sm",
                isLightHeader
                  ? "border-neutral-200 bg-[#1a385d]/95"
                  : "border-white/15 bg-[#1a385d]"
              )}
            >
              <div className="flex flex-col gap-1">
                {NAV.map((i) => (
                  <a
                    key={i.href}
                    href={i.href}
                    className={cn(
                      "rounded-xl px-3 py-2 text-sm font-medium transition-colors",
                      isLightHeader
                        ? "text-neutral-800 hover:bg-neutral-50 hover:text-neutral-900"
                        : "text-white/90 hover:bg-[#e4b418] hover:text-white"
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    {i.label}
                  </a>
                ))}

               
              </div>
            </div>
          </div>
        </Container>
      </header>
    </div>
  );
}

export default SiteHeader;
