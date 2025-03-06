"use client";
import { Card } from "~/components/expandable-cards/types/card";
import { ExpandableCards } from "~/components/expandable-cards/expandable-cards";
import { getDictionary } from "~/helpers/get-dictionaries";

export function EducationSection({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["education"];
}) {
  return <ExpandableCards cards={cards} title={dictionary.title} />;
}

const cards: Card[] = [
  {
    description: "2020 - 2024 · 4 yr",
    title: "Atitus - Bachelor's Degree in Computer Science",
    src: "/companies-logos/atituseducacao_logo.jpeg",
    content: () => {
      return (
        <section className="text-pretty text-sm text-muted-foreground">
          <div>
            <p>Educational background:</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mt-2">
              Bachelor&apos;s Degree in Computer Science
            </h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Final project: Developed a Veterinary App with Expo and Firebase
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mt-2">Key Skills Developed</h4>
            <p className="mt-1">
              Problem-solving, Algorithmic thinking, Project management, Team
              collaboration, Research methodology, Technical documentation
            </p>
          </div>
        </section>
      );
    },
  },
];
