import Marquee from "../components/Marquee";
import { BRANDS } from "../data/content";

export default function BrandMarquee() {
  return (
    <section aria-label="Authorized Brands Showcase">
      <Marquee items={BRANDS} speed="38s" separator="✦" />
    </section>
  );
}
