import { DockNav } from "~/components/dock-nav/dock-nav";
import { AboutSection } from "~/sections/about-section/about-section";
import { EducationSection } from "~/sections/education-section/education-section";
import { GithubProjectsSection } from "~/sections/github-projects-section/github-projects-section";
import { HeroSection } from "~/sections/hero-section/hero-section";
import { MyWorkExperienceSection } from "~/sections/work-experience-section/work-experience-section";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-12">
        <HeroSection />
        <AboutSection />
        <MyWorkExperienceSection />
        <EducationSection />
        <GithubProjectsSection />
      </div>
      <div className="sticky bottom-12">
        <DockNav />
      </div>
    </>
  );
}
