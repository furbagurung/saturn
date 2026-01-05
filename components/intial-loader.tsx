"use client";

import React from "react";

export default function InitialLoader({
  children,
  ms = 1200,
}: {
  children: React.ReactNode;
  ms?: number;
}) {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    // show only once per tab/session
    const key = "saturn_first_load_done";
    const already = sessionStorage.getItem(key) === "1";

    if (!already) {
      setShow(true);
      const t = window.setTimeout(() => {
        setShow(false);
        sessionStorage.setItem(key, "1");
      }, ms);

      return () => window.clearTimeout(t);
    }
  }, [ms]);

  return (
    <>
      {children}

      {show && (
        <div className="fixed inset-0 z-[9999] grid place-items-center bg-[#061B2B]">
          <div className="flex flex-col items-center gap-4">
            {/* Spinner */}
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/20 border-t-white" />

            {/* Text */}
            <div className="text-sm font-semibold text-white/90">
              Loading Saturn Multipurpose...
            </div>
          </div>
        </div>
      )}
    </>
  );
}
