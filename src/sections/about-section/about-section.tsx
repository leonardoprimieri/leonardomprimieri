import { BlurFade } from "~/components/magicui/blur-fade";
import { SectionTitle } from "~/components/section-title/section-title";
import { getDictionary } from "~/helpers/get-dictionaries";
import { getYearsOfExperience } from "~/sections/tech-stack-section/helpers/get-years-of-experience";

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
          <p className="text-pretty text-md text-muted-foreground">
            {dictionary.description.replace(
              "{{years}}",
              getYearsOfExperience({
                value: 2019,
              })
            )}
          </p>
        </BlurFade>
      </div>
    </section>
  );
}
