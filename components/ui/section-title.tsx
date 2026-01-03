import React from "react";
export function SectionTitle({
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
      <div className="text-xs font-semibold tracking-widest text-neutral-600">{eyebrow}</div>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">{title}</h2>
      {desc ? <p className="mt-3 text-sm leading-6 text-neutral-600">{desc}</p> : null}
    </div>
  );
}