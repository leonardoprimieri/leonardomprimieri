import { getDictionary } from "~/helpers/get-dictionaries";
import { HightLightText } from "~/sections/about-section/components/hightlight-text/hightlight-text";

export const makeEducationCards = (
  dictionary: Awaited<ReturnType<typeof getDictionary>>["education"]
) => {
  const translatedExperiences = dictionary.items.map((item) => {
    return {
      description: item.duration,
      title: item.title,
      src: item.src,
      content: () => {
        return (
          <section className="text-pretty text-sm text-muted-foreground">
            <div>
              {item.details["items-section"]?.map((accomplishment) => {
                return (
                  <div
                    className="flex flex-col gap-2"
                    key={accomplishment.title}
                  >
                    <HightLightText className="font-semibold text-xl mt-4">
                      {accomplishment.title}
                    </HightLightText>
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
