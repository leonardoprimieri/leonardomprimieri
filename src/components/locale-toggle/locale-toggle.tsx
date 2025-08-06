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
        <button 
          onClick={handleToggle} 
          data-testid="us-toggle-language"
          className="h-full w-full flex items-center justify-center absolute inset-0 cursor-pointer bg-transparent border-none outline-none"
        >
          <span className="flag flag-xs flag-country-us mb-[2px] pointer-events-none" />
        </button>
      ) : (
        <button 
          onClick={handleToggle} 
          data-testid="br-toggle-language"
          className="h-full w-full flex items-center justify-center absolute inset-0 cursor-pointer bg-transparent border-none outline-none"
        >
          <span className="flag flag-xs flag-country-br mb-[2px] pointer-events-none" />
        </button>
      )}
    </>
  );
}
