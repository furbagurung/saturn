import React from "react";
import { Container } from "./ui/container";
import Image from "next/image";
import { ASSETS, NAV } from "@/lib/site-data";

function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white py-10">
      <Container>
        {/* Top row */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={ASSETS.LOGO}
              alt="Saturn Multipurpose Logo"
              className="h-9 w-auto object-contain"
              width={500}
              height={50}
              loading="lazy"
              decoding="async"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
            <div>
              <div className="text-sm font-semibold">Saturn Multipurpose</div>
              <div className="text-xs text-neutral-500">
                Import &amp; Export • Nepal
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-neutral-600">
            {NAV.map((i) => (
              <a key={i.href} href={i.href} className="hover:text-neutral-900">
                {i.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-8 flex flex-col gap-3 border-t border-neutral-200 pt-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} Saturn Multipurpose. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div>
              Developed by{" "}
              <a
                href="https://www.uniteddigitalservice.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-neutral-700 hover:text-neutral-900"
              >
                United Digital Service
              </a>
            </div>

            <div className="flex gap-3">
              <a className="hover:text-neutral-900" href="#">
                Privacy
              </a>
              <a className="hover:text-neutral-900" href="#">
                Terms
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
