
'use client';
import React from "react";
import Image from "next/image";

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
    title: "Global Sourcing & Procurement",
    desc: "Identify reliable suppliers, negotiate pricing, and ensure consistent quality for your imports.",
  },
  {
    title: "Export Facilitation",
    desc: "End-to-end support for documentation, compliance, and shipment coordination from Nepal.",
  },
  {
    title: "Customs & Documentation",
    desc: "Invoice, packing list, HS codes, COO, LC coordination, and clearance guidance.",
  },
  {
    title: "Logistics & Freight Coordination",
    desc: "Sea, air, and land freight planning with timelines, tracking, and delivery management.",
  },
  {
    title: "Quality Checks & Inspection",
    desc: "Pre-shipment checks, sampling, and inspection coordination to reduce risk.",
  },
  {
    title: "B2B Trade Consulting",
    desc: "Market insights, partner matching, and trade strategy to expand your footprint.",
  },
];

const industries = [
  "Agro & Food Products",
  "Handicrafts & Home Decor",
  "Textiles & Garments",
  "Construction Materials",
  "Electronics & Appliances",
  "Industrial Supplies",
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

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs font-medium text-neutral-700 shadow-sm backdrop-blur">
      {children}
    </span>
  );
}

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>;
}

function SectionTitle({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <div className="max-w-2xl">
      <div className="text-xs font-semibold tracking-widest text-neutral-600">{eyebrow}</div>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">{title}</h2>
      {desc ? <p className="mt-3 text-sm leading-6 text-neutral-600">{desc}</p> : null}
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
    <span className="mt-2 inline-flex h-2 w-2 flex-none rounded-full bg-neutral-900" aria-hidden />
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Top Bar */}
      <div className="border-b border-neutral-200 bg-white">
        <Container>
          <div className="flex flex-col gap-2 py-3 text-xs text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2">
                <span className="font-semibold text-neutral-900">Saturn Multipurpose</span>
                <span className="text-neutral-400">•</span>
                <span>Import & Export Company • Nepal</span>
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a className="hover:text-neutral-900" href="mailto:info@saturnmultipurpose.com">
                info@saturnmultipurpose.com
              </a>
              <a className="hover:text-neutral-900" href="tel:+9779800000000">
                +977 98XXXXXXXX
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/80 backdrop-blur">
        <Container>
          <div className="flex items-center justify-between py-4">
          <a href="#home" className="flex items-center gap-3">
  <Image
    src="/saturn-logo.jpg"
    alt="Saturn Multipurpose Logo"
    width={200}
    height={60}
    priority
    className="h-10 w-auto object-contain"
  />
</a>


            <nav className="hidden items-center gap-6 md:flex">
              {nav.map((i) => (
                <a
                  key={i.href}
                  href={i.href}
                  className="text-sm text-neutral-600 hover:text-neutral-900"
                >
                  {i.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-900 bg-neutral-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </Container>
      </header>

      {/* Hero */}
      <main id="home" className="relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.06),transparent_55%)]" />
        <Container>
          <div className="grid gap-10 py-14 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge>Trusted Trade Partner</Badge>
                <Badge>Nepal-based</Badge>
                <Badge>Import • Export • Sourcing</Badge>
              </div>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                Simplify global trade with a Nepal-based partner you can rely on.
              </h1>
              <p className="mt-5 text-base leading-7 text-neutral-600">
                Saturn Multipurpose helps businesses import and export with confidence—through reliable sourcing,
                clear documentation, and coordinated logistics from start to finish.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl border border-neutral-900 bg-neutral-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
                >
                  Request a Quote
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-neutral-50"
                >
                  View Services
                </a>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
                  <div className="text-lg font-semibold">Transparent</div>
                  <div className="mt-1 text-xs text-neutral-600">Clear timelines & costs</div>
                </div>
                <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
                  <div className="text-lg font-semibold">Compliant</div>
                  <div className="mt-1 text-xs text-neutral-600">Documentation & HS guidance</div>
                </div>
                <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
                  <div className="text-lg font-semibold">Coordinated</div>
                  <div className="mt-1 text-xs text-neutral-600">Freight + tracking updates</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold">Trade Snapshot</div>
                    <div className="mt-1 text-xs text-neutral-500">A quick look at how we work</div>
                  </div>
                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
                    24–72h response
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  {["Share requirement", "Get supplier/buyer options", "Confirm docs & shipping", "Delivery & after-support"].map(
                    (t, idx) => (
                      <div key={t} className="flex items-start gap-3">
                        <div className="grid h-7 w-7 flex-none place-items-center rounded-full border border-neutral-200 bg-white text-xs font-semibold">
                          {idx + 1}
                        </div>
                        <div>
                          <div className="text-sm font-semibold">{t}</div>
                          <div className="text-xs leading-5 text-neutral-600">
                            {idx === 0
                              ? "Specs, quantity, budget, and timeline."
                              : idx === 1
                              ? "Shortlist, pricing, lead times, and samples."
                              : idx === 2
                              ? "HS codes, invoices, COO, BL/AWB coordination."
                              : "Tracking updates and issue resolution support."}
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>

                <div className="mt-6 rounded-2xl bg-neutral-50 p-4">
                  <div className="text-xs font-semibold text-neutral-700">Need something specific?</div>
                  <p className="mt-1 text-xs leading-5 text-neutral-600">
                    Tell us your product category and destination. We’ll respond with feasibility, timelines, and next steps.
                  </p>
                  <a
                    href="#contact"
                    className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-neutral-900 bg-neutral-900 px-4 py-2 text-xs font-semibold text-white hover:opacity-95"
                  >
                    Talk to Us
                  </a>
                </div>
              </div>

              <div className="pointer-events-none absolute -bottom-6 -left-6 hidden h-24 w-24 rounded-3xl border border-neutral-200 bg-white shadow-sm lg:block" />
              <div className="pointer-events-none absolute -top-6 -right-6 hidden h-24 w-24 rounded-3xl border border-neutral-200 bg-white shadow-sm lg:block" />
            </div>
          </div>
        </Container>
      </main>

      {/* About */}
      <section id="about" className="border-t border-neutral-200 bg-white py-14 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <SectionTitle
                eyebrow="ABOUT"
                title="Saturn Multipurpose is built for smooth, compliant, and on-time trade."
                desc="We support businesses with sourcing, export facilitation, and import coordination—so you can focus on growth while we handle the trade complexity."
              />
              <div className="mt-6 space-y-4 text-sm leading-6 text-neutral-600">
                <p>
                  Based in Nepal, we work with suppliers, freight partners, and documentation workflows that reduce delays and minimize risk.
                </p>
                <p>
                  Whether you’re importing goods into Nepal or exporting Nepali products abroad, we help you plan, validate, and execute end-to-end.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                <Badge>Supplier verification</Badge>
                <Badge>Sample coordination</Badge>
                <Badge>HS code support</Badge>
                <Badge>Freight planning</Badge>
              </div>
            </div>

            <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
              <div className="text-sm font-semibold">What clients typically ask us for</div>
              <ul className="mt-4 space-y-3">
                {["Find a supplier with better pricing", "Export Nepali products with the right documents", "Reduce customs delays", "Coordinate freight and delivery updates"].map(
                  (t) => (
                    <li key={t} className="flex items-start gap-3 text-sm text-neutral-700">
                      <IconDot />
                      <span>{t}</span>
                    </li>
                  )
                )}
              </ul>
              <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-5">
                <div className="text-xs font-semibold text-neutral-700">Quick promise</div>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  You’ll get clear communication, realistic timelines, and straightforward documentation guidance—without surprises.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-neutral-200 bg-neutral-50 py-14 sm:py-16">
        <Container>
          <div className="flex flex-col gap-8">
            <SectionTitle
              eyebrow="SERVICES"
              title="Everything you need to move goods across borders."
              desc="From sourcing to shipping, we support your trade journey with clear steps and dependable coordination."
            />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <Card key={s.title} title={s.title} desc={s.desc} />
              ))}
            </div>

            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-sm font-semibold">Not sure what you need?</div>
                  <div className="mt-1 text-sm text-neutral-600">
                    Share your product details and destination—we’ll recommend the best route and checklist.
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
      <section id="industries" className="border-t border-neutral-200 bg-white py-14 sm:py-16">
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
                  <div key={i} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                    <div className="text-sm font-semibold">{i}</div>
                    <div className="mt-1 text-xs text-neutral-600">Sourcing • Docs • Logistics</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
              <div className="text-sm font-semibold">Compliance-first approach</div>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                Product requirements differ by country and category. We help you map the right HS codes, prepare compliant documents,
                and coordinate inspections when necessary.
              </p>
              <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-5">
                <div className="text-xs font-semibold text-neutral-700">Before you ship, we help you check:</div>
                <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                  {["Restricted/regulated goods status", "Labeling & packaging requirements", "Duties & estimated lead times", "Shipping mode: sea/air/land"].map(
                    (t) => (
                      <li key={t} className="flex items-start gap-3">
                        <IconDot />
                        <span>{t}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section id="process" className="border-t border-neutral-200 bg-neutral-50 py-14 sm:py-16">
        <Container>
          <SectionTitle
            eyebrow="PROCESS"
            title="A simple, proven process to reduce delays."
            desc="We keep everything structured—so you know what happens next and what documents are needed."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, idx) => (
              <div key={s.title} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-xl border border-neutral-200 bg-neutral-50 text-sm font-semibold">
                    {idx + 1}
                  </div>
                  <div className="text-sm font-semibold">{s.title}</div>
                </div>
                <p className="mt-3 text-sm leading-6 text-neutral-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Us */}
      <section id="why" className="border-t border-neutral-200 bg-white py-14 sm:py-16">
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
                  { t: "Clear updates", d: "You’ll know the status, next step, and ETA at every stage." },
                  { t: "Risk reduction", d: "Supplier checks, samples, and inspections to protect your money." },
                  { t: "Documentation accuracy", d: "Correct paperwork to prevent customs holds and penalties." },
                  { t: "Nepal market understanding", d: "Local context for imports, clearances, and timelines." },
                ].map((x) => (
                  <div key={x.t} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
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
                  <details key={f.q} className="group rounded-2xl border border-neutral-200 bg-white p-5">
                    <summary className="cursor-pointer list-none text-sm font-semibold text-neutral-900">
                      <span className="group-open:opacity-80">{f.q}</span>
                    </summary>
                    <p className="mt-2 text-sm leading-6 text-neutral-600">{f.a}</p>
                  </details>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-5">
                <div className="text-sm font-semibold">Get a tailored checklist</div>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  Share your product category and destination. We’ll respond with required documents, estimated lead time, and a next-step plan.
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
      <section id="contact" className="border-t border-neutral-200 bg-neutral-50 py-14 sm:py-16">
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
                    <div className="text-xs font-semibold text-neutral-500">Email</div>
                    <a className="hover:underline" href="mailto:info@saturnmultipurpose.com">
                      info@saturnmultipurpose.com
                    </a>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-neutral-500">Phone</div>
                    <a className="hover:underline" href="tel:+9779800000000">
                      +977 98XXXXXXXX
                    </a>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-neutral-500">Office</div>
                    <div>Kathmandu, Nepal (Update address)</div>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl bg-neutral-50 p-4">
                  <div className="text-xs font-semibold text-neutral-700">Fastest way</div>
                  <p className="mt-1 text-xs leading-5 text-neutral-600">
                    Message us with: product name, quantity, destination, and your timeline.
                  </p>
                </div>
              </div>
            </div>

            {/* Form (frontend only) */}
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold">Request a quote</div>
              <p className="mt-2 text-sm leading-6 text-neutral-600">
                This form is frontend-only. Connect it to your backend (API route / email service) when ready.
              </p>

              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Form submitted (demo). Connect to backend to receive messages.");
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold text-neutral-600">Full Name</label>
                    <input
                      required
                      className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none ring-0 focus:border-neutral-400"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-neutral-600">Company</label>
                    <input
                      className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none ring-0 focus:border-neutral-400"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold text-neutral-600">Email</label>
                    <input
                      required
                      type="email"
                      className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none ring-0 focus:border-neutral-400"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-neutral-600">Phone</label>
                    <input
                      className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none ring-0 focus:border-neutral-400"
                      placeholder="+977 ..."
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-neutral-600">Requirement</label>
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
                  By submitting, you agree to be contacted by Saturn Multipurpose regarding your request.
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
              <div className="grid h-10 w-10 place-items-center rounded-xl border border-neutral-200 bg-neutral-100 text-sm font-bold">
                SM
              </div>
              <div>
                <div className="text-sm font-semibold">Saturn Multipurpose</div>
                <div className="text-xs text-neutral-500">Import & Export • Nepal</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-neutral-600">
              {nav.map((i) => (
                <a key={i.href} href={i.href} className="hover:text-neutral-900">
                  {i.label}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-2 border-t border-neutral-200 pt-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} Saturn Multipurpose. All rights reserved.</div>
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
  );
}
