import React from 'react';
import styled from 'styled-components';

const StyledDemo = styled.div`
  width: 100%;
  height: 100vh; /* or a specific height like 600px */
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  iframe {
    width: 100%;
    max-width: 1200px; /* adjust as needed */
    height: 100%;
    aspect-ratio: 16 / 9; /* maintains video aspect ratio */
    border-radius: 10px;
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
	position: relative;
  }
`;

const Demo = () => {
  return (
    <StyledDemo>
      <iframe 
        title="vimeo-player" 
        src="https://player.vimeo.com/video/1148070523?h=f35ff83530" 
        frameBorder="0"  // Changed from frameborder
        referrerPolicy="strict-origin-when-cross-origin"  // Changed from referrerpolicy
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        allowFullScreen  // Changed from allowfullscreen
      />
    </StyledDemo>
  );
};

export default Demo;