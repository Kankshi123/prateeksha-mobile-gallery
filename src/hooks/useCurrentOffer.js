import { useState, useEffect, useCallback } from "react";
import { OFFERS, DAY_NAMES } from "../data/offers";

// ─── Helper: parse "HH:MM" to total minutes since midnight ─────────────
const toMinutes = (timeStr) => {
  const [h, m] = timeStr.split(":").map(Number);
  return h * 60 + m;
};

// ─── Check if an offer is active for a given Date object ────────────────
export const isOfferActive = (offer, now) => {
  const dayName = DAY_NAMES[now.getDay()];
  const { schedule } = offer;

  // Check day
  if (schedule.days && !schedule.days.includes(dayName)) return false;

  // Check date range
  if (schedule.startDate || schedule.endDate) {
    const todayStr = now.toISOString().split("T")[0];
    if (schedule.startDate && todayStr < schedule.startDate) return false;
    if (schedule.endDate && todayStr > schedule.endDate) return false;
  }

  // Check time range (handles overnight wrap like 21:00–06:00)
  const startMins = toMinutes(schedule.startTime);
  const endMins = toMinutes(schedule.endTime);
  const nowMins = now.getHours() * 60 + now.getMinutes();

  if (startMins <= endMins) {
    return nowMins >= startMins && nowMins < endMins;
  } else {
    // Overnight wrap
    return nowMins >= startMins || nowMins < endMins;
  }
};

// ─── Calculate seconds until the offer ends ─────────────────────────────
const secondsUntilEnd = (offer, now) => {
  const { schedule } = offer;
  const endMins = toMinutes(schedule.endTime);
  const nowMins = now.getHours() * 60 + now.getMinutes();
  const nowSecs = now.getSeconds();

  let diffMins;
  if (endMins > nowMins) {
    diffMins = endMins - nowMins - 1;
  } else {
    // Overnight: add 24 hours
    diffMins = 24 * 60 - nowMins + endMins - 1;
  }
  return Math.max(0, diffMins * 60 + (60 - nowSecs));
};

// ─── Format seconds as HH:MM:SS ─────────────────────────────────────────
export const formatCountdown = (totalSeconds) => {
  if (totalSeconds <= 0) return "00:00:00";
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  return [h, m, s].map((v) => String(v).padStart(2, "0")).join(":");
};

// ─── Main offer hook ────────────────────────────────────────────────────
export const useCurrentOffer = (simulatedTime = null) => {
  const getNow = useCallback(
    () => (simulatedTime ? new Date(simulatedTime) : new Date()),
    [simulatedTime]
  );

  const computeState = useCallback(() => {
    const now = getNow();
    const activeOffers = OFFERS.filter((o) => isOfferActive(o, now));
    const primary = activeOffers[0] || OFFERS[0];
    const secs = primary ? secondsUntilEnd(primary, now) : 0;
    return { activeOffers, primaryOffer: primary, countdown: secs };
  }, [getNow]);

  const [state, setState] = useState(computeState);

  useEffect(() => {
    setState(computeState());
    const interval = setInterval(() => {
      setState(computeState());
    }, 1000);
    return () => clearInterval(interval);
  }, [computeState]);

  return {
    ...state,
    countdownFormatted: formatCountdown(state.countdown),
  };
};

// ─── Time-based greeting (No emojis, editorial tone) ────────────────────
export const useGreeting = (simulatedTime = null) => {
  const [greeting, setGreeting] = useState("Good day, Dehradun");

  useEffect(() => {
    const update = () => {
      const now = simulatedTime ? new Date(simulatedTime) : new Date();
      const h = now.getHours();
      if (h >= 5 && h < 12) setGreeting("Good morning, Dehradun");
      else if (h >= 12 && h < 17) setGreeting("Good afternoon, Dehradun");
      else if (h >= 17 && h < 21) setGreeting("Good evening, Dehradun");
      else setGreeting("Late night in Dehradun");
    };
    update();
    const t = setInterval(update, 30000);
    return () => clearInterval(t);
  }, [simulatedTime]);

  return greeting;
};
