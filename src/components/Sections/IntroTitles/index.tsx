import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SkillsTitles = React.forwardRef((props, scrollContainerRef: any) => {
  const SkillsTexts = useRef(null);

  useEffect(() => {
    const el = SkillsTexts.current;
    const container = scrollContainerRef?.current;

    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5,
        scroller: container,
      },
      x: "-25%",
      ease: "none",
    });
  }, [scrollContainerRef]);

  return (
    <StyledSkillsTitles>
      <div className="marqueeTrack" ref={SkillsTexts}>
        <div className="marqueeItem">
          <p>Full Stack Explorer</p>
          <div className="marqueeDot"></div>
        </div>

        <div className="marqueeItem">
          <p>Web3 Enthusiast</p>
          <div className="marqueeDot"></div>
        </div>

        <div className="marqueeItem">
          <p>Full Stack Explorer</p>
          <div className="marqueeDot"></div>
        </div>
      </div>
    </StyledSkillsTitles>
  );
});

const StyledSkillsTitles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: hidden;
  padding: 30px;
  overflow: hidden;
  margin: 0;
  .marqueeTrack {
    width: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: nowrap;
    flex-shrink: 0;

    .marqueeItem {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
      font-size: 3rem;
      font-family: "Lemon/Milk light", sans-serif;
      text-transform: uppercase;
      p {
        color: #26263e;
      }

      @media (max-width: 768px) {
        font-size: 2rem;
      }
      .marqueeDot {
        width: 1vw;
        height: 1vw;
        margin-bottom: 0.5vw;
        background-color: #333353;
        border-radius: 1vw;
        margin: 0 4vw 0.5vw 4vw;
      }
    }
  }
`;

export default SkillsTitles;
