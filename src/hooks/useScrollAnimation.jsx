import { useEffect } from "react";

function useScrollAnimation(ref) {
  useEffect(() => {
    const children = ref.current.children;
    Array.from(children).forEach((child) => {
      if (child) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          },
          { threshold: 0.2 }
        );
        observer.observe(child);
        return () => {
          observer.disconnect();
        };
      }
    });
  }, []);
}

export default useScrollAnimation;
