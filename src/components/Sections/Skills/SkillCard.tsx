import React from "react";
import { StyledSkillBox } from "./StyledSkills";
//Sound
import useSound from "use-sound";

interface SkillCardProps {
  url: string;
  title: string;
  animation: number;
}

function SkillCard({ url, title, animation }: SkillCardProps) {
  //Sounds
  const [HoverSound] = useSound("/Sounds/Hover.mp3", {
    volume: 1.5,
    interrupt: true,
  });

  return (
    <StyledSkillBox
      onMouseEnter={() => {
        HoverSound();
      }}
      animation={animation}
    >
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
