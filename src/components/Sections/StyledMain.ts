import styled from "styled-components";

export const StyledMain = styled.div`
  background-color: var(--MainColor);
  display: flex;
  justify-content : space-between;
  /* justify-content: center; */
  /* align-items : center; */
  min-height : 100vh;
  height : auto;
  width: 100%;
  position: relative;

  @media (max-width: 768px) {
    min-width: 100%;
    flex-direction : column;
    height: auto;
    justify-content: center;
  }

  .Experiance_container{
    width: 34%;
    height: 100vh;
    padding : 5px;
    @media (max-width: 768px) {
      background-color  :var(--MainColor2);
      height : 25vh;
      width : 100%;
      padding : 0px 10px;
      border-bottom-left-radius : 20px;
      border-bottom-right-radius : 20px;
      z-index :99999; // adjust that later
    }
  }

  .Experiance {
    height : 100%;
    width : 100%;
    /* left: 0.5%; */
    /* top: 0; */
    /* transform: translateY(-50%); */
    z-index: 99;
    cursor: grab;
    border-radius: 0px 10px 10px 10px;
    transition: 0.5s ease-in-out;
    overflow: hidden;
    /* position: relative; */
    &:after {
      position: absolute;
      top: 0;
      width: 130%;
      /* height: 130%; */
      content: "";
      /* background-color: var(--MainColor); */
      z-index: 9999;
    }
    .SvgMask {
      width: 40%;
      /* height: 100%; */
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

      @media (max-width: 768px){
          display : none;
        }
    }

    @media (max-width: 768px) {
      height : 100%;
      top: 0%;
      height: 30vh;
      border-radius: 0px 0px 5px 5px;
      border: 2;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      /* display: none; */
    }
  }

  .Content {
    padding: 5px;
    width: 66%;
    height : 100vh;
    color: white;
    background-color : black;
    overflow-y : scroll;
    @media (max-width: 768px) {
      width: 100%;
      height : 75vh;
    }
  }
`;
