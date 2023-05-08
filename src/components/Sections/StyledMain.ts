import styled from "styled-components";

export const StyledMain = styled.div`
  width: 100%;
  display: flex;
  background-color: black;
  @media (max-width: 768px) {
    height: 100vh;
  }

  .Experiance {
    width: 60%;
  }

  .Content {
    height: 100%;
    width: 40%;
    padding: 5px;
    height: 100vh;
    background-color: white;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    color: white;
    color: var(--MainColor);

    @media (max-width: 768px) {
      position: absolute;
      width: 100%;
      background-color: transparent;
    }
  }

  /* position: absolute;
  right: 0;
  top: 0;
  width: 40%;
*/
`;
