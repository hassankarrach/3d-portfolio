import styled from "styled-components";

export const StyledExperiance = styled.div`
  position: absolute;
  background-color: transparent;
  position: relative;
  height: 100%;
  top : 0;
  background-color: var(--MainColor2);

  .htmlScreen iframe {
    height: 700px;
    border: none;
    background: #000;
    overflow-y: scroll;
    touch-action: touch;
  }

  .wrapper {
    padding: 10px;
    width: 100%;
    height: 100%;
    transform: scale(0.5);
    border: none;
    border-radius: 5px;
    transform-origin: top left;
  }
`;
