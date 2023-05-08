import React, {
  useRef,
  useEffect,
  useContext,
  Suspense,
  useState,
  RefObject,
} from "react";
import Room from "./Room";
import { StyledExperiance } from "./Experiance.styled";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Camera from "./Camera";
import Lights from "./Lighting";
import { OrbitControls } from "@react-three/drei";
import { StateContext } from "../../context/CameraContext";
import Loader from "../Loader/Loader";

const Experiance = () => {
  const CanvasRef = useRef<HTMLCanvasElement | undefined>(undefined) as
    | RefObject<HTMLCanvasElement>
    | undefined;

  const [isResized, setIsResized] = useState(false);

  return (
    <StyledExperiance>
      <Canvas flat ref={CanvasRef} style={{ width: "100%" }}>
        <Camera />
        <Lights />
        {/* <OrbitControls /> */}
        {/* <axesHelper scale={[15, 15, 15]} /> */}
        <Room />
      </Canvas>
    </StyledExperiance>
  );
};

export default Experiance;
