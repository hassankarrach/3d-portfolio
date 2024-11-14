import React, { useContext } from "react";
import { StyledSkillBox } from "./StyledSkills";
// Sound
import useSound from "use-sound";
// Camera
import { CameraAnimate } from "../../Experiance/animations";
import { StateContext } from "../../../context/CameraContext";
import { FaRegPlayCircle } from "react-icons/fa";

interface SkillCardProps {
  url: string;
  title: string;
  animation: number;
  is_special?: boolean;
}

function SkillCard({ url, title, animation, is_special }: SkillCardProps) {
  const { CameraRef, setFocusedSkill } = useContext(StateContext); // Correct use of useContext

  // Sounds
  const [HoverSound] = useSound("/Sounds/Hover.mp3", {
    volume: 1.5,
    interrupt: true,
  });

  const HandleSkillFocuse = (skill_name: string) => {
    if (CameraRef && (skill_name === "React js" || skill_name === "Photoshop")) {
      CameraAnimate(CameraRef, { x: -0.04, y: -0.4, z: 1.5 }, { x: 0, y: 0, z: 0 });
      setFocusedSkill(title);
    }
  };

  return (
    <StyledSkillBox
      onMouseEnter={() => {
        HoverSound();
      }}
      animation={animation}
      onClick={() => HandleSkillFocuse(title)} // Corrected function reference
    >
      {is_special && <FaRegPlayCircle color="white" className="WatchIcon" />}
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
