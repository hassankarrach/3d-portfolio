import styled from "styled-components";

export const StyledSkills = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: center;
  padding: 10% 40px;

  .Container {
    width: 100%;
    height: auto;
    /* border: 2px solid green; */
    position: relative;
    .SvgBaseShape {
      width: 100%;
      height: 100%;
      .BaseShape {
        fill: transparent;
        stroke: #9d9dff;
        stroke-width: 0.5px;
      }
      .TopShape {
        /* fill: #1d1d2f; */
      }
    }

    .Content {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: transparent;
      bottom: 0;

      h1 {
        font-family: var(--HandFont);
        color: #595990;
        font-size: 5rem;
        top: -12%;
        position: absolute;
      }

      .SkillsContent {
        position: absolute;
        left: 0;
        width: 100%;
        height: 87%;
        top: 90px;
        transition: 0.2s ease-in-out;

        &:hover {
          background: linear-gradient(
            180deg,
            rgba(157, 157, 255, 0.1) 0%,
            rgba(157, 157, 255, 0) 100%
          );
        }

        .SkillTitle {
          width: 100%;
          height: 15%;
          background-color: #9d9dff;
          position: relative;

          .SkillTitlePhoto {
            position: absolute;
            left: 0;
            width: 30%;
            height: 100%;
            background-image: linear-gradient(
                270deg,
                rgba(157, 157, 255, 1) 0%,
                rgba(157, 157, 255, 0) 100%
              ),
              url("./Photos/React.jpg");
            background-position: -100px center;
            background-size: cover;
            display: flex;
            background-repeat: no-repeat;
            justify-content: center;
            align-items: center;

            span {
              font-size: 2rem;
              font-family: var(--font-primary);
              z-index: 999;
            }
          }

          .Preview {
            position: absolute;
            right: 0;
            height: 100%;
            width: 10%;
            display: flex;
            justify-content: center;
            align-items: center;

            .Icon {
              cursor: pointer;
            }
          }
        }

        .SkillsGrid {
          position: relative;
          height: 85%;
          width: 100%;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          grid-row-gap: 10px;
          justify-items: center;
          align-items: center;
          overflow: auto;
          padding: 30px 10px;
        }
      }
    }
  }
`;

export const StyledSkillBox = styled.div`
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
        transform: rotate(20deg);
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

    border-style: solid;
    border-width: 1px;
    border-image: linear-gradient(
        90deg,
        transparent 20%,
        rgba(157, 157, 255, 1) 50%,
        transparent 80%
      )
      1;
  }
`;
