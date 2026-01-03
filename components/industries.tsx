import React from 'react'
import { Container } from './ui/container'
import { SectionTitle } from './ui/section-title'
import { INDUSTRIES } from '@/lib/site-data'

function Industries() {
  return (
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
                     {INDUSTRIES.map((i) => (
                       <div
                         key={i}
                         className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4"
                       >
                         <div className="text-sm font-semibold">{i}</div>
                         <div className="mt-1 text-xs text-neutral-600">
                           Contract Manufacturing • Local Trade • Global Market
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
  )
}

export default Industries