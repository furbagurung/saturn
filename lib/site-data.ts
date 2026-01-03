import { HandicraftIcon, GarmentIcon, MetalIcon, LogisticsIcon, GlobalSourcingIcon, ComplianceIcon } from "@/components/ui/icons";

export type NavItem = { label: string; href: string };
export type CardItem = { icon?: string; title: string; desc: string };

export const ASSETS = {
  LOGO: "/saturn-logo.jpg",
  HERO_BG: "/hero-img.jpg",
  ABOUT_IMG: "/about-img.jpg",
};

export const BRAND = {
  navy: "#061B2B",
  navy2: "#081F33",
  gold: "#F5B301",
};

export const CONTACT = {
  email: "saturnmultipurpose@gmail.com",
  phoneDisplay: "+977 9761908555",
  phoneHref: "+9779761908555",
  waE164NoPlus: "9779761908555",
  address: "Bhaktapur, Nepal",
  founder: "Rabin Shrestha",
};

export const NAV: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "What We Trade", href: "#trade" },
  { label: "Why Us", href: "#why" },
  { label: "Process", href: "#process" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES = [
  {
    icon: HandicraftIcon,
    title: "Nepali Handicrafts – Import & Export",
    desc: "Import and export support for authentic Nepali handicrafts, working with verified artisans and export-ready packaging.",
  },
  {
    icon: GarmentIcon,
    title: "Garments Trade (Branded & Non-Branded)",
    desc: "End-to-end support for documentation, compliance, and shipment coordination from Nepal.",
  },
  {
    icon: MetalIcon,
    title: "Metal & Non-Metal Goods Trade",
    desc: "Import and export of metal and non-metal products with proper specifications and quality handling.",
  },
  {
    icon: GlobalSourcingIcon,
    title: "Global Sourcing & Procurement",
    desc: "Supplier identification, pricing coordination, sampling, and quality assurance for imports and exports.",
  },
  {
    icon: ComplianceIcon,
    title: "Customs, Compliance & Documentation",
    desc: "Invoices, packing lists, HS codes, TT, LC coordination, and clearance support.",
  },
  {
    icon: LogisticsIcon,
    title: "Logistics & Freight Coordination",
    desc: "Sea, air, and land freight planning with tracking and delivery coordination.",
  },
];
export const INDUSTRIES = [
  "Agro & Food Products",
  "Nepali Handicrafts",
  "Boutiques & Garments",
  "Baby & Mother Care Products",
  "Metal & Non-Metal Goods",
];

export const STEPS = [
  {
    title: "Requirement",
    desc: "Tell us what you want to import or export—specs, budget, timeline, and target market.",
  },
  {
    title: "Sourcing / Buyer Match",
    desc: "We shortlist verified suppliers or buyers and share options with pricing and lead times.",
  },
  {
    title: "Documentation",
    desc: "We handle trade paperwork and compliance so the shipment moves without delays.",
  },
  {
    title: "Shipment & Delivery",
    desc: "Freight coordination, tracking, and updates until the goods reach the destination.",
  },
];

export const FAQS = [
  {
    q: "Do you handle both import and export?",
    a: "Yes. Saturn Multipurpose supports imports into Nepal and exports from Nepal, including sourcing, documentation, and logistics coordination.",
  },
  {
    q: "Can you source products from multiple countries?",
    a: "Yes. We can source globally depending on category, MOQ, and compliance requirements.",
  },
  {
    q: "How do you ensure supplier reliability?",
    a: "We prioritize verified vendors, request samples, validate documentation, and can coordinate third-party inspections when needed.",
  },
  {
    q: "What documents are typically required?",
    a: "Common documents include commercial invoice, packing list, HS code/valuation, certificate of origin, and shipping documents (BL/AWB). Requirements vary by product and route.",
  },
];
