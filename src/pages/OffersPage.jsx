import { motion, AnimatePresence } from "framer-motion";
import { Clock, Tag, Sparkles, CheckCircle2, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import OfferTicket from "../components/OfferTicket";
import { useCurrentOffer } from "../hooks/useCurrentOffer";
import { OFFERS } from "../data/offers";
import { SHOP } from "../data/shop";

export default function OffersPage({ simulatedTime }) {
  const { activeOffers, countdownFormatted } = useCurrentOffer(simulatedTime);

  const getWhatsAppOfferUrl = (offerTitle) => {
    const text = encodeURIComponent(
      `Hello Prateeksha Mobile Gallery, I saw the "${offerTitle}" offer on your website and would like to claim/inquire about it.`
    );
    return `https://wa.me/${SHOP.whatsappNumber}?text=${text}`;
  };

  return (
    <main style={{ minHeight: "80vh", paddingBottom: "5rem" }}>
      {/* Editorial Header */}
      <section
        style={{
          backgroundColor: "var(--bg)",
          borderBottom: "1px solid var(--line)",
          padding: "3rem 1.5rem 2.5rem",
        }}
      >
        <div className="container">
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              color: "var(--muted)",
              marginBottom: "1.25rem",
            }}
          >
            <Link to="/" style={{ color: "var(--muted)", textDecoration: "none" }}>
              Home
            </Link>
            <span>/</span>
            <span style={{ color: "var(--primary)", fontWeight: 700 }}>
              Live Offers
            </span>
          </nav>

          <SectionTitle
            eyebrow="Dynamic Offer Engine"
            title="Daily Deals & Timed Offers"
            accentWord="Timed Offers"
            subtitle="Our offers adjust dynamically throughout the day. Drop by during these hours at our G.M.S. Road store in Dehradun or claim instantly on WhatsApp."
          />
        </div>
      </section>

      <div className="container" style={{ paddingTop: "2.5rem" }}>
        {/* Active Live Offers Banner */}
        <div style={{ marginBottom: "3.5rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "1.25rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span
                style={{
                  display: "inline-block",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: "var(--pop)",
                  boxShadow: "0 0 0 4px rgba(228,87,46,0.2)",
                }}
              />
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: "var(--ink)",
                }}
              >
                Active Right Now
              </h2>
            </div>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.78rem",
                color: "var(--muted)",
              }}
            >
              Updated automatically
            </span>
          </div>

          {activeOffers && activeOffers.length > 0 ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeOffers.map((o) => o.id).join("-")}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
              >
                {activeOffers.map((offer) => (
                  <OfferTicket
                    key={offer.id}
                    offer={offer}
                    countdownFormatted={countdownFormatted}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          ) : (
            <div
              style={{
                backgroundColor: "var(--surface)",
                border: "1.5px dashed var(--line)",
                borderRadius: "var(--radius-md)",
                padding: "3rem 2rem",
                textAlign: "center",
              }}
            >
              <Sparkles size={32} color="var(--primary)" style={{ margin: "0 auto 1rem" }} />
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "var(--ink)",
                  marginBottom: "0.35rem",
                }}
              >
                Next Offer Unlocks Soon
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  color: "var(--muted)",
                  fontSize: "0.95rem",
                  maxWidth: "500px",
                  margin: "0 auto",
                }}
              >
                Check back in the morning or evening for exclusive in-store promotions, or see the timetable below for upcoming slots.
              </p>
            </div>
          )}
        </div>

        {/* 24-Hour Master Schedule */}
        <div style={{ marginBottom: "4rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              marginBottom: "1.5rem",
            }}
          >
            <Clock size={20} strokeWidth={1.5} color="var(--primary)" />
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.45rem",
                fontWeight: 700,
                color: "var(--ink)",
              }}
            >
              24-Hour Deal Timetable
            </h3>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
              gap: "1.5rem",
            }}
          >
            {OFFERS.map((offer) => {
              const isLive = activeOffers.some((o) => o.id === offer.id);
              return (
                <div
                  key={offer.id}
                  className="card-tactile"
                  style={{
                    padding: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    backgroundColor: isLive ? "#FAF4E2" : "var(--surface)",
                    borderColor: isLive ? "var(--primary)" : "var(--line)",
                    position: "relative",
                  }}
                >
                  {isLive && (
                    <span
                      className="stamp-tomato"
                      style={{
                        position: "absolute",
                        top: "14px",
                        right: "14px",
                      }}
                    >
                      LIVE NOW
                    </span>
                  )}

                  <div>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.76rem",
                        color: "var(--muted)",
                        display: "block",
                        marginBottom: "0.5rem",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {offer.schedule.startDate
                        ? `${offer.schedule.startDate} to ${offer.schedule.endDate}`
                        : `${offer.schedule.startTime} – ${offer.schedule.endTime}`}
                    </span>

                    <h4
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.2rem",
                        fontWeight: 700,
                        color: "var(--ink)",
                        marginBottom: "0.45rem",
                        paddingRight: isLive ? "4.5rem" : "0",
                      }}
                    >
                      {offer.title}
                    </h4>

                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.9rem",
                        color: "var(--muted)",
                        lineHeight: 1.5,
                        marginBottom: "1.25rem",
                      }}
                    >
                      {offer.description}
                    </p>
                  </div>

                  <div>
                    <div
                      style={{
                        borderTop: "1px dashed var(--line)",
                        paddingTop: "0.85rem",
                        marginBottom: "1rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.86rem",
                          fontWeight: 700,
                          color: "var(--primary)",
                        }}
                      >
                        {offer.discountText}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.72rem",
                          color: "var(--muted)",
                          textTransform: "uppercase",
                        }}
                      >
                        {offer.badge}
                      </span>
                    </div>

                    <a
                      href={getWhatsAppOfferUrl(offer.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.4rem",
                        width: "100%",
                        fontSize: "0.82rem",
                        padding: "0.55rem 0.8rem",
                      }}
                    >
                      <MessageCircle size={14} />
                      <span>Reserve on WhatsApp</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Claiming Guide & Rules */}
        <div
          className="card-tactile"
          style={{
            padding: "2rem",
            backgroundColor: "var(--surface)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "2rem",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <Tag size={18} color="var(--primary)" />
              <h4
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "var(--ink)",
                }}
              >
                How to Claim in Store
              </h4>
            </div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.88rem",
                color: "var(--muted)",
                lineHeight: 1.5,
              }}
            >
              Simply mention the website offer code or show the active countdown screen to our billing executive at our G.M.S. Road store in Dehradun.
            </p>
          </div>

          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
              <CheckCircle2 size={18} color="var(--primary)" />
              <h4
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "var(--ink)",
                }}
              >
                Terms & Conditions
              </h4>
            </div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.88rem",
                color: "var(--muted)",
                lineHeight: 1.5,
              }}
            >
              Offers cannot be clubbed with wholesale margin orders. Free tempered glass installation is subject to in-stock compatibility for your model.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Link
              to="/products"
              className="btn-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.88rem",
              }}
            >
              <span>Explore Eligible Products</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
