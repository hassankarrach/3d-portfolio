import React, { useContext, forwardRef } from "react";
import { StyledHero } from "./StyledHero";
import { StateContext } from "../../../context/CameraContext";
import { CameraAnimate } from "../../Experiance/animations";

const Hero = forwardRef((props, ref) => {
  const { CameraRef, isCameraAnimating } = useContext(StateContext);

  return (
    <StyledHero ref={ref}>
      <div className="Title" style={{ cursor: "pointer" }}>
        <h1>
          Hi, My name is <br /> HASSAN KARRACH
        </h1>
        <h2>I love creating beautiful user experiences.</h2>
      </div>

      <button className="GetInTouch">Get in Touch</button>
    </StyledHero>
  );
});

export default Hero;
