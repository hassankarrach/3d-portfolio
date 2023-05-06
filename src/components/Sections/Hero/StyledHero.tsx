import styled from "styled-components";

export const StyledHero = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  scroll-snap-align: center;
  padding: 30px;

  .Title {
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-family: var(--font-primary);
    padding: 30px 0px;
  }
`;
