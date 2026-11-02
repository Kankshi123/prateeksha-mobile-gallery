# 📱 Prateeksha Mobile Gallery – Website

A hand-crafted, editorial showcase website for **Prateeksha Mobile Gallery**, G.M.S. Road, Dehradun, Uttarakhand. Built with React 18 + Vite, Framer Motion, and plain CSS following the **"Butter & Teal"** design direction.

> **Note:** This is a showcase and brochure website, not an e-commerce platform. There is no cart, checkout, or login. All product inquiries and repair bookings route seamlessly to **WhatsApp**.

---

## 🎨 Design Direction: "Butter & Teal"

The website follows an anti-"AI template" philosophy with tactile printed aesthetics:
- **Colour Palette:**
  - `--bg: #FBF6E9` (Butter cream, page background)
  - `--surface: #FFFDF6` (Slightly lighter cream for cards)
  - `--primary: #0E5A5A` (Deep teal: hero arch, repair section, footer, buttons)
  - `--accent: #FFD84D` (Butter yellow: highlights, underlines, stickers, hover states)
  - `--pop: #E4572E` (Tomato red: reserved strictly for "LIVE" dots and discount stamps)
  - `--ink: #10292B` (All headings and body text)
  - `--muted: #5B6F70` (Secondary labels and descriptions)
  - `--line: #E5DCC3` (Dividers and crisp borders)
- **Ratio Rule:** 60% cream, 25% teal, 10% yellow, 5% tomato.
- **Printed Tactile Details:** Crisp `4px 4px 0 var(--primary)` offset shadows, thin 1.5px borders, 3.5% paper-grain overlay, circular rotated stickers, and hand-drawn style yellow underlines.
- **Typography:**
  - Headings: **Fraunces** (soft confident serif, weights 600–800)
  - Body: **DM Sans** (clean, readable sans-serif)
  - Eyebrows & Timers: **DM Mono** (spaced uppercase labels & live countdowns)
- **Zero AI Clichés:** No generic gradient blobs, no glassmorphism, no neon glows, no emojis in the UI.

---

## 🚀 Getting Started

### 1. Installation
```bash
npm install
```

