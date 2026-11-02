// ============================================================
// SHOP CONFIGURATION - Edit this file to update shop details
// Single config file for shop info, phone, whatsapp, timings
// ============================================================

export const SHOP_CONFIG = {
  name: "Prateeksha Mobile Gallery",
  tagline: "Your trusted mobile store on G.M.S. Road, Dehradun.",
  subtagline: "New mobiles, accessories, pre-owned devices & expert repair in Dehradun. Delivery all over India.",
  address: "G.M.S. Road, Dehradun, Uttarakhand",
  city: "Dehradun",
  state: "Uttarakhand",
  pincode: "248001",
  landmark: "Near Ballupur Chowk, G.M.S. Road",

  // Contact details - placeholder number 98XXXXXXXX, easily editable here
  phone: "9800000000",
  phoneFormatted: "+91 98000 00000",
  whatsapp: "9800000000",
  whatsappCountryCode: "91",
  email: "prateekshamobilegallery@gmail.com",

  // Map embed URL
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.5!2d77.9833!3d30.3165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c8888b%3A0x1d4d1cb03cf5e3f!2sG.M.S.+Road%2C+Dehradun%2C+Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",

  shopTimings: {
    weekdays: "10:00 AM – 9:00 PM",
    sunday: "11:00 AM – 8:00 PM",
    daysOpen: "Open all 7 days",
  },

  social: {
    instagram: "https://instagram.com/prateekshamobilegallery",
    facebook: "https://facebook.com/prateekshamobilegallery",
    youtube: "#",
  },
};

// Helper to build WhatsApp URL with prefilled text
export const buildWhatsAppUrl = (message = "") => {
  const base = `https://wa.me/${SHOP_CONFIG.whatsappCountryCode}${SHOP_CONFIG.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export const SHOP = {
  ...SHOP_CONFIG,
  whatsappNumber: `${SHOP_CONFIG.whatsappCountryCode}${SHOP_CONFIG.whatsapp}`,
};

