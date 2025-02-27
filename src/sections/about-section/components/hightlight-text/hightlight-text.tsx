import { PropsWithChildren } from "react";

export function HightLightText({ children }: PropsWithChildren) {
  return (
    <strong className="text-primary font-bold underline underline-offset-2">
      {children}
    </strong>
  );
}
