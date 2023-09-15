import styled from "styled-components";

export const StyledHero = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0;
  padding: 25px;

  .Title {
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-family: var(--font-primary);
    padding: 30px 0px;

    h1 {
    }

    h2 {
      font-family: var(--CodingFont);
    }
  }

  .GetInTouch {
    background-color: #8c8cc2;
    border: 1px solid var(--MainColor);
    color: white;
  }
`;
