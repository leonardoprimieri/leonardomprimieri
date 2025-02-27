import Image from "next/image";
import { BlurFade } from "~/components/magicui/blur-fade";
import { BLUR_FADE_BASE_DELAY } from "~/constants/blur-fade-base-delay.const";

export function HeroSection() {
  return (
    <section className="flex flex-col-reverse lg:flex-row gap-4 items-center justify-between">
      <div className="flex flex-col">
        <BlurFade delay={BLUR_FADE_BASE_DELAY} inView>
          <h2 className="text-3xl font-semibold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Hi, I&apos;m Leonardo
          </h2>
        </BlurFade>
        <BlurFade
          delay={BLUR_FADE_BASE_DELAY * 2}
          inView
          className="mt-2 max-w-3xl"
        >
          <span className="text-pretty text-xl tracking-tighter xl:text-3xl/none">
            Computer Science Bachelor and a Frontend Developer.
          </span>
        </BlurFade>
      </div>

      <BlurFade delay={BLUR_FADE_BASE_DELAY * 2} inView>
        <Image
          width={160}
          height={160}
          className="w-40 h-40 rounded-full"
          src="https://github.com/leonardoprimieri.png"
          alt="Leonardo Primieri"
        />
      </BlurFade>
    </section>
  );
}
