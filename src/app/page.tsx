import { DockNav } from "~/components/dock-nav/dock-nav";
import { AboutSection } from "~/sections/about-section/about-section";
import { EducationSection } from "~/sections/education-section/education-section";
import { HeroSection } from "~/sections/hero-section/hero-section";
import { MyWorkExperienceSection } from "~/sections/my-work-experience-section/my-work-experience-section";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <HeroSection />
        <AboutSection />
        <MyWorkExperienceSection />
        <EducationSection />
      </div>
      <div className="sticky bottom-12">
        <DockNav />
      </div>
    </>
  );
}
