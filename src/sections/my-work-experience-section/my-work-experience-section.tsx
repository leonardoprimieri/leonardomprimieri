"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "~/hooks/use-outside-click";
import { HightLightText } from "../about-section/components/hightlight-text/hightlight-text";
import { BlurFade } from "~/components/magicui/blur-fade";
import { BLUR_FADE_BASE_DELAY } from "~/constants/blur-fade-base-delay.const";
import { SectionTitle } from "~/components/section-title/section-title";
import { Separator } from "~/components/ui/separator";

export function MyWorkExperienceSection() {
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
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
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
                        width={200}
                        height={200}
                        src={active.src}
                        alt={active.title}
                        className="h-32 w-32 rounded-full object-cover"
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
      <BlurFade delay={BLUR_FADE_BASE_DELAY * 5} inView>
        <SectionTitle>My Work Experience</SectionTitle>
        <ul className="w-full gap-4">
          {cards.map((card) => (
            <>
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
                      className="h-40 w-40 md:h-14 md:w-14 mx-auto rounded-lg object-cover object-top"
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
                <Separator className="my-4" />
              )}
            </>
          ))}
        </ul>
      </BlurFade>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
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
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Mar 2023 - Present · 2 yrs",
    title: "Wine Locals",
    src: "/companies-logos/wine-locals.jpg",
    content: () => {
      return (
        <section className="text-pretty text-sm text-muted-foreground">
          <div>
            <p>
              Responsible for maintaining and developing new features on{" "}
              <a
                href="https://www.wine-locals.com/"
                target="_blank"
                rel="noopener"
              >
                <HightLightText>Wine Locals</HightLightText>
              </a>{" "}
              and{" "}
              <a
                href="https://www.vivaors.com.br/"
                target="_blank"
                rel="noopener"
              >
                <HightLightText>Viva o RS</HightLightText>
              </a>
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mt-2">
              Technical Accomplishments:
            </h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Improved page SEO and performance</li>
              <li>
                Refactored HTTP calls to use react-query and implement caching
              </li>
              <li>
                Refactored forms using react-hook-form to simplify validation
                and field manipulation
              </li>
              <li>
                Created profile and authentication/authorization login using
                Next.JS middleware
              </li>
              <li>
                Contributed to creating, designing, and refactoring the purchase
                flow with integrated payment methods (Credit Card and Pix)
              </li>
              <li>Developed a React Native mobile application using Expo</li>
            </ul>
          </div>
        </section>
      );
    },
  },
  {
    description: "Nov 2021 - Apr 2023 · 1 yr 6 mos",
    title: "Softo - DevTeam as a Service",
    src: "/companies-logos/softodev_logo.jpeg",
    content: () => {
      return (
        <section className="text-pretty text-sm text-muted-foreground">
          <div>
            <p>I worked on a few systems within the company, listed below:</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mt-2">
              <a href="https://globalfy.com" target="_blank" rel="noopener">
                <HightLightText>Globalfy</HightLightText>
              </a>
            </h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Virtual card creation</li>
              <li>Debit card creation</li>
              <li>Credit card creation</li>
              <li>Make Wire and ACH transfers</li>
              <li>
                Protect each user action with Authy and QR code through the
                front end
              </li>
              <li>
                List and view transfer receipts, as well as cancel and try to
                redo them
              </li>
              <li>Upload documents for validating the new user account</li>
              <li>
                Administrative panel for creating new members for the Bank
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mt-2">
              Payment Gateway and Platform
            </h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Creation and listing of Coupons, Transfers, Products, Customers,
                Payment Links, Invoices and Subscriptions
              </li>
              <li>
                Maintenance of the Hosted Checkout system, handling credit card
                and information of customers
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mt-2">Design System</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Helped team in the creation of components using Bit.dev and
                ReactJS
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mt-2">
              <a href="https://sof.to/" target="_blank" rel="noopener">
                <HightLightText>Softo Institutional Website</HightLightText>
              </a>
            </h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Blog creation integrated with Strapi</li>
              <li>Creation of screens for publicizing services</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mt-2">Technologies Used</h4>
            <p className="mt-1">
              ReactJS, NextJS, TypeScript, DateFNS, i18N, Redux, RTK Query,
              React Query, React Hook Form, Cypress and Jest
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mt-2">F5 Academy</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Led the creation and development of the project</li>
              <li>Implemented Tailwind, React Hook Form, and Zustand</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mt-2">
              Special Contributions
            </h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Implemented Cypress into CI and CD pipelines</li>
              <li>
                Improved build and CI/CD time by replacing Webpack with Vite
                across all company projects
              </li>
            </ul>
          </div>
        </section>
      );
    },
  },
];
