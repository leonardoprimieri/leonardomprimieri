import { BlurFade } from "~/components/magicui/blur-fade";
import { HightLightText } from "./components/hightlight-text/hightlight-text";

export function AboutSection() {
  return (
    <section className="flex justify-center flex-col items-start">
      <div>
        <BlurFade delay={0.25 * 3}>
          <h3 className="text-2xl font-semibold underline">About Me</h3>
        </BlurFade>
        <BlurFade delay={0.25 * 4}>
          <p className="max-w-2xl text-pretty text-sm text-muted-foreground">
            I&apos;m a React developer with 5 years of experience building
            complex web applications, including payment processing platforms and
            BAAS services. With a Computer Science degree and expertise in
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
            collaborative problem-solving, and bring advanced{" "}
            <HightLightText> English </HightLightText>
            communication skills to any team.
          </p>
        </BlurFade>
      </div>
    </section>
  );
}
