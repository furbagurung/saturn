
"use client";

import React from "react";
import { cn } from "./ui/cn";
import { Container } from "./ui/container";
import { ASSETS, NAV } from "@/lib/site-data";
import Image from "next/image";

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={ASSETS.LOGO}
        alt="Saturn Multipurpose Logo"
        className="h-10 w-auto object-contain"
        width={100}
        height={50}
        loading="lazy"
        decoding="async"
      />
      <span className="sr-only">Saturn Multipurpose</span>
    </div>
  );
}

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // Close mobile menu when switching to desktop
  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50 overflow-x-hidden">
      {/* Top Bar (hidden on mobile) */}
      <div className="hidden md:block bg-[#061B2B]/70 backdrop-blur-md">
        <Container>
          <div className="flex flex-col gap-2 py-3 text-xs text-white/80 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white">Saturn Multipurpose</span>
              <span className="text-white/40">•</span>
              <span>Import &amp; Export Company • Nepal</span>
            </div>

            <div className="flex items-center gap-4">
              <a className="hover:text-white" href="mailto:saturnmultipurpose@gmail.com">
                saturnmultipurpose@gmail.com
              </a>
              <a className="hover:text-white" href="tel:+9779761908555">
                +977 9761908555
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Floating pill navbar */}
      <div className="pt-3 md:pt-4 drop-shadow-lime-50 h-25">
        <Container >
          <header
            className={cn(
              "mx-auto w-full max-w-full overflow-x-hidden",
              "rounded-2xl bg-white backdrop-blur-md",
              "shadow-lg border border-white/40 ", 
            )}
          >
            <div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4 min-w-0">
              {/* Left: Logo */}
              <a href="#home" className="flex items-center min-w-0">
                <Logo />
              </a>

              {/* Center: Nav */}
              <nav className="hidden md:flex items-center gap-8 min-w-0">
                {NAV.map((i) => (
                  <a
                    key={i.href}
                    href={i.href}
                    className="text-sm font-medium text-neutral-700 hover:text-neutral-900"
                  >
                    {i.label}
                  </a>
                ))}
              </nav>

              {/* Right: CTA + Hamburger */}
              <div className="flex items-center gap-2">
                {/* Desktop CTA */}
                <a
                  href="#contact"
                  className="hidden md:inline-flex items-center justify-center rounded-xl bg-[#23456c] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95"
                >
                  Get a Quote
                </a>

                {/* Mobile hamburger ONLY (no CTA beside it) */}
                <button
                  type="button"
                  className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-900 shadow-sm"
                  aria-label={mobileOpen ? "Close menu" : "Open menu"}
                  aria-expanded={mobileOpen}
                  aria-controls="mobile-nav"
                  onClick={() => setMobileOpen((v) => !v)}
                >
                  <span className="relative block h-4 w-5">
                    <span
                      className={cn(
                        "absolute left-0 top-0 block h-0.5 w-5 rounded-full bg-neutral-900 transition-transform",
                        mobileOpen && "translate-y-1.75 rotate-45"
                      )}
                    />
                    <span
                      className={cn(
                        "absolute left-0 top-1.75 block h-0.5 w-5 rounded-full bg-neutral-900 transition-opacity",
                        mobileOpen ? "opacity-0" : "opacity-100"
                      )}
                    />
                    <span
                      className={cn(
                        "absolute left-0 top-3.5 block h-0.5 w-5 rounded-full bg-neutral-900 transition-transform",
                        mobileOpen && "-translate-y-1.75 -rotate-45"
                      )}
                    />
                  </span>
                </button>
              </div>
            </div>

            {/* Mobile dropdown under the pill */}
            <div
              id="mobile-nav"
              className={cn(
                "md:hidden overflow-hidden overflow-x-hidden transition-[max-height] duration-300",
                mobileOpen ? "max-h-96" : "max-h-0"
              )}
            >
              <div className="px-4 pb-4">
                <div className="rounded-2xl border border-neutral-200 bg-white p-2">
                  {NAV.map((i) => (
                    <a
                      key={i.href}
                      href={i.href}
                      className="block rounded-xl px-3 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-50"
                      onClick={() => setMobileOpen(false)}
                    >
                      {i.label}
                    </a>
                  ))}

                  {/* CTA at bottom INSIDE menu */}
                  <a
                    href="#contact"
                    onClick={() => setMobileOpen(false)}
                    className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-[#111827] px-4 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
                  >
                    Get a Quote
                  </a>
                </div>
              </div>
            </div>
          </header>
        </Container>
      </div>
    </div>
  );
}
