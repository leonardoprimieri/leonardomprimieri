import { BlurFade } from "~/components/magicui/blur-fade";
import { SectionTitle } from "~/components/section-title/section-title";
import { HoverEffect } from "~/components/ui/card-hover-effect";
import { TECH_STACK } from "./constants/tech-stack.const";

export function TechStackSection() {
  return (
    <BlurFade inView>
      <section>
        <SectionTitle>Techs I use daily</SectionTitle>
        <HoverEffect items={TECH_STACK} />
      </section>
    </BlurFade>
  );
}
