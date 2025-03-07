import { BlurFade } from "~/components/magicui/blur-fade";
import { SectionTitle } from "~/components/section-title/section-title";
import { getDictionary } from "~/helpers/get-dictionaries";

export function AboutSection({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["about"];
}) {
  return (
    <section className="flex justify-center flex-col items-start">
      <div>
        <BlurFade inView>
          <SectionTitle>{dictionary.title}</SectionTitle>
        </BlurFade>
        <BlurFade inView>
          {/* <p className="text-pretty text-sm text-muted-foreground">
            I&apos;m a <HightLightText>Senior React Developer</HightLightText>{" "}
            with 5 years of experience building complex web applications,
            including payment processing platforms and BAAS services. With a
            Computer Science degree and expertise in
            <HightLightText> React</HightLightText>,{" "}
            <HightLightText> Typescript</HightLightText>,{" "}
            <HightLightText> NextJS</HightLightText>,
            <HightLightText> Javascript</HightLightText>, and various state
            management solutions, I create clean, high-quality code that scales.
            I thrive in fast-paced software house environments where I can
            tackle diverse projects and learn continuously. After successful
            roles in Brazil, I&apos;m now seeking international opportunities to
            challenge myself and gain exposure to how larger companies approach
            development. I&apos;m passionate about code quality, enjoy
            collaborative problem-solving, and have{" "}
            <HightLightText>Advanced English </HightLightText>
            communication skills.
          </p> */}
          <p className="text-pretty text-sm text-muted-foreground">
            {dictionary.description}
          </p>
        </BlurFade>
      </div>
    </section>
  );
}
