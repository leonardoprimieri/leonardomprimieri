"use client";

import { useState } from "react";
import { Download, FileText, Loader2 } from "lucide-react";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { downloadCV, validateCVExists } from "./services/cv-download.service";
import { getDictionary } from "~/helpers/get-dictionaries";

interface CVDownloadButtonProps {
  className?: string;
  dictionary: Awaited<ReturnType<typeof getDictionary>>["cv-download"];
}

export function CVDownloadButton({
  className,
  dictionary,
}: CVDownloadButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  if (!validateCVExists()) return null;

  const handleDownload = async () => {
    setIsLoading(true);

    try {
      await downloadCV();
    } catch (error) {
      console.error("Download failed:", error);
    } finally {
      setTimeout(() => setIsLoading(false), 1000);
    }
  };

  return (
    <div
      className={cn(
        "fixed top-6 right-4 z-50",
        "md:bottom-8 md:right-8 md:left-auto md:top-auto md:translate-x-0",
        className
      )}
    >
      <Button
        onClick={handleDownload}
        disabled={isLoading}
        size="lg"
        className={cn(
          "group relative overflow-hidden",
          "shadow-lg hover:shadow-xl transition-all duration-300",
          "border border-primary/20",
          "bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90",
          "rounded-full px-6 py-3",
          "hover:scale-105 active:scale-95",
          "hover:shadow-primary/25 hover:shadow-2xl",
          "disabled:opacity-80 disabled:cursor-not-allowed disabled:hover:scale-100"
        )}
      >
        {!isLoading && (
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-1000" />
        )}

        {/* Show icons only on desktop */}
        {isLoading ? (
          <Loader2 className="w-5 h-5 mr-2 animate-spin hidden md:block" />
        ) : (
          <FileText className="w-5 h-5 mr-2 transition-transform group-hover:rotate-12 hidden md:block" />
        )}

        <span className="font-semibold tracking-wide">
          {isLoading ? dictionary.downloading : dictionary.button}
        </span>

        {!isLoading && (
          <Download className="w-4 h-4 ml-2 transition-transform group-hover:translate-y-0.5 hidden md:block" />
        )}
      </Button>
    </div>
  );
}
