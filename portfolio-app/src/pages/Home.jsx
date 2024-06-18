import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import design from "./home.module.css";
import { HeroButtons } from "../components/Buttons";
import { GET_ALL_SKILLS, GET_ALL_SERVICES } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import Skills from "../components/Skills";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import ContactForm from "../components/ContactForm";

export default function Home() {
  const {
    data: skillsData,
    loading: skillsLoading,
    error: skillsError,
  } = useQuery(GET_ALL_SKILLS);
  const {
    data: servicesData,
    loading: servicesLoading,
    error: servicesError,
  } = useQuery(GET_ALL_SERVICES);

  const [setSkillsNode, skillsEntry] = useIntersectionObserver({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  const [setServicesNode, servicesEntry] = useIntersectionObserver({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  useEffect(() => {
    if (skillsEntry && skillsEntry.isIntersecting) {
      // Add any logic to be executed when skills section is intersecting
    }
  }, [skillsEntry]);

  useEffect(() => {
    if (servicesEntry && servicesEntry.isIntersecting) {
      // Add any logic to be executed when services section is intersecting
    }
  }, [servicesEntry]);

  if (skillsLoading || servicesLoading) return <p>Loading...</p>;
  if (skillsError || servicesError) return <p>Error</p>;
  if (!skillsData || !servicesData) return <p>No data</p>;

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };
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
          <div
            className={design.arrowContainer}
            onClick={() => scrollToSection("projectsSection")}
          >
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
            <HeroButtons buttonText="My projects" sectionId="projectsSection" />
            <HeroButtons buttonText="Get in Touch" sectionId="contactSection" />
          </div>
        </div>
      </section>

      <section id="projectsSection" className={design.projectsSection}>
        <div className={design.projectGridOne}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-2 -1.5 24 24"
              width="28"
              fill="currentColor"
            >
              <path d="M10 20.565c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10z"></path>
            </svg>
            <NavLink
              to="https://github.com/Bordercolin/studio_clean"
              target="_blank"
            >
              <h2>Studio Clean</h2>
            </NavLink>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-2 -1.5 24 24"
              width="28"
              fill="currentColor"
            >
              <path d="M10 20.565c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10z"></path>
            </svg>
            <NavLink
              to="https://github.com/Bordercolin/Space_invaders"
              target="_blank"
            >
              <h2>Space Invaders</h2>
            </NavLink>
          </div>
        </div>
        <div className={design.projectGridTwo}>
          <div className={design.projectGridTwoProject}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-2 -1.5 24 24"
              width="28"
              fill="currentColor"
            >
              <path d="M10 20.565c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10z"></path>
            </svg>
            <NavLink
              to="https://github.com/Bordercolin/Wings_of_Belgium"
              target="_blank"
            >
              <h2>Wings of Belgium</h2>
            </NavLink>
          </div>
          <div className={design.projectGridTitle}>
            <NavLink to="https://github.com/Bordercolin" target="_blank">
              <p className={design.projectsTitle}>my projects</p>
            </NavLink>
          </div>
        </div>
      </section>

      <section id="skillsSection" ref={setSkillsNode}>
        <h2 className={design.sectionTitle}>skills</h2>
        <div className={design.skillsContainer}>
          {skillsData.skills.map((skill, index) => (
            <Skills key={index} name={skill.name} percent={skill.percent} />
          ))}
        </div>
        <div className={design.skillsTextContainer}>
          <p className={design.skillsText}>
            I am still a student. So I am going to see a lot more technologies
            next year.
          </p>
        </div>
      </section>

      <section
        id="servicesSection"
        className={design.serviceSection}
        ref={setServicesNode}
      >
        <h2 className={design.sectionTitle}>services</h2>

        <div className={design.serviceWrapper}>
          {servicesData.services.map((service, index) => (
            <div key={index} className={design.serviceContainer}>
              <h2 className={design.serviceTitle}>{service.title}</h2>
              <div className={design.serviceDetails}>
                <p className={design.serviceDetailText}>
                  {service.description}
                </p>

                <div className={design.serviceDetailGrid}>
                  {service.details.map((detail, index) => (
                    <p key={index}>{detail}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contactSection" className={design.contactSection}>
        <h2 className={design.sectionTitle}>contact me</h2>

        <div className={design.contactWrapper}>
          <div className={design.pictureContainer}>
            <img src="/images/foto-portfolio.jpg" alt="Profile" />
          </div>

          <div className={design.navLinkContainer}>
            <NavLink
              to="https://github.com/Bordercolin"
              target="_blank"
              className={design.navLink}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-2 -2 24 24"
                width="28"
                fill="currentColor"
              >
                <path d="M18.88 1.099C18.147.366 17.265 0 16.233 0H3.746C2.714 0 1.832.366 1.099 1.099.366 1.832 0 2.714 0 3.746v12.487c0 1.032.366 1.914 1.099 2.647.733.733 1.615 1.099 2.647 1.099H6.66c.19 0 .333-.007.429-.02a.504.504 0 0 0 .286-.169c.095-.1.143-.245.143-.435l-.007-.885c-.004-.564-.006-1.01-.006-1.34l-.3.052c-.19.035-.43.05-.721.046a5.555 5.555 0 0 1-.904-.091 2.026 2.026 0 0 1-.872-.39 1.651 1.651 0 0 1-.572-.8l-.13-.3a3.25 3.25 0 0 0-.41-.663c-.186-.243-.375-.407-.566-.494l-.09-.065a.956.956 0 0 1-.17-.156.723.723 0 0 1-.117-.182c-.026-.061-.004-.111.065-.15.07-.04.195-.059.378-.059l.26.04c.173.034.388.138.643.311a2.1 2.1 0 0 1 .631.677c.2.355.44.626.722.813.282.186.566.28.852.28.286 0 .533-.022.742-.065a2.59 2.59 0 0 0 .585-.196c.078-.58.29-1.028.637-1.34a8.907 8.907 0 0 1-1.333-.234 5.314 5.314 0 0 1-1.223-.507 3.5 3.5 0 0 1-1.047-.872c-.277-.347-.505-.802-.683-1.365-.177-.564-.266-1.215-.266-1.952 0-1.049.342-1.942 1.027-2.68-.32-.788-.29-1.673.091-2.652.252-.079.625-.02 1.119.175.494.195.856.362 1.086.5.23.14.414.257.553.352a9.233 9.233 0 0 1 2.497-.338c.859 0 1.691.113 2.498.338l.494-.312a6.997 6.997 0 0 1 1.197-.572c.46-.174.81-.221 1.054-.143.39.98.424 1.864.103 2.653.685.737 1.028 1.63 1.028 2.68 0 .737-.089 1.39-.267 1.957-.177.568-.407 1.023-.689 1.366-.282.343-.633.63-1.053.865-.42.234-.828.403-1.223.507a8.9 8.9 0 0 1-1.333.235c.45.39.676 1.005.676 1.846v3.11c0 .147.021.266.065.357a.36.36 0 0 0 .208.189c.096.034.18.056.254.064.074.01.18.013.318.013h2.914c1.032 0 1.914-.366 2.647-1.099.732-.732 1.099-1.615 1.099-2.647V3.746c0-1.032-.367-1.914-1.1-2.647z"></path>
              </svg>
            </NavLink>
            <NavLink
              to="https://www.linkedin.com/in/colin-willems-2bb071292/"
              target="_blank"
              className={design.navLink}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-2 -2 24 24"
                width="28"
                fill="currentColor"
              >
                <path d="M19.959 11.719v7.379h-4.278v-6.885c0-1.73-.619-2.91-2.167-2.91-1.182 0-1.886.796-2.195 1.565-.113.275-.142.658-.142 1.043v7.187h-4.28s.058-11.66 0-12.869h4.28v1.824l-.028.042h.028v-.042c.568-.875 1.583-2.126 3.856-2.126 2.815 0 4.926 1.84 4.926 5.792zM2.421.026C.958.026 0 .986 0 2.249c0 1.235.93 2.224 2.365 2.224h.028c1.493 0 2.42-.989 2.42-2.224C4.787.986 3.887.026 2.422.026zM.254 19.098h4.278V6.229H.254v12.869z"></path>
              </svg>
            </NavLink>
            <NavLink
              to="https://www.facebook.com/colin.willems.98"
              target="_blank"
              className={design.navLink}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-7 -2 24 24"
                width="28"
                fill="currentColor"
              >
                <path d="M2.046 3.865v2.748H.032v3.36h2.014v9.986H6.18V9.974h2.775s.26-1.611.386-3.373H6.197V4.303c0-.343.45-.805.896-.805h2.254V0H6.283c-4.34 0-4.237 3.363-4.237 3.865z"></path>
              </svg>
            </NavLink>
            <NavLink
              to="https://www.instagram.com/colin_willems/"
              target="_blank"
              className={design.navLink}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-2 -2 24 24"
                width="28"
                fill="currentColor"
              >
                <path d="M14.017 0h-8.07A5.954 5.954 0 0 0 0 5.948v8.07a5.954 5.954 0 0 0 5.948 5.947h8.07a5.954 5.954 0 0 0 5.947-5.948v-8.07A5.954 5.954 0 0 0 14.017 0zm3.94 14.017a3.94 3.94 0 0 1-3.94 3.94h-8.07a3.94 3.94 0 0 1-3.939-3.94v-8.07a3.94 3.94 0 0 1 3.94-3.939h8.07a3.94 3.94 0 0 1 3.939 3.94v8.07z"></path>
                <path d="M9.982 4.819A5.17 5.17 0 0 0 4.82 9.982a5.17 5.17 0 0 0 5.163 5.164 5.17 5.17 0 0 0 5.164-5.164A5.17 5.17 0 0 0 9.982 4.82zm0 8.319a3.155 3.155 0 1 1 0-6.31 3.155 3.155 0 0 1 0 6.31z"></path>
                <circle cx="15.156" cy="4.858" r="1.237"></circle>
              </svg>
            </NavLink>
          </div>

          <div className={design.profileTextContainer}>
            <p className={design.profileText}>
              I am a Belgium based programming student with a passion for
              becoming a full-stack developer. I am seeking an internship
              opportunity to apply my skills and gain hands-on experience in
              both front-end and back-end development. Eager to learn and
              contribute, I am ready to take on new challenges and grow in a
              dynamic environment.
            </p>
          </div>
        </div>

        <ContactForm />
      </section>
    </>
  );
}
