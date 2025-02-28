import { PropsWithChildren } from "react";
import { cn } from "~/lib/utils";

type Props = PropsWithChildren<{
  className?: string;
}>;

export function SectionTitle({ children, className }: Props) {
  return (
    <h3
      className={cn(
        "text-2xl font-semibold underline font-title mb-4",
        className
      )}
    >
      {children}
    </h3>
  );
}
