import React, { useContext, forwardRef } from "react";
import { StyledHero } from "./StyledHero";
import { StateContext } from "../../../context/CameraContext";
import { CameraAnimate } from "../../Experiance/animations";
import { FaArrowRight } from "react-icons/fa";

const Hero = forwardRef((props, ref: any) => {
  const { CameraRef, isCameraAnimating } = useContext(StateContext);


  const ForwarderToLinkedin = () => {
    window.open("https://www.linkedin.com/in/hassankarrach/");
  }

  return (
    <StyledHero ref={ref}>
      <div className="Title">
        <h1>
          Hi, My name is <br /> HASSAN KARRACH
        </h1>
        <h2>I love creating beautiful user experiences.</h2>
      </div>

      <button className="GetInTouch" onClick={ForwarderToLinkedin}>
        <span>Get In Touch</span>
        <FaArrowRight className="ArrowIcon"/>
      </button>
    </StyledHero>
  );
});

export default Hero;
