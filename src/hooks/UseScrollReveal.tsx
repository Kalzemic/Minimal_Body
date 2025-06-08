// hooks/useScrollReveal.ts
import { useEffect } from "react";

export const useScrollReveal = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    } else {
                        entry.target.classList.remove("visible");
                    }
                });
            },
            {
                threshold: 0.2,
                rootMargin: "0px 0px -10% 0px",
            }
        );

        const elements = document.querySelectorAll(".scroll-reveal");
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);
};
