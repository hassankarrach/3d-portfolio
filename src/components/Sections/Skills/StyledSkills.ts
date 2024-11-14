import styled from "styled-components";

interface StyledSkillBoxProps {
  animation: number;
}

export const StyledSkills = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: center;
  padding: 10% 40px;
  @media (max-width: 768px) {
    height: auto;
    padding: 0px;
    height: 80vh;
  }

  .Container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    position: relative;
    .TopFolder {
      width: 100%;
      position: relative;
      transform: translateY(0px);

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

    @media (max-width: 768px) {
      padding: 10% 10px;
    }

    .Content {
      width: 100%;
      height: 600px;
      position: relative;
      border: 1px solid rgba(89, 89, 144, 0.4);
      border-radius: 0px 15px 15px 15px;
      transition: 0.2s ease-in-out;
      background: linear-gradient(
        180deg,
        rgba(157, 157, 255, 0.03) 0%,
        rgba(157, 157, 255, 0) 100%
      );

      &:hover {
        background: linear-gradient(
          180deg,
          rgba(157, 157, 255, 0.05) 0%,
          rgba(157, 157, 255, 0) 100%
        );
      }

      @media (max-width: 768px) {
      }
      padding: 0px;

      .SkillsContent {
        width: 100%;
        height: 100%;
        top: 90px;
        transition: 0.2s ease-in-out;
        z-index: 99;

        .SkillsGrid {
          position: relative;
          height: 100%;
          width: 100%;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          grid-row-gap: 10px;
          justify-items: center;
          align-items: center;
          overflow: auto;
          padding: 30px 10px;
          @media (max-width: 768px) {
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            padding: 10px 10px;
          }

          ::-webkit-scrollbar {
            width: 3px;
          }
          ::-webkit-scrollbar-thumb {
            background: #232338;
            border-radius: 1px;
            transition: 0.1s ease-in-out;
          }

          /* Customize the scrollbar track on hover */
          ::-webkit-scrollbar-thumb:hover {
          }
        }
      }
    }
  }
`;

export const StyledSkillBox = styled.div<StyledSkillBoxProps>`
  margin: 0px;
  padding: 0px;
  width: 150px;
  height: 150px;
  background-color: transparent;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: 0.2s ease-in-out;
  transition: background-image 0.2s ease-in-out;
  cursor: pointer;
  position: relative;
  border-style: solid;
  border-width: 1px;
  border-image: linear-gradient(
      0deg,
      rgba(157, 157, 255, 0) 0%,
      rgba(157, 157, 255, 0.1) 50%,
      rgba(157, 157, 255, 0.4) 100%
    )
    1;
  border-bottom: 0;
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
  .SkillIcon {
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 70%;
      transition: transform 0.5s ease-in-out;
      &:hover {
        transform: ${(props) =>
          props.animation == 1 ? "scale(1.1)" : "rotate(20deg)"};
      }
    }
  }
  .SkillName {
    width: 100%;
    height: 30%;
    background-image: linear-gradient(
      0deg,
      rgba(157, 157, 255, 0.4) 0%,
      rgba(157, 157, 255, 0) 140%
    );
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--font-primary);
    color: var(--MainColor2);

    border-style: solid;
    border-width: 1px;
    border-image: linear-gradient(
        90deg,
        transparent 20%,
        rgba(157, 157, 255, 1) 50%,
        transparent 80%
      )
      1;
      text-align: center;
    @media (max-width: 768px) {
      font-size : 0.7rem;
      line-height: 0.8rem;
    }
  }
  .WatchIcon{
    position: absolute;
    top : 5px;
    right : 5px;
    animation: slowPulse 1s infinite ease-in-out;
  }
`;
