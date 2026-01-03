// components/hero-section.tsx
"use client";

import React from "react";

import Image from "next/image";
import { Container } from "./ui/container";
import { Badge } from "./ui/badge";

const HERO_BG_SRC = "/hero-img.jpg";

export default function HeroSection() {
  const [showHeroBg, setShowHeroBg] = React.useState(true);

  const heroRef = React.useRef<HTMLElement | null>(null);

  return (
    /* Hero (full-width background image + text only) */
    <main
      ref={heroRef}
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#061B2B]"
    >
      {showHeroBg ? (
        <Image
          src={HERO_BG_SRC}
          alt=""
          width={500}
          height={100}
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          onError={() => setShowHeroBg(false)}
        />
      ) : null}

      {/* overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-[#061B2B]/35" />

      <Container>
        {/*
                  Vertically center hero content on large screens.
                  Header is fixed; we reserve space for it.
                  On mobile the top bar is hidden, but reserving the larger height is safe.
                */}
        <div className="relative flex min-h-[calc(100vh-120px)] items-center pt-30px">
          <div className="w-full max-w-2xl py-10">
            <div className="flex flex-wrap gap-2">
              <Badge>Nepal-based Import & Export</Badge>
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Saturn
              <br />
              Now &nbsp;
              <span className=" text-[#ffbb00]">
                It&apos;s your turn.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/85">
              Saturn Multipurpose Pvt. Ltd. is a Nepal-based company involved in
              the production, import, and export of diverse goods such as
              handicrafts, metal & Non-Metal products, garments with Branded &
              Non-Branded Clothes, food items and Distribution of Baby & Mother
              Care Product .
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-[#F5B301] px-5 py-3 text-sm font-semibold text-[#081F33] shadow-sm hover:opacity-95"
              >
                Get a Quote
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
