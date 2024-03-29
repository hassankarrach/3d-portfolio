import styled from "styled-components";

export const StyledSkills = styled.div`
  width: 100%;
  background-color: white;

  #about-section {
    justify-content: flex-start;
    align-items: center;
    font-family: "Electrolize", sans-serif;
    color: #34bfff;
    min-height: 100vh;
    padding-bottom: 90px;
  }

  /**---------------------------------------------------------------Content-----------------------------------------------------*/
  #about-content-container {
    width: 580px;
    max-width: 45%;
    display: flex;
    flex-direction: column;
  }

  #about-content-container span {
    color: #34bfff;
  }

  #skills-svg {
    margin-top: 120px;
    width: 100%;
  }

  .about-box-line {
    fill: none;
    stroke: #00b7ff;
    stroke-width: 2;
  }

  .about-up-animation-line {
    fill: none;
    stroke: #00b7ff;
    opacity: 0;
    stroke-width: 2;
  }

  .about-down-animation-line {
    fill: none;
    stroke: #00b7ff;
    opacity: 0;
    stroke-width: 2;
  }

  .about-box-background {
    stroke-width: 0;
    fill: url("#about-background-gradient");
  }

  .about-header {
    font-weight: bold;
    font-size: 18px;
    fill: #34bfff;
  }

  .about-text {
    font-weight: bold;
    font-size: 15px;
    fill: #34bfff;
  }

  /**Main*/
  #about-skills-container {
    padding: 10px 0;
    font-weight: bold;
    font-size: 16px;
  }

  /**Render Result*/
  #about-skills-render-container :nth-child(even),
  #about-others-render-container :nth-child(odd) {
    background: #2d88dd18;
  }

  .about-skill-container {
    height: 100%;
    box-sizing: border-box;
    padding: 6px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .about-skill-container span {
    width: 250px;
    background: transparent !important;
  }

  /**Bar*/
  .about-skill-bar-container {
    width: 100%;
    height: 11px;
    background: #00b7ff33 !important;
    overflow: auto;
  }

  .about-skill-bar {
    height: 100%;
    background: linear-gradient(to right, #2d88dd, #34bfff) !important;
    width: 30%;
  }

  /**About Content*/
  #about-svg-about image {
    image-rendering: pixelated;
    opacity: 0.9;
  }

  .about-pixel-mask-rect {
    fill: white;
  }

  /**---------------------------------------------------------------Responsive-----------------------------------------------------*/
  @media (max-aspect-ratio: 12/10) {
    #about-section {
      justify-content: center;
      padding-bottom: 3vh;
    }

    #about-content-container {
      max-width: 100%;
      justify-content: flex-start;
      align-items: flex-start;
    }

    #skills-svg {
      margin-top: 63vh;
      margin-bottom: 90px;
    }
  }
`;
