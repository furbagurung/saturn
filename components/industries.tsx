import React from "react";
import Image from "next/image";
import { Container } from "./ui/container";
import { INDUSTRIES } from "@/lib/site-data";

function Industries() {
  return (
    <section
      id="industries"
      className="scroll-mt-30 border-t border-neutral-200 bg-white py-14 sm:py-16"
    >
      <Container>
        {/* Centered header (like reference) */}
        <div className="mx-auto max-w-3xl text-center">
           <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-xs font-semibold text-neutral-700 shadow-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-[#F5B301]" />
            Our Industries
          </div>
          {/* Big centered title (reference style) */}
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
            Flexible trade{" "}
            <span className="italic text-[#b4b4b4]">
              support across categories.
            </span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-neutral-600">
            We can support most product categories depending on compliance
            requirements, documentation, and shipment routes.
          </p>
        </div>

        {/* Stacked large cards */}
        <div className="mt-10 space-y-6">
          {INDUSTRIES.map((i) => (
            <article
              key={i.title}
              className="overflow-hidden rounded-[28px] border border-neutral-200 bg-neutral-50 shadow-sm transition hover:shadow-md"
            >
              <div className="grid md:grid-cols-2">
                {/* Left: text block */}
                <div className="flex flex-col justify-center p-7 sm:p-10">
                  <div className="text-xs font-semibold tracking-widest text-neutral-500">
                    CATEGORY
                  </div>

                  <h3 className="mt-2 text-xl font-semibold text-neutral-900 sm:text-2xl">
                    {i.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-neutral-600">
                    {i.desc}
                  </p>

                  {/* Optional button (if you want it exactly like ref). If you consider this “new content”, remove it. */}
                  {/* <a
                    href="#contact"
                    className="mt-6 inline-flex w-fit items-center justify-center rounded-full bg-[#F5B301] px-5 py-3 text-sm font-semibold text-[#081F33] shadow-sm hover:opacity-95"
                  >
                    Explore Options
                  </a> */}
                </div>

                {/* Right: image block */}
                <div className="relative min-h-60 md:min-h-75">
                  <Image
                    src={i.img}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority={false}
                  />

                  {/* subtle overlay like reference (optional, keeps text area clean) */}
                  <div className="absolute inset-0 bg-black/5" />

                  {/* small stat badge (optional, can remove) */}
                  <div className="absolute right-4 top-4 rounded-full border border-white/30 bg-white/70 px-3 py-1 text-xs font-semibold text-neutral-800 backdrop-blur">
                    Trade-ready
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Industries;
