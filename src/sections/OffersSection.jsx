import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import OfferTicket from "../components/OfferTicket";
import { useCurrentOffer } from "../hooks/useCurrentOffer";
import { OFFERS } from "../data/offers";
import { Clock } from "lucide-react";

export default function OffersSection({ simulatedTime }) {
  const { activeOffers, countdownFormatted } = useCurrentOffer(simulatedTime);

  return (
    <section
      id="offers"
      className="section-padding section-surface"
      aria-label="Promotions and Daily Offers"
    >
      <div className="container">
        <SectionTitle
          eyebrow="Dynamic Offer Engine"
          title="Daily Deals & Timed Offers"
          accentWord="Timed Offers"
          subtitle="Our offers adjust dynamically throughout the day. Drop by during these hours or book directly on WhatsApp."
        />

        {/* Active Live Offers Banner */}
        <div style={{ marginBottom: "3.5rem" }}>
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
                padding: "2.5rem",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "var(--ink)",
                  marginBottom: "0.35rem",
                }}
              >
                Next Offer Unlocks Soon
              </p>
              <p style={{ fontFamily: "var(--font-sans)", color: "var(--muted)", fontSize: "0.95rem" }}>
                Check back in the morning or evening for exclusive in-store promotions.
              </p>
            </div>
          )}
        </div>

        {/* 24-Hour Master Schedule */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              marginBottom: "1.5rem",
            }}
          >
            <Clock size={18} strokeWidth={1.5} color="var(--primary)" />
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.35rem",
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
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {OFFERS.map((offer) => {
              const isLive = activeOffers.some((o) => o.id === offer.id);
              return (
                <div
                  key={offer.id}
                  className="card-tactile"
                  style={{
                    padding: "1.35rem",
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
                        top: "12px",
                        right: "12px",
                      }}
                    >
                      LIVE NOW
                    </span>
                  )}

                  <div>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.74rem",
                        color: "var(--muted)",
                        display: "block",
                        marginBottom: "0.4rem",
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
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "var(--ink)",
                        marginBottom: "0.35rem",
                        paddingRight: isLive ? "4rem" : "0",
                      }}
                    >
                      {offer.title}
                    </h4>

                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.85rem",
                        color: "var(--muted)",
                        lineHeight: 1.45,
                        marginBottom: "1rem",
                      }}
                    >
                      {offer.description}
                    </p>
                  </div>

                  <div
                    style={{
                      borderTop: "1px dashed var(--line)",
                      paddingTop: "0.75rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.82rem",
                        fontWeight: 700,
                        color: "var(--primary)",
                      }}
                    >
                      {offer.discountText}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.7rem",
                        color: "var(--muted)",
                      }}
                    >
                      {offer.badge}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
