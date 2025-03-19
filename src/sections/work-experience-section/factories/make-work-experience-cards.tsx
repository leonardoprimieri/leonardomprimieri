import Link from "next/link";
import { getDictionary } from "~/helpers/get-dictionaries";
import { HightLightText } from "~/sections/about-section/components/hightlight-text/hightlight-text";

export const makeWorkExperienceCards = (
  dictionary: Awaited<ReturnType<typeof getDictionary>>["work-experience"]
) => {
  const translatedExperiences = dictionary.jobs.map((job) => {
    return {
      description: job.description,
      title: job.title,
      src: job.src,
      content: () => {
        return (
          <section className="text-pretty text-sm text-muted-foreground">
            <div>
              <p>{job.details.description}</p>
            </div>
            <div>
              {job.details["items-section"]?.map((accomplishment) => {
                return (
                  <div
                    className="flex flex-col gap-2"
                    key={accomplishment.title}
                  >
                    {accomplishment.link !== "#" ? (
                      <Link href={accomplishment.link} target="_blank">
                        <HightLightText className="font-semibold text-xl mt-4">
                          {accomplishment.title}
                        </HightLightText>
                      </Link>
                    ) : (
                      <HightLightText className="font-semibold text-xl mt-4">
                        {accomplishment.title}
                      </HightLightText>
                    )}

                    <ul className="list-disc pl-5 space-y-1 mt-4">
                      {accomplishment.items.map((item) => {
                        return <li key={item}>{item}</li>;
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </section>
        );
      },
    };
  });

  return translatedExperiences;
};
