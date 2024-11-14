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
  Start: boolean;
  CurrentSection: number;
  LoadingStatus: boolean;
  FocusedSkill : string | null;
  setCurrentSection: Dispatch<SetStateAction<number>>;
  SetStart: Dispatch<SetStateAction<boolean>>;
  setCameraRef: Dispatch<SetStateAction<any>>;
  setCameraPos: Dispatch<SetStateAction<any>>;
  setCanvasRef: Dispatch<SetStateAction<any>>;
  setCameraAnimating: Dispatch<SetStateAction<boolean>>;
  setLoadingStatus: Dispatch<SetStateAction<boolean>>;
  setFocusedSkill : Dispatch<SetStateAction<string | null>>;
}

export const StateContext = createContext<StateContextProps>({
  CameraPos: null,
  CameraRef: null,
  CanvasRef: null,
  isCameraAnimating: false,
  Start: false,
  CurrentSection: 0,
  LoadingStatus: false,
  FocusedSkill : null,
  setCurrentSection: () => {},
  setCameraRef: () => {},
  SetStart: () => {},
  setCameraPos: () => {},
  setCanvasRef: () => {},
  setCameraAnimating: () => {},
  setLoadingStatus: () => {},
  setFocusedSkill : () => {}
});

export const StateProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [CurrentSection, setCurrentSection] = useState<number>(1);
  const [Start, SetStart] = useState<boolean>(false);
  //Experience
  const [CanvasRef, setCanvasRef] = useState<any>();
  const [CameraPos, setCameraPos] = useState<any>();
  const [CameraRef, setCameraRef] = useState<any>();
  const [isCameraAnimating, setCameraAnimating] = useState<boolean>(false);
  const [LoadingStatus, setLoadingStatus] = useState<any>(false);
  // string or null
  const [FocusedSkill, setFocusedSkill] = useState<string | null>(null);

  //Animations

  return (
    <StateContext.Provider
      value={{
        CameraPos,
        CameraRef,
        CanvasRef,
        isCameraAnimating,
        CurrentSection,
        LoadingStatus,
        Start,
        FocusedSkill,
        SetStart,
        setCurrentSection,
        setCameraRef,
        setCameraPos,
        setCanvasRef,
        setCameraAnimating,
        setLoadingStatus,
        setFocusedSkill
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
