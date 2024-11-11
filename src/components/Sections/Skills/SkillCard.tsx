import React, { useContext } from "react";
import { StyledSkillBox } from "./StyledSkills";
//Sound
import useSound from "use-sound";
//Camera
import { CameraAnimate } from "../../Experiance/animations";
import { StateContext } from "../../../context/CameraContext";

interface SkillCardProps {
  url: string;
  title: string;
  animation: number;
}

function SkillCard({ url, title, animation }: SkillCardProps) {
  const {CameraRef} =  React.useContext(StateContext);
  //Sounds
  const [HoverSound] = useSound("/Sounds/Hover.mp3", {
    volume: 1.5,
    interrupt: true,
  });

  const HandleSkillFocuse = () => {
    console.log("Skill Focused");
    if (CameraRef)
      {
        CameraAnimate(CameraRef, { x: -0.04, y: -0.4, z: 1.5 }, { x: 0, y: 0, z: 0 });
      }
  }

  return (
    <StyledSkillBox
      onMouseEnter={() => {
        HoverSound();
      }}
      animation={animation}
      onClick={HandleSkillFocuse}
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
