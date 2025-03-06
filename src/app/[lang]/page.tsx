import { DockNav } from "~/components/dock-nav/dock-nav";
import { getDictionary } from "~/helpers/get-dictionaries";
import { AboutSection } from "~/sections/about-section/about-section";
import { EducationSection } from "~/sections/education-section/education-section";
import { GetInTouchSection } from "~/sections/get-in-touch-section/get-in-touch-section";
import { GithubProjectsSection } from "~/sections/github-projects-section/github-projects-section";
import { HeroSection } from "~/sections/hero-section/hero-section";
import { TechStackSection } from "~/sections/tech-stack-section/tech-stack-section";
import { MyWorkExperienceSection } from "~/sections/work-experience-section/work-experience-section";
import { Locale } from "../../../i18n-config";

export default async function Home(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  const dictionary = await getDictionary(lang);

  return (
    <>
      <div className="flex flex-col gap-12">
        <HeroSection dictionary={dictionary} />
        <AboutSection />
        <MyWorkExperienceSection />
        <EducationSection />
        <GithubProjectsSection />
        <TechStackSection />
        <GetInTouchSection />
      </div>
      <div className="sticky bottom-12">
        <DockNav />
      </div>
    </>
  );
}
