import React, { useState, useContext } from "react";
import { StyledSkills } from "./StyledSkills";
//Context
import { StateContext } from "../../../context/CameraContext";

function index() {
  //Context
  const { setCurrentSection } = useContext(StateContext);
  return (
    <StyledSkills>
      <button
        onClick={() => {
          setCurrentSection(5);
        }}
      >
        Go To Mac!
      </button>
    </StyledSkills>
  );
}

export default index;
