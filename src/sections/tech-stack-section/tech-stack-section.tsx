"use client";
import { BlurFade } from "~/components/magicui/blur-fade";
import { SectionTitle } from "~/components/section-title/section-title";
import { HoverEffect } from "~/components/ui/card-hover-effect";
import { getDictionary } from "~/helpers/get-dictionaries";
import { DynamicIcon, IconName } from "lucide-react/dynamic";
import { FollowerPointerCard } from "~/components/ui/following-pointer";

export function TechStackSection({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["techs"];
}) {
  return (
    <BlurFade inView>
      <FollowerPointerCard>
        <section>
          <SectionTitle>{dictionary.title}</SectionTitle>
          <HoverEffect
            items={dictionary.cards.map((item) => ({
              icon: (
                <DynamicIcon
                  name={item.lucideIconName as IconName}
                  className="text-primary size-5"
                />
              ),
              items: item.items.map((subItem) => ({
                description: subItem.yearsOfExperience,
                name: subItem.name,
              })),
              title: item.title,
            }))}
          />
        </section>
      </FollowerPointerCard>
    </BlurFade>
  );
}
