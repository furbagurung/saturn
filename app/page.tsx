// Saturn Multipurpose — One-page Landing Page (Next.js App Router compatible)
//
// ✅ Asset setup (place these files in /public)
// - /public/saturn-logo.jpg
// - /public/hero-img.jpg
//
// Notes:
// - Uses plain <img> instead of next/image (avoids next/image runtime issues)
// - Top bar + navbar are FIXED (sticky across the full page)
// - Top bar is hidden on mobile
// - Header auto-switches to LIGHT after hero for readability
// - Hero is ONLY background image + text (no ship image)

"use client";

import React from "react";

const LOGO_SRC = "/saturn-logo.jpg";
const HERO_BG_SRC = "/hero-img.jpg";

const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Process", href: "#process" },
  { label: "Why Us", href: "#why" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Nepali Handicrafts – Import & Export",
    desc: "Import and export support for authentic Nepali handicrafts, working with verified artisans and export-ready packaging.",
  },
  {
    title: "Garments Trade (Branded & Non-Branded)",
    desc: "End-to-end support for documentation, compliance, and shipment coordination from Nepal.",
  },
  {
    title: "Metal & Non-Metal Goods Trade",
    desc: "Import and export of metal and non-metal products with proper specifications and quality handling.",
  },
  {
    title: "Global Sourcing & Procurement",
    desc: "Supplier identification, pricing coordination, sampling, and quality assurance for imports and exports.",
  },
  {
    title: "Customs, Compliance & Documentation",
    desc: "Invoices, packing lists, HS codes, TT, LC coordination, and clearance support.",
  },
  {
    title: "Logistics & Freight Coordination",
    desc: "Sea, air, and land freight planning with tracking and delivery coordination.",
  },
];

const industries = [
  "Agro & Food Products",
  "Nepali Handicrafts",
  "Boutiques & Garments",
  "Baby & Mother Care Products",
  "Metal & Non-Metal Goods",

];

const steps = [
  {
    title: "Requirement",
    desc: "Tell us what you want to import or export—specs, budget, timeline, and target market.",
  },
  {
    title: "Sourcing / Buyer Match",
    desc: "We shortlist verified suppliers or buyers and share options with pricing and lead times.",
  },
  {
    title: "Documentation",
    desc: "We handle trade paperwork and compliance so the shipment moves without delays.",
  },
  {
    title: "Shipment & Delivery",
    desc: "Freight coordination, tracking, and updates until the goods reach the destination.",
  },
];

const faqs = [
  {
    q: "Do you handle both import and export?",
    a: "Yes. Saturn Multipurpose supports imports into Nepal and exports from Nepal, including sourcing, documentation, and logistics coordination.",
  },
  {
    q: "Can you source products from multiple countries?",
    a: "Yes. We can source globally depending on category, MOQ, and compliance requirements.",
  },
  {
    q: "How do you ensure supplier reliability?",
    a: "We prioritize verified vendors, request samples, validate documentation, and can coordinate third-party inspections when needed.",
  },
  {
    q: "What documents are typically required?",
    a: "Common documents include commercial invoice, packing list, HS code/valuation, certificate of origin, and shipping documents (BL/AWB). Requirements vary by product and route.",
  },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/85 shadow-sm backdrop-blur">
      {children}
    </span>
  );
}

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="max-w-2xl">
      <div className="text-xs font-semibold tracking-widest text-neutral-600">
        {eyebrow}
      </div>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
        {title}
      </h2>
      {desc ? (
        <p className="mt-3 text-sm leading-6 text-neutral-600">{desc}</p>
      ) : null}
    </div>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="text-base font-semibold text-neutral-900">{title}</div>
      <p className="mt-2 text-sm leading-6 text-neutral-600">{desc}</p>
    </div>
  );
}

function IconDot() {
  return (
    <span
      className="mt-2 inline-flex h-2 w-2 flex-none rounded-full bg-neutral-900"
      aria-hidden
    />
  );
}

