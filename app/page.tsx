
"use client";

import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Industries from "@/components/industries";
import Process from "@/components/process";
import Services from "@/components/services";
import SiteHeader from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import Whyus from "@/components/whyus";





export default function Page() {


 

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Fixed Top Bar + Navbar (stays visible across the full page) */}
      <SiteHeader />
      {/* Page content */}
      <div>
        {/* Hero (full-width background image + text only) */}

        <HeroSection />
        {/* About */}

        <About />

          {/* Industries */}
        <Industries />
        
        {/* Services */}
        <Services />

      

        {/* Process */}
        <Process />
        {/* Why Us */}
        <Whyus />

        {/* Contact */}
        <Contact />
        <WhatsAppFloat />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
