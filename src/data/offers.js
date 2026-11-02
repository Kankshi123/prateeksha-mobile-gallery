// ============================================================
// TIME-BASED OFFERS CONFIGURATION
// Clean line typography, no emojis.
// Edit schedules and messages here
// ============================================================

export const OFFERS = [
  {
    id: "early-bird",
    title: "Early Bird Special",
    headline: "Early Bird: Free tempered glass with any cover",
    description: "Visit before noon and get a premium 9D tempered glass installed free with any mobile cover purchase.",
    discountText: "FREE Tempered Glass",
    badge: "Morning Deal",
    applicableCategory: "accessories",
    schedule: {
      startTime: "06:00",
      endTime: "12:00",
      days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
  },
  {
    id: "afternoon-deal",
    title: "Afternoon Deal",
    headline: "Afternoon Deal: 10% off on earphones & AirPods",
    description: "Flat 10% off on all wired & wireless audio gear, including Apple AirPods, boAt, and OnePlus earbuds.",
    discountText: "10% OFF Audio",
    badge: "Afternoon Deal",
    discountPercent: 10,
    applicableCategory: "accessories",
    schedule: {
      startTime: "12:00",
      endTime: "17:00",
      days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
  },
  {
    id: "evening-special",
    title: "Evening Special",
    headline: "Evening Special: Flat discount on chargers & power banks",
    description: "Special evening pricing on fast chargers (20W to 120W), braided cables, and 20,000mAh power banks.",
    discountText: "Flat ₹150 OFF",
    badge: "Evening Deal",
    applicableCategory: "accessories",
    schedule: {
      startTime: "17:00",
      endTime: "21:00",
      days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
  },
  {
    id: "night-owl",
    title: "Night Owl Special",
    headline: "Night Owl: Free repair diagnosis, book now",
    description: "Phone trouble? Book a repair slot online tonight for zero diagnostic fee. Visit our G.M.S. Road store in Dehradun tomorrow for priority service.",
    discountText: "FREE Diagnosis",
    badge: "Night Owl",
    applicableCategory: "repair",
    schedule: {
      startTime: "21:00",
      endTime: "06:00",
      days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
  },
  {
    id: "weekend-sale",
    title: "Weekend Showcase",
    headline: "Weekend Sale on Second-Hand Phones & Laptops",
    description: "Exclusive weekend markdown on 30-point tested pre-owned iPhones, MacBooks, and ThinkPads with warranty.",
    discountText: "Special Weekend Prices",
    badge: "Weekend Only",
    applicableCategory: "second-hand-phones",
    schedule: {
      startTime: "00:00",
      endTime: "23:59",
      days: ["Sat", "Sun"],
    },
  },
  {
    id: "festive-mega",
    title: "Festive Offer",
    headline: "Festive Offer on all smartphones",
    description: "Exclusive festive season pricing and bundle gifts on new iPhones, Samsung Galaxy, and OnePlus smartphones.",
    discountText: "Up to 15% OFF",
    badge: "Festive Season",
    discountPercent: 15,
    applicableCategory: "iphone",
    schedule: {
      startDate: "2026-10-20",
      endDate: "2026-11-20",
      startTime: "00:00",
      endTime: "23:59",
      days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
  },
];

export const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
