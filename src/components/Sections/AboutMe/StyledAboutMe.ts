import styled from "styled-components";

export const StyledAboutMe = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: center;
  padding: 10% 40px;

  .Intro {
    width: 100%;
    height: 450px;
    border-radius: 10px;
    display: flex;
    position: relative;
    background: linear-gradient(
      90deg,
      rgba(140, 140, 194, 0.1) 0%,
      rgba(140, 140, 194, 0) 80%
    );

    justify-content: center;
    align-items: center;
    img {
      height: 100%;
      border-bottom-left-radius: 10px;
      border-top-left-radius: 10px;
    }
    .Title {
      position: absolute;
      left: 0;
      top: -24%;
      font-family: var(--HandFont);
      color: white;
      font-size: 4.5rem;
    }

    .IntroText {
      margin-left: -30px;
      font-family: var(--CodingFont);
      font-size: 1.3rem;
      line-height: 1.5em;
      text-shadow: -3px 0px 4px rgba(0, 0, 0, 0.79);
    }

    .IconHolder {
      position: absolute;
      display: flex;
      left: 0;
      bottom: -20%;
      z-index: 3;

      .icon {
        width: 25px;
        position: absolute;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        top: 50%;
        transform: translateY(-50%);
        fill: white;
      }

      .spinText {
        width: 180px;
        height: 180px;
      }
    }
  }
`;
