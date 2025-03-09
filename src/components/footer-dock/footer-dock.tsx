import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconHome,
} from "@tabler/icons-react";
import { FloatingDock } from "../ui/floating-dock";
import { LocaleToggle } from "../locale-toggle/locale-toggle";
import { ThemeToggle } from "../theme/theme-toggle";

export function FooterDock() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/leonardoprimieri/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/leonardoprimieri",
    },
    {
      title: "WhatsApp",
      icon: (
        <IconBrandWhatsapp className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://wa.me/54996577804",
    },
    {
      title: "Change Theme",
      icon: <ThemeToggle />,
    },
    {
      title: "Change Language",
      icon: <LocaleToggle />,
    },
  ];
  return (
    <div className="flex items-center justify-center w-full">
      <FloatingDock items={links} />
    </div>
  );
}
