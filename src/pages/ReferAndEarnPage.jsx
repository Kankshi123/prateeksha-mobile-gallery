import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Gift, Share2, Copy, Check, MessageCircle, Sparkles, ArrowRight, Wallet, Users } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { buildWhatsAppUrl } from "../data/shop";

export default function ReferAndEarnPage() {
  const [copied, setCopied] = useState(false);
  const referralCode = "PMG-DEHRADUN500";
  const shareText = `Get flat Rs 500 off on your next smartphone or certified pre-owned device at Prateeksha Mobile Gallery (G.M.S. Road, Dehradun) using my code: ${referralCode}! Check them out: https://prateekshamobilegallery.com/`;

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsAppShare = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    window.open(url, "_blank");
  };

  return (
    <div style={{ backgroundColor: "var(--bg)", padding: "2.5rem 0 5rem 0" }}>
      <div className="container">
        {/* Breadcrumb */}
        <nav
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.8rem",
            color: "var(--muted)",
            marginBottom: "2rem",
            display: "flex",
            gap: "0.5rem",
          }}
        >
          <Link to="/" style={{ color: "var(--muted)", textDecoration: "none" }}>Home</Link>
          <span>/</span>
          <span style={{ color: "var(--primary)", fontWeight: 700 }}>Refer & Earn</span>
        </nav>

        <SectionTitle
          eyebrow="Community Rewards Program"
          title="Share the Trust, Earn Instant Rewards"
          accentWord="Instant Rewards"
          subtitle="Recommend Prateeksha Mobile Gallery to friends, colleagues, or family. When they purchase, sell, or repair a device, both of you earn instant benefits."
        />

        {/* Interactive Referral Code Box */}
        <div
          className="card-tactile"
          style={{
            maxWidth: "680px",
            margin: "0 auto 4rem auto",
            padding: "2.5rem 2rem",
            backgroundColor: "var(--surface)",
            textAlign: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              backgroundColor: "#FFF8D6",
              border: "1.5px solid var(--accent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.25rem auto",
              color: "var(--primary)",
            }}
          >
            <Gift size={28} strokeWidth={1.5} />
          </div>

          <h3
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.6rem",
              fontWeight: 700,
              color: "var(--ink)",
              marginBottom: "0.5rem",
            }}
          >
            Your Unique Referral Code
          </h3>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.92rem",
              color: "var(--muted)",
              marginBottom: "1.75rem",
            }}
          >
            Share this code with anyone shopping for a phone or booking a repair in Dehradun.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem",
              flexWrap: "wrap",
              marginBottom: "1.5rem",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "1.25rem",
                fontWeight: 800,
                color: "var(--primary)",
                backgroundColor: "var(--bg)",
                border: "2px dashed var(--primary)",
                padding: "0.75rem 1.75rem",
                borderRadius: "var(--radius-sm)",
                letterSpacing: "0.12em",
              }}
            >
              {referralCode}
            </div>

            <button
              type="button"
              onClick={handleCopy}
              className="btn btn-secondary"
              style={{ padding: "0.75rem 1.25rem", fontSize: "0.9rem" }}
            >
              {copied ? <Check size={16} color="var(--primary)" /> : <Copy size={16} />}
              <span>{copied ? "Copied!" : "Copy Code"}</span>
            </button>
          </div>

          <button
            type="button"
            onClick={handleWhatsAppShare}
            className="btn btn-whatsapp"
            style={{
              padding: "0.75rem 1.6rem",
              fontSize: "0.95rem",
              margin: "0 auto",
              gap: "0.5rem",
            }}
          >
            <Share2 size={16} />
            <span>Share directly on WhatsApp</span>
          </button>
        </div>

        {/* 3 Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.75rem",
            marginBottom: "4rem",
          }}
        >
          {[
            {
              num: "01",
              title: "Share Your Code",
              desc: "Send your code or store location to friends who need a new iPhone/Android, laptop, or phone repair.",
            },
            {
              num: "02",
              title: "Friend Redeems",
              desc: "Your friend presents the code at our G.M.S. Road store or mentions it on WhatsApp during their order.",
            },
            {
              num: "03",
              title: "Instant Cash or Discount",
              desc: "Your friend gets an immediate discount, and you receive an instant UPI cash bonus or store credit voucher.",
            },
          ].map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="card-tactile"
              style={{
                padding: "2rem",
                backgroundColor: "var(--surface)",
                position: "relative",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "1.75rem",
                  fontWeight: 800,
                  color: "var(--primary)",
                  opacity: 0.25,
                  marginBottom: "0.5rem",
                }}
              >
                {step.num}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "var(--ink)",
                  marginBottom: "0.5rem",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.92rem",
                  color: "var(--muted)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Reward Value Tiers */}
        <div
          className="card-tactile"
          style={{
            padding: "2.5rem 2rem",
            backgroundColor: "#FAF4E2",
            border: "1.5px solid var(--line)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <span className="eyebrow">Clear Earning Breakdown</span>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.75rem",
                fontWeight: 700,
                color: "var(--ink)",
                marginTop: "0.25rem",
              }}
            >
              How Much Can You Earn?
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              { category: "Smartphone Purchase", reward: "Rs 500 UPI / Discount", detail: "On any new or pre-owned flagship phone" },
              { category: "Laptop or Console Trade", reward: "Rs 750 Instant Cash", detail: "When friend sells/exchanges laptop or PS5" },
              { category: "Display / Screen Repair", reward: "Rs 250 Cash Voucher", detail: "For any major screen or motherboard fix" },
              { category: "Accessories Bundle", reward: "Free 9D Tempered Glass", detail: "Plus 15% discount on audio gear" },
            ].map((tier) => (
              <div
                key={tier.category}
                style={{
                  backgroundColor: "var(--surface)",
                  padding: "1.5rem",
                  borderRadius: "var(--radius-sm)",
                  border: "1px solid var(--line)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.35rem" }}>
                  {tier.category}
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.95rem", fontWeight: 800, color: "var(--primary)", marginBottom: "0.45rem" }}>
                  {tier.reward}
                </div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "var(--muted)" }}>
                  {tier.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
