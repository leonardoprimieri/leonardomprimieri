import { BlurFade } from "~/components/magicui/blur-fade";
import { SectionTitle } from "~/components/section-title/section-title";
import { getDictionary } from "~/helpers/get-dictionaries";
import { parseHighlightedText } from "~/helpers/parse-highlighted-text";
import { getYearsOfExperience } from "~/sections/tech-stack-section/helpers/get-years-of-experience";

export function AboutSection({
  dictionary,
  language = "en",
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["about"];
  language?: "en" | "pt-br";
}) {
  return (
    <section className="flex justify-center flex-col items-start">
      <div>
        <BlurFade inView>
          <SectionTitle>{dictionary.title}</SectionTitle>
        </BlurFade>
        <BlurFade inView>
          <p className="text-pretty text-md text-muted-foreground">
            {parseHighlightedText({
              text: dictionary.description.replace(
                "{{years}}",
                getYearsOfExperience({
                  value: 2020,
                  shouldAppendYear: true,
                  language,
                })
              ),
            })}
          </p>
        </BlurFade>
      </div>
    </section>
  );
}
