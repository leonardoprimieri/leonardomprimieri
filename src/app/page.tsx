import { DockNav } from "~/components/dock-nav/dock-nav";
import { AboutSection } from "~/sections/about-section/about-section";
import { HeroSection } from "~/sections/hero-section/hero-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <DockNav />
    </>
  );
}
