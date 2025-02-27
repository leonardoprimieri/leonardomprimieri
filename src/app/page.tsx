import { DockNav } from "~/components/dock-nav/dock-nav";
import { AboutSection } from "~/sections/about-section/about-section";
import { HeroSection } from "~/sections/hero-section/hero-section";
import { MyWorkExperienceSection } from "~/sections/my-work-experience-section/my-work-experience-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <div className="mt-4">
        <MyWorkExperienceSection />
      </div>
      <div className="sticky bottom-12">
        <DockNav />
      </div>
    </>
  );
}
