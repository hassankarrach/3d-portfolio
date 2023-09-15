import React, { useEffect, useState, useRef, useContext } from "react";
import { StyledMain } from "./StyledMain";
import AboutMe from "./AboutMe/index";
import Hero from "./Hero/index";
import Skills from "./Skills/index";
import Projects from "./Projects/index";
import SkillsTitles from "./IntroTitles";
import Experiance from "../Experiance/Experiance";
//Context
import { StateContext } from "../../context/CameraContext";

function Main() {
  //Context
  const { setCurrentSection } = useContext(StateContext);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const sectionNames = ["Hero", "AboutMe", "Skills", "Projects"];

  const sectionRefs = {
    Hero: useRef(),
    AboutMe: useRef(),
    Skills: useRef(),
    Projects: useRef(),
  };

  const handleIntersection = (index, entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setCurrentSectionIndex(index);
        setCurrentSection(index + 1);
      }
    });
  };

  useEffect(() => {
    const observerOptions = {
      root: null, // Use the viewport as the root
      threshold: 0.7, // 70% of the section needs to be visible
    };

    for (let index = 0; index < sectionNames.length; index++) {
      const sectionName = sectionNames[index];
      const sectionRef = sectionRefs[sectionName].current;

      const observer = new IntersectionObserver((entries) => {
        handleIntersection(index, entries);
      }, observerOptions);

      if (sectionRef) {
        observer.observe(sectionRef);
      }
    }
  }, []);

  return (
    <StyledMain>
      <div className="Experiance">
        <span className="Prev">{currentSectionIndex + 1}</span>
        <Experiance />
      </div>

      <div className="Content">
        <Hero ref={sectionRefs.Hero} />
        <SkillsTitles />
        <AboutMe ref={sectionRefs.AboutMe} />
        <Skills ref={sectionRefs.Skills} />
        <Projects ref={sectionRefs.Projects} />
      </div>
    </StyledMain>
  );
}

export default Main;
