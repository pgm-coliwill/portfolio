import React, { useEffect, useRef } from "react";
import design from "./skills.module.css";

export default function Skills({ name, percent }) {
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.width = `${percent}%`;
            entry.target.style.transition = "width 1s ease-in-out";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current);
      }
    };
  }, [percent]);

  return (
    <div className={design.container}>
      <div className={design.text}>
        <span>{name}</span>
        <span>{percent}%</span>
      </div>
      <div className={design.bar} ref={barRef}></div>
    </div>
  );
}
