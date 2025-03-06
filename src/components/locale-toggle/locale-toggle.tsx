"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { i18n, Locale } from "../../../i18n-config";
import { Button } from "../ui/button";
import { BrazilFlagIcon } from "~/icons/brazil-flag-icon";
import { USAFlagIcon } from "~/icons/usa-flag-icon";

export function LocaleToggle() {
  const pathname = usePathname();
  const router = useRouter();

  const getCurrentLocale = (): Locale => {
    if (!pathname) return i18n.defaultLocale;
    const segments = pathname.split("/");
    return (segments[1] as Locale) || i18n.defaultLocale;
  };

  const currentLocale = getCurrentLocale();

  const getNextLocale = (): Locale => {
    return currentLocale === "en" ? "ptBR" : "en";
  };

  const getRedirectedPathname = (locale: Locale): string => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const handleToggle = () => {
    const nextLocale = getNextLocale();
    router.push(getRedirectedPathname(nextLocale));
  };

  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className="px-2 rounded-full"
      onClick={handleToggle}
      aria-label={`Switch to ${
        getNextLocale() === "en" ? "English" : "Portuguese"
      }`}
    >
      {getNextLocale() === "en" ? <BrazilFlagIcon /> : <USAFlagIcon />}
    </Button>
  );
}
