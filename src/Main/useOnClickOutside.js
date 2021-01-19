import { useEffect } from "react";

export default function useOnClickOutside(ref, handler) {

  useEffect(
    () => {
      const listener = event => {

        if (ref.current && !ref.current.contains(event.target)) {
          return handler();
        }
      };

      // Bind the event listener
      document.addEventListener("mousedown", listener);

      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", listener);
      };
    },
    [ref, handler]
  );
}
