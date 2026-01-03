import React from 'react'
import { Container } from './ui/container'
import { SectionTitle } from './ui/section-title'
import { STEPS } from '@/lib/site-data'

function Process() {
  return (
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
                 {STEPS.map((s, idx) => (
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
   
  )
}

export default Process