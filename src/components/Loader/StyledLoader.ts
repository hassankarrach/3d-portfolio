import styled from "styled-components";

export const StyledLoader = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  font-family: var(--CodingFont);

  background: linear-gradient(
    0deg,
    rgba(16, 16, 26, 1) 0%,
    rgba(16, 16, 26, 0.7091211484593838) 100%
  );
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);

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
      color: var(--MainColor2);
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
      border: 2px solid var(--MainColor2);
      border-radius: 5px;
      padding: 2px;
      .spine {
        height: 100%;
        background-color: var(--MainColor2);
        border-radius: 3px;
        -webkit-box-shadow: 0px 0px 23px 0px rgba(140, 140, 194, 0.49);
        -moz-box-shadow: 0px 0px 23px 0px rgba(140, 140, 194, 0.49);
        box-shadow: 0px 0px 23px 0px rgba(140, 140, 194, 0.49);
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
        border: 1px solid var(--MainColor2);
        color: white;
      }
    }
  }
  .LoaderBox.Out {
    opacity: 0;
  }


  .Start{
    width : 300px;
    height : 50px;
    background-color : var(--MainColor2);
    border : none;
    outline : none;
    color : var(--MainColor);
    font-family : var(--font-primary);
    font-weight : 400;
    font-size : 1.3rem;

    transition : 0.9s ease-in-out;
    &:hover{
      transition : 0.3s ease-in-out;
      box-shadow: 0 0 55px rgba(140,140,194, 0.5), 0 0 10px rgba(140,140,194, 0.3), 0 0 90px rgba(140,140,194, 0.1),
      0 0 60px rgba(140,140,194, 0.1), 0 0 180px rgba(140,140,194, 0.1);
    }
  }
`;
