import React from 'react'
import { Container } from './ui/container'
import { SectionTitle } from './ui/section-title'
import { SERVICES } from '@/lib/site-data'
import { Card } from './ui/card'

function Services() {
  return (
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
                  {SERVICES.map((s) => (
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
  )
}

export default Services