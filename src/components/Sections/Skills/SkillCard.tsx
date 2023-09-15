import React from "react";
import { StyledSkillBox } from "./StyledSkills";

function SkillCard() {
  return (
    <StyledSkillBox>
      <div className="SkillIcon">
        <img src={"./Photos/Icons/React.webp"} />
      </div>
      <div className="SkillName">
        <span>React js</span>
      </div>
    </StyledSkillBox>
  );
}

export default SkillCard;
