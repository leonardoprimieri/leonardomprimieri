"use client";
import { ExpandableCards } from "~/components/expandable-cards/expandable-cards";
import { getDictionary } from "~/helpers/get-dictionaries";
import { makeEducationCards } from "./factories/make-education-cards";

export function EducationSection({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["education"];
}) {
  return (
    <ExpandableCards
      cards={makeEducationCards(dictionary)}
      title={dictionary.title}
    />
  );
}
