import React from "react";
import { Container } from "./ui/container";
import { SERVICES } from "@/lib/site-data";
import { HandicraftIcon } from "./ui/icons";



function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-30 border-t border-neutral-200 bg-white py-14 sm:py-16"
    >
      <Container>
        {/* Top pill */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-xs font-semibold text-neutral-700 shadow-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-[#F5B301]" />
            Our Services
          </div>

          {/* Big centered title (reference style) */}
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
            Our Expertise:{" "}
            <span className="italic text-[#b4b4b4]">
              Import & Export Solutions
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-600">
            We help businesses trade Nepali handicrafts, garments, and
            industrial goods across borders with clarity, compliance, and
            reliable coordination.
          </p>
        </div>

        {/* Cards grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="group rounded-3xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
            >
              <div className="flex items-start justify-between">
            
                {typeof s.icon === 'function' ? s.icon() : s.icon}
              </div>

              <h3 className="mt-4 text-lg font-semibold text-neutral-900">
                {s.title}
              </h3>

              <p className="mt-2 text-sm leading-7 text-neutral-600">
                {s.desc}
              </p>

              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 underline-offset-4 hover:underline"
              >
                Learn More
                <span className="transition group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            </article>
          ))}
        </div>

        {/* Bottom CTA (reference style) */}
        {/* <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-full bg-[#F5B301] px-7 py-4 text-sm font-semibold text-[#081F33] shadow-sm transition hover:opacity-95"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#0B1F33] text-white">
              ▶
            </span>
            Get Free Consultation
          </a>
        </div> */}
      </Container>
    </section>
  );
}

export default Services;
