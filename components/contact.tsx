import React from "react";
import { Container } from "./ui/container";
import { SectionTitle } from "./ui/section-title";

function Contact() {
  return (
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
                      className="mt-2 min-h-30 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none ring-0 focus:border-neutral-400"
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
  )
}

export default Contact