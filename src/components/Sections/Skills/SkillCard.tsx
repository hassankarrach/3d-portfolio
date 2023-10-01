import React from "react";
import { StyledSkillBox } from "./StyledSkills";

interface SkillCardProps {
  url: string;
  title: string;
}

function SkillCard({ url, title }: SkillCardProps) {
  return (
    <StyledSkillBox>
      <div className="SkillIcon">
        <img src={`./Photos/Icons/${url}`} alt={title} />
      </div>
      <div className="SkillName">
        <span>{title}</span>
      </div>
    </StyledSkillBox>
  );
}

export default SkillCard;
