import reactLogo from "./assets/react.svg";
import "./App.css";
import Experiance from "./components/Experiance/Experiance";
import Main from "./components/Sections/Main";
import Loader from "./components/Loader/Loader";
import {
  Suspense,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { StateContext } from "./context/CameraContext";
import Hero from "./components/Sections/Hero";
import SkillsTitles from "./components/Sections/IntroTitles";
import AboutMe from "./components/Sections/AboutMe";
import Skills from "./components/Sections/Skills";

function App() {
  //Context
  const { setCurrentSection } = useContext(StateContext);
  //Stats
  const [activeSection, setActiveSection] = useState<number>(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (containerRef.current !== null) {
      const currentPosition = containerRef.current.scrollTop;
      const sections = containerRef.current.children;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i] as HTMLElement;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          currentPosition >= sectionTop &&
          currentPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(i + 1);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    setCurrentSection(activeSection);
  }, [activeSection, setCurrentSection]);

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
