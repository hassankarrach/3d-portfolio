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
import Footer from "./Footer";
import Demo from "./demo/demo";

function Main() {
  //Context
  const { setCurrentSection } = useContext(StateContext);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const sectionNames = ["Hero", "AboutMe", "Skills", "Projects"];

  const MainContainer = useRef<HTMLDivElement>(null);
  const sectionRefs = {
    Hero: useRef(undefined),
    AboutMe: useRef(undefined),
    Skills: useRef(undefined),
    Projects: useRef(undefined),
  };

  const handleIntersection = (index: any, entries: any) => {
    entries.forEach((entry: any) => {
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
      const sectionRef =
        sectionRefs[sectionName as keyof typeof sectionRefs].current;

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
      <div className="Experiance_container">
        <div className="Experiance">
          <div className="SvgMask">
            <div className="TopMask" />
          </div>
          <Experiance />
        </div>
      </div>

      <div className="Content" ref = {MainContainer}>
        <Hero ref={sectionRefs.Hero} />
        <SkillsTitles ref={MainContainer} />
        <AboutMe ref={sectionRefs.AboutMe} ref2={MainContainer}/>
        <Demo/>
        <Skills ref={sectionRefs.Skills} />
        <Projects ref={sectionRefs.Projects} />
        <Footer />
      </div>
    </StyledMain>
  );
}

export default Main;
