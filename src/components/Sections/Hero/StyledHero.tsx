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
    height: 50vh;
  }

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
