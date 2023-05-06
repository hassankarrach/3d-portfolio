import React, { useContext, useEffect, useRef } from "react";
import { StyledHero } from "./StyledHero";
import { StateContext } from "../../../context/CameraContext";
import { CameraAnimate } from "../../Experiance/animations";

const index = () => {
  const TextRef = useRef();
  const { CameraRef, isCameraAnimating } = useContext(StateContext);

  useEffect(() => {
    const HandleClick = () => {
      try {
        // !isCameraAnimating && CameraAnimate(CameraRef, Pos.z, Pos.z - 1, 0.2);
        // console.log(scrollPosition);
      } catch (err) {
        console.log(err);
      }
    };

    if (TextRef.current) {
      TextRef.current.addEventListener("click", HandleClick);
    }

    return () => {
      if (TextRef.current) {
        TextRef.current.removeEventListener("click", HandleClick);
      }
    };
  });

  return (
    <StyledHero>
      <div className="Title" ref={TextRef} style={{ cursor: "pointer" }}>
        <h1>
          Hi, My name is <br /> HASSAN KARRACH
        </h1>
        <h2>I love creating beautiful user experiences.</h2>
      </div>

      <button>Get in Touch</button>
    </StyledHero>
  );
};

export default index;
