import styled from "styled-components";

export const StyledHero = styled.section`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0;
  padding: 10% 25px;
  @media (max-width: 768px) {
    padding: 0px 10px;
    margin-top: 200px;
    height: auto;
  }

  .Title {
    display: flex;
    flex-direction: column;
    font-family: var(--font-primary);
    padding: 30px 0px;

    h1 {
      margin: 35px 0px;
      @media (max-width: 768px) {
        font-size: 2.5rem;
      }
    }

    h2 {
      font-family: var(--CodingFont);
      margin: 0px;
    }
  }

  .GetInTouch {
    border-style: none;
    height: 60px;
    background: none;
    font-family: var(--font-primary);
    border: none;
    padding: 0 30px;
    color: var(--MainColor2);
    opacity: 0.6;
    font-size: 20px;
    outline: none;
    position: relative;
    transition: 0.2s ease-in-out;

    &:before {
      content: "";
      width: 85%;
      height: 30px;
      display: block;
      border-top: 2px solid;
      border-right: 2px solid;
      position: absolute;
      right: 0;
      top: 0;
    }

    &:after {
      content: "";
      width: 85%;
      height: 30px;
      display: block;
      border-bottom: 2px solid;
      border-left: 2px solid;
      position: absolute;
      left: 0;
      bottom: 0;
    }
    span {
      display: block;

      &:before {
        content: "";
        width: 38px;
        height: 2px;
        background: var(--MainColor2);
        position: absolute;
        left: -5px;
        top: 14px;
        transform: rotate(-46deg);
      }
      &:after {
        content: "";
        width: 38px;
        height: 2px;
        background: var(--MainColor2);
        position: absolute;
        right: -5px;
        bottom: 14px;
        transform: rotate(-46deg);
      }
    }
    &:hover {
      color: var(--MainColor2);
      opacity: 1;
    }
    &:hover:before,
    &:hover:after {
      border-color: var(--MainColor2);
    }
    &:hover span:before,
    &:hover span:after {
      background: var(--MainColor2);
    }
  }
`;
