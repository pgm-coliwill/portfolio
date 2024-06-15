import React from "react";
import design from "./skills.module.css";

export default function Skills({ name, percent }) {
  const barStyle = {
    width: `${percent}%`
  };

  return (
    <div style={{ margin: "20px 0" }}>
      <div className={design.container}>
        <div className={design.text}>
          <span>{percent}%</span>
          <span>{name}</span>
        </div>
        <div className={design.bar} style={barStyle}></div>
      </div>
    </div>
  );
}