function Logo({
  className,
  theme,
}: {
  className: string;
  theme: "dark" | "light";
}) {
  // Dev-time checks (“tests”) to catch common setup mistakes early
  if (process.env.NODE_ENV !== "production") {
    console.assert(
      LOGO_SRC.startsWith("/"),
      "LOGO_SRC must be a public path like /saturn-logo.jpg"
    );
    console.assert(
      HERO_BG_SRC.startsWith("/"),
      "HERO_BG_SRC must be a public path like /hero-img.jpg"
    );
    console.assert(nav.length > 0, "nav should be a non-empty array");
    console.assert(
      new Set(nav.map((n) => n.href)).size === nav.length,
      "nav hrefs should be unique"
    );
    console.assert(
      services.length >= 3,
      "services should have at least 3 items"
    );
    console.assert(steps.length === 4, "steps should have exactly 4 items");
    console.assert(faqs.length >= 2, "faqs should have at least 2 items");
  }

  return (
    <div className="flex items-center gap-2">
      <img
        src={LOGO_SRC}
        alt="Saturn Multipurpose Logo"
        className={className}
        loading="eager"
        decoding="async"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
          const next = e.currentTarget.nextElementSibling as HTMLElement | null;
          if (next) next.style.display = "flex";
        }}
      />

      {/* Fallback text logo (shows only if image fails) */}
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

