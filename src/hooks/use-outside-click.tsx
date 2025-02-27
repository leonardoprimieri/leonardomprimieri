/* eslint-disable @typescript-eslint/no-explicit-any */
import { RefObject, useEffect } from "react";

export const useOutsideClick = (
  ref: RefObject<HTMLDivElement | null>,
  callback: (event: any) => void
) => {
  useEffect(() => {
    const listener = (event: any) => {
      // DO NOTHING if the element being clicked is the target element or their children
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};
