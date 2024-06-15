import React from "react";
import design from "./home.module.css";
import { HeroButtons } from "../components/Buttons";

export default function Home() {
  return (
    <>
      <section className={design.hero}>
        <video
          autoPlay
          className={design.videoBackground}
          loop
          muted
          playsInline
          src="/video/smoke_background.mp4"
        ></video>
        <div className={design.flexBoxColumn}>
          <h1 className={design.title}>
            colin willems <br /> <span>full stack</span> developer
          </h1>

          <div className={design.titleInfoContainer}>
            <p className={design.titleInfo}>
              An aspiring fullstack developer with a relentless pursuit of
              innovation, I aim to push the boundaries of what's possible in web
              and application development.
            </p>
          </div>
          <div className={design.arrowContainer}>
            <svg
              className={design.arrow}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-5 -4.5 24 24"
              width="28"
              fill="#93BBBB"
            >
              <path d="M8 11.243l3.95-3.95a1 1 0 1 1 1.414 1.414l-5.657 5.657a.997.997 0 0 1-1.414 0L.636 8.707A1 1 0 1 1 2.05 7.293L6 11.243V1.657a1 1 0 1 1 2 0v9.586z"></path>
            </svg>
          </div>
          <div className={design.buttonsContainer}>
            <HeroButtons buttonText="My projects" />
            <HeroButtons buttonText="Get in Touch" />
          </div>
        </div>
      </section>

      <section className={design.projectsSection}>
        <div className={design.projectGridOne}>
          <div className={design.one}>hello</div>
          <div className={design.two}>hello</div>
        </div>
        <div className={design.projectGridTwo}>
          <div className={design.three}>hello</div>
          <div className={design.four}>hello</div>
        </div>
      </section>
    </>
  );
}