export default function Page() {
  const [showHeroBg, setShowHeroBg] = React.useState(true);
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
      : "bg-[#061B2B]/70"
  );

  const topBarTextClass = cn(
    "flex flex-col gap-2 py-3 text-xs sm:flex-row sm:items-center sm:justify-between",
    isLightHeader ? "text-neutral-600" : "text-white/75"
  );

  const navHeaderClass = cn(
    "backdrop-blur-md",
    isLightHeader
      ? "border-b border-neutral-200 bg-white/90"
      : "border-none bg-[#061B2B]/45"
  );

  const navLinkClass = (activeLight: boolean) =>
    cn(
      "text-sm font-medium transition-colors",
      activeLight
        ? "text-neutral-700 hover:text-neutral-900"
        : "text-white/85 hover:text-white"
    );

  const topLinkClass = cn(
    isLightHeader ? "hover:text-neutral-900" : "hover:text-white"
  );

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Fixed Top Bar + Navbar (stays visible across the full page) */}
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
            <div className="flex items-center justify-between py-4">
              <a href="#home" className="flex items-center gap-3">
                <Logo
                  className="h-10 w-auto object-contain"
                  theme={isLightHeader ? "light" : "dark"}
                />
                <span className="sr-only">Saturn Multipurpose</span>
              </a>

              <nav className="hidden items-center gap-6 md:flex">
                {nav.map((i) => (
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
                      ? "border-neutral-200 bg-white/80 text-neutral-900 hover:bg-white"
                      : "border-white/15 bg-white/10 text-white hover:bg-white/15"
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
                        mobileOpen ? "translate-y-[7px] rotate-45" : ""
                      )}
                    />
                    <span
                      className={cn(
                        "absolute left-0 top-[7px] block h-0.5 w-5 rounded-full transition-opacity",
                        isLightHeader ? "bg-neutral-900" : "bg-white",
                        mobileOpen ? "opacity-0" : "opacity-100"
                      )}
                    />
                    <span
                      className={cn(
                        "absolute left-0 top-[14px] block h-0.5 w-5 rounded-full transition-transform",
                        isLightHeader ? "bg-neutral-900" : "bg-white",
                        mobileOpen ? "translate-y-[-7px] -rotate-45" : ""
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
                "md:hidden overflow-hidden transition-[max-height] duration-300",
                mobileOpen ? "max-h-96" : "max-h-0"
              )}
            >
              <div
                className={cn(
                  "mt-2 rounded-2xl border p-3 shadow-sm",
                  isLightHeader
                    ? "border-neutral-200 bg-white/95"
                    : "border-white/15 bg-[#061B2B]/85"
                )}
              >
                <div className="flex flex-col gap-1">
                  {nav.map((i) => (
                    <a
                      key={i.href}
                      href={i.href}
                      className={cn(
                        "rounded-xl px-3 py-2 text-sm font-medium transition-colors",
                        isLightHeader
                          ? "text-neutral-800 hover:bg-neutral-50 hover:text-neutral-900"
                          : "text-white/90 hover:bg-white/10 hover:text-white"
                      )}
                      onClick={() => setMobileOpen(false)}
                    >
                      {i.label}
                    </a>
                  ))}

                  {/* Mobile CTA at bottom */}
                  <a
                    href="#contact"
                    onClick={() => setMobileOpen(false)}
                    className="mt-3 inline-flex items-center justify-center rounded-xl bg-[#F5B301] px-4 py-3 text-sm font-semibold text-[#081F33] shadow-sm hover:opacity-95"
                  >
                    Get a Quote
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </header>
      </div>

      {/* Page content */}
      <div>
        {/* Hero (full-width background image + text only) */}
        <main
          ref={heroRef}
          id="home"
          className="relative min-h-screen overflow-hidden bg-[#061B2B]"
        >
          {showHeroBg ? (
            <img
              src={HERO_BG_SRC}
              alt=""
              aria-hidden
              className="pointer-events-none absolute inset-0 h-full w-full object-cover"
              onError={() => setShowHeroBg(false)}
            />
          ) : null}

          {/* overlay for readability */}
          <div className="pointer-events-none absolute inset-0 bg-[#061B2B]/35" />

          <Container>
            {/*
              Vertically center hero content on large screens.
              Header is fixed; we reserve space for it.
              On mobile the top bar is hidden, but reserving the larger height is safe.
            */}
            <div className="relative flex min-h-[calc(100vh-120px)] items-center pt-[120px]">
              <div className="w-full max-w-2xl py-10">
                <div className="flex flex-wrap gap-2">
                  <Badge>Nepal-based Import & Export</Badge>
                </div>

                <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  Saturn
                  <br />
                  Now It's your turn.
                </h1>

                <p className="mt-5 max-w-xl text-base leading-7 text-white/85">
                  Saturn Multipurpose Pvt. Ltd. is a Nepal-based company
                  involved in the production, import, and export of diverse
                  goods such as handicrafts, metal & Non-Metal products,
                  garments with Branded & Non-Branded Clothes, food items and
                  Distribution of Baby & Mother Care Product .
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-xl bg-[#F5B301] px-5 py-3 text-sm font-semibold text-[#081F33] shadow-sm hover:opacity-95"
                  >
                    Get a Quote
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15"
                  >
                    Explore Services
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </main>

        {/* About */}
        <section
          id="about"
          className="border-t border-neutral-200 bg-white py-14 sm:py-16"
        >
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <SectionTitle
                  eyebrow="ABOUT"
                  title="Saturn Multipurpose Pvt. Ltd."
                  desc="We are a Nepal-based Import -export company with dedicated to bringing authentic Nepali products—handicrafts, metal & non-metal goods, garments with Branded & Non-Branded Clothes Production, and food items as well as Distribution of Baby & Mother Care Product."
                />

                <div className="mt-6 space-y-4 text-sm leading-6 text-neutral-600">
                  <p>
                    From the heart of rural communities to the global market.
                    Our mission is to uplift local farmers, artisans, and small
                    producers as well as support Baby & Mother Care by giving
                    their products international exposure & Local Market,
                    ensuring fair pricing, and maintaining strict quality
                    standards. With a focus on integrity, transparency, and
                    reliability, we provide end-to-end export solutions,
                    including sourcing, quality control, packaging, and
                    international logistics.
                  </p>
                  <p>
                    Our goal is to connect Nepal’s heritage and natural richness
                    with buyers worldwide through consistent supply, competitive
                    pricing, and professional service.
                  </p>
                </div>

                <div className="mt-8 rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
                  <div className="text-sm font-semibold text-neutral-900">
                    Founder
                  </div>
                  <div className="mt-2 text-lg font-semibold text-neutral-900">
                    Rabin Shrestha
                  </div>
                  <div className="text-sm text-neutral-600">
                    Founder, Saturn Multipurpose Pvt. Ltd.
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
                <div className="text-sm font-semibold text-neutral-900">
                  Company Information
                </div>

                <ul className="mt-4 space-y-4 text-sm text-neutral-700">
                  <li className="flex items-start gap-3">
                    <span className="font-semibold">Email:</span>
                    <span>saturnmultipurpose@gmail.com</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold">Website:</span>
                    <span>www.saturnmultipurpose.com</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold">Phone:</span>
                    <span>+977 9761908555</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold">Location:</span>
                    <span>Bhaktapur, Nepal</span>
                  </li>
                </ul>

                <div className="mt-6 rounded-2xl bg-white p-5">
                  <div className="text-xs font-semibold text-neutral-700">
                    Business Focus
                  </div>
                  <p className="mt-2 text-sm text-neutral-600">
                    Import & Export on Nepali products—handicrafts, metal & non-metal goods, garments with Branded & Non-Branded Clothes Production, and food items & Support on Baby & Mother Care with Global Market focus.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Services */}
        <section
          id="services"
          className="border-t border-neutral-200 bg-neutral-50 py-14 sm:py-16"
        >
          <Container>
            <div className="flex flex-col gap-8">
              <SectionTitle
                eyebrow="SERVICES"
                title="Import and Export Nepali products to global markets."
                desc="We help businesses trade Nepali handicrafts, garments, and industrial goods across borders with clarity, compliance, and reliable coordination."
              />

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((s) => (
                  <Card key={s.title} title={s.title} desc={s.desc} />
                ))}
              </div>

              <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="text-sm font-semibold">
                      Not sure what you need?
                    </div>
                    <div className="mt-1 text-sm text-neutral-600">
                      Share your product details and destination—we’ll recommend
                      the best route and checklist.
                    </div>
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-xl border border-neutral-900 bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
                  >
                    Get Free Consultation
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Industries */}
        <section
          id="industries"
          className="border-t border-neutral-200 bg-white py-14 sm:py-16"
        >
          <Container>
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
              <div>
                <SectionTitle
                  eyebrow="INDUSTRIES"
                  title="Flexible trade support across categories."
                  desc="We can support most product categories depending on compliance requirements, documentation, and shipment routes."
                />
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {industries.map((i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4"
                    >
                      <div className="text-sm font-semibold">{i}</div>
                      <div className="mt-1 text-xs text-neutral-600">
                        Contract Manufacturing • Local Trade  • Global Market
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
                <div className="text-sm font-semibold">
                  Compliance-first approach
                </div>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  Product requirements differ by country and category. We help
                  you map the right HS codes, prepare compliant documents, and
                  coordinate inspections when necessary.
                </p>
                <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-5">
                  <div className="text-xs font-semibold text-neutral-700">
                    Before you ship, we help you check:
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                    {[
                      "Restricted/regulated goods status",
                      "Labeling & packaging requirements",
                      "Duties & estimated lead times",
                      "Shipping mode: sea/air/land",
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-3">
                        <IconDot />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div> */}
            </div>
          </Container>
        </section>

        {/* Process */}
        <section
          id="process"
          className="border-t border-neutral-200 bg-neutral-50 py-14 sm:py-16"
        >
          <Container>
            <SectionTitle
              eyebrow="PROCESS"
              title="A simple, proven process to reduce delays."
              desc="We keep everything structured—so you know what happens next and what documents are needed."
            />

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, idx) => (
                <div
                  key={s.title}
                  className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-xl border border-neutral-200 bg-neutral-50 text-sm font-semibold">
                      {idx + 1}
                    </div>
                    <div className="text-sm font-semibold">{s.title}</div>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Why Us */}
        <section
          id="why"
          className="border-t border-neutral-200 bg-white py-14 sm:py-16"
        >
          <Container>
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
              <div>
                <SectionTitle
                  eyebrow="WHY SATURN"
                  title="Trade support that feels simple, even when it’s complex."
                  desc="We focus on clarity, compliance, and coordination—so your shipments move smoothly."
                />
                <div className="mt-6 space-y-3">
                  {[
                    {
                      t: "Clear updates",
                      d: "You’ll know the status, next step, and ETA at every stage.",
                    },
                    {
                      t: "Risk reduction",
                      d: "Supplier checks, samples, and inspections to protect your money.",
                    },
                    {
                      t: "Documentation accuracy",
                      d: "Correct paperwork to prevent customs holds and penalties.",
                    },
                    {
                      t: "Nepal market understanding",
                      d: "Local context for imports, clearances, and timelines.",
                    },
                  ].map((x) => (
                    <div
                      key={x.t}
                      className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5"
                    >
                      <div className="text-sm font-semibold">{x.t}</div>
                      <div className="mt-1 text-sm text-neutral-600">{x.d}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
                <div className="text-sm font-semibold">FAQ</div>
                <div className="mt-4 space-y-3">
                  {faqs.map((f) => (
                    <details
                      key={f.q}
                      className="group rounded-2xl border border-neutral-200 bg-white p-5"
                    >
                      <summary className="cursor-pointer list-none text-sm font-semibold text-neutral-900">
                        <span className="group-open:opacity-80">{f.q}</span>
                      </summary>
                      <p className="mt-2 text-sm leading-6 text-neutral-600">
                        {f.a}
                      </p>
                    </details>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-5">
                  <div className="text-sm font-semibold">
                    Get a tailored checklist
                  </div>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    Share your product category and destination. We’ll respond
                    with required documents, estimated lead time, and a
                    next-step plan.
                  </p>
                  <a
                    href="#contact"
                    className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-neutral-900 bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:opacity-95"
                  >
                    Request Checklist
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="border-t border-neutral-200 bg-neutral-50 py-14 sm:py-16"
        >
          <Container>
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
              <div>
                <SectionTitle
                  eyebrow="CONTACT"
                  title="Let’s talk trade."
                  desc="Send your requirement and we’ll get back with a quote and action plan."
                />

                <div className="mt-6 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                  <div className="text-sm font-semibold">Contact details</div>
                  <div className="mt-3 space-y-2 text-sm text-neutral-700">
                    <div>
                      <div className="text-xs font-semibold text-neutral-500">
                        Email
                      </div>
                      <a
                        className="hover:underline"
                        href="mailto:saturnmultipurpose@gmail.com"
                      >
                        saturnmultipurpose@gmail.com
                      </a>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-neutral-500">
                        Phone
                      </div>
                      <a className="hover:underline" href="tel:+9779761908555">
                        +977 9761908555
                      </a>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-neutral-500">
                        Office
                      </div>
                      <div>Kathmandu, Nepal (Update address)</div>
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl bg-neutral-50 p-4">
                    <div className="text-xs font-semibold text-neutral-700">
                      Fastest way
                    </div>
                    <p className="mt-1 text-xs leading-5 text-neutral-600">
                      Message us with: product name, quantity, destination, and
                      your timeline.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold">Request a quote</div>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  This form is frontend-only. Connect it to your backend (API
                  route / email service) when ready.
                </p>

                <form
                  className="mt-6 space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert(
                      "Form submitted (demo). Connect to backend to receive messages."
                    );
                  }}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-xs font-semibold text-neutral-600">
                        Full Name
                      </label>
                      <input
                        required
                        className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none ring-0 focus:border-neutral-400"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-neutral-600">
                        Company
                      </label>
                      <input
                        className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none ring-0 focus:border-neutral-400"
                        placeholder="Company name"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-xs font-semibold text-neutral-600">
                        Email
                      </label>
                      <input
                        required
                        type="email"
                        className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none ring-0 focus:border-neutral-400"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-neutral-600">
                        Phone
                      </label>
                      <input
                        className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none ring-0 focus:border-neutral-400"
                        placeholder="+977 ..."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-neutral-600">
                      Requirement
                    </label>
                    <textarea
                      required
                      className="mt-2 min-h-[120px] w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none ring-0 focus:border-neutral-400"
                      placeholder="Product, quantity, import/export, destination, timeline..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-xl border border-neutral-900 bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
                  >
                    Submit Request
                  </button>

                  <p className="text-center text-xs text-neutral-500">
                    By submitting, you agree to be contacted by Saturn
                    Multipurpose regarding your request.
                  </p>
                </form>
              </div>
            </div>
          </Container>
        </section>

        {/* Footer */}
        <footer className="border-t border-neutral-200 bg-white py-10">
          <Container>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={LOGO_SRC}
                  alt="Saturn Multipurpose Logo"
                  className="h-9 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display =
                      "none";
                  }}
                />
                <div>
                  <div className="text-sm font-semibold">
                    Saturn Multipurpose
                  </div>
                  <div className="text-xs text-neutral-500">
                    Import & Export • Nepal
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-neutral-600">
                {nav.map((i) => (
                  <a
                    key={i.href}
                    href={i.href}
                    className="hover:text-neutral-900"
                  >
                    {i.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-2 border-t border-neutral-200 pt-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
              <div>
                © {new Date().getFullYear()} Saturn Multipurpose. All rights
                reserved.
              </div>
              <div className="flex gap-3">
                <a className="hover:text-neutral-900" href="#">
                  Privacy
                </a>
                <a className="hover:text-neutral-900" href="#">
                  Terms
                </a>
              </div>
            </div>
          </Container>
        </footer>
      </div>
    </div>
  );
}
