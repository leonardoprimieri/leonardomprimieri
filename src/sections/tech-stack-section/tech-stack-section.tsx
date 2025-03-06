import { BlurFade } from "~/components/magicui/blur-fade";
import { SectionTitle } from "~/components/section-title/section-title";
import { HoverEffect } from "~/components/ui/card-hover-effect";
import { TECH_STACK } from "./constants/tech-stack.const";
import { getDictionary } from "~/helpers/get-dictionaries";

export function TechStackSection({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["techs"];
}) {
  return (
    <BlurFade inView>
      <section>
        <SectionTitle>{dictionary.title}</SectionTitle>
        <HoverEffect items={TECH_STACK} />
      </section>
    </BlurFade>
  );
}
