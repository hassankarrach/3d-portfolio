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
    background-color: #8c8cc2;
    border: 1px solid var(--MainColor);
    color: white;
  }
`;
