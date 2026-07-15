import { Hero } from "@/components/Hero";
import { LogoMarquee } from "@/components/LogoMarquee";
import { Pillars } from "@/components/Pillars";
import { Places } from "@/components/Places";
import { Stats } from "@/components/Stats";
import { Platform } from "@/components/Platform";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <Pillars />
      <Places />
      <Stats />
      <Platform />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
}
