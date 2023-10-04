import React, { useState, useContext } from "react";
import { StyledSkills } from "./StyledSkills";
//Context
import { StateContext } from "../../../context/CameraContext";
//icons
import { FaRegPlayCircle } from "react-icons/fa";
import SkillCard from "./SkillCard";
//SkillsData
import Data from "../../../data/SkillsData";

const index = React.forwardRef((props, ref: any) => {
  //Context
  const { setCurrentSection } = useContext(StateContext);

  const PlayPrev = () => {
    setCurrentSection(5);
  };
  return (
    <StyledSkills ref={ref}>
      <div className="Container">
        <div className="TopFolder">
          <div className="FolderPath">
            <h1>Skills</h1>

            <span>/Portfolio/Skills</span>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="183.5px"
            height="108.5px"
            className="SvgTopFolder"
          >
            <path
              className="Path"
              fill-rule="evenodd"
              stroke="rgba(89, 89, 144, 0.5)"
              stroke-width="1px"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              fill="rgba(89, 89, 144, 0.1)"
              d="M1.500,105.500 C1.500,105.500 1.500,29.741 1.500,7.543 C1.500,3.732 2.500,2.500 2.500,2.500 C2.500,2.500 3.591,1.500 7.449,1.500 C53.588,1.500 124.500,1.500 124.500,1.500 L181.500,106.500 "
            />
          </svg>
        </div>

        <div className="Content">
          <div className="SkillsContent">
            <div className="SkillsGrid">
              {Data.map((Item: any) => {
                return (
                  <SkillCard
                    url={Item.url}
                    title={Item.name}
                    animation={Item.animation}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </StyledSkills>
  );
});

export default index;
