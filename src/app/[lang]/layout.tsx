import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "~/components/theme/theme-provider";
import { PostHogProvider } from "~/providers/posthog-provider";
import { ReactQueryProvider } from "~/providers/react-query-provider";
import { Toaster } from "~/components/ui/sonner";
import { CVDownloadButton } from "~/components/cv-download-button/cv-download-button";
import { getDictionary } from "~/helpers/get-dictionaries";
import { Locale } from "../../../i18n-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leonardo Merlo Primieri",
  description: "Leonardo Merlo Primieri's personal website",
};

export default async function Root(props: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const params = await props.params;
  const dictionary = await getDictionary(params.lang);

  return (
    <html lang={params.lang} suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/core@1.1.1/dist/css/tabler-flags.min.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${inter.variable} font-sans antialiased max-w-6xl p-12 mx-auto`}
      >
        <ReactQueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <PostHogProvider>
              <main>{props.children}</main>
              <CVDownloadButton dictionary={dictionary["cv-download"]} />
            </PostHogProvider>
            <Toaster />
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
