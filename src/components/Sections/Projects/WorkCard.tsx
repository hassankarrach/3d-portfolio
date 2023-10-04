import React from "react";
import styled from "styled-components";
import Data from "../../../data/SkillsData";
//Sound
import useSound from "use-sound";
import { FaExternalLinkAlt, FaGithubSquare } from "react-icons/fa";

interface WorkCardProps {
  text: string;
  techs: string[];
  Repo?: string;
  demo?: string;
  Cover: string;
  LightBg?: boolean;
}

const WorkCard = ({
  text,
  Cover,
  techs,
  Repo,
  demo,
  LightBg,
}: WorkCardProps) => {
  //Sounds
  const [HoverSound] = useSound("/Sounds/Hover.mp3", { volume: 1.5 });
  console.log(LightBg);
  return (
    <StyledCard
      onMouseEnter={() => {
        HoverSound();
      }}
      Bg={Cover}
      LightBg={LightBg}
    >
      <div className="LeftCard"></div>

      <div className="RightCard">
        <div className="TitleHolder">
          <h1>{text}</h1>
        </div>

        <div className="TechsList">
          {techs.map((Tech) => {
            return (
              <img
                alt={Tech}
                title={Tech}
                className="ItemIcon"
                src={`/Photos/Icons/${
                  Data.find((item) => item.name === Tech)!.url
                }`}
              />
            );
          })}
        </div>

        <div className="SrcIcons">
          <a className="ALink" href={demo ? demo : ""} target={"_blank"}>
            <FaExternalLinkAlt className="Icon" size={18} />
          </a>
          <a className="ALink" href={Repo ? Repo : ""} target={"_blank"}>
            <FaGithubSquare className="Icon" size={19} />
          </a>
        </div>
      </div>
    </StyledCard>
  );
};
interface StyledCardProps {
  Bg: string;
  LightBg?: boolean;
}

const StyledCard = styled.div<StyledCardProps>`
  width: 30%;
  height: 80%;
  border-radius: 8px;
  overflow: hidden;
  background: rgba(16, 16, 26, 0.25);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: 0.2s ease-in-out;
  display: flex;
  @media (max-width: 768px) {
    width: 100%;
    height: 230px;
  }

  &:hover {
    box-shadow: 0 2px 22px 0 rgba(129, 132, 210, 0.17);
  }
  .LeftCard {
    width: 40%;
    height: 100%;
    background-color: white;
    background-image: ${(props) =>
      `url("/Photos/Portfolio/Preview/Edit${props.Bg}.webp")`};
    background-position: center;
    background-size: cover;
    z-index: 1;
    position: relative;

    @media (max-width: 768px) {
      height: 100%;
    }

    /* Conditionally render :after pseudo-element based on LightBg prop */
    ${(props) =>
      props.LightBg &&
      `
      &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: var(--MainColor2);
        mix-blend-mode: color;
      }
    `}
  }
  .RightCard {
    height: 100%;
    width: 60%;
    font-family: var(--font-primary);
    display: flex;
    flex-direction: column;
    z-index: 2;

    @media (max-width: 768px) {
    }

    display: flex;
    color: var(--MainColor2);
    .TitleHolder {
      height: 79%;
      display: flex;
      justify-content: center;
      align-items: center;

      h1 {
        transform: translateX(-15px);
        font-size: 2.6rem;
      }
    }

    .TechsList {
      width: 100%;
      height: 50px;
      z-index: 3;
      transform: translate(-15px, -10px);
      border-radius: 5px;
      border: 1px solid rgba(255, 255, 255, 0.03);
      background: rgba(16, 16, 26, 0.25);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2px;

      .ItemIcon {
        height: 70%;
        cursor: pointer;
        opacity: 0.7;
        transition: 0.2s ease-in-out;
        &:hover {
          opacity: 1;
        }
      }
    }
  }

  .SrcIcons {
    position: absolute;
    top: 6px;
    right: 6px;
    display: flex;
    gap: 2px;
    .ALink {
      color: var(--MainColor2);
    }
    .Icon {
      opacity: 0.5;
      cursor: pointer;
      transition: 0.2s ease-in-out;
      &:hover {
        opacity: 1;
      }
    }
  }
`;

export default WorkCard;
