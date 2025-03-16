"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { i18n, Locale } from "../../../i18n-config";

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
    return currentLocale === "en" ? "pt-br" : "en";
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
    <>
      {getNextLocale() !== "en" ? (
        <button onClick={handleToggle} data-testid="us-toggle-language">
          <span className="flag flag-xs flag-country-us mb-[2px]" />
        </button>
      ) : (
        <button onClick={handleToggle} data-testid="br-toggle-language">
          <span className="flag flag-xs flag-country-br mb-[2px]" />
        </button>
      )}
    </>
  );
}
