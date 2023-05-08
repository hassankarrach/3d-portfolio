import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useContext,
} from "react";
import { StyledMain } from "./StyledMain";
import AboutMe from "./AboutMe/index";
import Hero from "./Hero/index";
import Skills from "./Skills/index";
import Projects from "./Projects/index";
//experiance
import Experiance from "../Experiance/Experiance";
//Context
import { StateContext } from "../../context/CameraContext";

function Main() {
  //Context
  const { setCurrentSection } = useContext(StateContext);
  //Stats
  const [activeSection, setActiveSection] = useState(1);
  const containerRef = useRef();

  const handleScroll = useCallback(() => {
    const currentPosition = containerRef.current.scrollTop;
    const sections = containerRef.current.children;

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionBottom = sectionTop + sectionHeight;

      if (currentPosition >= sectionTop && currentPosition < sectionBottom) {
        setActiveSection(i + 1);
        break;
      }
    }
  }, []);

  useEffect(() => {
    setCurrentSection(activeSection);
  }, [activeSection]);

  return (
    <StyledMain>
      <div className="Experiance">
        <Experiance />
      </div>

      <div className="Content" ref={containerRef} onScroll={handleScroll}>
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
      </div>
    </StyledMain>
  );
}

export default Main;
