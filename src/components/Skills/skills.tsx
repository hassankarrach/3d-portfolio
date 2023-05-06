import React from "react";
import { StyledSkills } from "./Skills.styled";

const skills: React.FC = () => {
  return (
    <StyledSkills>
      {/* About Container*/}
      <section id="about-section" className="content-width">
        <div id="about-content-container">
          {/* Header Container SVG*/}
          <svg
            id="skills-svg"
            viewBox="-2 -2 506 815"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMinYMid"
          >
            {/* Defs*/}
            <defs>
              {/* Profile picture aniamtion line gradient*/}
              <linearGradient
                id="about-profile-picture-mask-gradient"
                gradientTransform="rotate(90)"
              >
                <stop offset="5%" stopColor="#60CAFF" />
                <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
              </linearGradient>
              {/*Background Gradient */}
              <linearGradient
                id="about-background-gradient"
                gradientTransform="rotate(90)"
              >
                <stop offset="30%" stopColor="rgba(0, 88, 165, .15)" />
                <stop offset="95%" stopColor="rgba(0, 132, 255, .3)" />
              </linearGradient>
              {/* Icon Template*/}
              <polyline
                id="about-icon-background"
                fill="#00b7ff18"
                points="0,10 10,0 65,0 75,10 75,65 65,75 10,75 0,65"
              />
            </defs>
            {/*Header */}
            <g id="about-svg-header">
              {/*Profile Picture Background */}
              <polyline
                id="about-profile-background"
                className="about-box-background"
                points="65,170 145,170 145,50 135,40 135,10 125,0 70,0 10,0 0,10 0,160 10,170"
              />
              {/* Header Content Background*/}
              <polyline
                id="about-header-background"
                className="about-box-background"
                points="145,85 250,85 260,95 490,95 500,105 500,135 500,150 490,160 200,160 190,170 145,170"
              />
              {/* Profile Picture Mask*/}
              <mask id="about-profil-picture-mask">
                {/* Black Background*/}
                <rect fill="black" x="0" y="0" width="145" height="170" />
                {/* White Background*/}
                <polyline
                  fill="white"
                  points="65,170 145,170 145,50 135,40 135,10 125,0 70,0 10,0 0,10 0,160 10,170"
                ></polyline>
                {/* Rect to make white background visible*/}
                <rect
                  id="about-profile-picture-mask-rect"
                  fill="black"
                  width="145"
                  height="170"
                  style={{ transition: "0,2s" }}
                  x="0"
                  y="-0"
                />
              </mask>
              {/* Profile Picture*/}
              <image
                href="../src/assets/skills-profile-picture.png"
                opacity="1"
                height="170"
                width="145"
                x="2"
                mask="url(#about-profil-picture-mask)"
                imageRendering="optimizeSpeed"
              />
              {/* Profile Picture line that moves up on animation*/}
              <g mask="url(#about-profil-picture-mask)">
                <rect
                  fill="url(#about-profile-picture-mask-gradient)"
                  height="35"
                  width="155"
                  y="170"
                  id="about-profile-picture-gradient"
                  style={{ transition: "0,2s" }}
                ></rect>
              </g>
              {/* Profile Picture Borders*/}
              <polyline
                className="about-box-line"
                points="65,170 10,170 0,160 0,10 10,0 70,0"
              />
              <polyline
                className="about-box-line"
                points="65,170 145,170 145,50 135,40 135,10 125,0 70,0"
              />
              {/* Header Content Borders*/}
              <polyline
                className="about-box-line"
                points="145,85 250,85 260,95 490,95 500,105 500,135"
              />
              <polyline
                className="about-box-line"
                points="145,170 190,170 200,160 490,160 500,150 500,135"
              />
              {/* Header Content*/}
              <g
                transform="translate(170 118)"
                fill="#34bfff"
                fontWeight="bold"
              >
                <text
                  x="0"
                  y="0"
                  fontSize="12"
                  className="about-header-upper-text"
                >
                  Name :
                </text>
                <text
                  x="0"
                  y="20"
                  fontSize="18"
                  className="about-header-lower-text"
                >
                  David
                </text>
                <text
                  x="110"
                  y="0"
                  fontSize="12"
                  className="about-header-upper-text"
                >
                  Age :
                </text>
                <text
                  x="110"
                  y="20"
                  fontSize="18"
                  className="about-header-lower-text"
                >
                  23
                </text>
                <text
                  x="200"
                  y="0"
                  fontSize="12"
                  className="about-header-upper-text"
                >
                  From :
                </text>
                <text
                  x="200"
                  y="20"
                  fontSize="18"
                  className="about-header-lower-text"
                >
                  Germany
                </text>
              </g>
            </g>
            {/* Skills*/}
            <g transform="translate(0 188)" id="about-svg-skills">
              {/* Background*/}
              <polyline
                id="about-skills-background"
                className="about-box-background"
                points="250,35 200,35 200,10 190,0 10,0 0,10 0,245 10,255 197,255 215,273 215,290 250,290 400,290 410,280 490,280 500,270 500,55 490,45 310,45 300,35"
              />
              {/* Lines*/}
              <polyline
                className="about-box-line"
                points="250,35 200,35 200,10 190,0 10,0 0,10 0,245 10,255 197,255 215,273 215,290 250,290"
              />
              <polyline
                className="about-box-line"
                points="250,35 300,35 310,45 490,45 500,55 500,270 490,280 410,280 400,290 250,290"
              />
              {/* Header Mask*/}
              <mask id="skills-header-mask">
                <polyline
                  fill="white"
                  points="0,37 0,10 10,0 190,0 200,10 200,37"
                ></polyline>
                <rect fill="white" x="0" y="210" width="500" height="6"></rect>
              </mask>
              {/* Header Box*/}
              <rect
                id="skills-header-rect"
                x="0"
                y="0"
                height="47"
                width="500"
                fill="#00b7ff"
                opacity=".15"
                mask="url(#skills-header-mask)"
              ></rect>
              {/* Header Text*/}
              <text
                x="71"
                y="25"
                className="about-header"
                fontSize="18"
                fontWeight="bold"
              >
                SKILLS
              </text>
              <foreignObject x="0" y="60" width="506" height="340">
                {/* Skills Content*/}
                <div id="about-skills-container" className="about-container">
                  {/* Main Render Container*/}
                  <div id="about-skills-render-container"></div>
                  {/* Others Render Container*/}
                  <div id="about-others-render-container"></div>
                </div>
              </foreignObject>
            </g>
            {/* */}About
            <g transform="translate(0 459)" id="about-svg-about">
              {/* Background*/}
              <polyline
                id="about-about-background"
                className="about-box-background"
                points="250,35 200,35 200,10 190,0 10,0 0,10 0,35 0,315 10,325 100,325 110,335 250,335 490,335 500,325 500,55 490,45 410,45 400,35"
              />
              {/* Lines*/}
              <polyline
                className="about-box-line"
                points="250,35 200,35 200,10 190,0 10,0 0,10 0,35 0,315 10,325 100,325 110,335 250,335"
              />
              <polyline
                className="about-box-line"
                points="250,35 400,35 410,45 490,45 500,55 500,325 490,335 250,335"
              />
              {/* Header Mask*/}
              <mask id="about-header-mask">
                <polyline
                  fill="white"
                  points="0,37 0,10 10,0 190,0 200,10 200,37"
                ></polyline>
                <rect fill="white" x="0" y="210" width="500" height="6"></rect>
              </mask>
              {/* Header Box*/}
              <rect
                id="about-header-rect"
                x="0"
                y="0"
                height="47"
                width="500"
                fill="#00b7ff"
                opacity=".15"
                mask="url(#about-header-mask)"
              ></rect>
              {/* Header Text*/}
              <text
                x="73"
                y="25"
                className="about-header"
                fontSize="18"
                fontWeight="bold"
              >
                ABOUT
              </text>
              {/* First Content*/}
              <g transform="translate(10 65)">
                <use className="about-icon" href="#about-icon-background"></use>
                <mask id="about-pixel-mask-0">
                  <rect
                    className="about-pixel-mask-rect"
                    x="6"
                    y="7"
                    height="20"
                    width="64"
                    fill="white"
                  />
                </mask>
                <image
                  mask="url(#about-pixel-mask-0)"
                  className="about-pixel-image"
                  height="64"
                  width="64"
                  href="../src/assets/icons/baby-pixel.png"
                  x="6"
                  y="7"
                />
                {/* First Text*/}
                <text x="88" y="33" className="about-text">
                  At the age of 15, David first came in touch with UX
                </text>
                <text x="88" y="50" className="about-text">
                  Design and app development.
                </text>
              </g>
              {/* Second Content*/}
              <g transform="translate(10 145)">
                <use
                  className="about-icon"
                  href="#about-icon-background"
                  x="405"
                ></use>
                <mask id="about-pixel-mask-1">
                  <rect
                    className="about-pixel-mask-rect"
                    x="413"
                    y="6"
                    height="20"
                    width="64"
                    fill="white"
                  />
                </mask>
                <image
                  mask="url(#about-pixel-mask-1)"
                  className="about-pixel-image"
                  height="64"
                  width="64"
                  href="../src/assets/icons/heart-pixel.png"
                  x="413"
                  y="6"
                />
                {/* Second Icon Render Container*/}
                <g id="about-icon-1" transform="translate(417 5) scale(0.8)">
                  {" "}
                </g>
                {/* Second Text*/}
                <text x="5" y="33" className="about-text">
                  During his 4 years of military service, programming
                </text>
                <text x="5" y="50" className="about-text">
                  has always been a passion of his.
                </text>
              </g>
              {/* Third Content*/}
              <g transform="translate(10 225)">
                <use className="about-icon" href="#about-icon-background"></use>
                {/* Third Icon Render Container*/}
                <g id="about-icon-2" transform="translate(5 5) scale(0.8)">
                  {" "}
                </g>
                <mask id="about-pixel-mask-2">
                  <rect
                    className="about-pixel-mask-rect"
                    x="6"
                    y="7"
                    height="20"
                    width="64"
                    fill="white"
                  />
                </mask>
                <image
                  mask="url(#about-pixel-mask-2)"
                  className="about-pixel-image"
                  height="64"
                  width="64"
                  href="../src/assets/icons/rocket-pixel.png"
                  x="6"
                  y="7"
                />
                {/* Third Text*/}
                <text x="88" y="33" className="about-text">
                  Now, after professional coaching, David is looking for
                </text>
                <text x="88" y="50" className="about-text">
                  new challenges to work as a web developer.
                </text>
              </g>
            </g>
            {/* Down Animation Lines*/}
            <g transform="translate(145 76)">
              <polyline
                className="about-down-animation-line"
                points="0,0 110,0 120,10 325,10 333,18"
              />
            </g>
            <g transform="translate(195 192)">
              <polyline
                className="about-down-animation-line"
                points="0,0 8,0 13,5 13,22 110,22 120,32 275,32 283,40"
              />
            </g>
            <g transform="translate(403 496)">
              <polyline
                className="about-down-animation-line"
                points="0,0 70,0 78,8"
              />
            </g>
            {/* Up Animation Lines*/}
            <g transform="translate(193 160)">
              <polyline
                className="about-up-animation-line"
                points="0,7 275,7 282,0"
              />
            </g>
            <g transform="translate(403 468)">
              <polyline
                className="about-up-animation-line"
                points="0,8 70,8 78,0"
              />
            </g>
            <g transform="translate(20 784)">
              <polyline
                className="about-up-animation-line"
                points="0,0 9,9 74,9 84,19 450,19 458,11"
              />
            </g>
          </svg>
        </div>
      </section>
    </StyledSkills>
  );
};

export default skills;
