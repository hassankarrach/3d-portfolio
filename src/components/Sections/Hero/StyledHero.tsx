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
    /* margin-bottom: 200px; */
    height : 70vh;
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
      opacity: 0.6;
    }
  }

  .GetInTouch {
    border-style: none;
    height: 50px;
    background: none;
    font-family: var(--font-primary);
    border: none;
    padding: 0 30px;
    opacity: 0.6;
    outline: none;
    position: relative;
    transition: 0.2s ease-in-out;
    border: 1px solid var(--MainColor2);
    background-color: var(--MainColor2);
    color: var(--MainColor);

    &:hover {
      color: var(--MainColor2);
      background: transparent;
    }
  }
`;
