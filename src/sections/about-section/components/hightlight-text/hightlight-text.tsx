import { PropsWithChildren } from "react";
import { cn } from "~/lib/utils";

type Props = {
  className?: string;
} & PropsWithChildren;

export function HightLightText({ children, className }: Props) {
  return (
    <strong
      className={cn(
        "text-primary font-bold underline underline-offset-2",
        className
      )}
    >
      {children}
    </strong>
  );
}
