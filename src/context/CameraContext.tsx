import React, {
  createContext,
  useEffect,
  useRef,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { gsap, Linear } from "gsap";

interface StateContextProps {
  CameraPos: any;
  CameraRef: any;
  CanvasRef: any;
  isCameraAnimating: boolean;
  CurrentSection: number;
  setCurrentSection: Dispatch<SetStateAction<number>>;
  setCameraRef: Dispatch<SetStateAction<any>>;
  setCameraPos: Dispatch<SetStateAction<any>>;
  setCanvasRef: Dispatch<SetStateAction<any>>;
  setCameraAnimating: Dispatch<SetStateAction<boolean>>;
}

export const StateContext = createContext<StateContextProps>({
  CameraPos: null,
  CameraRef: null,
  CanvasRef: null,
  isCameraAnimating: false,
  CurrentSection: 0,
  setCurrentSection: () => {},
  setCameraRef: () => {},
  setCameraPos: () => {},
  setCanvasRef: () => {},
  setCameraAnimating: () => {},
});

export const StateProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [CurrentSection, setCurrentSection] = useState<number>(1);
  //Experience
  const [CanvasRef, setCanvasRef] = useState<any>();
  const [CameraPos, setCameraPos] = useState<any>();
  const [CameraRef, setCameraRef] = useState<any>();
  const [isCameraAnimating, setCameraAnimating] = useState<boolean>(false);
  const [LoadingStatus, setLoadingStatus] = useState<any>();

  //Animations

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
