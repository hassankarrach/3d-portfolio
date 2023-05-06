import styled from "styled-components";

export const StyledLoader = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-color: #10101a;
  font-family: var(--CodingFont);

  .LoaderBox {
    width: 400px;
    /* border: 2px solid white; */
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    .Text {
      padding: 10px;
      width: 100%;
      display: flex;
      justify-content: center;
      color: white;
      position: relative;

      h1 {
        font-size: 1.4rem;
      }
      h3 {
        font-size: 1rem;
        position: absolute;
        bottom: 0;
        right: 0;
      }
    }

    .Box {
      width: 100%;
      height: 30px;
      border: 3px solid white;
      border-radius: 5px;
      padding: 2px;
      .spine {
        height: 100%;
        background-color: white;
        border-radius: 3px;
      }
    }

    .Start {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 30px;
      button {
        background-color: transparent;
        border: 1px solid white;
        color: white;
      }
    }
  }
`;
