// ============================================================
// CONTENT DATA – Editorial and Brand Copy
// Clean English, authentic local tone, no emojis, hand-crafted details.
// ============================================================

export const BRANDS = [
  "Apple",
  "Samsung",
  "OnePlus",
  "Google Pixel",
  "Xiaomi",
  "Vivo",
  "OPPO",
  "Realme",
  "boAt",
  "Noise",
  "JBL",
  "Nothing",
  "Motorola",
  "Anker",
];

// 5 Categories with editorial numbering
export const CATEGORY_CARDS = [
  {
    id: "smartphones",
    number: "01",
    title: "New Smartphones",
    subtitle: "iOS & Android",
    description: "Official sealed Indian units from Apple, Samsung, OnePlus & Pixel with manufacturer warranty.",
    filterId: "iphone",
    route: "/products?category=smartphone",
    accentTone: "butter",
    tag: "All Brands",
  },
  {
    id: "accessories",
    number: "02",
    title: "Curated Accessories",
    subtitle: "Audio, Covers & Power",
    description: "AirPods, MagSafe covers, anti-static 9D tempered glass, 65W GaN chargers & power banks.",
    filterId: "accessories",
    route: "/products?category=accessories",
    accentTone: "cream",
    tag: "Tested Quality",
  },
  {
    id: "second-hand-phones",
    number: "03",
    title: "Pre-owned Phones",
    subtitle: "30-Point Inspected",
    description: "Mint-condition certified iPhones and flagships. Verified battery health, shop warranty & GST bill.",
    filterId: "second-hand-phones",
    route: "/pre-owned",
    accentTone: "teal",
    tag: "Warranty Included",
  },
  {
    id: "second-hand-laptops",
    number: "04",
    title: "Pre-owned Laptops",
    subtitle: "MacBooks & ThinkPads",
    description: "Commercial corporate-tier MacBooks, ThinkPads, and Dell XPS tested for battery cycle count & SSD health.",
    filterId: "second-hand-laptops",
    route: "/pre-owned",
    accentTone: "cream",
    tag: "Verified Hardware",
  },
  {
    id: "repair",
    number: "05",
    title: "Mobile Repair",
    subtitle: "In-Store at G.M.S. Road",
    description: "Expert mobile diagnosis and repair available exclusively in Dehradun. Genuine screens, original batteries & motherboard repair.",
    anchorId: "repair",
    route: "/repair",
    accentTone: "butter",
    tag: "Dehradun Only",
  },
];

// 4 In-Store Repair Steps
export const REPAIR_STEPS = [
  {
    step: "01",
    title: "Book or Walk In",
    description: "Visit our G.M.S. Road store in Dehradun or book a priority diagnostic slot on WhatsApp.",
  },
  {
    step: "02",
    title: "Free Diagnosis",
    description: "Our in-store technicians inspect the device on the spot and give you an honest upfront estimate.",
  },
  {
    step: "03",
    title: "Genuine Repair",
    description: "Repaired using high-grade OEM screens, certified batteries, and precision micro-soldering tools.",
  },
  {
    step: "04",
    title: "Tested & Handover",
    description: "Multi-point diagnostic test completed before handover, backed by a written 90-day store warranty.",
  },
];

// Repair issue types
export const REPAIR_TYPES = [
  { id: "screen", label: "Display & Touch Replacement" },
  { id: "battery", label: "Battery Drain & Replacement" },
  { id: "charging", label: "Charging Port & Pin Fix" },
  { id: "water", label: "Water & Moisture Damage" },
  { id: "software", label: "OS Bootloop & Unlock Issues" },
  { id: "speaker", label: "Speaker, Mic & Receiver" },
];

// Second-hand 4 trust points
export const SECOND_HAND_TRUST = [
  {
    title: "30-Point Tested",
    description: "Display, camera sensors, biometric touch/face ID, microphones, and charging IC fully vetted.",
  },
  {
    title: "3 to 6 Months Warranty",
    description: "Peace of mind with written store warranty on every pre-owned phone and laptop.",
  },
  {
    title: "Proper GST Invoice",
    description: "Legitimate invoice with clean serial and IMEI history verified on official portals.",
  },
  {
    title: "7-Day Easy Exchange",
    description: "Not satisfied with battery performance or feel? Exchange within 7 days, no hassles.",
  },
];

// Delivery trust highlights
export const DELIVERY_FEATURES = [
  {
    title: "Tamper-Proof Packing",
    description: "Double-bubble wrapped and sealed with security tape for complete in-transit safety.",
  },
  {
    title: "Real-Time Tracking",
    description: "Live SMS & WhatsApp tracking links via Bluedart, Delhivery & DTDC Express.",
  },
  {
    title: "Transit Insurance",
    description: "Every shipment insured end-to-end so your high-value gadget reaches you risk-free.",
  },
];

// Why choose us points
export const WHY_US_POINTS = [
  {
    title: "Your Neighborhood Store",
    description: "Rooted on G.M.S. Road, Dehradun. Transparent dealing, friendly service, zero false promises.",
  },
  {
    title: "Honest Diagnostics First",
    description: "We never upsell an unnecessary screen or mother-board fix. If it's a minor solder job, that's all you pay for.",
  },
  {
    title: "Price Match & Value",
    description: "Competitive pricing on all new smartphones and genuine accessories compared to big-box stores.",
  },
  {
    title: "Instant WhatsApp Support",
    description: "No bot menus. Speak directly with our in-store technicians and staff for quick resolutions.",
  },
];

// Plain quote-style testimonials
export const TESTIMONIALS = [
  {
    quote: "Got my iPhone 15 at a better deal than online, plus they installed a clean tempered glass right away. Genuine people who know phones.",
    author: "Rahul Sharma",
    context: "Bought new iPhone 15 • Rajpur Road, Dehradun",
  },
  {
    quote: "My phone display stopped responding. Visited their G.M.S. Road shop and they replaced the screen with original parts within 2 hours. Excellent service!",
    author: "Priya Negi",
    context: "In-store screen repair • Clement Town, Dehradun",
  },
  {
    quote: "Purchased a pre-owned MacBook Air for my sister's college. Battery was in pristine condition (94% health) with 3 months warranty. Fully trustworthy.",
    author: "Vikash Rawat",
    context: "Pre-owned MacBook Air • Karanpur, Dehradun",
  },
];
