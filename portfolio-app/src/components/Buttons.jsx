import React from "react";
import design from "./buttons.module.css";

export function HeroButtons({ buttonText, sectionId }) {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      className={design.heroButton}
      onClick={() => scrollToSection(sectionId)}
    >
      {buttonText}
    </button>
  );
}
