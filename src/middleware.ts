import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n, type Locale } from "../i18n-config";

// Cache for parsed accept-language headers to avoid repeated processing
const localeCache = new Map<string, Locale>();

function getLocale(request: NextRequest): Locale {
  const acceptLanguage = request.headers.get('accept-language') || '';
  
  // Check cache first
  if (localeCache.has(acceptLanguage)) {
    return localeCache.get(acceptLanguage)!;
  }

  let detectedLocale: Locale = i18n.defaultLocale;

  try {
    // Fast locale detection without heavy libraries
    if (acceptLanguage) {
      // Parse accept-language header manually for better performance
      const languages = acceptLanguage
        .split(',')
        .map(lang => {
          const parts = lang.trim().split(';');
          const locale = parts[0].toLowerCase();
          const quality = parts[1] ? parseFloat(parts[1].split('=')[1]) : 1;
          return { locale, quality };
        })
        .sort((a, b) => b.quality - a.quality);

      // Find first matching locale
      for (const lang of languages) {
        // Direct match
        if (i18n.locales.includes(lang.locale as Locale)) {
          detectedLocale = lang.locale as Locale;
          break;
        }
        
        // Language code match (en for en-US)
        const langCode = lang.locale.split('-')[0];
        const matchingLocale = i18n.locales.find(locale => locale.startsWith(langCode));
        if (matchingLocale) {
          detectedLocale = matchingLocale;
          break;
        }
      }
    }
  } catch {
    // Fallback to default locale on any error
    detectedLocale = i18n.defaultLocale;
  }

  // Cache the result (limit cache size to prevent memory leaks)
  if (localeCache.size > 100) {
    const firstKey = localeCache.keys().next().value;
    if (firstKey) {
      localeCache.delete(firstKey);
    }
  }
  localeCache.set(acceptLanguage, detectedLocale);

  return detectedLocale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Fast path: skip processing for static assets and API routes
  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/') ||
    pathname.includes('.') // Skip files with extensions (images, fonts, etc.)
  ) {
    return;
  }

  // Additional static files to skip
  const staticFiles = [
    "/manifest.json",
    "/favicon.ico", 
    "/resume_leonardo_primieri.pdf", // cSpell:disable-line
    "/robots.txt",
    "/sitemap.xml"
  ];
  
  if (staticFiles.includes(pathname)) {
    return;
  }

  // Fast locale check using startsWith for better performance
  let pathnameHasLocale = false;
  for (const locale of i18n.locales) {
    if (pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)) {
      pathnameHasLocale = true;
      break;
    }
  }

  // Only redirect if no locale is present in the path
  if (!pathnameHasLocale) {
    const locale = getLocale(request);
    
    // Construct redirect URL more efficiently
    const redirectPath = pathname === '/' ? `/${locale}` : `/${locale}${pathname}`;
    
    const response = NextResponse.redirect(new URL(redirectPath, request.url));
    
    // Add cache headers for better performance
    response.headers.set('Cache-Control', 'no-cache');
    
    return response;
  }
}

export const config = {
  // Optimized matcher to exclude more static assets for better performance
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - *.png, *.jpg, *.jpeg, *.gif, *.svg, *.webp (image files)
     * - *.css, *.js (static assets)
     * - *.ico, *.ttf, *.otf, *.woff, *.woff2 (fonts and icons)
     * - manifest.json, robots.txt, sitemap.xml (static files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|manifest.json|robots.txt|sitemap.xml|.*\\.[css|js|png|jpg|jpeg|gif|svg|webp|ico|ttf|otf|woff|woff2]$).*)',
  ],
};
