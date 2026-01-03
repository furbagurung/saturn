import React from 'react'
import { Container } from './ui/container'
import { FAQS } from '@/lib/site-data'
import { SectionTitle } from './ui/section-title'

function Whyus() {
  return (
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
                  {FAQS.map((f) => (
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
  )
}

export default Whyus