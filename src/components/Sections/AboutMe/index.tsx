import React, { useContext, useEffect, useRef } from "react";
import { StyledAboutMe } from "./StyledAboutMe";
import { StateContext } from "../../../context/CameraContext";
//Icons
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
//GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Index = React.forwardRef(({ ref2 }: any, ref: any) => {
  const SpinRef = useRef(null);
  const HeaderContainerImg = useRef(null);

  useEffect(() => {
    const el = SpinRef.current;
    const ImgEl = HeaderContainerImg.current;

    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        scroller: ref2.current,  // Use ref2 as the scroller
      },
      rotation: 360,
      ease: "none",
    });
  }, [ref2]);

  return (
    <StyledAboutMe ref={ref}> 
      <div className="Intro">
        <h1 className="Title">About Me</h1>
        <img className="IntroPhoto" src={"./Photos/Profile.jpg"} />
        <span className="IntroText">
          Hi there!
          <br /> I’m a web developer with a strong focus on building full-stack applications and exploring Web3 and blockchain technologies. My journey has always been about experimenting, learning, and creating digital solutions that connect ideas with technology.
        </span>

        <div className="SocialIcons">
          <a href="https://github.com/hassankarrach" target={"_blank"}>
            <FaGithubSquare className="Icon" size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/hassankarrach/"
            target={"_blank"}
          >
            <FaLinkedin className="Icon" size={20} />
          </a>
        </div>
        <div className="IconHolder">
          <img
            width="180px"
            height="180px"
            src={"./Photos/SpinText.png"}
            className="spinText"
            ref={SpinRef}
            title="hassan karrach logo"
            alt="hassan karrach logo"
          />
          <svg
            className="icon"
            viewBox="0 0 24 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 24V0L0 24H8V48L24 24H16Z" />
          </svg>
        </div>
      </div>
    </StyledAboutMe>
  );
});

export default Index;
