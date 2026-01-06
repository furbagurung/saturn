
import Image from "next/image";

import { Container } from "./ui/container";
import { ASSETS } from "@/lib/site-data";



export default function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-30 border-t border-neutral-200 bg-white py-14 sm:py-16"
    >
      <Container>
        {/* Top: heading left, short intro right (like reference) */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="text-xs font-semibold tracking-widest text-neutral-600">
              ABOUT
            </div>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
              Saturn Multipurpose <br></br>Pvt. Ltd.
            </h2>

         
          </div>

          <div className="text-sm leading-7 text-neutral-600 lg:pt-8">
            We are a Nepal-based Import -export company with dedicated to
            bringing authentic Nepali products—handicrafts, metal & non-metal
            goods, garments with Branded & Non-Branded Clothes Production, and
            food items as well as Distribution of Baby & Mother Care Product.
          </div>
        </div>

        {/* Bottom: big story image card left, mission/vision stacked cards right */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-stretch">
          {/* Left: Our Story image card */}
          <div className="relative overflow-hidden rounded-[28px] border border-neutral-200 bg-neutral-100 shadow-sm">
            <Image
              src={ASSETS.ABOUT_IMG}
              alt=""
             fill
              aria-hidden
              className="h-105w-full object-cover sm:h-10"
              onError={(e) => {
                // if image missing, just hide image and keep layout clean
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />

            {/* soft overlay for readability */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/15 to-transparent" />

            {/* Story text overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
      

           {/* Small company info block (optional, clean like reference) */}
              <div className="mt-6 rounded-2xl border border-white/10 max-w-md  bg-white/5 p-5 ">
                <div className="text-xs font-semibold text-white/75">
                  Company Information
                </div>
                <div className="mt-3 space-y-2 text-sm text-white/80">
                  <div>
                    <span className="font-semibold text-white/90">Email:</span>{" "}
                    saturnmultipurpose@gmail.com
                  </div>
                  <div>
                    <span className="font-semibold text-white/90">
                      Website:
                    </span>{" "}
                    www.saturnmultipurpose.com
                  </div>
                  <div>
                    <span className="font-semibold text-white/90">Phone:</span>{" "}
                    +977 9761908555
                  </div>
                  <div>
                    <span className="font-semibold text-white/90">
                      Location:
                    </span>{" "}
                    Bhaktapur, Nepal
                  </div>
                </div>
              </div>

              {/* Founder pill (like reference’s bottom label area) */}
              <div className="mt-5 inline-flex w-full max-w-md items-center justify-between rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur">
                <div>
                  <div className="text-xs font-semibold text-white/75">
                    Founder
                  </div>
                  <div className="mt-1 text-base font-semibold text-white">
                    Rabin Shrestha
                  </div>
                  <div className="text-xs text-white/75">
                    Founder, Saturn Multipurpose Pvt. Ltd.
                  </div>
                </div>
                <span className="hidden h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white/80 sm:inline-flex">
                  ↗
                </span>
              </div>
            </div>
          </div>

          {/* Right: stacked cards (Mission / Vision style) */}
          <div className="grid gap-6">
            {/* Card 1 (light accent like reference) */}
            <div className="rounded-[28px] border border-neutral-200 bg-[#F7F3E6] p-7 shadow-sm">
              <div className="text-lg font-semibold text-neutral-900">
                Our Mission
              </div>
              <p className="mt-2 text-sm leading-7 text-neutral-700">
                From the heart of rural communities to the global market. Our
                mission is to uplift local farmers, artisans, and small
                producers as well as support Baby & Mother Care by giving their
                products international exposure & Local Market, ensuring fair
                pricing, and maintaining strict quality standards.
              </p>
            </div>

            {/* Card 2 (dark accent like reference) */}
            <div className="rounded-[28px] border border-neutral-200 bg-[#061B2B] p-7 shadow-sm">
              <div className="text-lg font-semibold text-white">Our Goal</div>
              <p className="mt-2 text-sm leading-7 text-white/85">
                Our goal is to connect Nepal’s heritage and natural richness
                with buyers worldwide through consistent supply, competitive
                pricing, and professional service.
              </p>

              
            </div>
          </div>
          {/* end right */}
        </div>
      </Container>
    </section>
  );
}
