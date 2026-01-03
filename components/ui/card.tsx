import React from "react";

export function Card({ title, desc, icon }: { title: string; desc: string; icon?: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-3">
        {icon ? (
          <div className="grid h-9 w-9 flex-none place-items-center rounded-xl bg-neutral-100 text-base" aria-hidden>
            {icon}
          </div>
        ) : null}
        <div>
          <div className="text-base font-semibold text-neutral-900">{title}</div>
          <p className="mt-2 text-sm leading-6 text-neutral-600">{desc}</p>
        </div>
      </div>
    </div>
  );
}
