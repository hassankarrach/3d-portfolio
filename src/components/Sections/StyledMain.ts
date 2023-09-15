import styled from "styled-components";

export const StyledMain = styled.div`
  background-color: var(--MainColor);
  display: flex;
  justify-content: right;
  width: 100%;
  height: 100%;

  .Experiance {
    background-color: red;
    width: 34%;
    height: 99%;
    position: fixed;
    left: 0.5%;
    top: 50%;
    transform: translateY(-50%);
    z-index: 99;
    cursor: grab;
    border-radius: 20px;
    transition: 0.5s ease-in-out;
    overflow: hidden;
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

    &:hover {
      /* width: 55%; */
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }

    @media (max-width: 768px) {
      width: 100%;
      top: 0;
    }
  }

  .Content {
    padding: 5px;
    width: 66%;
    color: white;
  }
`;
