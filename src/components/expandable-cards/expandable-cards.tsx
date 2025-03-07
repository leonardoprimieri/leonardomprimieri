import { Separator } from "@radix-ui/react-separator";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useRef, useId, useEffect } from "react";
import { useOutsideClick } from "~/hooks/use-outside-click";
import { BlurFade } from "../magicui/blur-fade";
import { SectionTitle } from "../section-title/section-title";
import Image from "next/image";
import { CloseIcon } from "./components/close-icon/close-icon";
import { Card } from "./types/card";

type Props = {
  cards: Card[];
  title: string;
};

export function ExpandableCards({ cards, title }: Props) {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );

  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-accent  sm:rounded-3xl overflow-hidden"
            >
              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="flex flex-col items-center mx-auto">
                    <motion.div
                      layoutId={`image-${active.title}-${id}`}
                      className="mx-auto mt-8 mb-4"
                    >
                      <Image
                        priority
                        width={100}
                        height={100}
                        src={active.src}
                        alt={active.title}
                        className="h-[100px] w-[100px] rounded-full object-cover"
                      />
                    </motion.div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-96 md:h-60 pb-10 flex flex-col items-start gap-4 overflow-y-auto max-h-[400px] dark:text-neutral-400 [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <BlurFade inView>
        <SectionTitle>{title}</SectionTitle>
        <ul className="w-full gap-4">
          {cards.map((card, index) => (
            <React.Fragment key={index}>
              <motion.div
                layoutId={`card-${card.title}-${id}`}
                key={`card-${card.title}-${id}`}
                onClick={() => setActive(card)}
                className="p-2 flex flex-col md:flex-row justify-between items-center hover:bg-secondary rounded-xl cursor-pointer"
              >
                <div className="flex gap-4 flex-col md:flex-row ">
                  <motion.div layoutId={`image-${card.title}-${id}`}>
                    <Image
                      width={100}
                      height={100}
                      src={card.src}
                      alt={card.title}
                      className="h-28 w-28 md:h-14 md:w-14 mx-auto rounded-full object-cover object-top"
                    />
                  </motion.div>
                  <div>
                    <motion.h3
                      layoutId={`title-${card.title}-${id}`}
                      className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                    >
                      {card.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${card.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                    >
                      {card.description}
                    </motion.p>
                  </div>
                </div>
                <motion.button
                  layoutId={`button-${card.title}-${id}`}
                  className="px-4 py-2 text-sm rounded-full font-bold bg-primary hover:bg-primary/40 text-secondary dark:text-secondary-foreground mt-4 md:mt-0"
                >
                  See more
                </motion.button>
              </motion.div>
              {card !== cards[cards.length - 1] && (
                <Separator className="my-4 h-px w-full bg-accent" />
              )}
            </React.Fragment>
          ))}
        </ul>
      </BlurFade>
    </>
  );
}
