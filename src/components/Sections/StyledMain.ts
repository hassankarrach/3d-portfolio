import styled from "styled-components";

export const StyledMain = styled.div`
  background-color: var(--MainColor);
  display: flex;
  justify-content: right;
  width: 100%;
  height: 100%;
  position: relative;
  @media (max-width: 768px) {
    min-width: 100%;
    height: auto;
    justify-content: center;
  }

  .Experiance {
    width: 34%;
    height: 90%;
    position: fixed;
    left: 0.5%;
    top: 52%;
    transform: translateY(-50%);
    z-index: 99;
    cursor: grab;
    border-radius: 0px 20px 20px 20px;
    transition: 0.5s ease-in-out;
    overflow: hidden;
    /* position: relative; */
    &:after {
      position: absolute;
      top: 0;
      width: 130%;
      height: 130%;
      content: "";
      /* background-color: var(--MainColor); */
      z-index: 9999;
    }
    .SvgMask {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      z-index: 99;
      padding: 0px;
      .TopMask {
        position: absolute;
        width: 44%;
        background-size: contain;
        background-repeat: no-repeat;
        margin: 0px;
        background-image: url("/Photos/Utils/TopMask.svg");
        top: 0;
        transform: translateY(-1px);
        padding-bottom: calc(100% * 3 / 4);
        /* transform : translateY(-20px); */
      }
      .CurrentSec {
        position: absolute;
        width: 100%;
        margin: 10px 5px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .Logo {
          width: 30px;
        }
      }
    }

    .Prev {
      position: absolute;
      left: 10px;
      top: 10px;
      background-color: white;
      color: black;
      z-index: 999;
    }
    .MacVideoPlayer {
      background-color: red;
      width: 100%;
      height: 100px;
    }

    @media (max-width: 768px) {
      width: 100%;
      top: 0%;
      height: 25%;
      border-radius: 0px 10px 0px 0px;
      border: 2;
      transform: translateY(0%);
      left: 0;
      /* display: none; */
    }
  }

  .Content {
    padding: 5px;
    width: 66%;
    color: white;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;