### 2. Run Locally in Development Mode
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
npm run build
```

---

## 🛠️ How to Customize Shop Data

All shop data, products, and offer schedules are stored in plain JavaScript files in `/src/data/`:

### 1. Shop Info & Phone Number (Single Config File)
Edit **[`src/data/shop.js`](file:///c:/Users/varsh/prateeksha%20mobile%20gallery/src/data/shop.js)**:
```javascript
export const SHOP_CONFIG = {
  name: "Prateeksha Mobile Gallery",
  phone: "9800000000",       // ← Change to shopkeeper's phone number
  whatsapp: "9800000000",    // ← Change to WhatsApp number (no '+' sign)
  address: "G.M.S. Road, Dehradun, Uttarakhand",
  shopTimings: {
    weekdays: "10:00 AM – 9:00 PM",
    sunday: "11:00 AM – 8:00 PM",
  },
  ...
};
```

### 2. Time-Based Offer Engine
Edit **[`src/data/offers.js`](file:///c:/Users/varsh/prateeksha%20mobile%20gallery/src/data/offers.js)**:
Offers change automatically based on the time of day:
- **6 AM – 12 PM:** Early Bird (Free tempered glass with cover)
- **12 PM – 5 PM:** Afternoon Deal (10% off audio gear)
- **5 PM – 9 PM:** Evening Special (Flat discount on chargers & power banks)
- **9 PM – 6 AM:** Night Owl (Free repair diagnosis booking)
- **Weekends:** Pre-owned laptops & phones markdown
- **Date Range:** Festive specials

### 3. Products Catalogue
Edit **[`src/data/products.js`](file:///c:/Users/varsh/prateeksha%20mobile%20gallery/src/data/products.js)**:
To add or modify products, edit the `PRODUCTS` array. Each product has:
- `name`: Product title
- `category`: `"iphone"` | `"android"` | `"accessories"` | `"second-hand-phones"` | `"second-hand-laptops"`
- `tag`: `"New"` | `"Pre-owned"`
- `startingPrice`: Price in INR (e.g. `79900`)
- `imageUrl`: URL of the product image (replace with your cutouts/photos)
- `bgTone`: `"butter"` | `"cream"` | `"teal"` (for the flat catalogue background)
- `hasOffer` & `offerLabel`: For tomato stamp badges (e.g. `"-10%"`)
- `whatsappMessage`: Prefilled text when customer taps "Enquire on WhatsApp"

### 4. Replacing Product & Shop Images
- In [`src/data/products.js`](file:///c:/Users/varsh/prateeksha%20mobile%20gallery/src/data/products.js), update the `imageUrl` fields with your own transparent PNG cutouts or shop photos. Place local photos inside `public/images/` and reference them as `/images/your-photo.png`.
- In [`src/sections/HeroSection.jsx`](file:///c:/Users/varsh/prateeksha%20mobile%20gallery/src/sections/HeroSection.jsx), update the arch cutout image at line 140.

---

## ⚙️ How to Use the Demo Controls

A small **gear button** is pinned to the **bottom-left corner** of the screen.
Tapping this button opens the **Offer Demo Simulator**, allowing you to preview how the website looks at different times:
1. **Early Bird (9 AM)**
2. **Afternoon Deal (2 PM)**
3. **Evening Special (7 PM)**
4. **Night Owl (11 PM)**
5. **Weekend Showcase (Sun)**
6. **Festive Season (Nov 2)**
7. **Reset to Real Time**

This allows you to demonstrate the dynamic offer engine to the client on demand.

---

## 📦 Project Structure

```
prateeksha-mobile-gallery/
├── index.html                   # HTML template, Fraunces/DM Sans/DM Mono fonts & SEO
├── public/
│   └── favicon.svg              # Minimal vector mobile icon (no emojis)
├── src/
│   ├── components/
│   │   ├── AnnouncementBar.jsx  # Teal band, yellow text, rotating live offers
│   │   ├── Button.jsx           # Reusable tactile button with offset shadows
│   │   ├── DemoControls.jsx     # Bottom-left gear simulation panel
│   │   ├── FloatingButtons.jsx  # Floating WhatsApp (teal/yellow) & back-to-top
│   │   ├── Marquee.jsx          # Sharp-edged teal band brand marquee
│   │   ├── Navbar.jsx           # Fraunces wordmark, sticky cream, slide-in menu
│   │   ├── OfferTicket.jsx      # Tactile ticket banner with dashed divider
│   │   ├── ProductCard.jsx      # Catalogue card with flat color tone & WhatsApp CTA
│   │   ├── SectionTitle.jsx     # Editorial title with hand-drawn yellow underline
│   │   └── Sticker.jsx          # Rotated circular seal & pill stamps
│   ├── data/
│   │   ├── shop.js              # Shop info, phone, whatsapp, timings (PRIMARY CONFIG)
│   │   ├── config.js            # Backward-compatible re-export from shop.js
│   │   ├── content.js           # Brand list, categories, repair steps, testimonials
│   │   ├── offers.js            # Timed offer schedules and discount texts
│   │   └── products.js          # Product catalogue items
│   ├── hooks/
│   │   └── useCurrentOffer.js   # Dynamic time offer engine & greeting hook
│   ├── sections/
│   │   ├── HeroSection.jsx      # Asymmetric split hero, Fraunces headline, teal arch
│   │   ├── BrandMarquee.jsx     # Authorized brands strip
│   │   ├── CategoriesSection.jsx# 5 cards in editorial grid (01–05)
│   │   ├── ProductsSection.jsx  # Filter tabs & catalogue grid
│   │   ├── OffersSection.jsx    # Live ticket banners & 24h timetable
│   │   ├── RepairSection.jsx    # Full-width dark teal section, 4 dotted steps
│   │   ├── SecondHandSection.jsx# Certified pre-owned devices & 4 trust points
│   │   ├── DeliverySection.jsx  # Pan-India map SVG & pincode estimator
│   │   ├── WhyUsSection.jsx     # 4 points & plain quote testimonials
│   │   ├── ContactSection.jsx   # Store location, timings, map & call buttons
│   │   └── Footer.jsx           # Deep teal minimal footer
│   ├── styles/
│   │   └── globals.css          # Butter & Teal design tokens, paper grain, tactile shadows
│   ├── App.jsx                  # Main page assembler
│   └── main.jsx                 # React root
└── package.json
```
