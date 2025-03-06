import Image from "next/image";
import { BlurFade } from "~/components/magicui/blur-fade";
import { type getDictionary } from "~/helpers/get-dictionaries";

export function HeroSection({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["hero"];
}) {
  return (
    <section className="flex flex-col-reverse lg:flex-row gap-4 items-center justify-between">
      <div className="flex flex-col">
        <BlurFade inView>
          <h2 className="text-3xl font-semibold font-title tracking-tighter sm:text-5xl xl:text-6xl/none">
            {dictionary.title} 👋
          </h2>
        </BlurFade>
        <BlurFade inView className="mt-2 max-w-3xl">
          <span className="text-pretty text-xl lg:text-2xl tracking-tighter">
            {dictionary.subtitle}
          </span>
        </BlurFade>
      </div>

      <BlurFade inView>
        <Image
          width={130}
          height={130}
          className="w-32 h-32 rounded-full"
          src="https://github.com/leonardoprimieri.png"
          alt="Leonardo Primieri"
        />
      </BlurFade>
    </section>
  );
}
