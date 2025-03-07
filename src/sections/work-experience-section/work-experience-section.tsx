"use client";

import { ExpandableCards } from "~/components/expandable-cards/expandable-cards";
import { getDictionary } from "~/helpers/get-dictionaries";
import { makeWorkExperienceCards } from "./factories/make-work-experience-cards";

export function MyWorkExperienceSection({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["work-experience"];
}) {
  return (
    <ExpandableCards
      title={dictionary.title}
      cards={makeWorkExperienceCards(dictionary)}
    />
  );
}
