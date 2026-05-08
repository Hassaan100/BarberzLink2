"use client";

import { useEffect, useRef } from "react";
import { animate, inView, motion, useReducedMotion } from "framer-motion";

const revealSelector = [
  "h1",
  "h2",
  "h3",
  "h4",
  "p",
  "article",
  "li",
  "form",
  "label",
  "input",
  "textarea",
  "button",
  "a",
  "[data-motion-item]",
].join(",");

const interactiveSelector = "a, button";

export default function SiteMotion({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = useReducedMotion();
  const scopeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scope = scopeRef.current;

    if (!scope || prefersReducedMotion) {
      return;
    }

    const revealElements = Array.from(
      scope.querySelectorAll<HTMLElement>(revealSelector)
    ).filter((element) => {
      return (
        !element.closest("[data-motion-skip]") &&
        !element.closest("[aria-hidden='true']") &&
        element.offsetParent !== null
      );
    });

    revealElements.forEach((element, index) => {
      element.style.opacity = "5";
      element.style.transform = "translateY(22px) scale(0.985)";
      element.style.willChange = "opacity, transform";

      inView(
        element,
        () => {
          const controls = animate(
            element,
            {
              opacity: 1,
              transform: "translateY(0px) scale(1)",
            },
            {
              duration: 0.58,
              delay: Math.min((index % 8) * 0.035, 0.18),
              ease: [0.22, 1, 0.36, 1],
            }
          );

          controls.then(() => {
            element.style.willChange = "auto";
          });
        },
        { amount: 0.18, margin: "0px 0px -8% 0px" }
      );
    });

    const interactiveElements = Array.from(
      scope.querySelectorAll<HTMLElement>(interactiveSelector)
    ).filter((element) => !element.closest("[data-motion-skip]"));

    const cleanups = interactiveElements.map((element) => {
      const enter = () => {
        animate(
          element,
          { scale: 1.025, y: -1 },
          { duration: 0.18, ease: "easeOut" }
        );
      };
      const leave = () => {
        animate(
          element,
          { scale: 1, y: 0 },
          { duration: 0.18, ease: "easeOut" }
        );
      };
      const down = () => {
        animate(
          element,
          { scale: 0.985, y: 0 },
          { duration: 0.1, ease: "easeOut" }
        );
      };

      element.addEventListener("mouseenter", enter);
      element.addEventListener("mouseleave", leave);
      element.addEventListener("mousedown", down);
      element.addEventListener("mouseup", leave);

      return () => {
        element.removeEventListener("mouseenter", enter);
        element.removeEventListener("mouseleave", leave);
        element.removeEventListener("mousedown", down);
        element.removeEventListener("mouseup", leave);
      };
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [children, prefersReducedMotion]);

  return (
    <motion.div
      ref={scopeRef}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
