import React, { createContext, useEffect, useRef, useState } from "react";
import { gsap, Linear } from "gsap";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [CurrentSection, setCurrentSection] = useState(1);
  //Experiance
  const [CanvasRef, setCanvasRef] = useState();
  const [CameraPos, setCameraPos] = useState();
  const [CameraRef, setCameraRef] = useState();
  const [isCameraAnimating, setCameraAnimating] = useState(false);

  //Aniations

  return (
    <StateContext.Provider
      value={{
        CameraPos,
        CameraRef,
        CanvasRef,
        isCameraAnimating,
        CurrentSection,
        setCurrentSection,
        setCameraRef,
        setCameraPos,
        setCanvasRef,
        setCameraAnimating,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
