import React, { useContext } from "react";
import { StyledAboutMe } from "./StyledAboutMe";
import { StateContext } from "../../../context/CameraContext";

function index() {
  const { CameraRef } = useContext(StateContext);
  return (
    <StyledAboutMe>
      <p>
        Hello, I'm Hassan, a front-end developer with a passion for crafting
        beautiful and functional websites. I specialize in using React.js to
        build responsive and dynamic user interfaces that enhance the user
        experience. Recently, I've been exploring Three.js to bring my designs
        to life with stunning 3D visuals. In addition, I'm passionate about Web3
        and excited to contribute to the decentralized web of the future. When
        I'm not coding, I love to [insert your hobbies or interests]. Check out
        my portfolio to see some of my recent projects, and feel free to reach
        out to me to discuss potential collaborations
      </p>
    </StyledAboutMe>
  );
}

export default index;
