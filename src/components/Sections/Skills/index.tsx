import React, { useState, useContext } from "react";
import { StyledSkills } from "./StyledSkills";
//Context
import { StateContext } from "../../../context/CameraContext";
//icons
import { FaRegPlayCircle } from "react-icons/fa";
import SkillCard from "./SkillCard";

const index = React.forwardRef((props, ref) => {
  //Context
  const { setCurrentSection } = useContext(StateContext);

  const PlayPrev = () => {
    setCurrentSection(5);
  };
  return (
    <StyledSkills ref={ref}>
      <div className="Container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="959.878"
          height="609.876"
          viewBox="0 0 959.878 609.876"
          className="SvgBaseShape"
        >
          <defs>
            <linearGradient id="topShapeGradient" gradientTransform="rotate(0)">
              <stop offset="0%" stop-color="#1d1d2f" />
              <stop offset="100%" stop-color="var(--MainColor)" />
            </linearGradient>
          </defs>
          <path
            className="BaseShape"
            d="M821.929,270H1678.11L1754,343.388V852.071A26.932,26.932,0,0,1,1727.07,879H821.929A26.93,26.93,0,0,1,795,852.071V296.929A26.93,26.93,0,0,1,821.929,270Z"
            transform="translate(-794.562 -269.562)"
          />
          <path
            className="TopShape"
            id="Rectangle_1_copy_2"
            data-name="Rectangle 1 copy 2"
            d="M821.929,270H1678.11L1754,343.388l-959-.226V296.929A26.93,26.93,0,0,1,821.929,270Z"
            transform="translate(-794.562 -269.562)"
            fill="url(#topShapeGradient)"
          />
        </svg>

        <div className="Content">
          <h1>Skills</h1>

          <div className="SkillsContent">
            <div className="SkillTitle">
              <div className="SkillTitlePhoto">
                <span>Web Dev</span>
              </div>

              <div className="Preview">
                <FaRegPlayCircle
                  size={40}
                  className="Icon"
                  onClick={PlayPrev}
                />
              </div>
            </div>

            <div className="SkillsGrid">
              <SkillCard />
              <SkillCard />
              <SkillCard />
              <SkillCard />
              <SkillCard />
              <SkillCard />
              <SkillCard />
              <SkillCard />
              <SkillCard />
              <SkillCard />
              <SkillCard />
              <SkillCard />
              <SkillCard />
              <SkillCard />
              <SkillCard />
              <SkillCard />
              <SkillCard />
              <SkillCard />
              <SkillCard />
              <SkillCard />
              <SkillCard />
              <SkillCard />
            </div>
          </div>
        </div>
      </div>
    </StyledSkills>
  );
});

export default index;
