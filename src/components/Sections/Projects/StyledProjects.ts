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

  .ProjectsContainer {
    width: 60.5vw;
    height: 700px;
    border: 1px solid rgba(157, 157, 255, 0.4);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .Title {
      height: 50px;
      width: 100%;
      display: flex;
      align-items: center;
      border-image: linear-gradient(
          to left,
          rgba(89, 89, 144, 1) 0%,
          rgba(89, 89, 144, 0) 100%
        )
        0 0 100% 0;
      border-width: 1px;
      border-style: solid;
      position: relative;

      .Icons {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 0;
        padding: 10px;
        height: 100%;
        color: #595990;
        .Icon {
          margin: 2px;
          cursor: pointer;
          transition: 0.5s ease-in-out;
          &:hover {
            -webkit-box-shadow: 0px 0px 43px 1px rgba(89, 89, 144, 0.91);
            -moz-box-shadow: 0px 0px 43px 1px rgba(89, 89, 144, 0.91);
            box-shadow: 0px 0px 43px 1px rgba(89, 89, 144, 0.91);
          }
        }
      }
      h1 {
        font-family: var(--HandFont);
        color: #595990;
        font-size: 5rem;
        transform: translateY(-35px);
        background: linear-gradient(
          90deg,
          rgba(16, 16, 26, 0.6) 0%,
          rgba(16, 16, 26, 1) 50%,
          rgba(16, 16, 26, 0.6) 100%
        );
        padding: 10px;
      }
    }
    .FeauturedWoksList {
      width: 100%;
      flex-grow: 1;
      background: linear-gradient(
        180deg,
        rgba(89, 89, 144, 0) 0%,
        rgba(89, 89, 144, 0.15) 100%
      );
    }
    .AllWorksSlide {
      height: 40%;
      width: 100%;
      display: flex;
      position: relative;
      overflow: hidden;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;

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
