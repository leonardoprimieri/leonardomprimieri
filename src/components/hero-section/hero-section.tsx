import Image from "next/image";
import { BlurFade } from "../magicui/blur-fade";

export function HeroSection() {
  return (
    <section className="m-12 flex flex-col-reverse lg:flex-row gap-4 items-center justify-between">
      <div className="flex flex-col">
        <BlurFade delay={0.25} inView>
          <h2 className="text-3xl font-semibold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Hi, I&apos;m Leonardo 👋
          </h2>
        </BlurFade>
        <BlurFade delay={0.25 * 2} inView className="mt-2 max-w-3xl">
          <span className="text-pretty text-xl tracking-tighter xl:text-3xl/none">
            I am a skilled React developer with 5 years of experience in
            building high-quality web applications.
          </span>
        </BlurFade>
      </div>

      <Image
        width={150}
        height={150}
        className="w-40 h-w-40 lg:w-48 lg:h-48 rounded-full"
        src="https://github.com/leonardoprimieri.png"
        alt="Leonardo Primieri"
      />
    </section>
  );
}
