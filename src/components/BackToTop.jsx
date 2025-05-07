import { useState, useEffect, useRef } from "react";
import "../styles/backToTop.css";

function BackToTop() {
  const [animate, setAnimate] = useState(false);
  const [visibility, setVisibility] = useState("hidden");
  const backToTopRef = useRef(null);
  const scrollHeight = 600;

  function showBackToTop() {
    if (window.scrollY > scrollHeight && visibility === "hidden") {
      setVisibility("shown");
    } else if (
      window.scrollY <= scrollHeight &&
      visibility === "shown" &&
      !animate
    ) {
      setVisibility("hiding");
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", showBackToTop);

    return () => {
      window.removeEventListener("scroll", showBackToTop);
    };
  }, [visibility, animate]);

  function scrollToTop() {
    console.log("click");
    if (visibility === "shown" && !animate) {
      setAnimate(true);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    const button = backToTopRef.current;

    function handlAnimationEnd(e) {
      console.log(e);
      if (e.animationName === "scrollUp") {
        setAnimate(false);
        if (window.scrollY <= scrollHeight && visibility === "shown") {
          setVisibility("hiding");
        }
      }
      if (e.animationName === "hiding") {
        setVisibility("hidden");
        if (window.scrollY > scrollHeight) setVisibility("shown");
      }
    }

    if (button) {
      button.addEventListener("animationend", handlAnimationEnd);
    }

    return () => {
      if (button) {
        button.removeEventListener("animationend", handlAnimationEnd);
      }
    };
  }, [visibility]);

  console.log([visibility, animate, window.scrollY]);

  return (
    <button
      ref={backToTopRef}
      className={`back-to-top 
        ${animate && "animate"}
        ${
          visibility === "shown"
            ? "show-back-to-top"
            : visibility === "hiding"
            ? "hide-back-to-top"
            : ""
        }`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <div className="arrow"></div>
    </button>
  );
}
export default BackToTop;
