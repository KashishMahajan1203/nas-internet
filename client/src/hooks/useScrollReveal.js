import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls to top on page change, then fades in every [data-reveal] element
// as it enters the screen.
export default function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const elements = document.querySelectorAll("[data-reveal]:not(.is-visible)");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);
}
