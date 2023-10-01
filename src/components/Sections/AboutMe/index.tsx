import React, { useContext, useEffect, useRef } from "react";
import { StyledAboutMe } from "./StyledAboutMe";
import { StateContext } from "../../../context/CameraContext";
//GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const index = React.forwardRef((props, ref: any) => {
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
      },
      rotation: 360,
      ease: "none",
    });
  }, []);
  return (
    <StyledAboutMe ref={ref}>
      <div className="Intro">
        <h1 className="Title">About Me</h1>
        <img className="IntroPhoto" src={"./Photos/Profile.jpg"} />
        <span className="IntroText">
          Hi there!
          <br /> I'm a 23 years old web developer and Graphic Designer located
          in Casablanca, Morocco. My affection towards coding started in high
          school, where I wrote my first lines of JavaScript. Apart from
          programming, I'm into reading books, traveling, and amateur
          photography. I've also got interested in blockchain and smart contract
          coding on the Ethereum.
        </span>

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

export default index;
