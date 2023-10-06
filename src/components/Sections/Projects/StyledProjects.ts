import styled from "styled-components";

export const StyledProjects = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  scroll-snap-align: center;
  padding: 10% 40px;

  @media (max-width: 768px) {
    margin-top: 30px;
    padding: 10px 2%;
    height: auto;
    margin-top: 100px;
  }

  .ProjectsContainer {
    width: 60.5vw;
    height: 700px;
    /* background-color: wheat; */
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    padding: 0px;
    background-image: url("/Photos/Utils/ProjectsBg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-blend-mode: overlay;

    @media (max-width: 768px) {
      width: 100%;
      height: auto;
      background-position: -200px 0px;
    }

    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border: 1px solid rgba(157, 157, 255, 0.3);
      border-radius: 8px;

      mask-image: linear-gradient(to top, transparent 10%, black);
      mask-repeat: no-repeat;
      mask-position: right;
    }

    .TopFolder {
      z-index: 1;
      width: 100%;
      position: absolute;
      top: -16.5%;
      @media (max-width: 768px) {
        top: -12%;
      }

      .SvgTopFolder {
        transform: translate(-1px, 9px);
        /* border: 1px solid red; */
        width: 100%;
        mask-image: linear-gradient(to top, transparent 30%, black);
        mask-repeat: no-repeat;
        mask-position: right;
      }
      .FolderPath {
        width: 45%;
        height: 70px;
        position: absolute;
        border-radius: 0px 15px 0px 0px;
        bottom: 0;
        /* border-image: linear-gradient(
            to left,
            rgba(89, 89, 144, 0.4) 0%,
            rgba(89, 89, 144, 0) 50%
          )
          1;
        border-width: 1px;
        border-style: solid; */
        &:after {
          content: "";
          width: 100%;
          height: 100%;
          position: absolute;
          border: 1px solid rgba(89, 89, 144, 0.4);
          border-bottom: none;
          mask-image: linear-gradient(to right, transparent 30%, black);
          mask-repeat: no-repeat;
          mask-position: right;
          border-top-right-radius: 10px;
          background: linear-gradient(
            90deg,
            rgba(89, 89, 144, 0) 0%,
            rgba(89, 89, 144, 0.1) 100%
          );
        }

        @media (max-width: 768px) {
          width: 85%;
          justify-content: flex-end;
        }
        display: flex;
        justify-content: center;
        align-items: center;
        h1 {
          font-family: var(--HandFont);
          color: #595990;
          font-size: 5rem;
          position: absolute;
          left: 0;
          margin-top: 15px;
        }
        span {
          font-family: var(--CodingFont);
          color: #595990;
          opacity: 0.4;
          @media (max-width: 768px) {
            margin-right: 10%;
          }
        }
      }
    }

    .FeauturedWoksList {
      width: 100%;
      flex-grow: 1;
      background: linear-gradient(
        180deg,
        rgba(89, 89, 144, 0) 0%,
        rgba(89, 89, 144, 0.05) 100%
      );
      z-index: 4;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;

      @media (max-width: 768px) {
        flex-direction: column;
        padding: 5px 5px 15px 5px;
      }
    }
    .AllWorksSlide {
      height: 200px;
      width: 100%;
      display: flex;
      position: relative;
      overflow: hidden;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;

      @media (max-width: 768px) {
      }

      .SwiperContainer {
        .SwiperEl {
          width: auto !important;
          img {
            height: 100%;
          }
        }
      }
    }
  }

  @keyframes Slide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;
