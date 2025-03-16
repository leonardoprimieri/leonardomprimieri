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
          <p className="text-pretty text-sm text-muted-foreground">
            {dictionary.description}
          </p>
        </BlurFade>
      </div>
    </section>
  );
}
