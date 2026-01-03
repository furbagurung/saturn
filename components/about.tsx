import React from "react";
import { Container } from "./ui/container";
import { SectionTitle } from "./ui/section-title";

export default function About() {
  return (
    <div>
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
                          Import & Export on Nepali products—handicrafts, metal &
                          non-metal goods, garments with Branded & Non-Branded Clothes
                          Production, and food items & Support on Baby & Mother Care
                          with Global Market focus.
                        </p>
                      </div>
                    </div>
                  </div>
                </Container>
              </section>
    </div>
  );
}